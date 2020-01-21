const express = require('express')
const cors = require('cors')
const path = require('path');
require('dotenv').config()

const ip = require('./utils/ip');
const time = require('./utils/time');

/******************************************************
 * CONFIG
 ******************************************************/

const PORT = process.env.PORT || 9001;
const LOG_DIR = process.env.LOG_DIR || 'logs';

express.text({
  limit: '10mb'
});

const app = express()
app.use(cors());

/******************************************************
 * UTILS
 ******************************************************/
function isBase64Encoded(str) {
  return Buffer.from(str, 'base64').toString('base64') === str;
}

/******************************************************
 * ROUTES
 ******************************************************/
app.get('/', function (req, res) {
  res.send('See file for API')
})

app.get('/v0/log', function (req, res) {
  console.log(req.query);

  const namespace = req.query.namespace || time.getDate();
  console.log(namespace);
  res.sendStatus(200)
})

app.post('/v0/log', function (req, res) {
  console.log(req);
  res.sendStatus(200)
})

/******************************************************
 * SERVER
 ******************************************************/
app.listen(PORT, () => {
  console.log(`\n[+] Server started on: `)
  console.log(`http://localhost:${PORT}`);

  const localIp = ip.getLocalIp();
  if (localIp) {
    console.log(`http://${localIp}:${PORT}`);
  }
})
