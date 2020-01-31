require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const session = require('express-session');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const ctrl = require('./controller');

app.use(express.json())
app.use(cors());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: 'qoeivwo43ievgv9023g',
    cookie: {maxAge: 1000 * 60 *60 *24 * 365}
  })
)

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))
  console.log('db connected')
}).catch(err => console.log(err))

//ENDPOINTS
app.post('/api/register', ctrl.register)
app.post('/api/login', ctrl.login)
app.get('/api/posts', ctrl.getPosts)
app.post('/api/post', ctrl.addPost)