const { STATUS_CODES } = require("http");

const skipStatus = ["306", "418"];

const STATUS_CODES_KEYS = Object.keys(STATUS_CODES).filter(
  code => !skipStatus.includes(code)
);

const getName = code => STATUS_CODES[code].replace(/[\s+-]/g, "");

const types = `
export interface BaseResponseObject<T> {
  body: T;
  status: number;
  headers: Headers;
}

export interface ResponseObject<T> extends BaseResponseObject<T> {
  statusCode: number,
  toJSON(): BaseResponseObject<T>;
  toString(): string;
}

export interface ErrorResponseObject<T> extends ResponseObject<T>, Error {}

export interface Headers {
  [header: string]: number | string | string[] | undefined;
}
`;

const toJSON = `
function toJSON(this: {body: any, status: number, headers: Headers}) {
  return { body: this.body, status: this.status, headers: this.headers };
}`;

const toString = `
function toString(this: {status: number}) {
  return \`Responses.\${getName(this.status)} \${JSON.stringify(this)}\`;
}`;

const protoCode =
  "const proto: ResponseObject<undefined> = { toJSON, toString, body: undefined, status: 0, statusCode: 0, headers: {} };";

const errProtoCode =
  "const errProto: ErrorResponseObject<undefined> = Object.assign(Object.create(Error.prototype), proto);";

const rFunction = `
function R(code: number): ResponseObject<void>
function R<T> (code: number, body?: T, headers?: Headers): ResponseObject<T>
function R<T> (code: number, body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  let resp;
  if (code >= 400) {
    resp = Object.create(errProto);
    Error.captureStackTrace(resp, R);
  } else {
    resp = Object.create(proto)
  }
  resp.status = resp.statusCode = code;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
`;

const getNameRuntime = `
import { STATUS_CODES } from "http";
const getName = (code: number) => STATUS_CODES[code]!.replace(/[\\s+-]/g, "");
`;

const okAlias = "export const Ok = OK;";
const okAliasTop = "export const Ok = R.Ok;";

const createWeakSet = "const responses = new WeakSet()";

function generateResponseConstructor(code) {
  const name = getName(code);

  if (code >= 400) {
    return `
    export function ${name}(): ResponseObject<void>;
    export function ${name}<T> (body?: T, headers?: Headers): ResponseObject<T>
    export function ${name}<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, ${name});
      resp.status = resp.statusCode = ${code};
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }`;
  }
  return `
  export function ${name}(): ResponseObject<void>;
  export function ${name}<T> (body?: T, headers?: Headers): ResponseObject<T>
  export function ${name}<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = ${code};
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }`;
}


function generateNamespaceAlias (code) {
  const name = getName(code);
  return `export const ${name} = R.${name}`;
}

const constructors = STATUS_CODES_KEYS.map(generateResponseConstructor).join("\n");

const rNamespace = `
namespace R {
  ${constructors}
  ${okAlias}
}
`;

const rExport = `
module.exports = R;
exports = module.exports;
export default R;`;

const chunks = [
  getNameRuntime,
  createWeakSet,
  toJSON,
  toString,
  protoCode,
  errProtoCode,
  types,
  rFunction,
  rNamespace,
  rExport,
  STATUS_CODES_KEYS.map(generateNamespaceAlias).join("\n"),
  okAliasTop,
];

console.log(chunks.map(c => c.trim()).join("\n\n"));