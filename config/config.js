config = {};
const env = process.env.NODE_ENV;
if (env == "dev") {
    config.db = {
        type:"mongoDb",
        uri:process.env.DB_SCRAP_DEV,
        options : { keepAlive: 1, autoReconnect: true, poolSize:20}
    }
} else if (env == "stage") {
    config.db = {
        type:"mongoDb",
        uri:process.env.DB_SCRAP_STAGE,
        options : { keepAlive: 1, autoReconnect: true, poolSize:20}
    }
} else if (env == "prod") {
    config.db = {
        type:"mongoDb",
        uri:process.env.DB_SCRAP_PROD,
        options : { keepAlive: 1, autoReconnect: true, poolSize:20}
    }
}

module.exports = config;
