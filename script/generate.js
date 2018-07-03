const { STATUS_CODES } = require("http");

const types = `
export interface BaseResponseObject<T> {
  body: T;
  status: number;
  headers?: object;
}

export interface ResponseObject<T> extends BaseResponseObject<T> {
  statusCode: number,
  toJSON(): BaseResponseObject<T>;
  toString(): string;
}
export interface ErrorResponseObject<T> extends ResponseObject<T>, Error {}
`.trim();

const toJSON = `
function toJSON(this: {body: any, status: number, headers: object}) {
  return { body: this.body, status: this.status, headers: this.headers };
}`.trim();

const toString = `
function toString(this: {status: number}) {
  return \`Responses.\${getName(this.status)} \${JSON.stringify(this)}\`;
}`.trim();

const protoCode = "const proto: ResponseObject<undefined> = { toJSON, toString, body: undefined, status: 0, statusCode: 0, headers: {} };";

const errProtoCode = "const errProto: ResponseObject<undefined> = Object.assign(Object.create(Error.prototype), proto);";

const functionR = `
function R<T> (code: number, body: T, headers?: any): ResponseObject<T> {
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
`;

const defaultExport = "export default R;";

const getNameRuntime = `
import { STATUS_CODES } from "http";
const getName = (code: number) => STATUS_CODES[code]!.replace(/[\\s+-]/g, "");
`;

const createWeakSet = `
const responses = new WeakSet();
`;

const isResponseObject = `
  export function isResponseObject (obj: any): boolean {
    return responses.has(obj);
  }
`;

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
}`.trim();
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
`.trim();
}

const skipStatus = ["306", "418"];
const getName = code => STATUS_CODES[code].replace(/[\s+-]/g, "");

const namespaceOpen = "namespace R {";

const constructors = Object.keys(STATUS_CODES)
  .filter(code => !skipStatus.includes(code))
  .map((code) => {
    return code <= 399 ? generateSuccessResponse(code) : generateErrorResponse(code);
  });

const aliases = `
  export const Ok = OK;
`.trim();

const namespaceClose = "\n}";

const chunks = [
  getNameRuntime,
  createWeakSet,
  isResponseObject,
  types,
  toJSON,
  toString,
  protoCode,
  errProtoCode,
  functionR,
  defaultExport,
  namespaceOpen,
  ...constructors,
  aliases,
  namespaceClose,
];

console.log(chunks.join("\n\n"));
