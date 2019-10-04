/**
const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end("hi http");
  })
  .listen(3000);
*/

const Koa = require("koa");

const app = new Koa();
const { createReadStream } = require("fs");

app.use(async (ctx, next) => {
  if (ctx.path === "/favicon.ico") {
    ctx.body = createReadStream("./favicon.ico");
  } else {
    await next();
  }
});

app.use(ctx => {
  ctx.body = "hi koa";
});

app.listen(3000);
