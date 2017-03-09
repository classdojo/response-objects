# response-objects

Value objects representing HTTP responses

```
npm i -S response-objects
```

Requires Node.js 4+

This package is general-purpose, but is particularly useful with [koa-detour](http://github.com/nickb1080/koa-detour). Put simply, the idea is to raise the level of abstraction by having routes or resources return objects or throw errors that represent HTTP responses, rather than imperatively doing things like `res.write()` (or in Koa `ctx.body = ...`)

```js
// this isn't a complete working example, it just shows the concepts
const Koa = require("koa");
const Router = require("koa-detour");
const R = require("response-objects");

const app = new Koa()
const router = new Router();
router.route("/user", {
  async GET (ctx) {
    if (!areUsersConnected(ctx.userId, ctx.params.id)) {
      // router handles sending this as a 403
      throw R.Forbidden("You are not connected to that user")
    }

    // router handles sending this as a 200
    return R.Ok(await getUser())
  },
  async POST (ctx) {
    if (ctx.body.username == null) {
      // router handles sending this as 400
      throw R.BadRequest("Username is required");
    }

    // router handles sending this as a 201
    return R.Created(await createUser(ctx.body));
  },
})

app.use(router);
```

As an integration point, there is an exported `MARKER` symbol value, which can be used to identify response objects produced by this library.

```
const R = require("response-objects");
const resp = R.Ok("it worked!");
console.log(resp[R.MARKER]); // true
```

Available methods:
```
R.Continue === R[100]
R.SwitchingProtocols === R[101]
R.Processing === R[102]
R.OK === R[200] (alias: R.Ok)
R.Created === R[201]
R.Accepted === R[202]
R.NonAuthoritativeInformation === R[203]
R.NoContent === R[204]
R.ResetContent === R[205]
R.PartialContent === R[206]
R.MultiStatus === R[207]
R.AlreadyReported === R[208]
R.IMUsed === R[226]
R.MultipleChoices === R[300]
R.MovedPermanently === R[301]
R.Found === R[302]
R.SeeOther === R[303]
R.NotModified === R[304]
R.UseProxy === R[305]
R.TemporaryRedirect === R[307]
R.PermanentRedirect === R[308]
R.BadRequest === R[400]
R.Unauthorized === R[401]
R.PaymentRequired === R[402]
R.Forbidden === R[403]
R.NotFound === R[404]
R.MethodNotAllowed === R[405]
R.NotAcceptable === R[406]
R.ProxyAuthenticationRequired === R[407]
R.RequestTimeout === R[408]
R.Conflict === R[409]
R.Gone === R[410]
R.LengthRequired === R[411]
R.PreconditionFailed === R[412]
R.PayloadTooLarge === R[413]
R.URITooLong === R[414]
R.UnsupportedMediaType === R[415]
R.RangeNotSatisfiable === R[416]
R.ExpectationFailed === R[417]
R.MisdirectedRequest === R[421]
R.UnprocessableEntity === R[422]
R.Locked === R[423]
R.FailedDependency === R[424]
R.UnorderedCollection === R[425]
R.UpgradeRequired === R[426]
R.PreconditionRequired === R[428]
R.TooManyRequests === R[429]
R.RequestHeaderFieldsTooLarge === R[431]
R.UnavailableForLegalReasons === R[451]
R.InternalServerError === R[500]
R.NotImplemented === R[501]
R.BadGateway === R[502]
R.ServiceUnavailable === R[503]
R.GatewayTimeout === R[504]
R.HTTPVersionNotSupported === R[505]
R.VariantAlsoNegotiates === R[506]
R.InsufficientStorage === R[507]
R.LoopDetected === R[508]
R.BandwidthLimitExceeded === R[509]
R.NotExtended === R[510]
R.NetworkAuthenticationRequired === R[511]
```
