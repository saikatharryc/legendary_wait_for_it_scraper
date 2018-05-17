module.exports = function(fastify, options, next) {
  const scrap_index = require("./scrapy_index");

  // fastify.register(rooms, {prefix: '/api/v1/rooms'});

  fastify.register(scrap_index, { prefix: "/api/v1/scrapy_index" });
  console.log("Loaded Routes");
  next();
};
