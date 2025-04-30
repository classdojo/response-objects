import { STATUS_CODES } from "http";
const getName = (code: number) => STATUS_CODES[code]!.replace(/[\s+-]/g, "");

const responses = new WeakSet()

function toJSON<S extends AllStatusCodes>(this: {body: any, status: S, headers: Headers}) {
  return { body: this.body, status: this.status, headers: this.headers };
}

function toString(this: {status: number}) {
  return `Responses.${getName(this.status)} ${JSON.stringify(this)}`;
}

const proto: ResponseObject<AllStatusCodes, undefined> = { toJSON, toString, body: undefined, status: 100, statusCode: 100, headers: {} };

const errProto: ErrorResponseObject<ErrorStatusCodes, undefined> = Object.assign(Object.create(Error.prototype), proto);

export type AllStatusCodes = 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 509 | 510 | 511;
export type ErrorStatusCodes = 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 509 | 510 | 511;

export interface BaseResponseObject<S extends AllStatusCodes, T> {
  readonly body: T;
  readonly status: S;
  readonly headers: Headers;
}

export interface ResponseObject<S extends AllStatusCodes, T> extends BaseResponseObject<S, T> {
  statusCode: S,
  toJSON(): BaseResponseObject<S, T>;
  toString(): string;
}

export interface ErrorResponseObject<S extends ErrorStatusCodes, T> extends ResponseObject<S, T>, Error {}

export interface Headers {
  [header: string]: number | string | string[] | undefined;
}

function R<S extends AllStatusCodes>(code: S): ResponseObject<S, void>
function R<S extends AllStatusCodes, T> (code: S, body: T, headers?: Headers): ResponseObject<S, T>
function R<S extends AllStatusCodes, T> (code: S, body?: T, headers: Headers = {}): ResponseObject<S, T> {
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
  
  export function Continue(): ResponseObject<100, void>;
  export function Continue<T> (body: T, headers?: Headers): ResponseObject<100, T>
  export function Continue<T> (body?: T, headers: Headers = {}): ResponseObject<100, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 100;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function SwitchingProtocols(): ResponseObject<101, void>;
  export function SwitchingProtocols<T> (body: T, headers?: Headers): ResponseObject<101, T>
  export function SwitchingProtocols<T> (body?: T, headers: Headers = {}): ResponseObject<101, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 101;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function Processing(): ResponseObject<102, void>;
  export function Processing<T> (body: T, headers?: Headers): ResponseObject<102, T>
  export function Processing<T> (body?: T, headers: Headers = {}): ResponseObject<102, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 102;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function EarlyHints(): ResponseObject<103, void>;
  export function EarlyHints<T> (body: T, headers?: Headers): ResponseObject<103, T>
  export function EarlyHints<T> (body?: T, headers: Headers = {}): ResponseObject<103, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 103;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function OK(): ResponseObject<200, void>;
  export function OK<T> (body: T, headers?: Headers): ResponseObject<200, T>
  export function OK<T> (body?: T, headers: Headers = {}): ResponseObject<200, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 200;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function Created(): ResponseObject<201, void>;
  export function Created<T> (body: T, headers?: Headers): ResponseObject<201, T>
  export function Created<T> (body?: T, headers: Headers = {}): ResponseObject<201, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 201;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function Accepted(): ResponseObject<202, void>;
  export function Accepted<T> (body: T, headers?: Headers): ResponseObject<202, T>
  export function Accepted<T> (body?: T, headers: Headers = {}): ResponseObject<202, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 202;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function NonAuthoritativeInformation(): ResponseObject<203, void>;
  export function NonAuthoritativeInformation<T> (body: T, headers?: Headers): ResponseObject<203, T>
  export function NonAuthoritativeInformation<T> (body?: T, headers: Headers = {}): ResponseObject<203, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 203;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function NoContent(): ResponseObject<204, void>;
  export function NoContent<T> (body: T, headers?: Headers): ResponseObject<204, T>
  export function NoContent<T> (body?: T, headers: Headers = {}): ResponseObject<204, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 204;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function ResetContent(): ResponseObject<205, void>;
  export function ResetContent<T> (body: T, headers?: Headers): ResponseObject<205, T>
  export function ResetContent<T> (body?: T, headers: Headers = {}): ResponseObject<205, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 205;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function PartialContent(): ResponseObject<206, void>;
  export function PartialContent<T> (body: T, headers?: Headers): ResponseObject<206, T>
  export function PartialContent<T> (body?: T, headers: Headers = {}): ResponseObject<206, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 206;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function MultiStatus(): ResponseObject<207, void>;
  export function MultiStatus<T> (body: T, headers?: Headers): ResponseObject<207, T>
  export function MultiStatus<T> (body?: T, headers: Headers = {}): ResponseObject<207, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 207;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function AlreadyReported(): ResponseObject<208, void>;
  export function AlreadyReported<T> (body: T, headers?: Headers): ResponseObject<208, T>
  export function AlreadyReported<T> (body?: T, headers: Headers = {}): ResponseObject<208, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 208;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function IMUsed(): ResponseObject<226, void>;
  export function IMUsed<T> (body: T, headers?: Headers): ResponseObject<226, T>
  export function IMUsed<T> (body?: T, headers: Headers = {}): ResponseObject<226, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 226;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function MultipleChoices(): ResponseObject<300, void>;
  export function MultipleChoices<T> (body: T, headers?: Headers): ResponseObject<300, T>
  export function MultipleChoices<T> (body?: T, headers: Headers = {}): ResponseObject<300, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 300;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function MovedPermanently(): ResponseObject<301, void>;
  export function MovedPermanently<T> (body: T, headers?: Headers): ResponseObject<301, T>
  export function MovedPermanently<T> (body?: T, headers: Headers = {}): ResponseObject<301, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 301;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function Found(): ResponseObject<302, void>;
  export function Found<T> (body: T, headers?: Headers): ResponseObject<302, T>
  export function Found<T> (body?: T, headers: Headers = {}): ResponseObject<302, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 302;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function SeeOther(): ResponseObject<303, void>;
  export function SeeOther<T> (body: T, headers?: Headers): ResponseObject<303, T>
  export function SeeOther<T> (body?: T, headers: Headers = {}): ResponseObject<303, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 303;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function NotModified(): ResponseObject<304, void>;
  export function NotModified<T> (body: T, headers?: Headers): ResponseObject<304, T>
  export function NotModified<T> (body?: T, headers: Headers = {}): ResponseObject<304, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 304;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function UseProxy(): ResponseObject<305, void>;
  export function UseProxy<T> (body: T, headers?: Headers): ResponseObject<305, T>
  export function UseProxy<T> (body?: T, headers: Headers = {}): ResponseObject<305, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 305;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function TemporaryRedirect(): ResponseObject<307, void>;
  export function TemporaryRedirect<T> (body: T, headers?: Headers): ResponseObject<307, T>
  export function TemporaryRedirect<T> (body?: T, headers: Headers = {}): ResponseObject<307, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 307;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

  export function PermanentRedirect(): ResponseObject<308, void>;
  export function PermanentRedirect<T> (body: T, headers?: Headers): ResponseObject<308, T>
  export function PermanentRedirect<T> (body?: T, headers: Headers = {}): ResponseObject<308, T> {
    if (responses.has(body as any)) throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 308;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
  }

    export function BadRequest(): ErrorResponseObject<400, void>;
    export function BadRequest<T> (body: T, headers?: Headers): ErrorResponseObject<400, T>
    export function BadRequest<T> (body?: T, headers: Headers = {}): ErrorResponseObject<400, T> {
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

    export function Unauthorized(): ErrorResponseObject<401, void>;
    export function Unauthorized<T> (body: T, headers?: Headers): ErrorResponseObject<401, T>
    export function Unauthorized<T> (body?: T, headers: Headers = {}): ErrorResponseObject<401, T> {
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

    export function PaymentRequired(): ErrorResponseObject<402, void>;
    export function PaymentRequired<T> (body: T, headers?: Headers): ErrorResponseObject<402, T>
    export function PaymentRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<402, T> {
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

    export function Forbidden(): ErrorResponseObject<403, void>;
    export function Forbidden<T> (body: T, headers?: Headers): ErrorResponseObject<403, T>
    export function Forbidden<T> (body?: T, headers: Headers = {}): ErrorResponseObject<403, T> {
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

    export function NotFound(): ErrorResponseObject<404, void>;
    export function NotFound<T> (body: T, headers?: Headers): ErrorResponseObject<404, T>
    export function NotFound<T> (body?: T, headers: Headers = {}): ErrorResponseObject<404, T> {
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

    export function MethodNotAllowed(): ErrorResponseObject<405, void>;
    export function MethodNotAllowed<T> (body: T, headers?: Headers): ErrorResponseObject<405, T>
    export function MethodNotAllowed<T> (body?: T, headers: Headers = {}): ErrorResponseObject<405, T> {
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

    export function NotAcceptable(): ErrorResponseObject<406, void>;
    export function NotAcceptable<T> (body: T, headers?: Headers): ErrorResponseObject<406, T>
    export function NotAcceptable<T> (body?: T, headers: Headers = {}): ErrorResponseObject<406, T> {
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

    export function ProxyAuthenticationRequired(): ErrorResponseObject<407, void>;
    export function ProxyAuthenticationRequired<T> (body: T, headers?: Headers): ErrorResponseObject<407, T>
    export function ProxyAuthenticationRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<407, T> {
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

    export function RequestTimeout(): ErrorResponseObject<408, void>;
    export function RequestTimeout<T> (body: T, headers?: Headers): ErrorResponseObject<408, T>
    export function RequestTimeout<T> (body?: T, headers: Headers = {}): ErrorResponseObject<408, T> {
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

    export function Conflict(): ErrorResponseObject<409, void>;
    export function Conflict<T> (body: T, headers?: Headers): ErrorResponseObject<409, T>
    export function Conflict<T> (body?: T, headers: Headers = {}): ErrorResponseObject<409, T> {
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

    export function Gone(): ErrorResponseObject<410, void>;
    export function Gone<T> (body: T, headers?: Headers): ErrorResponseObject<410, T>
    export function Gone<T> (body?: T, headers: Headers = {}): ErrorResponseObject<410, T> {
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

    export function LengthRequired(): ErrorResponseObject<411, void>;
    export function LengthRequired<T> (body: T, headers?: Headers): ErrorResponseObject<411, T>
    export function LengthRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<411, T> {
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

    export function PreconditionFailed(): ErrorResponseObject<412, void>;
    export function PreconditionFailed<T> (body: T, headers?: Headers): ErrorResponseObject<412, T>
    export function PreconditionFailed<T> (body?: T, headers: Headers = {}): ErrorResponseObject<412, T> {
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

    export function PayloadTooLarge(): ErrorResponseObject<413, void>;
    export function PayloadTooLarge<T> (body: T, headers?: Headers): ErrorResponseObject<413, T>
    export function PayloadTooLarge<T> (body?: T, headers: Headers = {}): ErrorResponseObject<413, T> {
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

    export function URITooLong(): ErrorResponseObject<414, void>;
    export function URITooLong<T> (body: T, headers?: Headers): ErrorResponseObject<414, T>
    export function URITooLong<T> (body?: T, headers: Headers = {}): ErrorResponseObject<414, T> {
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

    export function UnsupportedMediaType(): ErrorResponseObject<415, void>;
    export function UnsupportedMediaType<T> (body: T, headers?: Headers): ErrorResponseObject<415, T>
    export function UnsupportedMediaType<T> (body?: T, headers: Headers = {}): ErrorResponseObject<415, T> {
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

    export function RangeNotSatisfiable(): ErrorResponseObject<416, void>;
    export function RangeNotSatisfiable<T> (body: T, headers?: Headers): ErrorResponseObject<416, T>
    export function RangeNotSatisfiable<T> (body?: T, headers: Headers = {}): ErrorResponseObject<416, T> {
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

    export function ExpectationFailed(): ErrorResponseObject<417, void>;
    export function ExpectationFailed<T> (body: T, headers?: Headers): ErrorResponseObject<417, T>
    export function ExpectationFailed<T> (body?: T, headers: Headers = {}): ErrorResponseObject<417, T> {
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

    export function MisdirectedRequest(): ErrorResponseObject<421, void>;
    export function MisdirectedRequest<T> (body: T, headers?: Headers): ErrorResponseObject<421, T>
    export function MisdirectedRequest<T> (body?: T, headers: Headers = {}): ErrorResponseObject<421, T> {
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

    export function UnprocessableEntity(): ErrorResponseObject<422, void>;
    export function UnprocessableEntity<T> (body: T, headers?: Headers): ErrorResponseObject<422, T>
    export function UnprocessableEntity<T> (body?: T, headers: Headers = {}): ErrorResponseObject<422, T> {
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

    export function Locked(): ErrorResponseObject<423, void>;
    export function Locked<T> (body: T, headers?: Headers): ErrorResponseObject<423, T>
    export function Locked<T> (body?: T, headers: Headers = {}): ErrorResponseObject<423, T> {
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

    export function FailedDependency(): ErrorResponseObject<424, void>;
    export function FailedDependency<T> (body: T, headers?: Headers): ErrorResponseObject<424, T>
    export function FailedDependency<T> (body?: T, headers: Headers = {}): ErrorResponseObject<424, T> {
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

    export function TooEarly(): ErrorResponseObject<425, void>;
    export function TooEarly<T> (body: T, headers?: Headers): ErrorResponseObject<425, T>
    export function TooEarly<T> (body?: T, headers: Headers = {}): ErrorResponseObject<425, T> {
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

    export function UpgradeRequired(): ErrorResponseObject<426, void>;
    export function UpgradeRequired<T> (body: T, headers?: Headers): ErrorResponseObject<426, T>
    export function UpgradeRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<426, T> {
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

    export function PreconditionRequired(): ErrorResponseObject<428, void>;
    export function PreconditionRequired<T> (body: T, headers?: Headers): ErrorResponseObject<428, T>
    export function PreconditionRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<428, T> {
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

    export function TooManyRequests(): ErrorResponseObject<429, void>;
    export function TooManyRequests<T> (body: T, headers?: Headers): ErrorResponseObject<429, T>
    export function TooManyRequests<T> (body?: T, headers: Headers = {}): ErrorResponseObject<429, T> {
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

    export function RequestHeaderFieldsTooLarge(): ErrorResponseObject<431, void>;
    export function RequestHeaderFieldsTooLarge<T> (body: T, headers?: Headers): ErrorResponseObject<431, T>
    export function RequestHeaderFieldsTooLarge<T> (body?: T, headers: Headers = {}): ErrorResponseObject<431, T> {
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

    export function UnavailableForLegalReasons(): ErrorResponseObject<451, void>;
    export function UnavailableForLegalReasons<T> (body: T, headers?: Headers): ErrorResponseObject<451, T>
    export function UnavailableForLegalReasons<T> (body?: T, headers: Headers = {}): ErrorResponseObject<451, T> {
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

    export function InternalServerError(): ErrorResponseObject<500, void>;
    export function InternalServerError<T> (body: T, headers?: Headers): ErrorResponseObject<500, T>
    export function InternalServerError<T> (body?: T, headers: Headers = {}): ErrorResponseObject<500, T> {
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

    export function NotImplemented(): ErrorResponseObject<501, void>;
    export function NotImplemented<T> (body: T, headers?: Headers): ErrorResponseObject<501, T>
    export function NotImplemented<T> (body?: T, headers: Headers = {}): ErrorResponseObject<501, T> {
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

    export function BadGateway(): ErrorResponseObject<502, void>;
    export function BadGateway<T> (body: T, headers?: Headers): ErrorResponseObject<502, T>
    export function BadGateway<T> (body?: T, headers: Headers = {}): ErrorResponseObject<502, T> {
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

    export function ServiceUnavailable(): ErrorResponseObject<503, void>;
    export function ServiceUnavailable<T> (body: T, headers?: Headers): ErrorResponseObject<503, T>
    export function ServiceUnavailable<T> (body?: T, headers: Headers = {}): ErrorResponseObject<503, T> {
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

    export function GatewayTimeout(): ErrorResponseObject<504, void>;
    export function GatewayTimeout<T> (body: T, headers?: Headers): ErrorResponseObject<504, T>
    export function GatewayTimeout<T> (body?: T, headers: Headers = {}): ErrorResponseObject<504, T> {
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

    export function HTTPVersionNotSupported(): ErrorResponseObject<505, void>;
    export function HTTPVersionNotSupported<T> (body: T, headers?: Headers): ErrorResponseObject<505, T>
    export function HTTPVersionNotSupported<T> (body?: T, headers: Headers = {}): ErrorResponseObject<505, T> {
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

    export function VariantAlsoNegotiates(): ErrorResponseObject<506, void>;
    export function VariantAlsoNegotiates<T> (body: T, headers?: Headers): ErrorResponseObject<506, T>
    export function VariantAlsoNegotiates<T> (body?: T, headers: Headers = {}): ErrorResponseObject<506, T> {
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

    export function InsufficientStorage(): ErrorResponseObject<507, void>;
    export function InsufficientStorage<T> (body: T, headers?: Headers): ErrorResponseObject<507, T>
    export function InsufficientStorage<T> (body?: T, headers: Headers = {}): ErrorResponseObject<507, T> {
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

    export function LoopDetected(): ErrorResponseObject<508, void>;
    export function LoopDetected<T> (body: T, headers?: Headers): ErrorResponseObject<508, T>
    export function LoopDetected<T> (body?: T, headers: Headers = {}): ErrorResponseObject<508, T> {
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

    export function BandwidthLimitExceeded(): ErrorResponseObject<509, void>;
    export function BandwidthLimitExceeded<T> (body: T, headers?: Headers): ErrorResponseObject<509, T>
    export function BandwidthLimitExceeded<T> (body?: T, headers: Headers = {}): ErrorResponseObject<509, T> {
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

    export function NotExtended(): ErrorResponseObject<510, void>;
    export function NotExtended<T> (body: T, headers?: Headers): ErrorResponseObject<510, T>
    export function NotExtended<T> (body?: T, headers: Headers = {}): ErrorResponseObject<510, T> {
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

    export function NetworkAuthenticationRequired(): ErrorResponseObject<511, void>;
    export function NetworkAuthenticationRequired<T> (body: T, headers?: Headers): ErrorResponseObject<511, T>
    export function NetworkAuthenticationRequired<T> (body?: T, headers: Headers = {}): ErrorResponseObject<511, T> {
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
