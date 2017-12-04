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

    interface ErrorResponseObject extends ResponseObject, Error {
    }

    function setBodyCreator(fn: (code: number, body: string) => any): void;

    function Ok(body: any | string, headers?: any): ResponseObject;

    function OK(body: any | string, headers?: any): ResponseObject;

    function NoContent(): ResponseObject;

    function MethodNotAllowed(body: any, headers: any): ErrorResponseObject;

    function Unauthorized(): ErrorResponseObject;

    function Forbidden(message?: string): ErrorResponseObject;

    function BadRequest(message?: string): ErrorResponseObject;

    function NotFound(url: string): ErrorResponseObject;

    function InternalServerError(err: Error): ErrorResponseObject;
  }
  function ResponseObjects(status: number, body: any, headers?: {[index: string]: string; }): ResponseObjects.ResponseObject;

  export = ResponseObjects;
}
