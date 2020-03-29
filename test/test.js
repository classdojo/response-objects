const expect = require("expect");
const { STATUS_CODES } = require("http");

const status = require("statuses");
const R = require("../dist");

const aliases = [ "Ok" ];

const noTest = [ "default" ];

const someResponse = R.Ok();

const getName = code => STATUS_CODES[code].replace(/[\s+-]/g, "");
const skipCodes = ["306", "418"];
Object.keys(STATUS_CODES)
  .filter(code => !skipCodes.includes(code))
  .map(getName)
  .forEach(function (Name) {
    describe(`${Name}`, function () {
      const Ctor = R[Name];
      // console.log("xxxxxxxx", Name, Ctor)

      const resp = Ctor("body");
      const {statusCode} = resp;

      it(`Constructor has a \`.name\` of ${Name} for debugging purposes`, function () {
        expect(Ctor.name).toBe(Name);
      });

      it(`R(${statusCode}) works`, function () {
        const r2 = R(statusCode, "body");
        expect(resp).toEqual(r2);
      });

      // NOTE: having R(status, body, headers) means R[status](body, headers) isn't needed any more

      // it(`Responses[${status}] === Responses.${Name}`, function () {
      //   expect(R[statusCode]).toBe(R[Name]);
      // });

      if (statusCode >= 400) {
        it("is an error", function () {
          expect(resp instanceof Error).toBe(true);
          expect(typeof resp.stack).toBe("string");
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
    it("You can call 'Ok' or 'OK'", () => {
      expect(R.Ok()).toEqual(R.OK());
    });
  });

  describe("miscellaneous", function () {
    it("R is a function", function () {
      expect(typeof R).toBe("function");
    });

    it("no accidental header polution via prototype", () => {
      const r1 = R.Ok();
      r1.headers["X-My-Header"] = "hello there";
      const r2 = R.Ok();
      expect(r2.headers["X-My-Header"]).toBe(undefined);
    });

    it("the constructor is the top stack frame", () => {
      const e = R.InternalServerError();
      expect(typeof e.stack).toBe("string");
      const frames = e.stack.split("\n");
      frames.shift(); // top frame is error name, dump it

      // we want the top frame to point to the exact line the error
      // occurred on, rather than to the inside of this library.
      expect(frames[0]).toContain("test.js");
    });
  });
