
import { STATUS_CODES } from "http";
const getName = (code: number) => STATUS_CODES[code]!.replace(/[\s+-]/g, "");



const responses = new WeakSet();


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

function toJSON(this: {body: any, status: number, headers: object}) {
  return { body: this.body, status: this.status, headers: this.headers };
}

function toString(this: {status: number}) {
  return `Responses.${getName(this.status)} ${JSON.stringify(this)}`;
}

const proto: ResponseObject<undefined> = { toJSON, toString, body: undefined, status: 0, statusCode: 0, headers: {} };

const errProto: ResponseObject<undefined> = Object.assign(Object.create(Error.prototype), proto);

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
module.exports = R;

export default R;

namespace R {

export function Continue<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 100;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function SwitchingProtocols<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 101;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function Processing<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 102;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function OK<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 200;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function Created<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 201;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function Accepted<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 202;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function NonAuthoritativeInformation<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 203;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function NoContent<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 204;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function ResetContent<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 205;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function PartialContent<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 206;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function MultiStatus<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 207;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function AlreadyReported<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 208;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function IMUsed<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 226;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function MultipleChoices<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 300;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function MovedPermanently<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 301;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function Found<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 302;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function SeeOther<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 303;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function NotModified<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 304;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function UseProxy<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 305;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function TemporaryRedirect<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 307;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function PermanentRedirect<T> (body?: T, headers?: object): ResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(proto);
  resp.status = resp.statusCode = 308;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  responses.add(resp);
  return resp;
}

export function BadRequest<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 400;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, BadRequest);
  responses.add(resp);
  return resp;
}

export function Unauthorized<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 401;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, Unauthorized);
  responses.add(resp);
  return resp;
}

export function PaymentRequired<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 402;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, PaymentRequired);
  responses.add(resp);
  return resp;
}

export function Forbidden<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 403;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, Forbidden);
  responses.add(resp);
  return resp;
}

export function NotFound<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 404;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, NotFound);
  responses.add(resp);
  return resp;
}

export function MethodNotAllowed<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 405;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, MethodNotAllowed);
  responses.add(resp);
  return resp;
}

export function NotAcceptable<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 406;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, NotAcceptable);
  responses.add(resp);
  return resp;
}

export function ProxyAuthenticationRequired<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 407;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, ProxyAuthenticationRequired);
  responses.add(resp);
  return resp;
}

export function RequestTimeout<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 408;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, RequestTimeout);
  responses.add(resp);
  return resp;
}

export function Conflict<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 409;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, Conflict);
  responses.add(resp);
  return resp;
}

export function Gone<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 410;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, Gone);
  responses.add(resp);
  return resp;
}

export function LengthRequired<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 411;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, LengthRequired);
  responses.add(resp);
  return resp;
}

export function PreconditionFailed<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 412;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, PreconditionFailed);
  responses.add(resp);
  return resp;
}

export function PayloadTooLarge<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 413;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, PayloadTooLarge);
  responses.add(resp);
  return resp;
}

export function URITooLong<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 414;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, URITooLong);
  responses.add(resp);
  return resp;
}

export function UnsupportedMediaType<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 415;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, UnsupportedMediaType);
  responses.add(resp);
  return resp;
}

export function RangeNotSatisfiable<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 416;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, RangeNotSatisfiable);
  responses.add(resp);
  return resp;
}

export function ExpectationFailed<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 417;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, ExpectationFailed);
  responses.add(resp);
  return resp;
}

export function MisdirectedRequest<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 421;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, MisdirectedRequest);
  responses.add(resp);
  return resp;
}

export function UnprocessableEntity<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 422;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, UnprocessableEntity);
  responses.add(resp);
  return resp;
}

export function Locked<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 423;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, Locked);
  responses.add(resp);
  return resp;
}

export function FailedDependency<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 424;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, FailedDependency);
  responses.add(resp);
  return resp;
}

export function UnorderedCollection<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 425;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, UnorderedCollection);
  responses.add(resp);
  return resp;
}

export function UpgradeRequired<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 426;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, UpgradeRequired);
  responses.add(resp);
  return resp;
}

export function PreconditionRequired<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 428;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, PreconditionRequired);
  responses.add(resp);
  return resp;
}

export function TooManyRequests<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 429;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, TooManyRequests);
  responses.add(resp);
  return resp;
}

export function RequestHeaderFieldsTooLarge<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 431;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, RequestHeaderFieldsTooLarge);
  responses.add(resp);
  return resp;
}

export function UnavailableForLegalReasons<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 451;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, UnavailableForLegalReasons);
  responses.add(resp);
  return resp;
}

export function InternalServerError<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 500;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, InternalServerError);
  responses.add(resp);
  return resp;
}

export function NotImplemented<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 501;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, NotImplemented);
  responses.add(resp);
  return resp;
}

export function BadGateway<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 502;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, BadGateway);
  responses.add(resp);
  return resp;
}

export function ServiceUnavailable<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 503;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, ServiceUnavailable);
  responses.add(resp);
  return resp;
}

export function GatewayTimeout<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 504;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, GatewayTimeout);
  responses.add(resp);
  return resp;
}

export function HTTPVersionNotSupported<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 505;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, HTTPVersionNotSupported);
  responses.add(resp);
  return resp;
}

export function VariantAlsoNegotiates<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 506;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, VariantAlsoNegotiates);
  responses.add(resp);
  return resp;
}

export function InsufficientStorage<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 507;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, InsufficientStorage);
  responses.add(resp);
  return resp;
}

export function LoopDetected<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 508;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, LoopDetected);
  responses.add(resp);
  return resp;
}

export function BandwidthLimitExceeded<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 509;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, BandwidthLimitExceeded);
  responses.add(resp);
  return resp;
}

export function NotExtended<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 510;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, NotExtended);
  responses.add(resp);
  return resp;
}

export function NetworkAuthenticationRequired<T> (body?: T, headers?: object): ErrorResponseObject<T> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  const resp = Object.create(errProto);
  resp.status = resp.statusCode = 511;
  resp.body = body;
  if (headers != null) resp.headers = headers;
  Error.captureStackTrace(resp, NetworkAuthenticationRequired);
  responses.add(resp);
  return resp;
}

export const Ok = OK;
}
