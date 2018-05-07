"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status = require("statuses");
const _MARKER = Symbol.for("@@response-objects/MARKER");
exports.MARKER = _MARKER;
function R_(code, body, headers) {
    return (code >= 400 ?
        createErrorResponse(code) :
        createResponse(code))(body, headers);
}
exports = R_;
exports.default = R_;
let bodyCreator = (code, body) => body != null ? body : (status[code] || `Unknown status for ${code}`);
const _setBodyCreator = (fn) => { bodyCreator = fn; };
exports.setBodyCreator = _setBodyCreator;
const proto = { toJSON, toString, body: undefined, status: 0, statusCode: 0, headers: {}, [_MARKER]: true };
function createResponse(code) {
    const name = getName(code);
    return _setName(function Response(body, headers) {
        if (body && body[_MARKER])
            throw new Error(`Object is already a response: ${JSON.stringify(body)}`);
        return _decorate(Object.create(proto), code, body, headers);
    }, name);
}
const errProto = Object.assign(Object.create(Error.prototype), proto);
function createErrorResponse(code) {
    const name = getName(code);
    return _setName(function ErrorResponse(body, headers) {
        if (body && body[_MARKER])
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
exports.Continue = createResponse(100);
exports.SwitchingProtocols = createResponse(101);
exports.Processing = createResponse(102);
// 2xx
exports.OK = createResponse(200);
exports.Ok = exports.OK;
exports.Created = createResponse(201);
exports.Accepted = createResponse(202);
exports.NonAuthoritativeInformation = createResponse(203);
exports.NoContent = createResponse(204);
exports.ResetContent = createResponse(205);
exports.PartialContent = createResponse(206);
exports.MultiStatus = createResponse(207);
exports.AlreadyReported = createResponse(208);
exports.IMUsed = createResponse(226);
// 3xx
exports.MultipleChoices = createResponse(300);
exports.MovedPermanently = createResponse(301);
exports.Found = createResponse(302);
exports.SeeOther = createResponse(303);
exports.NotModified = createResponse(304);
exports.UseProxy = createResponse(305);
exports.TemporaryRedirect = createResponse(307);
exports.PermanentRedirect = createResponse(308);
// 4xx
exports.BadRequest = createErrorResponse(400);
exports.Unauthorized = createErrorResponse(401);
exports.PaymentRequired = createErrorResponse(402);
exports.Forbidden = createErrorResponse(403);
exports.NotFound = createErrorResponse(404);
exports.MethodNotAllowed = createErrorResponse(405);
exports.NotAcceptable = createErrorResponse(406);
exports.ProxyAuthenticationRequired = createErrorResponse(407);
exports.RequestTimeout = createErrorResponse(408);
exports.Conflict = createErrorResponse(409);
exports.Gone = createErrorResponse(410);
exports.LengthRequired = createErrorResponse(411);
exports.PreconditionFailed = createErrorResponse(412);
exports.PayloadTooLarge = createErrorResponse(413);
exports.URITooLong = createErrorResponse(414);
exports.UnsupportedMediaType = createErrorResponse(415);
exports.RangeNotSatisfiable = createErrorResponse(416);
exports.ExpectationFailed = createErrorResponse(417);
exports.MisdirectedRequest = createErrorResponse(421);
exports.UnprocessableEntity = createErrorResponse(422);
exports.Locked = createErrorResponse(423);
exports.FailedDependency = createErrorResponse(424);
exports.UnorderedCollection = createErrorResponse(425);
exports.UpgradeRequired = createErrorResponse(426);
exports.PreconditionRequired = createErrorResponse(428);
exports.TooManyRequests = createErrorResponse(429);
exports.RequestHeaderFieldsTooLarge = createErrorResponse(431);
exports.UnavailableForLegalReasons = createErrorResponse(451);
// 5xx
exports.InternalServerError = createErrorResponse(500);
exports.NotImplemented = createErrorResponse(501);
exports.BadGateway = createErrorResponse(502);
exports.ServiceUnavailable = createErrorResponse(503);
exports.GatewayTimeout = createErrorResponse(504);
exports.HTTPVersionNotSupported = createErrorResponse(505);
exports.VariantAlsoNegotiates = createErrorResponse(506);
exports.InsufficientStorage = createErrorResponse(507);
exports.LoopDetected = createErrorResponse(508);
exports.BandwidthLimitExceeded = createErrorResponse(509);
exports.NotExtended = createErrorResponse(510);
exports.NetworkAuthenticationRequired = createErrorResponse(511);
/*
  Attach all exports to R_ as well
*/
(function (R_) {
    R_.Continue = createResponse(100);
    R_.SwitchingProtocols = createResponse(101);
    R_.Processing = createResponse(102);
    // 2xx
    R_.OK = createResponse(200);
    R_.Ok = R_.OK;
    R_.Created = createResponse(201);
    R_.Accepted = createResponse(202);
    R_.NonAuthoritativeInformation = createResponse(203);
    R_.NoContent = createResponse(204);
    R_.ResetContent = createResponse(205);
    R_.PartialContent = createResponse(206);
    R_.MultiStatus = createResponse(207);
    R_.AlreadyReported = createResponse(208);
    R_.IMUsed = createResponse(226);
    // 3xx
    R_.MultipleChoices = createResponse(300);
    R_.MovedPermanently = createResponse(301);
    R_.Found = createResponse(302);
    R_.SeeOther = createResponse(303);
    R_.NotModified = createResponse(304);
    R_.UseProxy = createResponse(305);
    R_.TemporaryRedirect = createResponse(307);
    R_.PermanentRedirect = createResponse(308);
    // 4xx
    R_.BadRequest = createErrorResponse(400);
    R_.Unauthorized = createErrorResponse(401);
    R_.PaymentRequired = createErrorResponse(402);
    R_.Forbidden = createErrorResponse(403);
    R_.NotFound = createErrorResponse(404);
    R_.MethodNotAllowed = createErrorResponse(405);
    R_.NotAcceptable = createErrorResponse(406);
    R_.ProxyAuthenticationRequired = createErrorResponse(407);
    R_.RequestTimeout = createErrorResponse(408);
    R_.Conflict = createErrorResponse(409);
    R_.Gone = createErrorResponse(410);
    R_.LengthRequired = createErrorResponse(411);
    R_.PreconditionFailed = createErrorResponse(412);
    R_.PayloadTooLarge = createErrorResponse(413);
    R_.URITooLong = createErrorResponse(414);
    R_.UnsupportedMediaType = createErrorResponse(415);
    R_.RangeNotSatisfiable = createErrorResponse(416);
    R_.ExpectationFailed = createErrorResponse(417);
    R_.MisdirectedRequest = createErrorResponse(421);
    R_.UnprocessableEntity = createErrorResponse(422);
    R_.Locked = createErrorResponse(423);
    R_.FailedDependency = createErrorResponse(424);
    R_.UnorderedCollection = createErrorResponse(425);
    R_.UpgradeRequired = createErrorResponse(426);
    R_.PreconditionRequired = createErrorResponse(428);
    R_.TooManyRequests = createErrorResponse(429);
    R_.RequestHeaderFieldsTooLarge = createErrorResponse(431);
    R_.UnavailableForLegalReasons = createErrorResponse(451);
    // 5xx
    R_.InternalServerError = createErrorResponse(500);
    R_.NotImplemented = createErrorResponse(501);
    R_.BadGateway = createErrorResponse(502);
    R_.ServiceUnavailable = createErrorResponse(503);
    R_.GatewayTimeout = createErrorResponse(504);
    R_.HTTPVersionNotSupported = createErrorResponse(505);
    R_.VariantAlsoNegotiates = createErrorResponse(506);
    R_.InsufficientStorage = createErrorResponse(507);
    R_.LoopDetected = createErrorResponse(508);
    R_.BandwidthLimitExceeded = createErrorResponse(509);
    R_.NotExtended = createErrorResponse(510);
    R_.NetworkAuthenticationRequired = createErrorResponse(511);
    R_.setBodyCreator = _setBodyCreator;
    R_.MARKER = _MARKER;
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
