export interface Headers {
    [header: string]: number | string | string[] | undefined;
}
export interface BaseResponseObject<T> {
    body: T;
    status: number;
    headers: Headers;
}
export interface ResponseObject<T> extends BaseResponseObject<T> {
    statusCode: number;
    toJSON(): BaseResponseObject<T>;
    toString(): string;
}
export interface ErrorResponseObject<T> extends ResponseObject<T>, Error {
}
export default function R<T>(code: number, body: T, headers?: Headers): ResponseObject<T>;
export declare function Continue<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function SwitchingProtocols<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function Processing<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function EarlyHints<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function OK<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function Created<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function Accepted<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function NonAuthoritativeInformation<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function NoContent<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function ResetContent<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function PartialContent<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function MultiStatus<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function AlreadyReported<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function IMUsed<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function MultipleChoices<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function MovedPermanently<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function Found<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function SeeOther<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function NotModified<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function UseProxy<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function TemporaryRedirect<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function PermanentRedirect<T>(body?: T, headers?: Headers): ResponseObject<T>;
export declare function BadRequest<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function Unauthorized<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function PaymentRequired<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function Forbidden<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function NotFound<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function MethodNotAllowed<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function NotAcceptable<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function ProxyAuthenticationRequired<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function RequestTimeout<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function Conflict<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function Gone<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function LengthRequired<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function PreconditionFailed<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function PayloadTooLarge<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function URITooLong<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function UnsupportedMediaType<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function RangeNotSatisfiable<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function ExpectationFailed<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function MisdirectedRequest<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function UnprocessableEntity<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function Locked<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function FailedDependency<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function UnorderedCollection<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function UpgradeRequired<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function PreconditionRequired<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function TooManyRequests<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function RequestHeaderFieldsTooLarge<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function UnavailableForLegalReasons<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function InternalServerError<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function NotImplemented<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function BadGateway<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function ServiceUnavailable<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function GatewayTimeout<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function HTTPVersionNotSupported<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function VariantAlsoNegotiates<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function InsufficientStorage<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function LoopDetected<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function BandwidthLimitExceeded<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function NotExtended<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare function NetworkAuthenticationRequired<T>(body?: T, headers?: Headers): ErrorResponseObject<T>;
export declare const Ok: typeof OK;
