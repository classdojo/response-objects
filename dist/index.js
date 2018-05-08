"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const getName = (code) => http_1.STATUS_CODES[code].replace(/[\s+-]/g, "");
const responses = new WeakSet();
function toJSON() {
    return { body: this.body, status: this.status, headers: this.headers };
}
function toString() {
    return `Responses.${getName(this.status)} ${JSON.stringify(this)}`;
}
const proto = { toJSON, toString, body: undefined, status: 0, statusCode: 0, headers: {} };
const errProto = Object.assign(Object.create(Error.prototype), proto);
function R(code, body, headers) {
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
    if (headers != null)
        resp.headers = headers;
    return resp;
}
exports.default = R;
module.exports = R;
function Continue(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 100;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.Continue = Continue;
module.exports.Continue = Continue;
function SwitchingProtocols(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 101;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.SwitchingProtocols = SwitchingProtocols;
module.exports.SwitchingProtocols = SwitchingProtocols;
function Processing(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 102;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.Processing = Processing;
module.exports.Processing = Processing;
function OK(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 200;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.OK = OK;
module.exports.OK = OK;
function Created(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 201;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.Created = Created;
module.exports.Created = Created;
function Accepted(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 202;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.Accepted = Accepted;
module.exports.Accepted = Accepted;
function NonAuthoritativeInformation(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 203;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.NonAuthoritativeInformation = NonAuthoritativeInformation;
module.exports.NonAuthoritativeInformation = NonAuthoritativeInformation;
function NoContent(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 204;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.NoContent = NoContent;
module.exports.NoContent = NoContent;
function ResetContent(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 205;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.ResetContent = ResetContent;
module.exports.ResetContent = ResetContent;
function PartialContent(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 206;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.PartialContent = PartialContent;
module.exports.PartialContent = PartialContent;
function MultiStatus(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 207;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.MultiStatus = MultiStatus;
module.exports.MultiStatus = MultiStatus;
function AlreadyReported(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 208;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.AlreadyReported = AlreadyReported;
module.exports.AlreadyReported = AlreadyReported;
function IMUsed(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 226;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.IMUsed = IMUsed;
module.exports.IMUsed = IMUsed;
function MultipleChoices(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 300;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.MultipleChoices = MultipleChoices;
module.exports.MultipleChoices = MultipleChoices;
function MovedPermanently(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 301;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.MovedPermanently = MovedPermanently;
module.exports.MovedPermanently = MovedPermanently;
function Found(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 302;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.Found = Found;
module.exports.Found = Found;
function SeeOther(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 303;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.SeeOther = SeeOther;
module.exports.SeeOther = SeeOther;
function NotModified(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 304;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.NotModified = NotModified;
module.exports.NotModified = NotModified;
function UseProxy(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 305;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.UseProxy = UseProxy;
module.exports.UseProxy = UseProxy;
function TemporaryRedirect(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 307;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.TemporaryRedirect = TemporaryRedirect;
module.exports.TemporaryRedirect = TemporaryRedirect;
function PermanentRedirect(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(proto);
    resp.status = resp.statusCode = 308;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    responses.add(resp);
    return resp;
}
exports.PermanentRedirect = PermanentRedirect;
module.exports.PermanentRedirect = PermanentRedirect;
function BadRequest(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 400;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, BadRequest);
    responses.add(resp);
    return resp;
}
exports.BadRequest = BadRequest;
module.exports.BadRequest = BadRequest;
function Unauthorized(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 401;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, Unauthorized);
    responses.add(resp);
    return resp;
}
exports.Unauthorized = Unauthorized;
module.exports.Unauthorized = Unauthorized;
function PaymentRequired(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 402;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, PaymentRequired);
    responses.add(resp);
    return resp;
}
exports.PaymentRequired = PaymentRequired;
module.exports.PaymentRequired = PaymentRequired;
function Forbidden(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 403;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, Forbidden);
    responses.add(resp);
    return resp;
}
exports.Forbidden = Forbidden;
module.exports.Forbidden = Forbidden;
function NotFound(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 404;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, NotFound);
    responses.add(resp);
    return resp;
}
exports.NotFound = NotFound;
module.exports.NotFound = NotFound;
function MethodNotAllowed(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 405;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, MethodNotAllowed);
    responses.add(resp);
    return resp;
}
exports.MethodNotAllowed = MethodNotAllowed;
module.exports.MethodNotAllowed = MethodNotAllowed;
function NotAcceptable(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 406;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, NotAcceptable);
    responses.add(resp);
    return resp;
}
exports.NotAcceptable = NotAcceptable;
module.exports.NotAcceptable = NotAcceptable;
function ProxyAuthenticationRequired(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 407;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, ProxyAuthenticationRequired);
    responses.add(resp);
    return resp;
}
exports.ProxyAuthenticationRequired = ProxyAuthenticationRequired;
module.exports.ProxyAuthenticationRequired = ProxyAuthenticationRequired;
function RequestTimeout(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 408;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, RequestTimeout);
    responses.add(resp);
    return resp;
}
exports.RequestTimeout = RequestTimeout;
module.exports.RequestTimeout = RequestTimeout;
function Conflict(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 409;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, Conflict);
    responses.add(resp);
    return resp;
}
exports.Conflict = Conflict;
module.exports.Conflict = Conflict;
function Gone(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 410;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, Gone);
    responses.add(resp);
    return resp;
}
exports.Gone = Gone;
module.exports.Gone = Gone;
function LengthRequired(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 411;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, LengthRequired);
    responses.add(resp);
    return resp;
}
exports.LengthRequired = LengthRequired;
module.exports.LengthRequired = LengthRequired;
function PreconditionFailed(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 412;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, PreconditionFailed);
    responses.add(resp);
    return resp;
}
exports.PreconditionFailed = PreconditionFailed;
module.exports.PreconditionFailed = PreconditionFailed;
function PayloadTooLarge(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 413;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, PayloadTooLarge);
    responses.add(resp);
    return resp;
}
exports.PayloadTooLarge = PayloadTooLarge;
module.exports.PayloadTooLarge = PayloadTooLarge;
function URITooLong(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 414;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, URITooLong);
    responses.add(resp);
    return resp;
}
exports.URITooLong = URITooLong;
module.exports.URITooLong = URITooLong;
function UnsupportedMediaType(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 415;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, UnsupportedMediaType);
    responses.add(resp);
    return resp;
}
exports.UnsupportedMediaType = UnsupportedMediaType;
module.exports.UnsupportedMediaType = UnsupportedMediaType;
function RangeNotSatisfiable(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 416;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, RangeNotSatisfiable);
    responses.add(resp);
    return resp;
}
exports.RangeNotSatisfiable = RangeNotSatisfiable;
module.exports.RangeNotSatisfiable = RangeNotSatisfiable;
function ExpectationFailed(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 417;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, ExpectationFailed);
    responses.add(resp);
    return resp;
}
exports.ExpectationFailed = ExpectationFailed;
module.exports.ExpectationFailed = ExpectationFailed;
function MisdirectedRequest(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 421;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, MisdirectedRequest);
    responses.add(resp);
    return resp;
}
exports.MisdirectedRequest = MisdirectedRequest;
module.exports.MisdirectedRequest = MisdirectedRequest;
function UnprocessableEntity(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 422;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, UnprocessableEntity);
    responses.add(resp);
    return resp;
}
exports.UnprocessableEntity = UnprocessableEntity;
module.exports.UnprocessableEntity = UnprocessableEntity;
function Locked(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 423;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, Locked);
    responses.add(resp);
    return resp;
}
exports.Locked = Locked;
module.exports.Locked = Locked;
function FailedDependency(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 424;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, FailedDependency);
    responses.add(resp);
    return resp;
}
exports.FailedDependency = FailedDependency;
module.exports.FailedDependency = FailedDependency;
function UnorderedCollection(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 425;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, UnorderedCollection);
    responses.add(resp);
    return resp;
}
exports.UnorderedCollection = UnorderedCollection;
module.exports.UnorderedCollection = UnorderedCollection;
function UpgradeRequired(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 426;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, UpgradeRequired);
    responses.add(resp);
    return resp;
}
exports.UpgradeRequired = UpgradeRequired;
module.exports.UpgradeRequired = UpgradeRequired;
function PreconditionRequired(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 428;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, PreconditionRequired);
    responses.add(resp);
    return resp;
}
exports.PreconditionRequired = PreconditionRequired;
module.exports.PreconditionRequired = PreconditionRequired;
function TooManyRequests(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 429;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, TooManyRequests);
    responses.add(resp);
    return resp;
}
exports.TooManyRequests = TooManyRequests;
module.exports.TooManyRequests = TooManyRequests;
function RequestHeaderFieldsTooLarge(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 431;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, RequestHeaderFieldsTooLarge);
    responses.add(resp);
    return resp;
}
exports.RequestHeaderFieldsTooLarge = RequestHeaderFieldsTooLarge;
module.exports.RequestHeaderFieldsTooLarge = RequestHeaderFieldsTooLarge;
function UnavailableForLegalReasons(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 451;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, UnavailableForLegalReasons);
    responses.add(resp);
    return resp;
}
exports.UnavailableForLegalReasons = UnavailableForLegalReasons;
module.exports.UnavailableForLegalReasons = UnavailableForLegalReasons;
function InternalServerError(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 500;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, InternalServerError);
    responses.add(resp);
    return resp;
}
exports.InternalServerError = InternalServerError;
module.exports.InternalServerError = InternalServerError;
function NotImplemented(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 501;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, NotImplemented);
    responses.add(resp);
    return resp;
}
exports.NotImplemented = NotImplemented;
module.exports.NotImplemented = NotImplemented;
function BadGateway(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 502;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, BadGateway);
    responses.add(resp);
    return resp;
}
exports.BadGateway = BadGateway;
module.exports.BadGateway = BadGateway;
function ServiceUnavailable(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 503;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, ServiceUnavailable);
    responses.add(resp);
    return resp;
}
exports.ServiceUnavailable = ServiceUnavailable;
module.exports.ServiceUnavailable = ServiceUnavailable;
function GatewayTimeout(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 504;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, GatewayTimeout);
    responses.add(resp);
    return resp;
}
exports.GatewayTimeout = GatewayTimeout;
module.exports.GatewayTimeout = GatewayTimeout;
function HTTPVersionNotSupported(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 505;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, HTTPVersionNotSupported);
    responses.add(resp);
    return resp;
}
exports.HTTPVersionNotSupported = HTTPVersionNotSupported;
module.exports.HTTPVersionNotSupported = HTTPVersionNotSupported;
function VariantAlsoNegotiates(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 506;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, VariantAlsoNegotiates);
    responses.add(resp);
    return resp;
}
exports.VariantAlsoNegotiates = VariantAlsoNegotiates;
module.exports.VariantAlsoNegotiates = VariantAlsoNegotiates;
function InsufficientStorage(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 507;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, InsufficientStorage);
    responses.add(resp);
    return resp;
}
exports.InsufficientStorage = InsufficientStorage;
module.exports.InsufficientStorage = InsufficientStorage;
function LoopDetected(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 508;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, LoopDetected);
    responses.add(resp);
    return resp;
}
exports.LoopDetected = LoopDetected;
module.exports.LoopDetected = LoopDetected;
function BandwidthLimitExceeded(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 509;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, BandwidthLimitExceeded);
    responses.add(resp);
    return resp;
}
exports.BandwidthLimitExceeded = BandwidthLimitExceeded;
module.exports.BandwidthLimitExceeded = BandwidthLimitExceeded;
function NotExtended(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 510;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, NotExtended);
    responses.add(resp);
    return resp;
}
exports.NotExtended = NotExtended;
module.exports.NotExtended = NotExtended;
function NetworkAuthenticationRequired(body, headers) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    const resp = Object.create(errProto);
    resp.status = resp.statusCode = 511;
    resp.body = body;
    if (headers != null)
        resp.headers = headers;
    Error.captureStackTrace(resp, NetworkAuthenticationRequired);
    responses.add(resp);
    return resp;
}
exports.NetworkAuthenticationRequired = NetworkAuthenticationRequired;
module.exports.NetworkAuthenticationRequired = NetworkAuthenticationRequired;
exports.Ok = OK;
module.exports.Ok = exports.Ok;
