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
        return R(100, body, headers);
    }
    R.Continue = Continue;
    function SwitchingProtocols(body, headers = {}) {
        return R(101, body, headers);
    }
    R.SwitchingProtocols = SwitchingProtocols;
    function Processing(body, headers = {}) {
        return R(102, body, headers);
    }
    R.Processing = Processing;
    function EarlyHints(body, headers = {}) {
        return R(103, body, headers);
    }
    R.EarlyHints = EarlyHints;
    function OK(body, headers = {}) {
        return R(200, body, headers);
    }
    R.OK = OK;
    function Created(body, headers = {}) {
        return R(201, body, headers);
    }
    R.Created = Created;
    function Accepted(body, headers = {}) {
        return R(202, body, headers);
    }
    R.Accepted = Accepted;
    function NonAuthoritativeInformation(body, headers = {}) {
        return R(203, body, headers);
    }
    R.NonAuthoritativeInformation = NonAuthoritativeInformation;
    function NoContent(body, headers = {}) {
        return R(204, body, headers);
    }
    R.NoContent = NoContent;
    function ResetContent(body, headers = {}) {
        return R(205, body, headers);
    }
    R.ResetContent = ResetContent;
    function PartialContent(body, headers = {}) {
        return R(206, body, headers);
    }
    R.PartialContent = PartialContent;
    function MultiStatus(body, headers = {}) {
        return R(207, body, headers);
    }
    R.MultiStatus = MultiStatus;
    function AlreadyReported(body, headers = {}) {
        return R(208, body, headers);
    }
    R.AlreadyReported = AlreadyReported;
    function IMUsed(body, headers = {}) {
        return R(226, body, headers);
    }
    R.IMUsed = IMUsed;
    function MultipleChoices(body, headers = {}) {
        return R(300, body, headers);
    }
    R.MultipleChoices = MultipleChoices;
    function MovedPermanently(body, headers = {}) {
        return R(301, body, headers);
    }
    R.MovedPermanently = MovedPermanently;
    function Found(body, headers = {}) {
        return R(302, body, headers);
    }
    R.Found = Found;
    function SeeOther(body, headers = {}) {
        return R(303, body, headers);
    }
    R.SeeOther = SeeOther;
    function NotModified(body, headers = {}) {
        return R(304, body, headers);
    }
    R.NotModified = NotModified;
    function UseProxy(body, headers = {}) {
        return R(305, body, headers);
    }
    R.UseProxy = UseProxy;
    function TemporaryRedirect(body, headers = {}) {
        return R(307, body, headers);
    }
    R.TemporaryRedirect = TemporaryRedirect;
    function PermanentRedirect(body, headers = {}) {
        return R(308, body, headers);
    }
    R.PermanentRedirect = PermanentRedirect;
    function BadRequest(body, headers = {}) {
        return R(400, body, headers);
    }
    R.BadRequest = BadRequest;
    function Unauthorized(body, headers = {}) {
        return R(401, body, headers);
    }
    R.Unauthorized = Unauthorized;
    function PaymentRequired(body, headers = {}) {
        return R(402, body, headers);
    }
    R.PaymentRequired = PaymentRequired;
    function Forbidden(body, headers = {}) {
        return R(403, body, headers);
    }
    R.Forbidden = Forbidden;
    function NotFound(body, headers = {}) {
        return R(404, body, headers);
    }
    R.NotFound = NotFound;
    function MethodNotAllowed(body, headers = {}) {
        return R(405, body, headers);
    }
    R.MethodNotAllowed = MethodNotAllowed;
    function NotAcceptable(body, headers = {}) {
        return R(406, body, headers);
    }
    R.NotAcceptable = NotAcceptable;
    function ProxyAuthenticationRequired(body, headers = {}) {
        return R(407, body, headers);
    }
    R.ProxyAuthenticationRequired = ProxyAuthenticationRequired;
    function RequestTimeout(body, headers = {}) {
        return R(408, body, headers);
    }
    R.RequestTimeout = RequestTimeout;
    function Conflict(body, headers = {}) {
        return R(409, body, headers);
    }
    R.Conflict = Conflict;
    function Gone(body, headers = {}) {
        return R(410, body, headers);
    }
    R.Gone = Gone;
    function LengthRequired(body, headers = {}) {
        return R(411, body, headers);
    }
    R.LengthRequired = LengthRequired;
    function PreconditionFailed(body, headers = {}) {
        return R(412, body, headers);
    }
    R.PreconditionFailed = PreconditionFailed;
    function PayloadTooLarge(body, headers = {}) {
        return R(413, body, headers);
    }
    R.PayloadTooLarge = PayloadTooLarge;
    function URITooLong(body, headers = {}) {
        return R(414, body, headers);
    }
    R.URITooLong = URITooLong;
    function UnsupportedMediaType(body, headers = {}) {
        return R(415, body, headers);
    }
    R.UnsupportedMediaType = UnsupportedMediaType;
    function RangeNotSatisfiable(body, headers = {}) {
        return R(416, body, headers);
    }
    R.RangeNotSatisfiable = RangeNotSatisfiable;
    function ExpectationFailed(body, headers = {}) {
        return R(417, body, headers);
    }
    R.ExpectationFailed = ExpectationFailed;
    function MisdirectedRequest(body, headers = {}) {
        return R(421, body, headers);
    }
    R.MisdirectedRequest = MisdirectedRequest;
    function UnprocessableEntity(body, headers = {}) {
        return R(422, body, headers);
    }
    R.UnprocessableEntity = UnprocessableEntity;
    function Locked(body, headers = {}) {
        return R(423, body, headers);
    }
    R.Locked = Locked;
    function FailedDependency(body, headers = {}) {
        return R(424, body, headers);
    }
    R.FailedDependency = FailedDependency;
    function UnorderedCollection(body, headers = {}) {
        return R(425, body, headers);
    }
    R.UnorderedCollection = UnorderedCollection;
    function UpgradeRequired(body, headers = {}) {
        return R(426, body, headers);
    }
    R.UpgradeRequired = UpgradeRequired;
    function PreconditionRequired(body, headers = {}) {
        return R(428, body, headers);
    }
    R.PreconditionRequired = PreconditionRequired;
    function TooManyRequests(body, headers = {}) {
        return R(429, body, headers);
    }
    R.TooManyRequests = TooManyRequests;
    function RequestHeaderFieldsTooLarge(body, headers = {}) {
        return R(431, body, headers);
    }
    R.RequestHeaderFieldsTooLarge = RequestHeaderFieldsTooLarge;
    function UnavailableForLegalReasons(body, headers = {}) {
        return R(451, body, headers);
    }
    R.UnavailableForLegalReasons = UnavailableForLegalReasons;
    function InternalServerError(body, headers = {}) {
        return R(500, body, headers);
    }
    R.InternalServerError = InternalServerError;
    function NotImplemented(body, headers = {}) {
        return R(501, body, headers);
    }
    R.NotImplemented = NotImplemented;
    function BadGateway(body, headers = {}) {
        return R(502, body, headers);
    }
    R.BadGateway = BadGateway;
    function ServiceUnavailable(body, headers = {}) {
        return R(503, body, headers);
    }
    R.ServiceUnavailable = ServiceUnavailable;
    function GatewayTimeout(body, headers = {}) {
        return R(504, body, headers);
    }
    R.GatewayTimeout = GatewayTimeout;
    function HTTPVersionNotSupported(body, headers = {}) {
        return R(505, body, headers);
    }
    R.HTTPVersionNotSupported = HTTPVersionNotSupported;
    function VariantAlsoNegotiates(body, headers = {}) {
        return R(506, body, headers);
    }
    R.VariantAlsoNegotiates = VariantAlsoNegotiates;
    function InsufficientStorage(body, headers = {}) {
        return R(507, body, headers);
    }
    R.InsufficientStorage = InsufficientStorage;
    function LoopDetected(body, headers = {}) {
        return R(508, body, headers);
    }
    R.LoopDetected = LoopDetected;
    function BandwidthLimitExceeded(body, headers = {}) {
        return R(509, body, headers);
    }
    R.BandwidthLimitExceeded = BandwidthLimitExceeded;
    function NotExtended(body, headers = {}) {
        return R(510, body, headers);
    }
    R.NotExtended = NotExtended;
    function NetworkAuthenticationRequired(body, headers = {}) {
        return R(511, body, headers);
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
