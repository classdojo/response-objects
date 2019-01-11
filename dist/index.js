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
        return R(100, body, headers);
    }
    R.Continue = Continue;
    function SwitchingProtocols(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(101, body, headers);
    }
    R.SwitchingProtocols = SwitchingProtocols;
    function Processing(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(102, body, headers);
    }
    R.Processing = Processing;
    function EarlyHints(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(103, body, headers);
    }
    R.EarlyHints = EarlyHints;
    function OK(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(200, body, headers);
    }
    R.OK = OK;
    function Created(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(201, body, headers);
    }
    R.Created = Created;
    function Accepted(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(202, body, headers);
    }
    R.Accepted = Accepted;
    function NonAuthoritativeInformation(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(203, body, headers);
    }
    R.NonAuthoritativeInformation = NonAuthoritativeInformation;
    function NoContent(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(204, body, headers);
    }
    R.NoContent = NoContent;
    function ResetContent(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(205, body, headers);
    }
    R.ResetContent = ResetContent;
    function PartialContent(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(206, body, headers);
    }
    R.PartialContent = PartialContent;
    function MultiStatus(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(207, body, headers);
    }
    R.MultiStatus = MultiStatus;
    function AlreadyReported(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(208, body, headers);
    }
    R.AlreadyReported = AlreadyReported;
    function IMUsed(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(226, body, headers);
    }
    R.IMUsed = IMUsed;
    function MultipleChoices(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(300, body, headers);
    }
    R.MultipleChoices = MultipleChoices;
    function MovedPermanently(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(301, body, headers);
    }
    R.MovedPermanently = MovedPermanently;
    function Found(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(302, body, headers);
    }
    R.Found = Found;
    function SeeOther(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(303, body, headers);
    }
    R.SeeOther = SeeOther;
    function NotModified(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(304, body, headers);
    }
    R.NotModified = NotModified;
    function UseProxy(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(305, body, headers);
    }
    R.UseProxy = UseProxy;
    function TemporaryRedirect(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(307, body, headers);
    }
    R.TemporaryRedirect = TemporaryRedirect;
    function PermanentRedirect(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(308, body, headers);
    }
    R.PermanentRedirect = PermanentRedirect;
    function BadRequest(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(400, body, headers);
    }
    R.BadRequest = BadRequest;
    function Unauthorized(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(401, body, headers);
    }
    R.Unauthorized = Unauthorized;
    function PaymentRequired(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(402, body, headers);
    }
    R.PaymentRequired = PaymentRequired;
    function Forbidden(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(403, body, headers);
    }
    R.Forbidden = Forbidden;
    function NotFound(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(404, body, headers);
    }
    R.NotFound = NotFound;
    function MethodNotAllowed(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(405, body, headers);
    }
    R.MethodNotAllowed = MethodNotAllowed;
    function NotAcceptable(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(406, body, headers);
    }
    R.NotAcceptable = NotAcceptable;
    function ProxyAuthenticationRequired(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(407, body, headers);
    }
    R.ProxyAuthenticationRequired = ProxyAuthenticationRequired;
    function RequestTimeout(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(408, body, headers);
    }
    R.RequestTimeout = RequestTimeout;
    function Conflict(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(409, body, headers);
    }
    R.Conflict = Conflict;
    function Gone(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(410, body, headers);
    }
    R.Gone = Gone;
    function LengthRequired(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(411, body, headers);
    }
    R.LengthRequired = LengthRequired;
    function PreconditionFailed(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(412, body, headers);
    }
    R.PreconditionFailed = PreconditionFailed;
    function PayloadTooLarge(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(413, body, headers);
    }
    R.PayloadTooLarge = PayloadTooLarge;
    function URITooLong(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(414, body, headers);
    }
    R.URITooLong = URITooLong;
    function UnsupportedMediaType(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(415, body, headers);
    }
    R.UnsupportedMediaType = UnsupportedMediaType;
    function RangeNotSatisfiable(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(416, body, headers);
    }
    R.RangeNotSatisfiable = RangeNotSatisfiable;
    function ExpectationFailed(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(417, body, headers);
    }
    R.ExpectationFailed = ExpectationFailed;
    function MisdirectedRequest(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(421, body, headers);
    }
    R.MisdirectedRequest = MisdirectedRequest;
    function UnprocessableEntity(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(422, body, headers);
    }
    R.UnprocessableEntity = UnprocessableEntity;
    function Locked(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(423, body, headers);
    }
    R.Locked = Locked;
    function FailedDependency(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(424, body, headers);
    }
    R.FailedDependency = FailedDependency;
    function UnorderedCollection(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(425, body, headers);
    }
    R.UnorderedCollection = UnorderedCollection;
    function UpgradeRequired(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(426, body, headers);
    }
    R.UpgradeRequired = UpgradeRequired;
    function PreconditionRequired(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(428, body, headers);
    }
    R.PreconditionRequired = PreconditionRequired;
    function TooManyRequests(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(429, body, headers);
    }
    R.TooManyRequests = TooManyRequests;
    function RequestHeaderFieldsTooLarge(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(431, body, headers);
    }
    R.RequestHeaderFieldsTooLarge = RequestHeaderFieldsTooLarge;
    function UnavailableForLegalReasons(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(451, body, headers);
    }
    R.UnavailableForLegalReasons = UnavailableForLegalReasons;
    function InternalServerError(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(500, body, headers);
    }
    R.InternalServerError = InternalServerError;
    function NotImplemented(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(501, body, headers);
    }
    R.NotImplemented = NotImplemented;
    function BadGateway(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(502, body, headers);
    }
    R.BadGateway = BadGateway;
    function ServiceUnavailable(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(503, body, headers);
    }
    R.ServiceUnavailable = ServiceUnavailable;
    function GatewayTimeout(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(504, body, headers);
    }
    R.GatewayTimeout = GatewayTimeout;
    function HTTPVersionNotSupported(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(505, body, headers);
    }
    R.HTTPVersionNotSupported = HTTPVersionNotSupported;
    function VariantAlsoNegotiates(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(506, body, headers);
    }
    R.VariantAlsoNegotiates = VariantAlsoNegotiates;
    function InsufficientStorage(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(507, body, headers);
    }
    R.InsufficientStorage = InsufficientStorage;
    function LoopDetected(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(508, body, headers);
    }
    R.LoopDetected = LoopDetected;
    function BandwidthLimitExceeded(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(509, body, headers);
    }
    R.BandwidthLimitExceeded = BandwidthLimitExceeded;
    function NotExtended(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(510, body, headers);
    }
    R.NotExtended = NotExtended;
    function NetworkAuthenticationRequired(body, headers = {}) {
        if (responses.has(body))
            throw new Error("Object is already a response");
        return R(511, body, headers);
    }
    R.NetworkAuthenticationRequired = NetworkAuthenticationRequired;
    R.Ok = OK;
})(R || (R = {}));
module.exports = R;
exports = module.exports;
exports.default = R;
function Continue(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(100, body, headers);
}
exports.Continue = Continue;
function SwitchingProtocols(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(101, body, headers);
}
exports.SwitchingProtocols = SwitchingProtocols;
function Processing(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(102, body, headers);
}
exports.Processing = Processing;
function EarlyHints(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(103, body, headers);
}
exports.EarlyHints = EarlyHints;
function OK(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(200, body, headers);
}
exports.OK = OK;
function Created(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(201, body, headers);
}
exports.Created = Created;
function Accepted(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(202, body, headers);
}
exports.Accepted = Accepted;
function NonAuthoritativeInformation(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(203, body, headers);
}
exports.NonAuthoritativeInformation = NonAuthoritativeInformation;
function NoContent(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(204, body, headers);
}
exports.NoContent = NoContent;
function ResetContent(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(205, body, headers);
}
exports.ResetContent = ResetContent;
function PartialContent(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(206, body, headers);
}
exports.PartialContent = PartialContent;
function MultiStatus(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(207, body, headers);
}
exports.MultiStatus = MultiStatus;
function AlreadyReported(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(208, body, headers);
}
exports.AlreadyReported = AlreadyReported;
function IMUsed(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(226, body, headers);
}
exports.IMUsed = IMUsed;
function MultipleChoices(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(300, body, headers);
}
exports.MultipleChoices = MultipleChoices;
function MovedPermanently(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(301, body, headers);
}
exports.MovedPermanently = MovedPermanently;
function Found(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(302, body, headers);
}
exports.Found = Found;
function SeeOther(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(303, body, headers);
}
exports.SeeOther = SeeOther;
function NotModified(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(304, body, headers);
}
exports.NotModified = NotModified;
function UseProxy(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(305, body, headers);
}
exports.UseProxy = UseProxy;
function TemporaryRedirect(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(307, body, headers);
}
exports.TemporaryRedirect = TemporaryRedirect;
function PermanentRedirect(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(308, body, headers);
}
exports.PermanentRedirect = PermanentRedirect;
function BadRequest(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(400, body, headers);
}
exports.BadRequest = BadRequest;
function Unauthorized(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(401, body, headers);
}
exports.Unauthorized = Unauthorized;
function PaymentRequired(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(402, body, headers);
}
exports.PaymentRequired = PaymentRequired;
function Forbidden(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(403, body, headers);
}
exports.Forbidden = Forbidden;
function NotFound(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(404, body, headers);
}
exports.NotFound = NotFound;
function MethodNotAllowed(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(405, body, headers);
}
exports.MethodNotAllowed = MethodNotAllowed;
function NotAcceptable(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(406, body, headers);
}
exports.NotAcceptable = NotAcceptable;
function ProxyAuthenticationRequired(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(407, body, headers);
}
exports.ProxyAuthenticationRequired = ProxyAuthenticationRequired;
function RequestTimeout(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(408, body, headers);
}
exports.RequestTimeout = RequestTimeout;
function Conflict(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(409, body, headers);
}
exports.Conflict = Conflict;
function Gone(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(410, body, headers);
}
exports.Gone = Gone;
function LengthRequired(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(411, body, headers);
}
exports.LengthRequired = LengthRequired;
function PreconditionFailed(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(412, body, headers);
}
exports.PreconditionFailed = PreconditionFailed;
function PayloadTooLarge(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(413, body, headers);
}
exports.PayloadTooLarge = PayloadTooLarge;
function URITooLong(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(414, body, headers);
}
exports.URITooLong = URITooLong;
function UnsupportedMediaType(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(415, body, headers);
}
exports.UnsupportedMediaType = UnsupportedMediaType;
function RangeNotSatisfiable(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(416, body, headers);
}
exports.RangeNotSatisfiable = RangeNotSatisfiable;
function ExpectationFailed(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(417, body, headers);
}
exports.ExpectationFailed = ExpectationFailed;
function MisdirectedRequest(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(421, body, headers);
}
exports.MisdirectedRequest = MisdirectedRequest;
function UnprocessableEntity(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(422, body, headers);
}
exports.UnprocessableEntity = UnprocessableEntity;
function Locked(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(423, body, headers);
}
exports.Locked = Locked;
function FailedDependency(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(424, body, headers);
}
exports.FailedDependency = FailedDependency;
function UnorderedCollection(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(425, body, headers);
}
exports.UnorderedCollection = UnorderedCollection;
function UpgradeRequired(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(426, body, headers);
}
exports.UpgradeRequired = UpgradeRequired;
function PreconditionRequired(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(428, body, headers);
}
exports.PreconditionRequired = PreconditionRequired;
function TooManyRequests(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(429, body, headers);
}
exports.TooManyRequests = TooManyRequests;
function RequestHeaderFieldsTooLarge(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(431, body, headers);
}
exports.RequestHeaderFieldsTooLarge = RequestHeaderFieldsTooLarge;
function UnavailableForLegalReasons(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(451, body, headers);
}
exports.UnavailableForLegalReasons = UnavailableForLegalReasons;
function InternalServerError(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(500, body, headers);
}
exports.InternalServerError = InternalServerError;
function NotImplemented(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(501, body, headers);
}
exports.NotImplemented = NotImplemented;
function BadGateway(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(502, body, headers);
}
exports.BadGateway = BadGateway;
function ServiceUnavailable(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(503, body, headers);
}
exports.ServiceUnavailable = ServiceUnavailable;
function GatewayTimeout(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(504, body, headers);
}
exports.GatewayTimeout = GatewayTimeout;
function HTTPVersionNotSupported(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(505, body, headers);
}
exports.HTTPVersionNotSupported = HTTPVersionNotSupported;
function VariantAlsoNegotiates(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(506, body, headers);
}
exports.VariantAlsoNegotiates = VariantAlsoNegotiates;
function InsufficientStorage(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(507, body, headers);
}
exports.InsufficientStorage = InsufficientStorage;
function LoopDetected(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(508, body, headers);
}
exports.LoopDetected = LoopDetected;
function BandwidthLimitExceeded(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(509, body, headers);
}
exports.BandwidthLimitExceeded = BandwidthLimitExceeded;
function NotExtended(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(510, body, headers);
}
exports.NotExtended = NotExtended;
function NetworkAuthenticationRequired(body, headers = {}) {
    if (responses.has(body))
        throw new Error("Object is already a response");
    return R(511, body, headers);
}
exports.NetworkAuthenticationRequired = NetworkAuthenticationRequired;
