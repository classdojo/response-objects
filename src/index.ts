import { STATUS_CODES } from "http";
const getName = (code: number) => STATUS_CODES[code]!.replace(/[\s+-]/g, "");

const responses = new WeakSet();

export interface Headers {
  [header: string]: number | string | string[] | undefined;
}

export interface BaseResponseObject<T> {
  body: T;
  status: number;
  headers: Headers
}

export interface ResponseObject<T> extends BaseResponseObject<T> {
  statusCode: number,
  toJSON(): BaseResponseObject<T>;
  toString(): string;
}

export interface ErrorResponseObject<T> extends ResponseObject<T>, Error {}

function toJSON(this: {body: any, status: number, headers: Headers}) {
  return { body: this.body, status: this.status, headers: this.headers };
}

function toString(this: {status: number}) {
  return `Responses.${getName(this.status)} ${JSON.stringify(this)}`;
}

const proto: ResponseObject<undefined> = { toJSON, toString, body: undefined, status: 0, statusCode: 0, headers: {} };

const errProto: ResponseObject<undefined> = Object.assign(Object.create(Error.prototype), proto);

export default function R<T> (code: number, body: T, headers: Headers = {}): ResponseObject<T> {
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
  responses.add(resp)
  return resp;
}
module.exports = R;

export function Continue<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 100;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.Continue = Continue

export function SwitchingProtocols<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 101;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.SwitchingProtocols = SwitchingProtocols

export function Processing<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 102;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.Processing = Processing

export function EarlyHints<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 103;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.EarlyHints = EarlyHints

export function OK<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 200;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.OK = OK

export function Created<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 201;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.Created = Created

export function Accepted<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 202;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.Accepted = Accepted

export function NonAuthoritativeInformation<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 203;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.NonAuthoritativeInformation = NonAuthoritativeInformation

export function NoContent<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 204;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.NoContent = NoContent

export function ResetContent<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 205;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.ResetContent = ResetContent

export function PartialContent<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 206;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.PartialContent = PartialContent

export function MultiStatus<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 207;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.MultiStatus = MultiStatus

export function AlreadyReported<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 208;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.AlreadyReported = AlreadyReported

export function IMUsed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 226;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.IMUsed = IMUsed

export function MultipleChoices<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 300;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.MultipleChoices = MultipleChoices

export function MovedPermanently<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 301;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.MovedPermanently = MovedPermanently

export function Found<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 302;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.Found = Found

export function SeeOther<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 303;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.SeeOther = SeeOther

export function NotModified<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 304;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.NotModified = NotModified

export function UseProxy<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 305;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.UseProxy = UseProxy

export function TemporaryRedirect<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 307;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.TemporaryRedirect = TemporaryRedirect

export function PermanentRedirect<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 308;
  resp.body = body;
  resp.headers = headers;
  responses.add(resp);
  return resp;
}
module.exports.PermanentRedirect = PermanentRedirect

export function BadRequest<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 400;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, BadRequest);
  responses.add(resp);
  return resp;
}
module.exports.BadRequest = BadRequest

export function Unauthorized<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 401;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, Unauthorized);
  responses.add(resp);
  return resp;
}
module.exports.Unauthorized = Unauthorized

export function PaymentRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 402;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, PaymentRequired);
  responses.add(resp);
  return resp;
}
module.exports.PaymentRequired = PaymentRequired

export function Forbidden<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 403;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, Forbidden);
  responses.add(resp);
  return resp;
}
module.exports.Forbidden = Forbidden

export function NotFound<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 404;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, NotFound);
  responses.add(resp);
  return resp;
}
module.exports.NotFound = NotFound

export function MethodNotAllowed<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 405;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, MethodNotAllowed);
  responses.add(resp);
  return resp;
}
module.exports.MethodNotAllowed = MethodNotAllowed

export function NotAcceptable<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 406;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, NotAcceptable);
  responses.add(resp);
  return resp;
}
module.exports.NotAcceptable = NotAcceptable

export function ProxyAuthenticationRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 407;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, ProxyAuthenticationRequired);
  responses.add(resp);
  return resp;
}
module.exports.ProxyAuthenticationRequired = ProxyAuthenticationRequired

export function RequestTimeout<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 408;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, RequestTimeout);
  responses.add(resp);
  return resp;
}
module.exports.RequestTimeout = RequestTimeout

export function Conflict<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 409;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, Conflict);
  responses.add(resp);
  return resp;
}
module.exports.Conflict = Conflict

export function Gone<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 410;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, Gone);
  responses.add(resp);
  return resp;
}
module.exports.Gone = Gone

export function LengthRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 411;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, LengthRequired);
  responses.add(resp);
  return resp;
}
module.exports.LengthRequired = LengthRequired

export function PreconditionFailed<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 412;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, PreconditionFailed);
  responses.add(resp);
  return resp;
}
module.exports.PreconditionFailed = PreconditionFailed

export function PayloadTooLarge<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 413;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, PayloadTooLarge);
  responses.add(resp);
  return resp;
}
module.exports.PayloadTooLarge = PayloadTooLarge

export function URITooLong<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 414;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, URITooLong);
  responses.add(resp);
  return resp;
}
module.exports.URITooLong = URITooLong

export function UnsupportedMediaType<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 415;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, UnsupportedMediaType);
  responses.add(resp);
  return resp;
}
module.exports.UnsupportedMediaType = UnsupportedMediaType

export function RangeNotSatisfiable<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 416;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, RangeNotSatisfiable);
  responses.add(resp);
  return resp;
}
module.exports.RangeNotSatisfiable = RangeNotSatisfiable

export function ExpectationFailed<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 417;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, ExpectationFailed);
  responses.add(resp);
  return resp;
}
module.exports.ExpectationFailed = ExpectationFailed

export function MisdirectedRequest<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 421;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, MisdirectedRequest);
  responses.add(resp);
  return resp;
}
module.exports.MisdirectedRequest = MisdirectedRequest

export function UnprocessableEntity<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 422;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, UnprocessableEntity);
  responses.add(resp);
  return resp;
}
module.exports.UnprocessableEntity = UnprocessableEntity

export function Locked<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 423;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, Locked);
  responses.add(resp);
  return resp;
}
module.exports.Locked = Locked

export function FailedDependency<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 424;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, FailedDependency);
  responses.add(resp);
  return resp;
}
module.exports.FailedDependency = FailedDependency

export function UnorderedCollection<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 425;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, UnorderedCollection);
  responses.add(resp);
  return resp;
}
module.exports.UnorderedCollection = UnorderedCollection

export function UpgradeRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 426;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, UpgradeRequired);
  responses.add(resp);
  return resp;
}
module.exports.UpgradeRequired = UpgradeRequired

export function PreconditionRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 428;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, PreconditionRequired);
  responses.add(resp);
  return resp;
}
module.exports.PreconditionRequired = PreconditionRequired

export function TooManyRequests<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 429;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, TooManyRequests);
  responses.add(resp);
  return resp;
}
module.exports.TooManyRequests = TooManyRequests

export function RequestHeaderFieldsTooLarge<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 431;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, RequestHeaderFieldsTooLarge);
  responses.add(resp);
  return resp;
}
module.exports.RequestHeaderFieldsTooLarge = RequestHeaderFieldsTooLarge

export function UnavailableForLegalReasons<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 451;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, UnavailableForLegalReasons);
  responses.add(resp);
  return resp;
}
module.exports.UnavailableForLegalReasons = UnavailableForLegalReasons

export function InternalServerError<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 500;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, InternalServerError);
  responses.add(resp);
  return resp;
}
module.exports.InternalServerError = InternalServerError

export function NotImplemented<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 501;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, NotImplemented);
  responses.add(resp);
  return resp;
}
module.exports.NotImplemented = NotImplemented

export function BadGateway<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 502;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, BadGateway);
  responses.add(resp);
  return resp;
}
module.exports.BadGateway = BadGateway

export function ServiceUnavailable<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 503;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, ServiceUnavailable);
  responses.add(resp);
  return resp;
}
module.exports.ServiceUnavailable = ServiceUnavailable

export function GatewayTimeout<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 504;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, GatewayTimeout);
  responses.add(resp);
  return resp;
}
module.exports.GatewayTimeout = GatewayTimeout

export function HTTPVersionNotSupported<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 505;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, HTTPVersionNotSupported);
  responses.add(resp);
  return resp;
}
module.exports.HTTPVersionNotSupported = HTTPVersionNotSupported

export function VariantAlsoNegotiates<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 506;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, VariantAlsoNegotiates);
  responses.add(resp);
  return resp;
}
module.exports.VariantAlsoNegotiates = VariantAlsoNegotiates

export function InsufficientStorage<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 507;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, InsufficientStorage);
  responses.add(resp);
  return resp;
}
module.exports.InsufficientStorage = InsufficientStorage

export function LoopDetected<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 508;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, LoopDetected);
  responses.add(resp);
  return resp;
}
module.exports.LoopDetected = LoopDetected

export function BandwidthLimitExceeded<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 509;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, BandwidthLimitExceeded);
  responses.add(resp);
  return resp;
}
module.exports.BandwidthLimitExceeded = BandwidthLimitExceeded

export function NotExtended<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 510;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, NotExtended);
  responses.add(resp);
  return resp;
}
module.exports.NotExtended = NotExtended

export function NetworkAuthenticationRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 511;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, NetworkAuthenticationRequired);
  responses.add(resp);
  return resp;
}
module.exports.NetworkAuthenticationRequired = NetworkAuthenticationRequired

export const Ok = OK;
module.exports.Ok = Ok;
