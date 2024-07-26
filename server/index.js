var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const redis = require("redis");
var app = express();
const { Configuration, PlaidApi, PlaidEnvironments } = require("plaid");

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': '66a2a9c9d42374001b605293',
      'PLAID-SECRET': '714d8005aadcfdbd473b5fedf7c1bc',
    },
  },
});

const plaidClient = new PlaidApi(configuration);
app.use(cors());
app.use(bodyParser.json());

app.post('/ create_link_token', async function (request, response) {
    // Get the client_user_id by searching for the current user
      const plaidRequest = {
      user: {
        // This should correspond to a unique id for the current user.
        client_user_id: 'user',
      }, 
      client_name: 'Plaid Test App',
      products: ['auth'],
      language: 'en',
       redirect_uri: 'http://localhost:5173/ ',
      country_codes: ['US'],
    };
    try {
      const createTokenResponse = await plaidClient.linkTokenCreate(plaidRequest);
      response.json(createTokenResponse.data);
    } catch (error) {
        response.status(500).json({error});  
      // handle error
    }
  }); 

  



const RedisStore = require("connect-redis").default;
var client = redis.createClient({
    url : "rediss://default:AdpIAAIncDE4OGVhZmY0ZTczMjY0NjI4YjZjNzU5NTk3M2JhNmQ2OXAxNTU4ODA@exciting-cougar-55880.upstash.io:6379"
});

(async () => { await client.connect(); })();

client.on("error", function (error) {
    console.error(error);
})

client.on("connect", function () {
    console.log("Successfully connected");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});