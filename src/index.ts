import status = require("statuses");

// in the compilation to JS, `export const x = 1` becomes `exports.x = 1`, so we
// need to make sure `exports` is pointing to the right object here, before assignments
// start
exports = R_;

export interface R<Body> extends ResponseObject {
  body: Body
}

export interface BaseResponseObject {
  body?: any;
  status: number;
  headers?: object;
}
export interface ResponseObject extends BaseResponseObject {
  statusCode: number,
  toJSON(): BaseResponseObject;
  toString(): string;
}
export interface ErrorResponseObject extends ResponseObject, Error {}

export type BodyCreator = (code: number, body?: any, headers?: object) => any
let bodyCreator: BodyCreator = (code, body) => body != null ? body : (status[code] || `Unknown status for ${code}`)
export const setBodyCreator = (fn: BodyCreator) => { bodyCreator = fn; }

export const MARKER = Symbol.for("@@response-objects/MARKER");

const proto: ResponseObject = { toJSON, toString, status: 0, statusCode: 0, headers: {}, [MARKER]: true };
function createResponse (code: number, name: string): RConstructor {
  return _setName(function Response (body?: any, headers?: object) {
    if (body && body[MARKER]) throw new Error(`Object is already a response: ${JSON.stringify(body)}`);
    return _decorate(Object.create(proto), code, body, headers);
  }, name);
}

const errProto: ResponseObject = Object.assign(Object.create(Error.prototype), proto);
function createErrorResponse (code: number, name: string): RErrorConstructor {
  return _setName(function ErrorResponse (body?: any, headers?: object) {
    if (body && body[MARKER]) throw new Error(`Object is already a response: ${JSON.stringify(body)}`);
    const err = Object.create(errProto);
    _decorate(err, code, body, headers);
    Error.captureStackTrace(err, ErrorResponse);
    return err;
  }, name);
}

function _decorate (resp: ResponseObject, code: number, body?: any, headers?: object) {
  resp.status = resp.statusCode = code;
  resp.body = bodyCreator(code, body, headers);
  if (headers != null) resp.headers = headers;
  return resp;
}

function _setName (fn: Function, name: string) {
  return Object.defineProperty(fn, "name", {
    configurable: true,
    value: name,
  });
}

type RConstructor = (body?: any, headers?: object) => ResponseObject
type RErrorConstructor = (body?: any, headers?: object) => ErrorResponseObject

function toJSON (this: ResponseObject) {
  return { body: this.body, status: this.status, headers: this.headers };
}

function toString (this: ResponseObject) {
  return `Responses.${getName(this.status)} ${JSON.stringify(this)}`;
}

function getName (code: number) {
  const name = status[code];
  if (!name) {
    throw new Error(`Unable to find status for ${code}`);
  }
  return name.replace(/[\s+-]/g, "");
}

function R_ (code: number, body?: any, headers?: any): ResponseObject {
  const name = getName(code);
  const responseCtor = code >= 400 ?
    createErrorResponse(code, name) :
    createResponse(code, name);
  return responseCtor(body, headers);
}

// 1xx
export const Continue = createResponse(100, "Continue");
export const SwitchingProtocols = createResponse(101, "SwitchingProtocols");
export const Processing = createResponse(102, "Processing");

// 2xx
export const OK = createResponse(200, "OK");
export const Ok = OK;
export const Created = createResponse(201, "Created");
export const Accepted = createResponse(202, "Accepted");
export const NonAuthoritativeInformation = createResponse(203, "NonAuthoritativeInformation");
export const NoContent = createResponse(204, "NoContent");
export const ResetContent = createResponse(205, "ResetContent");
export const PartialContent = createResponse(206, "PartialContent");
export const MultiStatus = createResponse(207, "MultiStatus");
export const AlreadyReported = createResponse(208, "AlreadyReported");
export const IMUsed = createResponse(226, "IMUsed");

// 3xx
export const MultipleChoices = createResponse(300, "MultipleChoices");
export const MovedPermanently = createResponse(301, "MovedPermanently");
export const Found = createResponse(302, "Found");
export const SeeOther = createResponse(303, "SeeOther");
export const NotModified = createResponse(304, "NotModified");
export const UseProxy = createResponse(305, "UseProxy");
export const TemporaryRedirect = createResponse(307, "TemporaryRedirect");
export const PermanentRedirect = createResponse(308, "PermanentRedirect");

// 4xx
export const BadRequest = createErrorResponse(400, "BadRequest")
export const Unauthorized = createErrorResponse(401, "Unauthorized")
export const PaymentRequired = createErrorResponse(402, "PaymentRequired")
export const Forbidden = createErrorResponse(403, "Forbidden")
export const NotFound = createErrorResponse(404, "NotFound")
export const MethodNotAllowed = createErrorResponse(405, "MethodNotAllowed")
export const NotAcceptable = createErrorResponse(406, "NotAcceptable")
export const ProxyAuthenticationRequired = createErrorResponse(407, "ProxyAuthenticationRequired")
export const RequestTimeout = createErrorResponse(408, "RequestTimeout")
export const Conflict = createErrorResponse(409, "Conflict")
export const Gone = createErrorResponse(410, "Gone")
export const LengthRequired = createErrorResponse(411, "LengthRequired")
export const PreconditionFailed = createErrorResponse(412, "PreconditionFailed")
export const PayloadTooLarge = createErrorResponse(413, "PayloadTooLarge")
export const URITooLong = createErrorResponse(414, "URITooLong")
export const UnsupportedMediaType = createErrorResponse(415, "UnsupportedMediaType")
export const RangeNotSatisfiable = createErrorResponse(416, "RangeNotSatisfiable")
export const ExpectationFailed = createErrorResponse(417, "ExpectationFailed")
export const MisdirectedRequest = createErrorResponse(421, "MisdirectedRequest")
export const UnprocessableEntity = createErrorResponse(422, "UnprocessableEntity")
export const Locked = createErrorResponse(423, "Locked")
export const FailedDependency = createErrorResponse(424, "FailedDependency")
export const UnorderedCollection = createErrorResponse(425, "UnorderedCollection")
export const UpgradeRequired = createErrorResponse(426, "UpgradeRequired")
export const PreconditionRequired = createErrorResponse(428, "PreconditionRequired")
export const TooManyRequests = createErrorResponse(429, "TooManyRequests")
export const RequestHeaderFieldsTooLarge = createErrorResponse(431, "RequestHeaderFieldsTooLarge")
export const UnavailableForLegalReasons = createErrorResponse(451, "UnavailableForLegalReasons")

// 5xx
export const InternalServerError = createErrorResponse(500, "InternalServerError")
export const NotImplemented = createErrorResponse(501, "NotImplemented")
export const BadGateway = createErrorResponse(502, "BadGateway")
export const ServiceUnavailable = createErrorResponse(503, "ServiceUnavailable")
export const GatewayTimeout = createErrorResponse(504, "GatewayTimeout")
export const HTTPVersionNotSupported = createErrorResponse(505, "HTTPVersionNotSupported")
export const VariantAlsoNegotiates = createErrorResponse(506, "VariantAlsoNegotiates")
export const InsufficientStorage = createErrorResponse(507, "InsufficientStorage")
export const LoopDetected = createErrorResponse(508, "LoopDetected")
export const BandwidthLimitExceeded = createErrorResponse(509, "BandwidthLimitExceeded")
export const NotExtended = createErrorResponse(510, "NotExtended")
export const NetworkAuthenticationRequired = createErrorResponse(511, "NetworkAuthenticationRequired")

// export shenanegans
export default R_;
module.exports = exports
