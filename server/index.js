require("dotenv").config();

var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const redis = require("redis");
var app = express();

app.use(cors());
app.use(bodyParser.json());

redis_url = process.env.REDIS_URL

const RedisStore = require("connect-redis").default;
var client = redis.createClient({
    url : process.env.REDIS_URL
});

(async () => { await client.connect(); })();

client.on("error", function (error) {
    console.error(error);
})

client.on("connect", function () {
    console.log("Successfully connected");
});

// Accesses data from upstash redis
const data = async () => {
  const data = await client.get("John:100");
  return data;
};

// Sends data to server
data().then((result) => {
  app.get("/", (req,res) => {
    res.send(result);
  });
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});