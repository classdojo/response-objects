const { STATUS_CODES } = require("http");

const types = `
export interface BaseResponseObject<T> {
  body: T;
  status: number;
  headers: {
    [index: string]: any;
  };
}

export interface ResponseObject<T> extends BaseResponseObject<T> {
  statusCode: number,
  toJSON(): BaseResponseObject<T>;
  toString(): string;
}

export interface ErrorResponseObject<T> extends ResponseObject<T>, Error {}
`;

const toJSON = `
function toJSON(this: {body: any, status: number, headers: object}) {
  return { body: this.body, status: this.status, headers: this.headers };
}`;

const toString = `
function toString(this: {status: number}) {
  return \`Responses.\${getName(this.status)} \${JSON.stringify(this)}\`;
}`;

const protoCode = "const proto: ResponseObject<undefined> = { toJSON, toString, body: undefined, status: 0, statusCode: 0, headers: {} };";

const errProtoCode = "const errProto: ResponseObject<undefined> = Object.assign(Object.create(Error.prototype), proto);";

const defaultExport = `
export default function R<T> (code: number, body: T, headers?: any): ResponseObject<T> {
  let resp;
  if (code >= 400) {
    resp = Object.create(errProto);
    Error.captureStackTrace(resp, R);
  } else {
    resp = Object.create(proto)
  }
  resp.status = resp.statusCode = code;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  return resp;
}
module.exports = R;
`;

const getNameRuntime = `
import { STATUS_CODES } from "http";
const getName = (code: number) => STATUS_CODES[code]!.replace(/[\\s+-]/g, "");
`;

const alias = `
export const Ok = OK;
module.exports.Ok = Ok;
`;

const createWeakSet = `
const responses = new WeakSet();
`;

const chunks = [
  getNameRuntime,
  createWeakSet,
  types,
  toJSON,
  toString,
  protoCode,
  errProtoCode,
  defaultExport,
];

function generateSuccessResponse (code) {
  const name = getName(code);
  return `
export function ${name}<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = ${code};
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.${name} = ${name}`;
}

function generateErrorResponse (code) {
  const name = getName(code);
  return `
export function ${name}<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = ${code};
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, ${name});
  responses.add(resp);
  return resp;
}
module.exports.${name} = ${name}`;
}
const skipStatus = ["306", "418"];
const getName = code => STATUS_CODES[code].replace(/[\s+-]/g, "");

chunks.push(...Object.keys(STATUS_CODES).filter(code => !skipStatus.includes(code)).map((code) =>
  code <= 399 ? generateSuccessResponse(code) : generateErrorResponse(code)
));

chunks.push(alias);

console.log(chunks.map(c => c.trim()).join("\n\n"))