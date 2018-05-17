"use strict";
const mongoose = require("mongoose");

module.exports = function(fastify, options, next) {
  // fastify.post("/", {}, (req, res, next) => {
  //   //write post call like that
  // });
  fastify.get("/", (req, res, next) => {
      return res.send("Hi i'm up")
  });
  next();
};
