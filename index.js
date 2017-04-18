const status = require("statuses");

const MARKER = Symbol.for("@@response-objects/MARKER");

const proto = { toJSON, toString, headers: {}, [MARKER]: true };

const errProto = Object.assign(Object.create(Error.prototype), proto);

status.codes.forEach(function (code) {
  // 306 is "Unused"
  // 418 is "I'm a Teapot"
  // No clear reason to support either of these
  if (code === 306 || code === 418) return;

  const name = getName(code);
  const responseCtor = code >= 400 ?
    createErrorResponse(code, name) :
    createResponse(code, name);

  exports[code] = exports[name] = responseCtor;
});
exports.Ok = exports.OK;
exports.MARKER = MARKER;

function toJSON () {
  return { body: this.body, status: this.status, headers: this.headers };
}

function toString () {
  return `Responses.${getName(this.status)} ${JSON.stringify(this)}`;
}

function getName (code) {
  return status[code].replace(/[\s+-]/g, "");
}

function createErrorResponse (code, name) {
  return _setName(function ErrorResponse (body, headers) {
    if (body && body[MARKER]) throw new Error(`Object is already a response: ${JSON.stringify(body)}`);
    const err = Object.create(errProto);
    Error.captureStackTrace(err, ErrorResponse);
    return _decorate(err, code, body, headers);
  }, name);
}

function createResponse (code, name) {
  return _setName(function Response (body, headers) {
    if (body && body[MARKER]) throw new Error(`Object is already a response: ${JSON.stringify(body)}`);
    return _decorate(Object.create(proto), code, body, headers);
  }, name);
}

function _setName (fn, name) {
  return Object.defineProperty(fn, "name", {
    configurable: true,
    value: name,
  });
}

function _decorate (resp, code, body, headers) {
  resp.status = resp.statusCode = code;
  resp.body = body != null ? body : defaultBody(code, headers);
  if (headers != null) resp.headers = headers;
  return resp;
}

let defaultBody = (code /*, headers */ ) => status[code];
exports.createDefaultBody = f => defaultBody = f;
