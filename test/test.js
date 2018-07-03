const expect = require("expect");
const { STATUS_CODES } = require("http");

const R = require("../dist");
const someResponse = R.Ok();

const getName = code => STATUS_CODES[code].replace(/[\s+-]/g, "");
const skipCodes = ["306", "418"];
Object.keys(STATUS_CODES)
  .filter(code => !skipCodes.includes(code))
  .map(getName)
  .forEach(function (Name) {
    describe(`${Name}`, function () {
      const Ctor = R[Name];

      const resp = Ctor("body");
      const {statusCode} = resp;

      it(`Constructor has a \`.name\` of ${Name} for debugging purposes`, function () {
        expect(Ctor.name).toBe(Name);
      });

      it(`R(${statusCode}) works`, function () {
        const r2 = R(statusCode, "body");
        expect(resp).toEqual(r2);
      });

      if (statusCode >= 400) {
        it("is an error", function () {
          expect(resp instanceof Error).toBe(true);
          expect(resp.stack).toBeA("string");
        });
      }

      it("has expected properties", function () {
        expect(resp.body).toBe("body");
        expect(resp.headers).toEqual({});
      });

      it("toJSON() works", function () {
        expect(resp.toJSON()).toEqual({
          body: resp.body,
          status: resp.status,
          headers: resp.headers,
        });
      });

      it("toString() works", function () {
        expect(resp.toString()).toEqual(`Responses.${Name} ${JSON.stringify(resp)}`);
      });

      it("can receive body argument", function () {
        expect(Ctor("custom body").body).toBe("custom body");
      });

      it("throws if body argument is already a response", function () {
        expect(() => Ctor(someResponse)).toThrow(/Object is already a response/);
      });

      it("can receive headers argument", function () {
        const withHeaders = Ctor(null, {"x-header": "value"});
        expect(withHeaders.headers["x-header"]).toBe("value");
      });

    });

  });

  describe("aliases", function () {
    it("'OK' is aliased to 'Ok'", function () {
      expect(R.OK).toBe(R.Ok);
    });
  });

  describe("miscellaneous", function () {
    it("R is a function", function () {
      expect(R).toBeA("function");
    });
  });
