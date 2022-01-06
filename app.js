const express = require('express');
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser');

const publicRoutes = require('./src/routes/');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './src/public')))
app.use('/', publicRoutes);

module.exports = app;