const status = require("statuses");

const MARKER = Symbol("RESPONSES_MARKER");

const proto = { toJSON, toString, headers: {}, [MARKER]: true };

const errProto = Object.assign(Object.create(Error.prototype), proto);

exports.MARKER = MARKER;

status.codes.forEach(function (code) {
  // 306 is "Unused"
  // 418 is "I'm a Teapot"
  // No clear reason to support either of these
  if (code === 306 || code === 418) return;

  const name = getName(code);
  const responder = code >= 400 ?
    createErrorResponse(code, name) :
    createResponse(code, name);

  exports[code] = exports[name] = responder;
});

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
    const err = Object.create(errProto);
    Error.captureStackTrace(err, ErrorResponse);
    return _decorate(err, code, body, headers);
  }, name)
}

function createResponse (code, name) {
  return _setName(function Response (body, headers) {
    return _decorate(Object.create(proto), code, body, headers);
  }, name)
}

function _setName (fn, name) {
  return Object.defineProperty(fn, "name", {
    configurable: true,
    value: name,
  });
}

function _decorate (resp, code, body, headers) {
  resp.status = resp.statusCode = code;
  resp.body = body || status[code];
  if (headers) resp.headers = headers;
  return resp;
}

// function fromError (err) {
//   const statusCode = err.statusCode || err.status || err.code;
//   if (!exports.hasOwnProperty(statusCode)) return err;
//   return exports[statusCode]();
// }
