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
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(100, body, headers)
  }


  export function SwitchingProtocols<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(101, body, headers)
  }


  export function Processing<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(102, body, headers)
  }


  export function EarlyHints<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(103, body, headers)
  }


  export function OK<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(200, body, headers)
  }


  export function Created<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(201, body, headers)
  }


  export function Accepted<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(202, body, headers)
  }


  export function NonAuthoritativeInformation<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(203, body, headers)
  }


  export function NoContent<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(204, body, headers)
  }


  export function ResetContent<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(205, body, headers)
  }


  export function PartialContent<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(206, body, headers)
  }


  export function MultiStatus<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(207, body, headers)
  }


  export function AlreadyReported<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(208, body, headers)
  }


  export function IMUsed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(226, body, headers)
  }


  export function MultipleChoices<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(300, body, headers)
  }


  export function MovedPermanently<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(301, body, headers)
  }


  export function Found<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(302, body, headers)
  }


  export function SeeOther<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(303, body, headers)
  }


  export function NotModified<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(304, body, headers)
  }


  export function UseProxy<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(305, body, headers)
  }


  export function TemporaryRedirect<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(307, body, headers)
  }


  export function PermanentRedirect<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(308, body, headers)
  }


  export function BadRequest<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(400, body, headers)
  }


  export function Unauthorized<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(401, body, headers)
  }


  export function PaymentRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(402, body, headers)
  }


  export function Forbidden<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(403, body, headers)
  }


  export function NotFound<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(404, body, headers)
  }


  export function MethodNotAllowed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(405, body, headers)
  }


  export function NotAcceptable<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(406, body, headers)
  }


  export function ProxyAuthenticationRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(407, body, headers)
  }


  export function RequestTimeout<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(408, body, headers)
  }


  export function Conflict<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(409, body, headers)
  }


  export function Gone<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(410, body, headers)
  }


  export function LengthRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(411, body, headers)
  }


  export function PreconditionFailed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(412, body, headers)
  }


  export function PayloadTooLarge<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(413, body, headers)
  }


  export function URITooLong<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(414, body, headers)
  }


  export function UnsupportedMediaType<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(415, body, headers)
  }


  export function RangeNotSatisfiable<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(416, body, headers)
  }


  export function ExpectationFailed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(417, body, headers)
  }


  export function MisdirectedRequest<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(421, body, headers)
  }


  export function UnprocessableEntity<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(422, body, headers)
  }


  export function Locked<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(423, body, headers)
  }


  export function FailedDependency<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(424, body, headers)
  }


  export function UnorderedCollection<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(425, body, headers)
  }


  export function UpgradeRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(426, body, headers)
  }


  export function PreconditionRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(428, body, headers)
  }


  export function TooManyRequests<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(429, body, headers)
  }


  export function RequestHeaderFieldsTooLarge<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(431, body, headers)
  }


  export function UnavailableForLegalReasons<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(451, body, headers)
  }


  export function InternalServerError<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(500, body, headers)
  }


  export function NotImplemented<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(501, body, headers)
  }


  export function BadGateway<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(502, body, headers)
  }


  export function ServiceUnavailable<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(503, body, headers)
  }


  export function GatewayTimeout<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(504, body, headers)
  }


  export function HTTPVersionNotSupported<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(505, body, headers)
  }


  export function VariantAlsoNegotiates<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(506, body, headers)
  }


  export function InsufficientStorage<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(507, body, headers)
  }


  export function LoopDetected<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(508, body, headers)
  }


  export function BandwidthLimitExceeded<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(509, body, headers)
  }


  export function NotExtended<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(510, body, headers)
  }


  export function NetworkAuthenticationRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(511, body, headers)
  }
  export const Ok = OK;
}

module.exports = R;
exports = module.exports;
export default R;

export function Continue<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(100, body, headers)
  }


  export function SwitchingProtocols<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(101, body, headers)
  }


  export function Processing<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(102, body, headers)
  }


  export function EarlyHints<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(103, body, headers)
  }


  export function OK<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(200, body, headers)
  }


  export function Created<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(201, body, headers)
  }


  export function Accepted<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(202, body, headers)
  }


  export function NonAuthoritativeInformation<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(203, body, headers)
  }


  export function NoContent<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(204, body, headers)
  }


  export function ResetContent<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(205, body, headers)
  }


  export function PartialContent<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(206, body, headers)
  }


  export function MultiStatus<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(207, body, headers)
  }


  export function AlreadyReported<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(208, body, headers)
  }


  export function IMUsed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(226, body, headers)
  }


  export function MultipleChoices<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(300, body, headers)
  }


  export function MovedPermanently<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(301, body, headers)
  }


  export function Found<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(302, body, headers)
  }


  export function SeeOther<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(303, body, headers)
  }


  export function NotModified<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(304, body, headers)
  }


  export function UseProxy<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(305, body, headers)
  }


  export function TemporaryRedirect<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(307, body, headers)
  }


  export function PermanentRedirect<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(308, body, headers)
  }


  export function BadRequest<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(400, body, headers)
  }


  export function Unauthorized<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(401, body, headers)
  }


  export function PaymentRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(402, body, headers)
  }


  export function Forbidden<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(403, body, headers)
  }


  export function NotFound<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(404, body, headers)
  }


  export function MethodNotAllowed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(405, body, headers)
  }


  export function NotAcceptable<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(406, body, headers)
  }


  export function ProxyAuthenticationRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(407, body, headers)
  }


  export function RequestTimeout<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(408, body, headers)
  }


  export function Conflict<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(409, body, headers)
  }


  export function Gone<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(410, body, headers)
  }


  export function LengthRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(411, body, headers)
  }


  export function PreconditionFailed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(412, body, headers)
  }


  export function PayloadTooLarge<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(413, body, headers)
  }


  export function URITooLong<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(414, body, headers)
  }


  export function UnsupportedMediaType<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(415, body, headers)
  }


  export function RangeNotSatisfiable<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(416, body, headers)
  }


  export function ExpectationFailed<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(417, body, headers)
  }


  export function MisdirectedRequest<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(421, body, headers)
  }


  export function UnprocessableEntity<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(422, body, headers)
  }


  export function Locked<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(423, body, headers)
  }


  export function FailedDependency<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(424, body, headers)
  }


  export function UnorderedCollection<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(425, body, headers)
  }


  export function UpgradeRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(426, body, headers)
  }


  export function PreconditionRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(428, body, headers)
  }


  export function TooManyRequests<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(429, body, headers)
  }


  export function RequestHeaderFieldsTooLarge<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(431, body, headers)
  }


  export function UnavailableForLegalReasons<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(451, body, headers)
  }


  export function InternalServerError<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(500, body, headers)
  }


  export function NotImplemented<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(501, body, headers)
  }


  export function BadGateway<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(502, body, headers)
  }


  export function ServiceUnavailable<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(503, body, headers)
  }


  export function GatewayTimeout<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(504, body, headers)
  }


  export function HTTPVersionNotSupported<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(505, body, headers)
  }


  export function VariantAlsoNegotiates<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(506, body, headers)
  }


  export function InsufficientStorage<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(507, body, headers)
  }


  export function LoopDetected<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(508, body, headers)
  }


  export function BandwidthLimitExceeded<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(509, body, headers)
  }


  export function NotExtended<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(510, body, headers)
  }


  export function NetworkAuthenticationRequired<T> (body?: T, headers: Headers = {}): ResponseObject<T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    return R(511, body, headers)
  }
