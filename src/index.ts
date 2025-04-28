import { STATUS_CODES } from "http";
const getName = (code: number) => STATUS_CODES[code]!.replace(/[\s+-]/g, "");

const responses = new WeakSet()

function toJSON<Code extends AllStatusCodes>(this: {body: any, status: Code, headers: Headers}) {
  return { body: this.body, status: this.status, headers: this.headers };
}

function toString(this: {status: number}) {
  return `Responses.${getName(this.status)} ${JSON.stringify(this)}`;
}

const proto: ResponseObject<undefined, AllStatusCodes> = { toJSON, toString, body: undefined, status: 100, statusCode: 100, headers: {} };

const errProto: ErrorResponseObject<undefined, ErrorStatusCodes> = Object.assign(Object.create(Error.prototype), proto);

export type AllStatusCodes = 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 509 | 510 | 511;
export type ErrorStatusCodes = 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 509 | 510 | 511;

export interface BaseResponseObject<T, Code extends AllStatusCodes> {
  readonly body: T;
  readonly status: Code;
  readonly headers: Headers;
}

export interface ResponseObject<T, Code extends AllStatusCodes> extends BaseResponseObject<T, Code> {
  statusCode: Code,
  toJSON(): BaseResponseObject<T, Code>;
  toString(): string;
}

export interface ErrorResponseObject<T, Code extends ErrorStatusCodes> extends ResponseObject<T, Code>, Error {}

export interface Headers {
  [header: string]: number | string | string[] | undefined;
}

function R<Code extends AllStatusCodes = AllStatusCodes>(code: Code): ResponseObject<void, Code>
function R<T, Code extends AllStatusCodes = AllStatusCodes> (code: Code, body: T, headers?: Headers): ResponseObject<T, Code>
function R<T, Code extends AllStatusCodes = AllStatusCodes> (code: Code, body?: T, headers: Headers = {}): ResponseObject<T, Code> {
  if (responses.has(body as any)) throw new Error("Object is already a response");
  let resp;
  if ((code as number) >= 400) {
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
  
  export function Continue(): ResponseObject<void, 100>;
  export function Continue<T> (body: T, headers?: Headers): ResponseObject<T, 100>
  export function Continue<T> (body?: T, headers: Headers = {}): ResponseObject<T, 100> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 100;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function SwitchingProtocols(): ResponseObject<void, 101>;
  export function SwitchingProtocols<T> (body: T, headers?: Headers): ResponseObject<T, 101>
  export function SwitchingProtocols<T> (body?: T, headers: Headers = {}): ResponseObject<T, 101> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 101;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function Processing(): ResponseObject<void, 102>;
  export function Processing<T> (body: T, headers?: Headers): ResponseObject<T, 102>
  export function Processing<T> (body?: T, headers: Headers = {}): ResponseObject<T, 102> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 102;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function EarlyHints(): ResponseObject<void, 103>;
  export function EarlyHints<T> (body: T, headers?: Headers): ResponseObject<T, 103>
  export function EarlyHints<T> (body?: T, headers: Headers = {}): ResponseObject<T, 103> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 103;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function OK(): ResponseObject<void, 200>;
  export function OK<T> (body: T, headers?: Headers): ResponseObject<T, 200>
  export function OK<T> (body?: T, headers: Headers = {}): ResponseObject<T, 200> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 200;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function Created(): ResponseObject<void, 201>;
  export function Created<T> (body: T, headers?: Headers): ResponseObject<T, 201>
  export function Created<T> (body?: T, headers: Headers = {}): ResponseObject<T, 201> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 201;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function Accepted(): ResponseObject<void, 202>;
  export function Accepted<T> (body: T, headers?: Headers): ResponseObject<T, 202>
  export function Accepted<T> (body?: T, headers: Headers = {}): ResponseObject<T, 202> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 202;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function NonAuthoritativeInformation(): ResponseObject<void, 203>;
  export function NonAuthoritativeInformation<T> (body: T, headers?: Headers): ResponseObject<T, 203>
  export function NonAuthoritativeInformation<T> (body?: T, headers: Headers = {}): ResponseObject<T, 203> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 203;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function NoContent(): ResponseObject<void, 204>;
  export function NoContent<T> (body: T, headers?: Headers): ResponseObject<T, 204>
  export function NoContent<T> (body?: T, headers: Headers = {}): ResponseObject<T, 204> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 204;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function ResetContent(): ResponseObject<void, 205>;
  export function ResetContent<T> (body: T, headers?: Headers): ResponseObject<T, 205>
  export function ResetContent<T> (body?: T, headers: Headers = {}): ResponseObject<T, 205> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 205;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function PartialContent(): ResponseObject<void, 206>;
  export function PartialContent<T> (body: T, headers?: Headers): ResponseObject<T, 206>
  export function PartialContent<T> (body?: T, headers: Headers = {}): ResponseObject<T, 206> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 206;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function MultiStatus(): ResponseObject<void, 207>;
  export function MultiStatus<T> (body: T, headers?: Headers): ResponseObject<T, 207>
  export function MultiStatus<T> (body?: T, headers: Headers = {}): ResponseObject<T, 207> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 207;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function AlreadyReported(): ResponseObject<void, 208>;
  export function AlreadyReported<T> (body: T, headers?: Headers): ResponseObject<T, 208>
  export function AlreadyReported<T> (body?: T, headers: Headers = {}): ResponseObject<T, 208> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 208;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function IMUsed(): ResponseObject<void, 226>;
  export function IMUsed<T> (body: T, headers?: Headers): ResponseObject<T, 226>
  export function IMUsed<T> (body?: T, headers: Headers = {}): ResponseObject<T, 226> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 226;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function MultipleChoices(): ResponseObject<void, 300>;
  export function MultipleChoices<T> (body: T, headers?: Headers): ResponseObject<T, 300>
  export function MultipleChoices<T> (body?: T, headers: Headers = {}): ResponseObject<T, 300> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 300;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function MovedPermanently(): ResponseObject<void, 301>;
  export function MovedPermanently<T> (body: T, headers?: Headers): ResponseObject<T, 301>
  export function MovedPermanently<T> (body?: T, headers: Headers = {}): ResponseObject<T, 301> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 301;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function Found(): ResponseObject<void, 302>;
  export function Found<T> (body: T, headers?: Headers): ResponseObject<T, 302>
  export function Found<T> (body?: T, headers: Headers = {}): ResponseObject<T, 302> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 302;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function SeeOther(): ResponseObject<void, 303>;
  export function SeeOther<T> (body: T, headers?: Headers): ResponseObject<T, 303>
  export function SeeOther<T> (body?: T, headers: Headers = {}): ResponseObject<T, 303> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 303;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function NotModified(): ResponseObject<void, 304>;
  export function NotModified<T> (body: T, headers?: Headers): ResponseObject<T, 304>
  export function NotModified<T> (body?: T, headers: Headers = {}): ResponseObject<T, 304> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 304;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function UseProxy(): ResponseObject<void, 305>;
  export function UseProxy<T> (body: T, headers?: Headers): ResponseObject<T, 305>
  export function UseProxy<T> (body?: T, headers: Headers = {}): ResponseObject<T, 305> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 305;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function TemporaryRedirect(): ResponseObject<void, 307>;
  export function TemporaryRedirect<T> (body: T, headers?: Headers): ResponseObject<T, 307>
  export function TemporaryRedirect<T> (body?: T, headers: Headers = {}): ResponseObject<T, 307> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 307;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function PermanentRedirect(): ResponseObject<void, 308>;
  export function PermanentRedirect<T> (body: T, headers?: Headers): ResponseObject<T, 308>
  export function PermanentRedirect<T> (body?: T, headers: Headers = {}): ResponseObject<T, 308> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 308;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

    export function BadRequest(): ErrorResponseObject<void, 400>;
    export function BadRequest<T> (body: T, headers?: Headers): ErrorResponseObject<T, 400>
    export function BadRequest<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 400> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, BadRequest);
      Object.defineProperty(resp, "name", { value: "BadRequestError" });
      resp.status = resp.statusCode = 400;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function Unauthorized(): ErrorResponseObject<void, 401>;
    export function Unauthorized<T> (body: T, headers?: Headers): ErrorResponseObject<T, 401>
    export function Unauthorized<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 401> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, Unauthorized);
      Object.defineProperty(resp, "name", { value: "UnauthorizedError" });
      resp.status = resp.statusCode = 401;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function PaymentRequired(): ErrorResponseObject<void, 402>;
    export function PaymentRequired<T> (body: T, headers?: Headers): ErrorResponseObject<T, 402>
    export function PaymentRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 402> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, PaymentRequired);
      Object.defineProperty(resp, "name", { value: "PaymentRequiredError" });
      resp.status = resp.statusCode = 402;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function Forbidden(): ErrorResponseObject<void, 403>;
    export function Forbidden<T> (body: T, headers?: Headers): ErrorResponseObject<T, 403>
    export function Forbidden<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 403> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, Forbidden);
      Object.defineProperty(resp, "name", { value: "ForbiddenError" });
      resp.status = resp.statusCode = 403;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function NotFound(): ErrorResponseObject<void, 404>;
    export function NotFound<T> (body: T, headers?: Headers): ErrorResponseObject<T, 404>
    export function NotFound<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 404> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, NotFound);
      Object.defineProperty(resp, "name", { value: "NotFoundError" });
      resp.status = resp.statusCode = 404;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function MethodNotAllowed(): ErrorResponseObject<void, 405>;
    export function MethodNotAllowed<T> (body: T, headers?: Headers): ErrorResponseObject<T, 405>
    export function MethodNotAllowed<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 405> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, MethodNotAllowed);
      Object.defineProperty(resp, "name", { value: "MethodNotAllowedError" });
      resp.status = resp.statusCode = 405;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function NotAcceptable(): ErrorResponseObject<void, 406>;
    export function NotAcceptable<T> (body: T, headers?: Headers): ErrorResponseObject<T, 406>
    export function NotAcceptable<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 406> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, NotAcceptable);
      Object.defineProperty(resp, "name", { value: "NotAcceptableError" });
      resp.status = resp.statusCode = 406;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function ProxyAuthenticationRequired(): ErrorResponseObject<void, 407>;
    export function ProxyAuthenticationRequired<T> (body: T, headers?: Headers): ErrorResponseObject<T, 407>
    export function ProxyAuthenticationRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 407> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, ProxyAuthenticationRequired);
      Object.defineProperty(resp, "name", { value: "ProxyAuthenticationRequiredError" });
      resp.status = resp.statusCode = 407;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function RequestTimeout(): ErrorResponseObject<void, 408>;
    export function RequestTimeout<T> (body: T, headers?: Headers): ErrorResponseObject<T, 408>
    export function RequestTimeout<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 408> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, RequestTimeout);
      Object.defineProperty(resp, "name", { value: "RequestTimeoutError" });
      resp.status = resp.statusCode = 408;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function Conflict(): ErrorResponseObject<void, 409>;
    export function Conflict<T> (body: T, headers?: Headers): ErrorResponseObject<T, 409>
    export function Conflict<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 409> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, Conflict);
      Object.defineProperty(resp, "name", { value: "ConflictError" });
      resp.status = resp.statusCode = 409;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function Gone(): ErrorResponseObject<void, 410>;
    export function Gone<T> (body: T, headers?: Headers): ErrorResponseObject<T, 410>
    export function Gone<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 410> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, Gone);
      Object.defineProperty(resp, "name", { value: "GoneError" });
      resp.status = resp.statusCode = 410;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function LengthRequired(): ErrorResponseObject<void, 411>;
    export function LengthRequired<T> (body: T, headers?: Headers): ErrorResponseObject<T, 411>
    export function LengthRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 411> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, LengthRequired);
      Object.defineProperty(resp, "name", { value: "LengthRequiredError" });
      resp.status = resp.statusCode = 411;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function PreconditionFailed(): ErrorResponseObject<void, 412>;
    export function PreconditionFailed<T> (body: T, headers?: Headers): ErrorResponseObject<T, 412>
    export function PreconditionFailed<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 412> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, PreconditionFailed);
      Object.defineProperty(resp, "name", { value: "PreconditionFailedError" });
      resp.status = resp.statusCode = 412;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function PayloadTooLarge(): ErrorResponseObject<void, 413>;
    export function PayloadTooLarge<T> (body: T, headers?: Headers): ErrorResponseObject<T, 413>
    export function PayloadTooLarge<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 413> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, PayloadTooLarge);
      Object.defineProperty(resp, "name", { value: "PayloadTooLargeError" });
      resp.status = resp.statusCode = 413;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function URITooLong(): ErrorResponseObject<void, 414>;
    export function URITooLong<T> (body: T, headers?: Headers): ErrorResponseObject<T, 414>
    export function URITooLong<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 414> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, URITooLong);
      Object.defineProperty(resp, "name", { value: "URITooLongError" });
      resp.status = resp.statusCode = 414;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function UnsupportedMediaType(): ErrorResponseObject<void, 415>;
    export function UnsupportedMediaType<T> (body: T, headers?: Headers): ErrorResponseObject<T, 415>
    export function UnsupportedMediaType<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 415> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, UnsupportedMediaType);
      Object.defineProperty(resp, "name", { value: "UnsupportedMediaTypeError" });
      resp.status = resp.statusCode = 415;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function RangeNotSatisfiable(): ErrorResponseObject<void, 416>;
    export function RangeNotSatisfiable<T> (body: T, headers?: Headers): ErrorResponseObject<T, 416>
    export function RangeNotSatisfiable<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 416> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, RangeNotSatisfiable);
      Object.defineProperty(resp, "name", { value: "RangeNotSatisfiableError" });
      resp.status = resp.statusCode = 416;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function ExpectationFailed(): ErrorResponseObject<void, 417>;
    export function ExpectationFailed<T> (body: T, headers?: Headers): ErrorResponseObject<T, 417>
    export function ExpectationFailed<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 417> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, ExpectationFailed);
      Object.defineProperty(resp, "name", { value: "ExpectationFailedError" });
      resp.status = resp.statusCode = 417;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function MisdirectedRequest(): ErrorResponseObject<void, 421>;
    export function MisdirectedRequest<T> (body: T, headers?: Headers): ErrorResponseObject<T, 421>
    export function MisdirectedRequest<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 421> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, MisdirectedRequest);
      Object.defineProperty(resp, "name", { value: "MisdirectedRequestError" });
      resp.status = resp.statusCode = 421;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function UnprocessableEntity(): ErrorResponseObject<void, 422>;
    export function UnprocessableEntity<T> (body: T, headers?: Headers): ErrorResponseObject<T, 422>
    export function UnprocessableEntity<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 422> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, UnprocessableEntity);
      Object.defineProperty(resp, "name", { value: "UnprocessableEntityError" });
      resp.status = resp.statusCode = 422;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function Locked(): ErrorResponseObject<void, 423>;
    export function Locked<T> (body: T, headers?: Headers): ErrorResponseObject<T, 423>
    export function Locked<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 423> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, Locked);
      Object.defineProperty(resp, "name", { value: "LockedError" });
      resp.status = resp.statusCode = 423;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function FailedDependency(): ErrorResponseObject<void, 424>;
    export function FailedDependency<T> (body: T, headers?: Headers): ErrorResponseObject<T, 424>
    export function FailedDependency<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 424> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, FailedDependency);
      Object.defineProperty(resp, "name", { value: "FailedDependencyError" });
      resp.status = resp.statusCode = 424;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function TooEarly(): ErrorResponseObject<void, 425>;
    export function TooEarly<T> (body: T, headers?: Headers): ErrorResponseObject<T, 425>
    export function TooEarly<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 425> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, TooEarly);
      Object.defineProperty(resp, "name", { value: "TooEarlyError" });
      resp.status = resp.statusCode = 425;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function UpgradeRequired(): ErrorResponseObject<void, 426>;
    export function UpgradeRequired<T> (body: T, headers?: Headers): ErrorResponseObject<T, 426>
    export function UpgradeRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 426> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, UpgradeRequired);
      Object.defineProperty(resp, "name", { value: "UpgradeRequiredError" });
      resp.status = resp.statusCode = 426;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function PreconditionRequired(): ErrorResponseObject<void, 428>;
    export function PreconditionRequired<T> (body: T, headers?: Headers): ErrorResponseObject<T, 428>
    export function PreconditionRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 428> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, PreconditionRequired);
      Object.defineProperty(resp, "name", { value: "PreconditionRequiredError" });
      resp.status = resp.statusCode = 428;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function TooManyRequests(): ErrorResponseObject<void, 429>;
    export function TooManyRequests<T> (body: T, headers?: Headers): ErrorResponseObject<T, 429>
    export function TooManyRequests<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 429> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, TooManyRequests);
      Object.defineProperty(resp, "name", { value: "TooManyRequestsError" });
      resp.status = resp.statusCode = 429;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function RequestHeaderFieldsTooLarge(): ErrorResponseObject<void, 431>;
    export function RequestHeaderFieldsTooLarge<T> (body: T, headers?: Headers): ErrorResponseObject<T, 431>
    export function RequestHeaderFieldsTooLarge<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 431> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, RequestHeaderFieldsTooLarge);
      Object.defineProperty(resp, "name", { value: "RequestHeaderFieldsTooLargeError" });
      resp.status = resp.statusCode = 431;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function UnavailableForLegalReasons(): ErrorResponseObject<void, 451>;
    export function UnavailableForLegalReasons<T> (body: T, headers?: Headers): ErrorResponseObject<T, 451>
    export function UnavailableForLegalReasons<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 451> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, UnavailableForLegalReasons);
      Object.defineProperty(resp, "name", { value: "UnavailableForLegalReasonsError" });
      resp.status = resp.statusCode = 451;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function InternalServerError(): ErrorResponseObject<void, 500>;
    export function InternalServerError<T> (body: T, headers?: Headers): ErrorResponseObject<T, 500>
    export function InternalServerError<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 500> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, InternalServerError);
      Object.defineProperty(resp, "name", { value: "InternalServerErrorError" });
      resp.status = resp.statusCode = 500;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function NotImplemented(): ErrorResponseObject<void, 501>;
    export function NotImplemented<T> (body: T, headers?: Headers): ErrorResponseObject<T, 501>
    export function NotImplemented<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 501> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, NotImplemented);
      Object.defineProperty(resp, "name", { value: "NotImplementedError" });
      resp.status = resp.statusCode = 501;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function BadGateway(): ErrorResponseObject<void, 502>;
    export function BadGateway<T> (body: T, headers?: Headers): ErrorResponseObject<T, 502>
    export function BadGateway<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 502> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, BadGateway);
      Object.defineProperty(resp, "name", { value: "BadGatewayError" });
      resp.status = resp.statusCode = 502;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function ServiceUnavailable(): ErrorResponseObject<void, 503>;
    export function ServiceUnavailable<T> (body: T, headers?: Headers): ErrorResponseObject<T, 503>
    export function ServiceUnavailable<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 503> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, ServiceUnavailable);
      Object.defineProperty(resp, "name", { value: "ServiceUnavailableError" });
      resp.status = resp.statusCode = 503;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function GatewayTimeout(): ErrorResponseObject<void, 504>;
    export function GatewayTimeout<T> (body: T, headers?: Headers): ErrorResponseObject<T, 504>
    export function GatewayTimeout<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 504> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, GatewayTimeout);
      Object.defineProperty(resp, "name", { value: "GatewayTimeoutError" });
      resp.status = resp.statusCode = 504;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function HTTPVersionNotSupported(): ErrorResponseObject<void, 505>;
    export function HTTPVersionNotSupported<T> (body: T, headers?: Headers): ErrorResponseObject<T, 505>
    export function HTTPVersionNotSupported<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 505> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, HTTPVersionNotSupported);
      Object.defineProperty(resp, "name", { value: "HTTPVersionNotSupportedError" });
      resp.status = resp.statusCode = 505;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function VariantAlsoNegotiates(): ErrorResponseObject<void, 506>;
    export function VariantAlsoNegotiates<T> (body: T, headers?: Headers): ErrorResponseObject<T, 506>
    export function VariantAlsoNegotiates<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 506> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, VariantAlsoNegotiates);
      Object.defineProperty(resp, "name", { value: "VariantAlsoNegotiatesError" });
      resp.status = resp.statusCode = 506;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function InsufficientStorage(): ErrorResponseObject<void, 507>;
    export function InsufficientStorage<T> (body: T, headers?: Headers): ErrorResponseObject<T, 507>
    export function InsufficientStorage<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 507> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, InsufficientStorage);
      Object.defineProperty(resp, "name", { value: "InsufficientStorageError" });
      resp.status = resp.statusCode = 507;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function LoopDetected(): ErrorResponseObject<void, 508>;
    export function LoopDetected<T> (body: T, headers?: Headers): ErrorResponseObject<T, 508>
    export function LoopDetected<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 508> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, LoopDetected);
      Object.defineProperty(resp, "name", { value: "LoopDetectedError" });
      resp.status = resp.statusCode = 508;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function BandwidthLimitExceeded(): ErrorResponseObject<void, 509>;
    export function BandwidthLimitExceeded<T> (body: T, headers?: Headers): ErrorResponseObject<T, 509>
    export function BandwidthLimitExceeded<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 509> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, BandwidthLimitExceeded);
      Object.defineProperty(resp, "name", { value: "BandwidthLimitExceededError" });
      resp.status = resp.statusCode = 509;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function NotExtended(): ErrorResponseObject<void, 510>;
    export function NotExtended<T> (body: T, headers?: Headers): ErrorResponseObject<T, 510>
    export function NotExtended<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 510> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, NotExtended);
      Object.defineProperty(resp, "name", { value: "NotExtendedError" });
      resp.status = resp.statusCode = 510;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
    }

    export function NetworkAuthenticationRequired(): ErrorResponseObject<void, 511>;
    export function NetworkAuthenticationRequired<T> (body: T, headers?: Headers): ErrorResponseObject<T, 511>
    export function NetworkAuthenticationRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<T, 511> {
      if (responses.has(body as any)) throw new Error("Object is already a response");
      const resp = Object.create(errProto);
      Error.captureStackTrace(resp, NetworkAuthenticationRequired);
      Object.defineProperty(resp, "name", { value: "NetworkAuthenticationRequiredError" });
      resp.status = resp.statusCode = 511;
      resp.body = body;
      resp.headers = headers;
      responses.add(resp);
      return resp;
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
export const TooEarly = R.TooEarly
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
