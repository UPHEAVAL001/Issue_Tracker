
const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/mongoose');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

dotenv.config();
app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

const port = process.env.PORT; 
// use express router
app.use('/', require('./routes'));
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
