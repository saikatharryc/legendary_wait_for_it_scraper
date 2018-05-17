const mongoose = require("mongoose");
const { ScrapySiteOneSchema } = require("./scrapy_site1.model");

mongoose.model("SiteOne", ScrapySiteOneSchema);
module.exports = mongoose;
