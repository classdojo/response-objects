const { STATUS_CODES } = require("http");

// TODO: type definitions!

const toJSON = `
function toJSON() {
  return { body: this.body, status: this.status, headers: this.headers };
}`.trim();

const toString = `
function toString() {
  return \`Responses.\${getName(this.status)} \${JSON.stringify(this)}\`;
}`.trim();

const protoCode = "const proto: ResponseObject = { toJSON, toString, body: undefined, status: 0, statusCode: 0, headers: {}, [_MARKER]: true };";

const errProtoCode = "const errProto: ResponseObject = Object.assign(Object.create(Error.prototype), proto);";

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
`.trim();

const chunks = [
  toJSON,
  toString,
  protoCode,
  errProtoCode,
  defaultExport,
];

function generateSuccessResponse (code) {
  const name = getName(code);
  return `
export function ${name}<T> (body: T, options?: object): ResponseObject<T> {
  const resp = Object.create(proto);
  resp.status = resp.statusCode = ${code};
  resp.body = body;
  if (headers != null) resp.headers = headers;
  return resp;
}`.trim();
}

function generateErrorResponse (code) {
  const name = getName(code);
  return `
export function ${name}<T> (body: T, options?: object): ErrorResponseObject<T> {
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = ${code};
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, ${name});
  return resp;
}`.trim();
}

const getName = code => STATUS_CODES[code].replace(/[\s+-]/g, "");

chunks.push(...Object.keys(STATUS_CODES).map((code) =>
  code <= 299 ? generateSuccessResponse(code) : generateErrorResponse(code)
));

console.log(chunks.join("\n\n"))