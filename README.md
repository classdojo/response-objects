# response-objects

Value objects representing HTTP responses

```
npm i -S response-objects
```

Requires Node.js 4+

This package is general-purpose, but is particularly useful with [koa-detour](http://github.com/bttmly/koa-detour). Put simply, the idea is to raise the level of abstraction by having routes or resources return objects or throw errors that represent HTTP responses, rather than imperatively doing things like `res.write()` (or in Koa `ctx.body = ...`)

```js
// this isn't a complete working example, it just shows the concepts
import Koa from "koa";
import Router from "koa-detour";
import R from "response-objects";

const app = new Koa()
const router = new Router();
router.route("/user/:id", {
  async GET (ctx) {
    if (!areUsersConnected(ctx.userId, ctx.params.id)) {
      // router handles sending this as a 403
      throw R.Forbidden("You are not connected to that user")
    }

    // router handles sending this as a 200
    return R.Ok(await getUser())
  }
});
app.use(router.middleware());
```

Available methods:
```
R(status, body, headers)
R.Continue(body, headers)
R.SwitchingProtocols(body, headers)
R.Processing(body, headers)
R.OK(body, headers)
R.Created(body, headers)
R.Accepted(body, headers)
R.NonAuthoritativeInformation(body, headers)
R.NoContent(body, headers)
R.ResetContent(body, headers)
R.PartialContent(body, headers)
R.MultiStatus(body, headers)
R.AlreadyReported(body, headers)
R.IMUsed(body, headers)
R.MultipleChoices(body, headers)
R.MovedPermanently(body, headers)
R.Found(body, headers)
R.SeeOther(body, headers)
R.NotModified(body, headers)
R.UseProxy(body, headers)
R.TemporaryRedirect(body, headers)
R.PermanentRedirect(body, headers)
R.BadRequest(body, headers)
R.Unauthorized(body, headers)
R.PaymentRequired(body, headers)
R.Forbidden(body, headers)
R.NotFound(body, headers)
R.MethodNotAllowed(body, headers)
R.NotAcceptable(body, headers)
R.ProxyAuthenticationRequired(body, headers)
R.RequestTimeout(body, headers)
R.Conflict(body, headers)
R.Gone(body, headers)
R.LengthRequired(body, headers)
R.PreconditionFailed(body, headers)
R.PayloadTooLarge(body, headers)
R.URITooLong(body, headers)
R.UnsupportedMediaType(body, headers)
R.RangeNotSatisfiable(body, headers)
R.ExpectationFailed(body, headers)
R.MisdirectedRequest(body, headers)
R.UnprocessableEntity(body, headers)
R.Locked(body, headers)
R.FailedDependency(body, headers)
R.UnorderedCollection(body, headers)
R.UpgradeRequired(body, headers)
R.PreconditionRequired(body, headers)
R.TooManyRequests(body, headers)
R.RequestHeaderFieldsTooLarge(body, headers)
R.UnavailableForLegalReasons(body, headers)
R.InternalServerError(body, headers)
R.NotImplemented(body, headers)
R.BadGateway(body, headers)
R.ServiceUnavailable(body, headers)
R.GatewayTimeout(body, headers)
R.HTTPVersionNotSupported(body, headers)
R.VariantAlsoNegotiates(body, headers)
R.InsufficientStorage(body, headers)
R.LoopDetected(body, headers)
R.BandwidthLimitExceeded(body, headers)
R.NotExtended(body, headers)
R.NetworkAuthenticationRequired(body, headers)
```
```
