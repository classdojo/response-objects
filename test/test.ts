import * as expect from "expect";
import { STATUS_CODES } from "http";

import * as R from "../dist";
import { Ok } from "../dist";

type ResponseObjectBuilder<T = any> = (
  body?: T,
  headers?: object
) => R.ResponseObject<T> | R.ErrorResponseObject<T>;

type RMap = {
  [key: string]: ResponseObjectBuilder;
};

const someResponse = Ok();

const getName = (code: string): string =>
  STATUS_CODES[code]!.replace(/[\s+-]/g, "");
const skipCodes = ["306", "418"];
Object.keys(STATUS_CODES)
  .filter(code => skipCodes.indexOf(code) === -1)
  .map(getName)
  .forEach(function(Name) {
    describe(`TS ${Name}`, function() {
      // workaround for index signature
      // from https://github.com/Microsoft/TypeScript/issues/16248#issuecomment-306034585
      const RMap: RMap = { ...R };
      const Ctor = RMap[Name];
      R.NoContent();

      // console.log("xxxxxxxx", Name, Ctor)

      const resp = Ctor("body");
      const { statusCode } = resp;

      it(`Constructor has a \`.name\` of ${Name} for debugging purposes`, function() {
        expect(Ctor.name).toBe(Name);
      });

      it(`R(${statusCode}) works`, function() {
        const r2 = R(statusCode, "body");
        expect(resp).toEqual(r2);
      });

      // NOTE: having R(status, body, headers) means R[status](body, headers) isn't needed any more

      // it(`Responses[${status}] === Responses.${Name}`, function () {
      //   expect(R[statusCode]).toBe(R[Name]);
      // });

      if (statusCode >= 400) {
        it("is an error", function() {
          expect(resp instanceof Error).toBe(true);
          expect((resp as R.ErrorResponseObject<any>).stack).toBeA("string");
        });
      }

      it("has expected properties", function() {
        expect(resp.body).toBe("body");
        expect(resp.headers).toEqual({});
      });

      it("toJSON() works", function() {
        expect(resp.toJSON()).toEqual({
          body: resp.body,
          status: resp.status,
          headers: resp.headers
        });
      });

      it("toString() works", function() {
        expect(resp.toString()).toEqual(
          `Responses.${Name} ${JSON.stringify(resp)}`
        );
      });

      it("can receive body argument", function() {
        expect(Ctor("custom body").body).toBe("custom body");
      });

      it("throws if body argument is already a response", function() {
        expect(() => Ctor(someResponse)).toThrow(
          /Object is already a response/
        );
      });

      it("can receive headers argument", function() {
        const withHeaders = Ctor(null, { "x-header": "value" });
        expect((withHeaders.headers as any)["x-header"]).toBe("value");
      });
    });
  });

describe("TS aliases", function() {
  it("'OK' is aliased to 'Ok'", function() {
    expect(R.OK).toBe(R.Ok);
  });
});

describe("TS miscellaneous", function() {
  it("R is a function", function() {
    expect(R).toBeA("function");
  });
});
