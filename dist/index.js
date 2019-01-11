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
    function NoContent(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(proto);
        resp.status = resp.statusCode = 204;
        resp.body = body;
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
        resp.status = resp.statusCode = 424;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.FailedDependency = FailedDependency;
    function UnorderedCollection(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, UnorderedCollection);
        resp.status = resp.statusCode = 425;
        resp.body = body;
        resp.headers = headers;
        responses.add(resp);
        return resp;
    }
    R.UnorderedCollection = UnorderedCollection;
    function UpgradeRequired(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        const resp = Object.create(errProto);
        Error.captureStackTrace(resp, UpgradeRequired);
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
exports.UnorderedCollection = R.UnorderedCollection;
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
