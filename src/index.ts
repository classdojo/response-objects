import status = require("statuses");

const _MARKER = Symbol.for("@@response-objects/MARKER");
export { _MARKER as MARKER, _setBodyCreator as setBodyCreator }

function R_<T> (code: number, body?: T, headers?: any): ResponseObject<T> {
  return (code >= 400 ?
    createErrorResponse<T>(code) :
    createResponse<T>(code)
  )(body, headers);
}
exports = R_;
export default R_;

export interface R<Body> extends ResponseObject<Body> {
  body: Body
}

export interface BaseResponseObject<T> {
  body: T;
  status: number;
  headers?: object;
}

export interface ResponseObject<T> extends BaseResponseObject<T> {
  statusCode: number,
  toJSON(): BaseResponseObject<T>;
  toString(): string;
  [_MARKER]: boolean;
}

export interface ErrorResponseObject<T> extends ResponseObject<T>, Error {}

export type BodyCreator = (code: number, body?: any, headers?: object) => any
let bodyCreator: BodyCreator = (code, body) => body != null ? body : (status[code] || `Unknown status for ${code}`)
const _setBodyCreator = (fn: BodyCreator) => { bodyCreator = fn; }

const proto: ResponseObject<any> = { toJSON, toString, body: undefined, status: 0, statusCode: 0, headers: {}, [_MARKER]: true };
function createResponse<T>(code: number): RConstructor<T> {
  const name = getName(code)
  return _setName(function Response (body?: T, headers?: object) {
    if (body && (body as any)[_MARKER]) throw new Error(`Object is already a response: ${JSON.stringify(body)}`);
    return _decorate(Object.create(proto), code, body, headers);
  }, name);
}

const errProto: ResponseObject<any> = Object.assign(Object.create(Error.prototype), proto);
function createErrorResponse<T> (code: number): RErrorConstructor<T> {
  const name = getName(code)
  return _setName(function ErrorResponse (body?: any, headers?: object) {
    if (body && body[_MARKER]) throw new Error(`Object is already a response: ${JSON.stringify(body)}`);
    const err = Object.create(errProto);
    _decorate(err, code, body, headers);
    Error.captureStackTrace(err, ErrorResponse);
    return err;
  }, name);
}

export type RConstructor<T> = (body?: T, headers?: object) => ResponseObject<T>
export type RErrorConstructor<T> = (body?: T, headers?: object) => ErrorResponseObject<T>

/*
  Named module exports
*/

// 1xx
export const Continue = createResponse(100);
export const SwitchingProtocols = createResponse(101);
export const Processing = createResponse(102);

// 2xx
export const OK = createResponse(200)
export const Ok = OK
export const Created = createResponse(201)
export const Accepted = createResponse(202)
export const NonAuthoritativeInformation = createResponse(203)
export const NoContent = createResponse(204)
export const ResetContent = createResponse(205)
export const PartialContent = createResponse(206)
export const MultiStatus = createResponse(207)
export const AlreadyReported = createResponse(208)
export const IMUsed = createResponse(226)

// 3xx
export const MultipleChoices = createResponse(300)
export const MovedPermanently = createResponse(301)
export const Found = createResponse(302)
export const SeeOther = createResponse(303)
export const NotModified = createResponse(304)
export const UseProxy = createResponse(305)
export const TemporaryRedirect = createResponse(307)
export const PermanentRedirect = createResponse(308)

// 4xx
export const BadRequest = createErrorResponse(400)
export const Unauthorized = createErrorResponse(401)
export const PaymentRequired = createErrorResponse(402)
export const Forbidden = createErrorResponse(403)
export const NotFound = createErrorResponse(404)
export const MethodNotAllowed = createErrorResponse(405)
export const NotAcceptable = createErrorResponse(406)
export const ProxyAuthenticationRequired = createErrorResponse(407)
export const RequestTimeout = createErrorResponse(408)
export const Conflict = createErrorResponse(409)
export const Gone = createErrorResponse(410)
export const LengthRequired = createErrorResponse(411)
export const PreconditionFailed = createErrorResponse(412)
export const PayloadTooLarge = createErrorResponse(413)
export const URITooLong = createErrorResponse(414)
export const UnsupportedMediaType = createErrorResponse(415)
export const RangeNotSatisfiable = createErrorResponse(416)
export const ExpectationFailed = createErrorResponse(417)
export const MisdirectedRequest = createErrorResponse(421)
export const UnprocessableEntity = createErrorResponse(422)
export const Locked = createErrorResponse(423)
export const FailedDependency = createErrorResponse(424)
export const UnorderedCollection = createErrorResponse(425)
export const UpgradeRequired = createErrorResponse(426)
export const PreconditionRequired = createErrorResponse(428)
export const TooManyRequests = createErrorResponse(429)
export const RequestHeaderFieldsTooLarge = createErrorResponse(431)
export const UnavailableForLegalReasons = createErrorResponse(451)

// 5xx
export const InternalServerError = createErrorResponse(500)
export const NotImplemented = createErrorResponse(501)
export const BadGateway = createErrorResponse(502)
export const ServiceUnavailable = createErrorResponse(503)
export const GatewayTimeout = createErrorResponse(504)
export const HTTPVersionNotSupported = createErrorResponse(505)
export const VariantAlsoNegotiates = createErrorResponse(506)
export const InsufficientStorage = createErrorResponse(507)
export const LoopDetected = createErrorResponse(508)
export const BandwidthLimitExceeded = createErrorResponse(509)
export const NotExtended = createErrorResponse(510)
export const NetworkAuthenticationRequired = createErrorResponse(511)

/*
  Attach all exports to R_ as well
*/
namespace R_ {
  export const Continue = createResponse(100);
  export const SwitchingProtocols = createResponse(101);
  export const Processing = createResponse(102);

  // 2xx
  export const OK = createResponse(200);
  export const Ok = OK;
  export const Created = createResponse(201);
  export const Accepted = createResponse(202);
  export const NonAuthoritativeInformation = createResponse(203);
  export const NoContent = createResponse(204);
  export const ResetContent = createResponse(205);
  export const PartialContent = createResponse(206);
  export const MultiStatus = createResponse(207);
  export const AlreadyReported = createResponse(208);
  export const IMUsed = createResponse(226);

  // 3xx
  export const MultipleChoices = createResponse(300);
  export const MovedPermanently = createResponse(301);
  export const Found = createResponse(302);
  export const SeeOther = createResponse(303);
  export const NotModified = createResponse(304);
  export const UseProxy = createResponse(305);
  export const TemporaryRedirect = createResponse(307);
  export const PermanentRedirect = createResponse(308);

  // 4xx
  export const BadRequest = createErrorResponse(400)
  export const Unauthorized = createErrorResponse(401)
  export const PaymentRequired = createErrorResponse(402)
  export const Forbidden = createErrorResponse(403)
  export const NotFound = createErrorResponse(404)
  export const MethodNotAllowed = createErrorResponse(405)
  export const NotAcceptable = createErrorResponse(406)
  export const ProxyAuthenticationRequired = createErrorResponse(407)
  export const RequestTimeout = createErrorResponse(408)
  export const Conflict = createErrorResponse(409)
  export const Gone = createErrorResponse(410)
  export const LengthRequired = createErrorResponse(411)
  export const PreconditionFailed = createErrorResponse(412)
  export const PayloadTooLarge = createErrorResponse(413)
  export const URITooLong = createErrorResponse(414)
  export const UnsupportedMediaType = createErrorResponse(415)
  export const RangeNotSatisfiable = createErrorResponse(416)
  export const ExpectationFailed = createErrorResponse(417)
  export const MisdirectedRequest = createErrorResponse(421)
  export const UnprocessableEntity = createErrorResponse(422)
  export const Locked = createErrorResponse(423)
  export const FailedDependency = createErrorResponse(424)
  export const UnorderedCollection = createErrorResponse(425)
  export const UpgradeRequired = createErrorResponse(426)
  export const PreconditionRequired = createErrorResponse(428)
  export const TooManyRequests = createErrorResponse(429)
  export const RequestHeaderFieldsTooLarge = createErrorResponse(431)
  export const UnavailableForLegalReasons = createErrorResponse(451)

  // 5xx
  export const InternalServerError = createErrorResponse(500)
  export const NotImplemented = createErrorResponse(501)
  export const BadGateway = createErrorResponse(502)
  export const ServiceUnavailable = createErrorResponse(503)
  export const GatewayTimeout = createErrorResponse(504)
  export const HTTPVersionNotSupported = createErrorResponse(505)
  export const VariantAlsoNegotiates = createErrorResponse(506)
  export const InsufficientStorage = createErrorResponse(507)
  export const LoopDetected = createErrorResponse(508)
  export const BandwidthLimitExceeded = createErrorResponse(509)
  export const NotExtended = createErrorResponse(510)
  export const NetworkAuthenticationRequired = createErrorResponse(511)

  export const setBodyCreator = _setBodyCreator
  export const MARKER = _MARKER
}

function _decorate<T> (resp: ResponseObject<T>, code: number, body?: T, headers?: object) {
  resp.status = resp.statusCode = code;
  resp.body = bodyCreator(code, body, headers);
  if (headers != null) resp.headers = headers;
  return resp;
}

function _setName<T extends Function> (fn: T, name: string): T {
  return Object.defineProperty(fn, "name", {
    configurable: true,
    value: name,
  });
}
function toJSON<T> (this: ResponseObject<T>): BaseResponseObject<T> {
  return { body: this.body, status: this.status, headers: this.headers };
}

function toString (this: ResponseObject<any>): string {
  return `Responses.${getName(this.status)} ${JSON.stringify(this)}`;
}

function getName (code: number) {
  const name = status[code];
  if (!name) {
    throw new Error(`Unable to find status for ${code}`);
  }
  return name.replace(/[\s+-]/g, "");
}

module.exports = exports;
