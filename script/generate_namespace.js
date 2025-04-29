const { STATUS_CODES } = require("http");

const skipStatus = ["306", "418"];

const STATUS_CODES_KEYS = Object.keys(STATUS_CODES).filter((code) => {
  return !skipStatus.includes(code);
});

const getName = (code) => STATUS_CODES[code].replace(/[\s+-]/g, "");

const types = `
export type AllStatusCodes = ${STATUS_CODES_KEYS.join(" | ")};
export type ErrorStatusCodes = ${STATUS_CODES_KEYS.filter((c) => c.startsWith("4") || c.startsWith("5")).join(" | ")};

export interface BaseResponseObject<T, S extends AllStatusCodes> {
  readonly body: T;
  readonly status: S;
  readonly headers: Headers;
}

export interface ResponseObject<T, S extends AllStatusCodes = AllStatusCodes> extends BaseResponseObject<T, S> {
  statusCode: S,
  toJSON(): BaseResponseObject<T, S>;
  toString(): string;
}

export interface ErrorResponseObject<T, S extends ErrorStatusCodes = ErrorStatusCodes> extends ResponseObject<T, S>, Error {}

export interface Headers {
  [header: string]: number | string | string[] | undefined;
}
`;

const toJSON = `
function toJSON<S extends AllStatusCodes>(this: {body: any, status: S, headers: Headers}) {
  return { body: this.body, status: this.status, headers: this.headers };
}`;

const toString = `
function toString(this: {status: number}) {
  return \`Responses.\${getName(this.status)} \${JSON.stringify(this)}\`;
}`;

const protoCode =
  "const proto: ResponseObject<undefined, AllStatusCodes> = { toJSON, toString, body: undefined, status: 100, statusCode: 100, headers: {} };";

const errProtoCode =
  "const errProto: ErrorResponseObject<undefined, ErrorStatusCodes> = Object.assign(Object.create(Error.prototype), proto);";

const rFunction = `
function R<S extends AllStatusCodes = AllStatusCodes>(code: S): ResponseObject<void, S>
function R<T, S extends AllStatusCodes = AllStatusCodes> (code: S, body: T, headers?: Headers): ResponseObject<T, S>
function R<T, S extends AllStatusCodes = AllStatusCodes> (code: S, body?: T, headers: Headers = {}): ResponseObject<T, S> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  let resp;
  if ((code as number) >= 400) {
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
    export function ${name}(): ErrorResponseObject<void, ${code}>;
    export function ${name}<T> (body: T, headers?: Headers): ErrorResponseObject<T, ${code}>
    export function ${name}<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, ${code}> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, ${name});
      Object.defineProperty(resp, "name", { value: "${name}Error" });
      resp.status = resp.statusCode = ${code};
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }`;
  }
  return `
  export function ${name}(): ResponseObject<void, ${code}>;
  export function ${name}<T> (body: T, headers?: Headers): ResponseObject<T, ${code}>
  export function ${name}<T> (body?: T, headers: Headers = {}): ResponseObject<T, ${code}> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = ${code};
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }`;
}

function generateNamespaceAlias(code) {
  const name = getName(code);
  return `export const ${name} = R.${name}`;
}

const constructors = STATUS_CODES_KEYS.map(generateResponseConstructor).join(
  "\n",
);

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

console.log(chunks.map((c) => c.trim()).join("\n\n"));
