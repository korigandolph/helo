require('dotenv').config()
const express = require('express');
const app = express();
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const ctrl = require('./controller');

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))
  console.log('db connected')
}).catch(err => console.log(err))

//ENDPOINTS
app.post('/api/register', ctrl.register)
app.post('/api/login', ctrl.login)