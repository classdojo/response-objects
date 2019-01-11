import { STATUS_CODES } from "http";
const getName = (code: number) => STATUS_CODES[code]!.replace(/[\s+-]/g, "");

const responses = new WeakSet()

function toJSON(this: {body: any, status: number, headers: object}) {
  return { body: this.body, status: this.status, headers: this.headers };
}

function toString(this: {status: number}) {
  return `Responses.${getName(this.status)} ${JSON.stringify(this)}`;
}

const proto: ResponseObject<undefined> = { toJSON, toString, body: undefined, status: 0, statusCode: 0, headers: {} };

const errProto: ErrorResponseObject<undefined> = Object.assign(Object.create(Error.prototype), proto);

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

export interface Headers {
  [header: string]: number | string | string[] | undefined;
}

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

namespace R {
  
  export function Continue<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(100, body, headers)
  }

  export function SwitchingProtocols<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(101, body, headers)
  }

  export function Processing<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(102, body, headers)
  }

  export function EarlyHints<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(103, body, headers)
  }

  export function OK<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(200, body, headers)
  }

  export function Created<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(201, body, headers)
  }

  export function Accepted<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(202, body, headers)
  }

  export function NonAuthoritativeInformation<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(203, body, headers)
  }

  export function NoContent<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(204, body, headers)
  }

  export function ResetContent<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(205, body, headers)
  }

  export function PartialContent<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(206, body, headers)
  }

  export function MultiStatus<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(207, body, headers)
  }

  export function AlreadyReported<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(208, body, headers)
  }

  export function IMUsed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(226, body, headers)
  }

  export function MultipleChoices<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(300, body, headers)
  }

  export function MovedPermanently<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(301, body, headers)
  }

  export function Found<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(302, body, headers)
  }

  export function SeeOther<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(303, body, headers)
  }

  export function NotModified<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(304, body, headers)
  }

  export function UseProxy<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(305, body, headers)
  }

  export function TemporaryRedirect<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(307, body, headers)
  }

  export function PermanentRedirect<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(308, body, headers)
  }

  export function BadRequest<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(400, body, headers)
  }

  export function Unauthorized<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(401, body, headers)
  }

  export function PaymentRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(402, body, headers)
  }

  export function Forbidden<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(403, body, headers)
  }

  export function NotFound<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(404, body, headers)
  }

  export function MethodNotAllowed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(405, body, headers)
  }

  export function NotAcceptable<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(406, body, headers)
  }

  export function ProxyAuthenticationRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(407, body, headers)
  }

  export function RequestTimeout<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(408, body, headers)
  }

  export function Conflict<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(409, body, headers)
  }

  export function Gone<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(410, body, headers)
  }

  export function LengthRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(411, body, headers)
  }

  export function PreconditionFailed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(412, body, headers)
  }

  export function PayloadTooLarge<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(413, body, headers)
  }

  export function URITooLong<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(414, body, headers)
  }

  export function UnsupportedMediaType<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(415, body, headers)
  }

  export function RangeNotSatisfiable<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(416, body, headers)
  }

  export function ExpectationFailed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(417, body, headers)
  }

  export function MisdirectedRequest<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(421, body, headers)
  }

  export function UnprocessableEntity<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(422, body, headers)
  }

  export function Locked<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(423, body, headers)
  }

  export function FailedDependency<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(424, body, headers)
  }

  export function UnorderedCollection<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(425, body, headers)
  }

  export function UpgradeRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(426, body, headers)
  }

  export function PreconditionRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(428, body, headers)
  }

  export function TooManyRequests<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(429, body, headers)
  }

  export function RequestHeaderFieldsTooLarge<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(431, body, headers)
  }

  export function UnavailableForLegalReasons<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(451, body, headers)
  }

  export function InternalServerError<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(500, body, headers)
  }

  export function NotImplemented<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(501, body, headers)
  }

  export function BadGateway<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(502, body, headers)
  }

  export function ServiceUnavailable<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(503, body, headers)
  }

  export function GatewayTimeout<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(504, body, headers)
  }

  export function HTTPVersionNotSupported<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(505, body, headers)
  }

  export function VariantAlsoNegotiates<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(506, body, headers)
  }

  export function InsufficientStorage<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(507, body, headers)
  }

  export function LoopDetected<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(508, body, headers)
  }

  export function BandwidthLimitExceeded<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(509, body, headers)
  }

  export function NotExtended<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(510, body, headers)
  }

  export function NetworkAuthenticationRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    return R(511, body, headers)
  }
  export const Ok = OK;
}

module.exports = R;
exports = module.exports;
export default R;

export const Continue = R.Continue
export const SwitchingProtocols = R.SwitchingProtocols
export const Processing = R.Processing
export const EarlyHints = R.EarlyHints
export const OK = R.OK
export const Created = R.Created
export const Accepted = R.Accepted
export const NonAuthoritativeInformation = R.NonAuthoritativeInformation
export const NoContent = R.NoContent
export const ResetContent = R.ResetContent
export const PartialContent = R.PartialContent
export const MultiStatus = R.MultiStatus
export const AlreadyReported = R.AlreadyReported
export const IMUsed = R.IMUsed
export const MultipleChoices = R.MultipleChoices
export const MovedPermanently = R.MovedPermanently
export const Found = R.Found
export const SeeOther = R.SeeOther
export const NotModified = R.NotModified
export const UseProxy = R.UseProxy
export const TemporaryRedirect = R.TemporaryRedirect
export const PermanentRedirect = R.PermanentRedirect
export const BadRequest = R.BadRequest
export const Unauthorized = R.Unauthorized
export const PaymentRequired = R.PaymentRequired
export const Forbidden = R.Forbidden
export const NotFound = R.NotFound
export const MethodNotAllowed = R.MethodNotAllowed
export const NotAcceptable = R.NotAcceptable
export const ProxyAuthenticationRequired = R.ProxyAuthenticationRequired
export const RequestTimeout = R.RequestTimeout
export const Conflict = R.Conflict
export const Gone = R.Gone
export const LengthRequired = R.LengthRequired
export const PreconditionFailed = R.PreconditionFailed
export const PayloadTooLarge = R.PayloadTooLarge
export const URITooLong = R.URITooLong
export const UnsupportedMediaType = R.UnsupportedMediaType
export const RangeNotSatisfiable = R.RangeNotSatisfiable
export const ExpectationFailed = R.ExpectationFailed
export const MisdirectedRequest = R.MisdirectedRequest
export const UnprocessableEntity = R.UnprocessableEntity
export const Locked = R.Locked
export const FailedDependency = R.FailedDependency
export const UnorderedCollection = R.UnorderedCollection
export const UpgradeRequired = R.UpgradeRequired
export const PreconditionRequired = R.PreconditionRequired
export const TooManyRequests = R.TooManyRequests
export const RequestHeaderFieldsTooLarge = R.RequestHeaderFieldsTooLarge
export const UnavailableForLegalReasons = R.UnavailableForLegalReasons
export const InternalServerError = R.InternalServerError
export const NotImplemented = R.NotImplemented
export const BadGateway = R.BadGateway
export const ServiceUnavailable = R.ServiceUnavailable
export const GatewayTimeout = R.GatewayTimeout
export const HTTPVersionNotSupported = R.HTTPVersionNotSupported
export const VariantAlsoNegotiates = R.VariantAlsoNegotiates
export const InsufficientStorage = R.InsufficientStorage
export const LoopDetected = R.LoopDetected
export const BandwidthLimitExceeded = R.BandwidthLimitExceeded
export const NotExtended = R.NotExtended
export const NetworkAuthenticationRequired = R.NetworkAuthenticationRequired

export const Ok = R.Ok;
