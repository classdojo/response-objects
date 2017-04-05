const expect = require("expect");

const status = require("statuses");
const R = require("./");

const aliases = [ "Ok" ];

const noTest = [ "MARKER" ];

const someResponse = R.Ok();

Object.keys(R)
  .filter(isNaN)
  .filter(name => !aliases.includes(name))
  .forEach(function (Name) {
    if (noTest.includes(Name)) return;

    describe(`${Name}`, function () {
      const Ctor = R[Name];
      const resp = Ctor("body");
      const {statusCode} = resp;

      it(`Constructor has a \`.name\` of ${Name} for debugging purposes`, function () {
        expect(Ctor.name).toBe(Name);
      });

      it(`Responses[${statusCode}] === Responses.${Name}`, function () {
        expect(R[statusCode]).toBe(R[Name]);
      });

      if (statusCode >= 400) {
        it("is an error", function () {
          expect(resp instanceof Error).toBe(true);
          expect(resp.stack).toBeA("string");
        });
      }

      it("has expected properties", function () {
        expect(resp.body).toBe("body");
        expect(resp[R.MARKER]).toBe(true);
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

      it("defaults to status text on null/undefined body", function () {
        expect(Ctor().body).toBe(status[statusCode]);
        expect(Ctor(null).body).toBe(status[statusCode]);

        // other falsy values are ok
        expect(Ctor(0).body).toBe(0);
        expect(Ctor("").body).toBe("");
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

  describe("symbols", function () {
    it("R.MARKER is a symbol", function () {
      expect(R.MARKER).toBeA("symbol");
    });
  });

  // rough measurements:
  // 1.5s with Object.create() constructors
  // 2.2s with `new` constructors
  // 4.8s with `new` constructors + failed `this instanceof` checks
  xdescribe("create 1e7 instances", function () {
    it("is fast enough", function () {
      const body = {}, headers = {};
      let i = 0;
      while (++i < 1e7) {
        R.Ok(body, headers);
      }
    });
  });
