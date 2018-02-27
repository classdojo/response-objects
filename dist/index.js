"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status = require("statuses");
// in the compilation to JS, `export const x = 1` becomes `exports.x = 1`, so we
// need to make sure `exports` is pointing to the right object here, before assignments
// start
exports = R_;
let bodyCreator = (code, body) => body != null ? body : (status[code] || `Unknown status for ${code}`);
exports.setBodyCreator = (fn) => { bodyCreator = fn; };
exports.MARKER = Symbol.for("@@response-objects/MARKER");
const proto = { toJSON, toString, status: 0, statusCode: 0, headers: {}, [exports.MARKER]: true };
function createResponse(code, name) {
    return _setName(function Response(body, headers) {
        if (body && body[exports.MARKER])
            throw new Error(`Object is already a response: ${JSON.stringify(body)}`);
        return _decorate(Object.create(proto), code, body, headers);
    }, name);
}
const errProto = Object.assign(Object.create(Error.prototype), proto);
function createErrorResponse(code, name) {
    return _setName(function ErrorResponse(body, headers) {
        if (body && body[exports.MARKER])
            throw new Error(`Object is already a response: ${JSON.stringify(body)}`);
        const err = Object.create(errProto);
        _decorate(err, code, body, headers);
        Error.captureStackTrace(err, ErrorResponse);
        return err;
    }, name);
}
function _decorate(resp, code, body, headers) {
    resp.status = resp.statusCode = code;
    resp.body = bodyCreator(code, body, headers);
    if (headers != null)
        resp.headers = headers;
    return resp;
}
function _setName(fn, name) {
    return Object.defineProperty(fn, "name", {
        configurable: true,
        value: name,
    });
}
function toJSON() {
    return { body: this.body, status: this.status, headers: this.headers };
}
function toString() {
    return `Responses.${getName(this.status)} ${JSON.stringify(this)}`;
}
function getName(code) {
    const name = status[code];
    if (!name) {
        throw new Error(`Unable to find status for ${code}`);
    }
    return name.replace(/[\s+-]/g, "");
}
function R_(code, body, headers) {
    const name = getName(code);
    const responseCtor = code >= 400 ?
        createErrorResponse(code, name) :
        createResponse(code, name);
    return responseCtor(body, headers);
}
// 1xx
exports.Continue = createResponse(100, "Continue");
exports.SwitchingProtocols = createResponse(101, "SwitchingProtocols");
exports.Processing = createResponse(102, "Processing");
// 2xx
exports.OK = createResponse(200, "OK");
exports.Ok = exports.OK;
exports.Created = createResponse(201, "Created");
exports.Accepted = createResponse(202, "Accepted");
exports.NonAuthoritativeInformation = createResponse(203, "NonAuthoritativeInformation");
exports.NoContent = createResponse(204, "NoContent");
exports.ResetContent = createResponse(205, "ResetContent");
exports.PartialContent = createResponse(206, "PartialContent");
exports.MultiStatus = createResponse(207, "MultiStatus");
exports.AlreadyReported = createResponse(208, "AlreadyReported");
exports.IMUsed = createResponse(226, "IMUsed");
// 3xx
exports.MultipleChoices = createResponse(300, "MultipleChoices");
exports.MovedPermanently = createResponse(301, "MovedPermanently");
exports.Found = createResponse(302, "Found");
exports.SeeOther = createResponse(303, "SeeOther");
exports.NotModified = createResponse(304, "NotModified");
exports.UseProxy = createResponse(305, "UseProxy");
exports.TemporaryRedirect = createResponse(307, "TemporaryRedirect");
exports.PermanentRedirect = createResponse(308, "PermanentRedirect");
// 4xx
exports.BadRequest = createErrorResponse(400, "BadRequest");
exports.Unauthorized = createErrorResponse(401, "Unauthorized");
exports.PaymentRequired = createErrorResponse(402, "PaymentRequired");
exports.Forbidden = createErrorResponse(403, "Forbidden");
exports.NotFound = createErrorResponse(404, "NotFound");
exports.MethodNotAllowed = createErrorResponse(405, "MethodNotAllowed");
exports.NotAcceptable = createErrorResponse(406, "NotAcceptable");
exports.ProxyAuthenticationRequired = createErrorResponse(407, "ProxyAuthenticationRequired");
exports.RequestTimeout = createErrorResponse(408, "RequestTimeout");
exports.Conflict = createErrorResponse(409, "Conflict");
exports.Gone = createErrorResponse(410, "Gone");
exports.LengthRequired = createErrorResponse(411, "LengthRequired");
exports.PreconditionFailed = createErrorResponse(412, "PreconditionFailed");
exports.PayloadTooLarge = createErrorResponse(413, "PayloadTooLarge");
exports.URITooLong = createErrorResponse(414, "URITooLong");
exports.UnsupportedMediaType = createErrorResponse(415, "UnsupportedMediaType");
exports.RangeNotSatisfiable = createErrorResponse(416, "RangeNotSatisfiable");
exports.ExpectationFailed = createErrorResponse(417, "ExpectationFailed");
exports.MisdirectedRequest = createErrorResponse(421, "MisdirectedRequest");
exports.UnprocessableEntity = createErrorResponse(422, "UnprocessableEntity");
exports.Locked = createErrorResponse(423, "Locked");
exports.FailedDependency = createErrorResponse(424, "FailedDependency");
exports.UnorderedCollection = createErrorResponse(425, "UnorderedCollection");
exports.UpgradeRequired = createErrorResponse(426, "UpgradeRequired");
exports.PreconditionRequired = createErrorResponse(428, "PreconditionRequired");
exports.TooManyRequests = createErrorResponse(429, "TooManyRequests");
exports.RequestHeaderFieldsTooLarge = createErrorResponse(431, "RequestHeaderFieldsTooLarge");
exports.UnavailableForLegalReasons = createErrorResponse(451, "UnavailableForLegalReasons");
// 5xx
exports.InternalServerError = createErrorResponse(500, "InternalServerError");
exports.NotImplemented = createErrorResponse(501, "NotImplemented");
exports.BadGateway = createErrorResponse(502, "BadGateway");
exports.ServiceUnavailable = createErrorResponse(503, "ServiceUnavailable");
exports.GatewayTimeout = createErrorResponse(504, "GatewayTimeout");
exports.HTTPVersionNotSupported = createErrorResponse(505, "HTTPVersionNotSupported");
exports.VariantAlsoNegotiates = createErrorResponse(506, "VariantAlsoNegotiates");
exports.InsufficientStorage = createErrorResponse(507, "InsufficientStorage");
exports.LoopDetected = createErrorResponse(508, "LoopDetected");
exports.BandwidthLimitExceeded = createErrorResponse(509, "BandwidthLimitExceeded");
exports.NotExtended = createErrorResponse(510, "NotExtended");
exports.NetworkAuthenticationRequired = createErrorResponse(511, "NetworkAuthenticationRequired");
// export shenanegans
exports.default = R_;
module.exports = exports;
