"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnavailableForLegalReasons = exports.RequestHeaderFieldsTooLarge = exports.TooManyRequests = exports.PreconditionRequired = exports.UpgradeRequired = exports.TooEarly = exports.FailedDependency = exports.Locked = exports.UnprocessableEntity = exports.MisdirectedRequest = exports.ExpectationFailed = exports.RangeNotSatisfiable = exports.UnsupportedMediaType = exports.URITooLong = exports.PayloadTooLarge = exports.PreconditionFailed = exports.LengthRequired = exports.Gone = exports.Conflict = exports.RequestTimeout = exports.ProxyAuthenticationRequired = exports.NotAcceptable = exports.MethodNotAllowed = exports.NotFound = exports.Forbidden = exports.PaymentRequired = exports.Unauthorized = exports.BadRequest = exports.PermanentRedirect = exports.TemporaryRedirect = exports.UseProxy = exports.NotModified = exports.SeeOther = exports.Found = exports.MovedPermanently = exports.MultipleChoices = exports.IMUsed = exports.AlreadyReported = exports.MultiStatus = exports.PartialContent = exports.ResetContent = exports.NoContent = exports.NonAuthoritativeInformation = exports.Accepted = exports.Created = exports.OK = exports.EarlyHints = exports.Processing = exports.SwitchingProtocols = exports.Continue = void 0;
exports.Ok = exports.NetworkAuthenticationRequired = exports.NotExtended = exports.BandwidthLimitExceeded = exports.LoopDetected = exports.InsufficientStorage = exports.VariantAlsoNegotiates = exports.HTTPVersionNotSupported = exports.GatewayTimeout = exports.ServiceUnavailable = exports.BadGateway = exports.NotImplemented = exports.InternalServerError = void 0;
const http_1 = require("http");
const getName = (code) => http_1.STATUS_CODES[code].replace(/[\s+-]/g, "");
const responses = new WeakSet();
function toJSON() {
    return { body: this.body, status: this.status, headers: this.headers };
}
function toString() {
    return `Responses.${getName(this.status)} ${JSON.stringify(this)}`;
}
const proto = { toJSON, toString, body: undefined, status: 100, statusCode: 100, headers: {} };
const errProto = Object.assign(Object.create(Error.prototype), proto);
function R(code, body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    let resp;
    if (code >= 400) {
        resp = Object.create(errProto);
        Error.captureStackTrace(resp, R);
    }
    else {
        resp = Object.create(proto);
    }
    resp.status = resp.statusCode = code;
    resp.body = body;
    resp.headers = headers;
    responses.add(resp);
    return resp;
}
(function (R) {
    function Continue(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 100;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.Continue = Continue;
    function SwitchingProtocols(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 101;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.SwitchingProtocols = SwitchingProtocols;
    function Processing(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 102;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.Processing = Processing;
    function EarlyHints(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 103;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.EarlyHints = EarlyHints;
    function OK(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 200;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.OK = OK;
    function Created(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 201;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.Created = Created;
    function Accepted(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 202;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.Accepted = Accepted;
    function NonAuthoritativeInformation(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 203;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.NonAuthoritativeInformation = NonAuthoritativeInformation;
    function NoContent(headers = {}) {
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 204;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.NoContent = NoContent;
    function ResetContent(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 205;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.ResetContent = ResetContent;
    function PartialContent(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 206;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.PartialContent = PartialContent;
    function MultiStatus(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 207;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.MultiStatus = MultiStatus;
    function AlreadyReported(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 208;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.AlreadyReported = AlreadyReported;
    function IMUsed(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 226;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.IMUsed = IMUsed;
    function MultipleChoices(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 300;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.MultipleChoices = MultipleChoices;
    function MovedPermanently(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 301;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.MovedPermanently = MovedPermanently;
    function Found(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 302;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.Found = Found;
    function SeeOther(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 303;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.SeeOther = SeeOther;
    function NotModified(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 304;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.NotModified = NotModified;
    function UseProxy(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 305;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.UseProxy = UseProxy;
    function TemporaryRedirect(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 307;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.TemporaryRedirect = TemporaryRedirect;
    function PermanentRedirect(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 308;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.PermanentRedirect = PermanentRedirect;
    function BadRequest(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, BadRequest);
        Object.defineProperty(resp, "name", { value: "BadRequestError" });
        resp.status = resp.statusCode = 400;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.BadRequest = BadRequest;
    function Unauthorized(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, Unauthorized);
        Object.defineProperty(resp, "name", { value: "UnauthorizedError" });
        resp.status = resp.statusCode = 401;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.Unauthorized = Unauthorized;
    function PaymentRequired(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, PaymentRequired);
        Object.defineProperty(resp, "name", { value: "PaymentRequiredError" });
        resp.status = resp.statusCode = 402;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.PaymentRequired = PaymentRequired;
    function Forbidden(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, Forbidden);
        Object.defineProperty(resp, "name", { value: "ForbiddenError" });
        resp.status = resp.statusCode = 403;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.Forbidden = Forbidden;
    function NotFound(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, NotFound);
        Object.defineProperty(resp, "name", { value: "NotFoundError" });
        resp.status = resp.statusCode = 404;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.NotFound = NotFound;
    function MethodNotAllowed(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, MethodNotAllowed);
        Object.defineProperty(resp, "name", { value: "MethodNotAllowedError" });
        resp.status = resp.statusCode = 405;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.MethodNotAllowed = MethodNotAllowed;
    function NotAcceptable(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, NotAcceptable);
        Object.defineProperty(resp, "name", { value: "NotAcceptableError" });
        resp.status = resp.statusCode = 406;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.NotAcceptable = NotAcceptable;
    function ProxyAuthenticationRequired(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, ProxyAuthenticationRequired);
        Object.defineProperty(resp, "name", { value: "ProxyAuthenticationRequiredError" });
        resp.status = resp.statusCode = 407;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.ProxyAuthenticationRequired = ProxyAuthenticationRequired;
    function RequestTimeout(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, RequestTimeout);
        Object.defineProperty(resp, "name", { value: "RequestTimeoutError" });
        resp.status = resp.statusCode = 408;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.RequestTimeout = RequestTimeout;
    function Conflict(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, Conflict);
        Object.defineProperty(resp, "name", { value: "ConflictError" });
        resp.status = resp.statusCode = 409;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.Conflict = Conflict;
    function Gone(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, Gone);
        Object.defineProperty(resp, "name", { value: "GoneError" });
        resp.status = resp.statusCode = 410;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.Gone = Gone;
    function LengthRequired(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, LengthRequired);
        Object.defineProperty(resp, "name", { value: "LengthRequiredError" });
        resp.status = resp.statusCode = 411;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.LengthRequired = LengthRequired;
    function PreconditionFailed(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, PreconditionFailed);
        Object.defineProperty(resp, "name", { value: "PreconditionFailedError" });
        resp.status = resp.statusCode = 412;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.PreconditionFailed = PreconditionFailed;
    function PayloadTooLarge(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, PayloadTooLarge);
        Object.defineProperty(resp, "name", { value: "PayloadTooLargeError" });
        resp.status = resp.statusCode = 413;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.PayloadTooLarge = PayloadTooLarge;
    function URITooLong(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, URITooLong);
        Object.defineProperty(resp, "name", { value: "URITooLongError" });
        resp.status = resp.statusCode = 414;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.URITooLong = URITooLong;
    function UnsupportedMediaType(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, UnsupportedMediaType);
        Object.defineProperty(resp, "name", { value: "UnsupportedMediaTypeError" });
        resp.status = resp.statusCode = 415;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.UnsupportedMediaType = UnsupportedMediaType;
    function RangeNotSatisfiable(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, RangeNotSatisfiable);
        Object.defineProperty(resp, "name", { value: "RangeNotSatisfiableError" });
        resp.status = resp.statusCode = 416;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.RangeNotSatisfiable = RangeNotSatisfiable;
    function ExpectationFailed(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, ExpectationFailed);
        Object.defineProperty(resp, "name", { value: "ExpectationFailedError" });
        resp.status = resp.statusCode = 417;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.ExpectationFailed = ExpectationFailed;
    function MisdirectedRequest(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, MisdirectedRequest);
        Object.defineProperty(resp, "name", { value: "MisdirectedRequestError" });
        resp.status = resp.statusCode = 421;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.MisdirectedRequest = MisdirectedRequest;
    function UnprocessableEntity(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, UnprocessableEntity);
        Object.defineProperty(resp, "name", { value: "UnprocessableEntityError" });
        resp.status = resp.statusCode = 422;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.UnprocessableEntity = UnprocessableEntity;
    function Locked(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, Locked);
        Object.defineProperty(resp, "name", { value: "LockedError" });
        resp.status = resp.statusCode = 423;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.Locked = Locked;
    function FailedDependency(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, FailedDependency);
        Object.defineProperty(resp, "name", { value: "FailedDependencyError" });
        resp.status = resp.statusCode = 424;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.FailedDependency = FailedDependency;
    function TooEarly(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, TooEarly);
        Object.defineProperty(resp, "name", { value: "TooEarlyError" });
        resp.status = resp.statusCode = 425;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.TooEarly = TooEarly;
    function UpgradeRequired(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, UpgradeRequired);
        Object.defineProperty(resp, "name", { value: "UpgradeRequiredError" });
        resp.status = resp.statusCode = 426;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.UpgradeRequired = UpgradeRequired;
    function PreconditionRequired(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, PreconditionRequired);
        Object.defineProperty(resp, "name", { value: "PreconditionRequiredError" });
        resp.status = resp.statusCode = 428;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.PreconditionRequired = PreconditionRequired;
    function TooManyRequests(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, TooManyRequests);
        Object.defineProperty(resp, "name", { value: "TooManyRequestsError" });
        resp.status = resp.statusCode = 429;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.TooManyRequests = TooManyRequests;
    function RequestHeaderFieldsTooLarge(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, RequestHeaderFieldsTooLarge);
        Object.defineProperty(resp, "name", { value: "RequestHeaderFieldsTooLargeError" });
        resp.status = resp.statusCode = 431;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.RequestHeaderFieldsTooLarge = RequestHeaderFieldsTooLarge;
    function UnavailableForLegalReasons(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, UnavailableForLegalReasons);
        Object.defineProperty(resp, "name", { value: "UnavailableForLegalReasonsError" });
        resp.status = resp.statusCode = 451;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.UnavailableForLegalReasons = UnavailableForLegalReasons;
    function InternalServerError(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, InternalServerError);
        Object.defineProperty(resp, "name", { value: "InternalServerErrorError" });
        resp.status = resp.statusCode = 500;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.InternalServerError = InternalServerError;
    function NotImplemented(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, NotImplemented);
        Object.defineProperty(resp, "name", { value: "NotImplementedError" });
        resp.status = resp.statusCode = 501;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.NotImplemented = NotImplemented;
    function BadGateway(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, BadGateway);
        Object.defineProperty(resp, "name", { value: "BadGatewayError" });
        resp.status = resp.statusCode = 502;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.BadGateway = BadGateway;
    function ServiceUnavailable(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, ServiceUnavailable);
        Object.defineProperty(resp, "name", { value: "ServiceUnavailableError" });
        resp.status = resp.statusCode = 503;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.ServiceUnavailable = ServiceUnavailable;
    function GatewayTimeout(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, GatewayTimeout);
        Object.defineProperty(resp, "name", { value: "GatewayTimeoutError" });
        resp.status = resp.statusCode = 504;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.GatewayTimeout = GatewayTimeout;
    function HTTPVersionNotSupported(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, HTTPVersionNotSupported);
        Object.defineProperty(resp, "name", { value: "HTTPVersionNotSupportedError" });
        resp.status = resp.statusCode = 505;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.HTTPVersionNotSupported = HTTPVersionNotSupported;
    function VariantAlsoNegotiates(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, VariantAlsoNegotiates);
        Object.defineProperty(resp, "name", { value: "VariantAlsoNegotiatesError" });
        resp.status = resp.statusCode = 506;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.VariantAlsoNegotiates = VariantAlsoNegotiates;
    function InsufficientStorage(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, InsufficientStorage);
        Object.defineProperty(resp, "name", { value: "InsufficientStorageError" });
        resp.status = resp.statusCode = 507;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.InsufficientStorage = InsufficientStorage;
    function LoopDetected(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, LoopDetected);
        Object.defineProperty(resp, "name", { value: "LoopDetectedError" });
        resp.status = resp.statusCode = 508;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.LoopDetected = LoopDetected;
    function BandwidthLimitExceeded(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, BandwidthLimitExceeded);
        Object.defineProperty(resp, "name", { value: "BandwidthLimitExceededError" });
        resp.status = resp.statusCode = 509;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.BandwidthLimitExceeded = BandwidthLimitExceeded;
    function NotExtended(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, NotExtended);
        Object.defineProperty(resp, "name", { value: "NotExtendedError" });
        resp.status = resp.statusCode = 510;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.NotExtended = NotExtended;
    function NetworkAuthenticationRequired(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, NetworkAuthenticationRequired);
        Object.defineProperty(resp, "name", { value: "NetworkAuthenticationRequiredError" });
        resp.status = resp.statusCode = 511;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.NetworkAuthenticationRequired = NetworkAuthenticationRequired;
    R.Ok = OK;
})(R || (R = {}));
module.exports = R;
exports = module.exports;
exports.default = R;
exports.Continue = R.Continue;
exports.SwitchingProtocols = R.SwitchingProtocols;
exports.Processing = R.Processing;
exports.EarlyHints = R.EarlyHints;
exports.OK = R.OK;
exports.Created = R.Created;
exports.Accepted = R.Accepted;
exports.NonAuthoritativeInformation = R.NonAuthoritativeInformation;
exports.NoContent = R.NoContent;
exports.ResetContent = R.ResetContent;
exports.PartialContent = R.PartialContent;
exports.MultiStatus = R.MultiStatus;
exports.AlreadyReported = R.AlreadyReported;
exports.IMUsed = R.IMUsed;
exports.MultipleChoices = R.MultipleChoices;
exports.MovedPermanently = R.MovedPermanently;
exports.Found = R.Found;
exports.SeeOther = R.SeeOther;
exports.NotModified = R.NotModified;
exports.UseProxy = R.UseProxy;
exports.TemporaryRedirect = R.TemporaryRedirect;
exports.PermanentRedirect = R.PermanentRedirect;
exports.BadRequest = R.BadRequest;
exports.Unauthorized = R.Unauthorized;
exports.PaymentRequired = R.PaymentRequired;
exports.Forbidden = R.Forbidden;
exports.NotFound = R.NotFound;
exports.MethodNotAllowed = R.MethodNotAllowed;
exports.NotAcceptable = R.NotAcceptable;
exports.ProxyAuthenticationRequired = R.ProxyAuthenticationRequired;
exports.RequestTimeout = R.RequestTimeout;
exports.Conflict = R.Conflict;
exports.Gone = R.Gone;
exports.LengthRequired = R.LengthRequired;
exports.PreconditionFailed = R.PreconditionFailed;
exports.PayloadTooLarge = R.PayloadTooLarge;
exports.URITooLong = R.URITooLong;
exports.UnsupportedMediaType = R.UnsupportedMediaType;
exports.RangeNotSatisfiable = R.RangeNotSatisfiable;
exports.ExpectationFailed = R.ExpectationFailed;
exports.MisdirectedRequest = R.MisdirectedRequest;
exports.UnprocessableEntity = R.UnprocessableEntity;
exports.Locked = R.Locked;
exports.FailedDependency = R.FailedDependency;
exports.TooEarly = R.TooEarly;
exports.UpgradeRequired = R.UpgradeRequired;
exports.PreconditionRequired = R.PreconditionRequired;
exports.TooManyRequests = R.TooManyRequests;
exports.RequestHeaderFieldsTooLarge = R.RequestHeaderFieldsTooLarge;
exports.UnavailableForLegalReasons = R.UnavailableForLegalReasons;
exports.InternalServerError = R.InternalServerError;
exports.NotImplemented = R.NotImplemented;
exports.BadGateway = R.BadGateway;
exports.ServiceUnavailable = R.ServiceUnavailable;
exports.GatewayTimeout = R.GatewayTimeout;
exports.HTTPVersionNotSupported = R.HTTPVersionNotSupported;
exports.VariantAlsoNegotiates = R.VariantAlsoNegotiates;
exports.InsufficientStorage = R.InsufficientStorage;
exports.LoopDetected = R.LoopDetected;
exports.BandwidthLimitExceeded = R.BandwidthLimitExceeded;
exports.NotExtended = R.NotExtended;
exports.NetworkAuthenticationRequired = R.NetworkAuthenticationRequired;
exports.Ok = R.Ok;
