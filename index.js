const status = require("statuses");

const MARKER = Symbol.for("@@response-objects/MARKER");

const proto = { toJSON, toString, headers: {}, [MARKER]: true };

const errProto = Object.assign(Object.create(Error.prototype), proto);

function genericResponse(code, body, headers) {
  const name = getName(code);
  const responseCtor = code >= 400 ?
    createErrorResponse(code, name) :
    createResponse(code, name);

  return responseCtor(body, headers)
}

module.exports = genericResponse;

status.codes.forEach(function (code) {
  // 306 is "Unused"
  // 418 is "I'm a Teapot"
  // No clear reason to support either of these
  if (code === 306 || code === 418) return;

  const name = getName(code);
  const responseCtor = code >= 400 ?
    createErrorResponse(code, name) :
    createResponse(code, name);

  module.exports[code] = module.exports[name] = responseCtor;
});
module.exports.Ok = module.exports.OK;
module.exports.MARKER = MARKER;

function toJSON () {
  return { body: this.body, status: this.status, headers: this.headers };
}

function toString () {
  return `Responses.${getName(this.status)} ${JSON.stringify(this)}`;
}

function getName (code) {
  const name = status[code];
  if (!name) {
    throw new Error(`Unable to find status for ${code}`);
  }
  return name.replace(/[\s+-]/g, "");
}

function createErrorResponse (code, name) {
  return _setName(function ErrorResponse (body, headers) {
    if (body && body[MARKER]) throw new Error(`Object is already a response: ${JSON.stringify(body)}`);
    const err = Object.create(errProto);
    _decorate(err, code, body, headers);
    Error.captureStackTrace(err, ErrorResponse);
    return err;
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
  resp.body = bodyCreator(code, body, headers);
  if (headers != null) resp.headers = headers;
  return resp;
}

let bodyCreator = (code, body /*, headers */) => body != null ? body : (status[code] || `Unknown status for ${code}`);
module.exports.setBodyCreator = f => bodyCreator = f;
