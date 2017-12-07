const status = require("statuses");
const fs = require("fs");
const path = require("path");

const typeDefFile = path.join(__dirname, "index.d.ts");

function getName (code) {
  return status[code].replace(/[\s+-]/g, "");
}

function generateTypeDefForCode (code) {
  if (code === 306 || code === 418) return;

  const name = getName(code);
  const isError = code >= 400;

  if (isError) return `    function ${name}(body?: any, headers?: object): ErrorResponseObject;`;

  return `    function ${name}(body?: any, headers?: object): ResponseObject;`;
}

const typeDefs = status.codes.map(generateTypeDefForCode).filter(Boolean).join("\n\n");

fs.unlinkSync(typeDefFile);

const template = `
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

__REPLACE_ME__
  }

  function ResponseObjects(status: number, body: any, headers?: {[index: string]: string; }): ResponseObjects.ResponseObject;

  export = ResponseObjects;
}
`;

const typeDefContent = template.replace("__REPLACE_ME__", typeDefs);

fs.writeFileSync(typeDefFile, typeDefContent);
