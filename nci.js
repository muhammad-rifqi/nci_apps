require('dotenv').config();
const express = require('express');
const apps = express();
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
const db = require('./db/query');

apps.use(cookieParser());
apps.use(bodyParser.json())
apps.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
apps.use(cors());

apps.post('/api/user', db.userlist);

apps.get('/api/user/:id', db.userdetail);

apps.get('/api/userall', db.userall);

apps.get('/api/deleteuser/:id', db.deleteuser);

apps.listen(4001);