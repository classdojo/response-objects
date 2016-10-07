# responses

Value objects representing HTTP responses

```
npm i -S @nickbottomley/responses
```

Requires Node.js 4+

This package is general-purpose, but is particularly useful with [koa-detour](http://github.com/nickb1080/koa-detour). Put simply, the idea is to raise the level of abstraction by having routes or resources return objects or throw errors that represent HTTP responses, rather than imperatively doing things like `res.write()` (or in Koa `ctx.body = ...`)

```js
// this isn't a complete working example, it just shows the concepts
const Koa = require("koa");
const Router = require("koa-detour");
const R = require("@nickbottomley/responses");

const app = new Koa()
const router = new Router();
router.route("/user", {
  GET (ctx) {
    if (!areUsersConnected(ctx.userId, ctx.params.id)) {
      // router handles sending this as a 403
      throw R.Forbidden("You are not connected to that user")
    }

    return getUser().then(user => {
      // router handles sending this as a 200
      return R.OK(user)
    });
  },
  POST (ctx) {
    if (ctx.body.username == null) {
      // router handles sending this as 400
      throw R.BadRequest("Username is required");
    }

    return createUser(ctx.body).then(user => {
      // router handles sending this as a 201
      return R.Created(user);
    });
  }
})

app.use(router);
```
