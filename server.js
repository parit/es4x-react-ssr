import { Router, StaticHandler } from "@vertx/web";
import React from 'react';
import reactdomserver  from 'react-dom/server';
import Component from "./components/Component";

const app = Router.router(vertx);

app.get("/greetings").handler(ctx => {
    const appHtml = reactdomserver.renderToString(<Component message="component rendered"/>);    
    ctx.response()
        .putHeader("content-type", "text/html")
        .end(`<!DOCTYPE html>
        <html lang="en">
        <head>
          <link rel="stylesheet" href="/wing.min.css"/>
          <meta charset="UTF-8">
          <title>Universal Blog</title>
        </head>
        <body>
          <div id="app">${appHtml}</div>
        </body>
        </html>`);
});
app.get().handler(StaticHandler.create());


vertx
    .createHttpServer()
    .requestHandler(app.handle)
    .listen(8080);
    
console.log("Server started at 8080");