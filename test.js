const expect = require("expect");

const status = require("statuses");
const Responses = require("./");

Object.keys(Responses)
  .filter(isNaN)
  .forEach(function (ResponseType) {
    if (ResponseType === "MARKER") return;

    describe(`${ResponseType}`, function () {
      const Ctor = Responses[ResponseType]

      const resp = Ctor();
      const {statusCode} = resp;

      it(`Response[${statusCode}] === Response.${ResponseType}`, function () {
        expect(Responses[statusCode]).toBe(Responses[ResponseType]);
      });

      if (statusCode >= 400) {
        it("is an error", function () {
          expect(resp instanceof Error).toBe(true);
          expect(resp.stack).toBeA("string");
        });
      }

      it("has expected properties", function () {
        expect(resp.body).toBe(status[statusCode]);
        expect(resp[Responses.MARKER]).toBe(true);
        expect(resp.headers).toEqual({});
      })

      it("toJSON() works", function () {
        expect(resp.toJSON()).toEqual({
          body: resp.body,
          status: resp.status,
          headers: resp.headers,
        });
      });

      it("toString() works", function () {
        const str = `Responses.${ResponseType} ${JSON.stringify(resp)}`
        expect(resp.toString()).toEqual(str);
      });

      it("can receive body argument", function () {
        const custom = Ctor("custom body");
        expect(custom.body).toBe("custom body");
      });

      it("can receive headers argument", function () {
        const custom = Ctor(null, {"x-header": "ok!"});
        expect(resp.body).toBe(status[statusCode]);
        expect(custom.headers["x-header"]).toBe("ok!");
      });
    });

  });
