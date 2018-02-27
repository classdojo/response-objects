export interface R<Body> extends ResponseObject {
    body: Body;
}
export interface BaseResponseObject {
    body?: any;
    status: number;
    headers?: object;
}
export interface ResponseObject extends BaseResponseObject {
    statusCode: number;
    toJSON(): BaseResponseObject;
    toString(): string;
}
export interface ErrorResponseObject extends ResponseObject, Error {
}
export declare type BodyCreator = (code: number, body?: any, headers?: object) => any;
export declare const setBodyCreator: (fn: BodyCreator) => void;
export declare const MARKER: symbol;
declare function R_(code: number, body?: any, headers?: any): ResponseObject;
export declare const Continue: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const SwitchingProtocols: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const Processing: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const OK: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const Ok: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const Created: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const Accepted: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const NonAuthoritativeInformation: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const NoContent: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const ResetContent: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const PartialContent: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const MultiStatus: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const AlreadyReported: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const IMUsed: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const MultipleChoices: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const MovedPermanently: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const Found: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const SeeOther: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const NotModified: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const UseProxy: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const TemporaryRedirect: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const PermanentRedirect: (body?: any, headers?: object | undefined) => ResponseObject;
export declare const BadRequest: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const Unauthorized: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const PaymentRequired: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const Forbidden: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const NotFound: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const MethodNotAllowed: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const NotAcceptable: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const ProxyAuthenticationRequired: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const RequestTimeout: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const Conflict: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const Gone: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const LengthRequired: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const PreconditionFailed: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const PayloadTooLarge: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const URITooLong: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const UnsupportedMediaType: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const RangeNotSatisfiable: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const ExpectationFailed: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const MisdirectedRequest: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const UnprocessableEntity: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const Locked: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const FailedDependency: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const UnorderedCollection: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const UpgradeRequired: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const PreconditionRequired: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const TooManyRequests: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const RequestHeaderFieldsTooLarge: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const UnavailableForLegalReasons: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const InternalServerError: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const NotImplemented: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const BadGateway: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const ServiceUnavailable: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const GatewayTimeout: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const HTTPVersionNotSupported: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const VariantAlsoNegotiates: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const InsufficientStorage: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const LoopDetected: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const BandwidthLimitExceeded: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const NotExtended: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export declare const NetworkAuthenticationRequired: (body?: any, headers?: object | undefined) => ErrorResponseObject;
export default R_;
