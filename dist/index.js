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
module.exports = R;
exports.default = R;
(function (R) {
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
    R.Continue = Continue;
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
    R.SwitchingProtocols = SwitchingProtocols;
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
    R.Processing = Processing;
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
    R.OK = OK;
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
    R.Created = Created;
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
    R.Accepted = Accepted;
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
    R.NonAuthoritativeInformation = NonAuthoritativeInformation;
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
    R.NoContent = NoContent;
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
    R.ResetContent = ResetContent;
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
    R.PartialContent = PartialContent;
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
    R.MultiStatus = MultiStatus;
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
    R.AlreadyReported = AlreadyReported;
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
    R.IMUsed = IMUsed;
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
    R.MultipleChoices = MultipleChoices;
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
    R.MovedPermanently = MovedPermanently;
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
    R.Found = Found;
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
    R.SeeOther = SeeOther;
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
    R.NotModified = NotModified;
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
    R.UseProxy = UseProxy;
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
    R.TemporaryRedirect = TemporaryRedirect;
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
    R.PermanentRedirect = PermanentRedirect;
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
    R.BadRequest = BadRequest;
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
    R.Unauthorized = Unauthorized;
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
    R.PaymentRequired = PaymentRequired;
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
    R.Forbidden = Forbidden;
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
    R.NotFound = NotFound;
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
    R.MethodNotAllowed = MethodNotAllowed;
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
    R.NotAcceptable = NotAcceptable;
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
    R.ProxyAuthenticationRequired = ProxyAuthenticationRequired;
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
    R.RequestTimeout = RequestTimeout;
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
    R.Conflict = Conflict;
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
    R.Gone = Gone;
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
    R.LengthRequired = LengthRequired;
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
    R.PreconditionFailed = PreconditionFailed;
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
    R.PayloadTooLarge = PayloadTooLarge;
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
    R.URITooLong = URITooLong;
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
    R.UnsupportedMediaType = UnsupportedMediaType;
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
    R.RangeNotSatisfiable = RangeNotSatisfiable;
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
    R.ExpectationFailed = ExpectationFailed;
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
    R.MisdirectedRequest = MisdirectedRequest;
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
    R.UnprocessableEntity = UnprocessableEntity;
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
    R.Locked = Locked;
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
    R.FailedDependency = FailedDependency;
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
    R.UnorderedCollection = UnorderedCollection;
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
    R.UpgradeRequired = UpgradeRequired;
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
    R.PreconditionRequired = PreconditionRequired;
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
    R.TooManyRequests = TooManyRequests;
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
    R.RequestHeaderFieldsTooLarge = RequestHeaderFieldsTooLarge;
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
    R.UnavailableForLegalReasons = UnavailableForLegalReasons;
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
    R.InternalServerError = InternalServerError;
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
    R.NotImplemented = NotImplemented;
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
    R.BadGateway = BadGateway;
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
    R.ServiceUnavailable = ServiceUnavailable;
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
    R.GatewayTimeout = GatewayTimeout;
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
    R.HTTPVersionNotSupported = HTTPVersionNotSupported;
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
    R.VariantAlsoNegotiates = VariantAlsoNegotiates;
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
    R.InsufficientStorage = InsufficientStorage;
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
    R.LoopDetected = LoopDetected;
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
    R.BandwidthLimitExceeded = BandwidthLimitExceeded;
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
    R.NotExtended = NotExtended;
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
    R.NetworkAuthenticationRequired = NetworkAuthenticationRequired;
    R.Ok = OK;
})(R || (R = {}));
