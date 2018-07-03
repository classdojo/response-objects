export declare function isResponseObject(obj: any): boolean;
export interface BaseResponseObject<T> {
    body: T;
    status: number;
    headers?: object;
}
export interface ResponseObject<T> extends BaseResponseObject<T> {
    statusCode: number;
    toJSON(): BaseResponseObject<T>;
    toString(): string;
}
export interface ErrorResponseObject<T> extends ResponseObject<T>, Error {
}
declare function R<T>(code: number, body: T, headers?: any): ResponseObject<T>;
export default R;
declare namespace R {
    function Continue<T>(body?: T, headers?: object): ResponseObject<T>;
    function SwitchingProtocols<T>(body?: T, headers?: object): ResponseObject<T>;
    function Processing<T>(body?: T, headers?: object): ResponseObject<T>;
    function OK<T>(body?: T, headers?: object): ResponseObject<T>;
    function Created<T>(body?: T, headers?: object): ResponseObject<T>;
    function Accepted<T>(body?: T, headers?: object): ResponseObject<T>;
    function NonAuthoritativeInformation<T>(body?: T, headers?: object): ResponseObject<T>;
    function NoContent<T>(body?: T, headers?: object): ResponseObject<T>;
    function ResetContent<T>(body?: T, headers?: object): ResponseObject<T>;
    function PartialContent<T>(body?: T, headers?: object): ResponseObject<T>;
    function MultiStatus<T>(body?: T, headers?: object): ResponseObject<T>;
    function AlreadyReported<T>(body?: T, headers?: object): ResponseObject<T>;
    function IMUsed<T>(body?: T, headers?: object): ResponseObject<T>;
    function MultipleChoices<T>(body?: T, headers?: object): ResponseObject<T>;
    function MovedPermanently<T>(body?: T, headers?: object): ResponseObject<T>;
    function Found<T>(body?: T, headers?: object): ResponseObject<T>;
    function SeeOther<T>(body?: T, headers?: object): ResponseObject<T>;
    function NotModified<T>(body?: T, headers?: object): ResponseObject<T>;
    function UseProxy<T>(body?: T, headers?: object): ResponseObject<T>;
    function TemporaryRedirect<T>(body?: T, headers?: object): ResponseObject<T>;
    function PermanentRedirect<T>(body?: T, headers?: object): ResponseObject<T>;
    function BadRequest<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function Unauthorized<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function PaymentRequired<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function Forbidden<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function NotFound<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function MethodNotAllowed<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function NotAcceptable<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function ProxyAuthenticationRequired<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function RequestTimeout<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function Conflict<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function Gone<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function LengthRequired<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function PreconditionFailed<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function PayloadTooLarge<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function URITooLong<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function UnsupportedMediaType<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function RangeNotSatisfiable<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function ExpectationFailed<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function MisdirectedRequest<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function UnprocessableEntity<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function Locked<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function FailedDependency<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function UnorderedCollection<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function UpgradeRequired<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function PreconditionRequired<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function TooManyRequests<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function RequestHeaderFieldsTooLarge<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function UnavailableForLegalReasons<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function InternalServerError<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function NotImplemented<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function BadGateway<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function ServiceUnavailable<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function GatewayTimeout<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function HTTPVersionNotSupported<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function VariantAlsoNegotiates<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function InsufficientStorage<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function LoopDetected<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function BandwidthLimitExceeded<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function NotExtended<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    function NetworkAuthenticationRequired<T>(body?: T, headers?: object): ErrorResponseObject<T>;
    const Ok: typeof OK;
}
