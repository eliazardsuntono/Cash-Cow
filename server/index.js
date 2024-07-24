var express = require("express");
var parseurl = require("parseurl");
var session = require("express-session");
var cors = require("cors");
var bodyParser = require("body-parser");
var { Configuration, PlaidApi, PlaidEnvironments } = require("plaid");
const redis = require("redis");
var app = express();

const RedisStore = require("connect-redis").default;
var client = redis.createClient({
    url : "rediss://default:AdpIAAIncDE4OGVhZmY0ZTczMjY0NjI4YjZjNzU5NTk3M2JhNmQ2OXAxNTU4ODA@exciting-cougar-55880.upstash.io:6379"
});

(async () => { await client.connect(); })();
app.use(cors());
app.use(bodyParser.json());
client.on("error", function (error) {
    console.error(error);
})

client.on("connect", function () {
    console.log("Connected to Redis");
});

