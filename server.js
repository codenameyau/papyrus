const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require('cookie-parser');

require("dotenv").config();

const ip = require("./utils/ip");
const time = require("./utils/time");

/******************************************************
 * CONFIG
 ******************************************************/

const PORT = process.env.PORT || 9001;
const LOG_DIR = process.env.LOG_DIR || "logs";
const LOG_SIZE_LIMIT = process.env.LOG_SIZE_LIMIT || "10mb";

express.text({
  limit: LOG_SIZE_LIMIT
});

const app = express();
app.use(cors());
app.use(cookieParser());

/******************************************************
 * UTILS
 ******************************************************/
function isBase64Encoded(str) {
  return Buffer.from(str, "base64").toString("base64") === str;
}

function getFilename(req) {
  const date = time.getDate();
  const namespace =
    (req.query && req.query.namespace) ||
    (req.body && req.body.namespace) ||
    "";

  return namespace ? `${namespace}.${date}` : date;
}

function addLogProperty(obj, propName, prop) {
  if (prop && Object.keys(prop).length) {
    obj[propName] = prop;
  }
}

function createLog(req) {
  const reqKeys = ['headers', 'cookies', 'query', 'body'];

  const log = reqKeys.reduce((acc, key) => {
    const value = req[key];
    return value && Object.keys(value).length ? {
      ...acc,
      [key]: value
    } : acc
  }, {});

  return log;
}

/******************************************************
 * ROUTES
 ******************************************************/
app.get("/", function(req, res) {
  res.send("See file for API");
});

app.get("/v0/log", function(req, res) {
  const filename = getFilename(req);
  const query = req.query;

  if (!Object.keys(query)) {
    return res.sendStatus(200);
  }

  const log = createLog(req);
  console.log(`\n[+] Log: ${time.getTimestamp()}`);
  console.log(JSON.stringify(log, null, 2));
  return res.sendStatus(201);
});

app.post("/v0/log", function(req, res) {
  console.log(req);
  res.sendStatus(200);
});

/******************************************************
 * SERVER
 ******************************************************/
app.listen(PORT, () => {
  console.log(`\n[+] Server started on: `);
  console.log(`http://localhost:${PORT}`);

  const localIp = ip.getLocalIp();

  if (localIp) {
    console.log(`http://${localIp}:${PORT}`);
  }
});
