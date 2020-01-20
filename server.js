const express = require('express')
const cors = require('cors')

/******************************************************
 * CONFIG
 ******************************************************/
const PORT = 9001;

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
  console.log(req);
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
  console.log(`Server listening on http://localhost:${PORT}`)
})
