"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status = require("statuses");
function R_(code, body, headers) {
    const name = getName(code);
    const responseCtor = code >= 400 ?
        createErrorResponse(code, name) :
        createResponse(code, name);
    return responseCtor(body, headers);
}
exports = R_;
exports.default = R_;
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
/*
  Named module exports
*/
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
/*
  Attach all exports to R_ as well
*/
(function (R_) {
    R_.Continue = createResponse(100, "Continue");
    R_.SwitchingProtocols = createResponse(101, "SwitchingProtocols");
    R_.Processing = createResponse(102, "Processing");
    // 2xx
    R_.OK = createResponse(200, "OK");
    R_.Ok = R_.OK;
    R_.Created = createResponse(201, "Created");
    R_.Accepted = createResponse(202, "Accepted");
    R_.NonAuthoritativeInformation = createResponse(203, "NonAuthoritativeInformation");
    R_.NoContent = createResponse(204, "NoContent");
    R_.ResetContent = createResponse(205, "ResetContent");
    R_.PartialContent = createResponse(206, "PartialContent");
    R_.MultiStatus = createResponse(207, "MultiStatus");
    R_.AlreadyReported = createResponse(208, "AlreadyReported");
    R_.IMUsed = createResponse(226, "IMUsed");
    // 3xx
    R_.MultipleChoices = createResponse(300, "MultipleChoices");
    R_.MovedPermanently = createResponse(301, "MovedPermanently");
    R_.Found = createResponse(302, "Found");
    R_.SeeOther = createResponse(303, "SeeOther");
    R_.NotModified = createResponse(304, "NotModified");
    R_.UseProxy = createResponse(305, "UseProxy");
    R_.TemporaryRedirect = createResponse(307, "TemporaryRedirect");
    R_.PermanentRedirect = createResponse(308, "PermanentRedirect");
    // 4xx
    R_.BadRequest = createErrorResponse(400, "BadRequest");
    R_.Unauthorized = createErrorResponse(401, "Unauthorized");
    R_.PaymentRequired = createErrorResponse(402, "PaymentRequired");
    R_.Forbidden = createErrorResponse(403, "Forbidden");
    R_.NotFound = createErrorResponse(404, "NotFound");
    R_.MethodNotAllowed = createErrorResponse(405, "MethodNotAllowed");
    R_.NotAcceptable = createErrorResponse(406, "NotAcceptable");
    R_.ProxyAuthenticationRequired = createErrorResponse(407, "ProxyAuthenticationRequired");
    R_.RequestTimeout = createErrorResponse(408, "RequestTimeout");
    R_.Conflict = createErrorResponse(409, "Conflict");
    R_.Gone = createErrorResponse(410, "Gone");
    R_.LengthRequired = createErrorResponse(411, "LengthRequired");
    R_.PreconditionFailed = createErrorResponse(412, "PreconditionFailed");
    R_.PayloadTooLarge = createErrorResponse(413, "PayloadTooLarge");
    R_.URITooLong = createErrorResponse(414, "URITooLong");
    R_.UnsupportedMediaType = createErrorResponse(415, "UnsupportedMediaType");
    R_.RangeNotSatisfiable = createErrorResponse(416, "RangeNotSatisfiable");
    R_.ExpectationFailed = createErrorResponse(417, "ExpectationFailed");
    R_.MisdirectedRequest = createErrorResponse(421, "MisdirectedRequest");
    R_.UnprocessableEntity = createErrorResponse(422, "UnprocessableEntity");
    R_.Locked = createErrorResponse(423, "Locked");
    R_.FailedDependency = createErrorResponse(424, "FailedDependency");
    R_.UnorderedCollection = createErrorResponse(425, "UnorderedCollection");
    R_.UpgradeRequired = createErrorResponse(426, "UpgradeRequired");
    R_.PreconditionRequired = createErrorResponse(428, "PreconditionRequired");
    R_.TooManyRequests = createErrorResponse(429, "TooManyRequests");
    R_.RequestHeaderFieldsTooLarge = createErrorResponse(431, "RequestHeaderFieldsTooLarge");
    R_.UnavailableForLegalReasons = createErrorResponse(451, "UnavailableForLegalReasons");
    // 5xx
    R_.InternalServerError = createErrorResponse(500, "InternalServerError");
    R_.NotImplemented = createErrorResponse(501, "NotImplemented");
    R_.BadGateway = createErrorResponse(502, "BadGateway");
    R_.ServiceUnavailable = createErrorResponse(503, "ServiceUnavailable");
    R_.GatewayTimeout = createErrorResponse(504, "GatewayTimeout");
    R_.HTTPVersionNotSupported = createErrorResponse(505, "HTTPVersionNotSupported");
    R_.VariantAlsoNegotiates = createErrorResponse(506, "VariantAlsoNegotiates");
    R_.InsufficientStorage = createErrorResponse(507, "InsufficientStorage");
    R_.LoopDetected = createErrorResponse(508, "LoopDetected");
    R_.BandwidthLimitExceeded = createErrorResponse(509, "BandwidthLimitExceeded");
    R_.NotExtended = createErrorResponse(510, "NotExtended");
    R_.NetworkAuthenticationRequired = createErrorResponse(511, "NetworkAuthenticationRequired");
})(R_ || (R_ = {}));
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
module.exports = exports;
