"use strict";
const fastify = require("fastify")();
const path = require("path");
const fs = require("fs");
const dotenv = require("dotenv");
const cors = require("cors");
// const helmet = require("helmet");
const helmet = require("fastify-helmet");

const oauthserver = require("oauth2-server");
const Request = oauthserver.Request;
const Response = oauthserver.Response;

dotenv.load({ path: ".env" });

const config = require("./config/config");

/* Setting Up Database */
// const mongoose = require("./config/db_main");

require("./models/index");

let fastApiRoutes = require("./routes/fastapi");
fastify.register(helmet, { hidePoweredBy: { setTo: "PHP 7.0.0" } });
fastify.use(cors());
fastify.register(require("fastify-formbody"));


fastify.register(fastApiRoutes, {});

fastify.setNotFoundHandler(function(request, reply) {
  // Default not found handler
  console.log(" I am Not Found Error");
  reply.code(404);
  reply.send({
    message: "Not Found"
  });
});

fastify.setErrorHandler(function(error, request, reply) {
  // Send error response
  console.log(error);
  reply.send({ err: "Unknown Error Occured" });
});


function graceful() {
  console.log("I am being called");
  process.exit(0);
}

// process.on("SIGTERM", graceful);
// process.on("SIGINT", graceful);

process.on("unhandledRejection", (reason, p) => {
  console.error(reason, "Unhandled Rejection at Promise", p);
});

process.on("uncaughtException", err => {
  console.log(err, "Uncaught Exception thrown");
  console.log(err.stack);
  graceful();
});

module.exports = fastify;