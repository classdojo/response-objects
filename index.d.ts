
declare module "response-objects" {

  namespace ResponseObjects {
    let MARKER: any;

    export interface BaseResponseObject {
      body?: any;
      status: number;
      headers?: {
        [index: string]: string;
      };
    }

    interface ResponseObject extends BaseResponseObject {
      toJSON(): BaseResponseObject;
      toString(): string;
    }

    interface ErrorResponseObject extends ResponseObject, Error {}

    function setBodyCreator(fn: (code: number, body: string) => any): void;

    function Ok(body?: any, headers?: object): ResponseObject;

    function Continue(body?: any, headers?: object): ResponseObject;

    function SwitchingProtocols(body?: any, headers?: object): ResponseObject;

    function Processing(body?: any, headers?: object): ResponseObject;

    function OK(body?: any, headers?: object): ResponseObject;

    function Created(body?: any, headers?: object): ResponseObject;

    function Accepted(body?: any, headers?: object): ResponseObject;

    function NonAuthoritativeInformation(body?: any, headers?: object): ResponseObject;

    function NoContent(body?: any, headers?: object): ResponseObject;

    function ResetContent(body?: any, headers?: object): ResponseObject;

    function PartialContent(body?: any, headers?: object): ResponseObject;

    function MultiStatus(body?: any, headers?: object): ResponseObject;

    function AlreadyReported(body?: any, headers?: object): ResponseObject;

    function IMUsed(body?: any, headers?: object): ResponseObject;

    function MultipleChoices(body?: any, headers?: object): ResponseObject;

    function MovedPermanently(body?: any, headers?: object): ResponseObject;

    function Found(body?: any, headers?: object): ResponseObject;

    function SeeOther(body?: any, headers?: object): ResponseObject;

    function NotModified(body?: any, headers?: object): ResponseObject;

    function UseProxy(body?: any, headers?: object): ResponseObject;

    function TemporaryRedirect(body?: any, headers?: object): ResponseObject;

    function PermanentRedirect(body?: any, headers?: object): ResponseObject;

    function BadRequest(body?: any, headers?: object): ErrorResponseObject;

    function Unauthorized(body?: any, headers?: object): ErrorResponseObject;

    function PaymentRequired(body?: any, headers?: object): ErrorResponseObject;

    function Forbidden(body?: any, headers?: object): ErrorResponseObject;

    function NotFound(body?: any, headers?: object): ErrorResponseObject;

    function MethodNotAllowed(body?: any, headers?: object): ErrorResponseObject;

    function NotAcceptable(body?: any, headers?: object): ErrorResponseObject;

    function ProxyAuthenticationRequired(body?: any, headers?: object): ErrorResponseObject;

    function RequestTimeout(body?: any, headers?: object): ErrorResponseObject;

    function Conflict(body?: any, headers?: object): ErrorResponseObject;

    function Gone(body?: any, headers?: object): ErrorResponseObject;

    function LengthRequired(body?: any, headers?: object): ErrorResponseObject;

    function PreconditionFailed(body?: any, headers?: object): ErrorResponseObject;

    function PayloadTooLarge(body?: any, headers?: object): ErrorResponseObject;

    function URITooLong(body?: any, headers?: object): ErrorResponseObject;

    function UnsupportedMediaType(body?: any, headers?: object): ErrorResponseObject;

    function RangeNotSatisfiable(body?: any, headers?: object): ErrorResponseObject;

    function ExpectationFailed(body?: any, headers?: object): ErrorResponseObject;

    function MisdirectedRequest(body?: any, headers?: object): ErrorResponseObject;

    function UnprocessableEntity(body?: any, headers?: object): ErrorResponseObject;

    function Locked(body?: any, headers?: object): ErrorResponseObject;

    function FailedDependency(body?: any, headers?: object): ErrorResponseObject;

    function UnorderedCollection(body?: any, headers?: object): ErrorResponseObject;

    function UpgradeRequired(body?: any, headers?: object): ErrorResponseObject;

    function PreconditionRequired(body?: any, headers?: object): ErrorResponseObject;

    function TooManyRequests(body?: any, headers?: object): ErrorResponseObject;

    function RequestHeaderFieldsTooLarge(body?: any, headers?: object): ErrorResponseObject;

    function UnavailableForLegalReasons(body?: any, headers?: object): ErrorResponseObject;

    function InternalServerError(body?: any, headers?: object): ErrorResponseObject;

    function NotImplemented(body?: any, headers?: object): ErrorResponseObject;

    function BadGateway(body?: any, headers?: object): ErrorResponseObject;

    function ServiceUnavailable(body?: any, headers?: object): ErrorResponseObject;

    function GatewayTimeout(body?: any, headers?: object): ErrorResponseObject;

    function HTTPVersionNotSupported(body?: any, headers?: object): ErrorResponseObject;

    function VariantAlsoNegotiates(body?: any, headers?: object): ErrorResponseObject;

    function InsufficientStorage(body?: any, headers?: object): ErrorResponseObject;

    function LoopDetected(body?: any, headers?: object): ErrorResponseObject;

    function BandwidthLimitExceeded(body?: any, headers?: object): ErrorResponseObject;

    function NotExtended(body?: any, headers?: object): ErrorResponseObject;

    function NetworkAuthenticationRequired(body?: any, headers?: object): ErrorResponseObject;
  }

  function ResponseObjects(status: number, body: any, headers?: {[index: string]: string; }): ResponseObjects.ResponseObject;

  export = ResponseObjects;
}
