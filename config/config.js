config = {};
const env = process.env.NODE_ENV;
if (env == "dev") {
} else if (env == "stge") {
} else if (env == "prod") {
}

module.exports = config;
