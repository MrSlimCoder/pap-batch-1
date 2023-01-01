require('dotenv').config(); // environment module
const express = require('express'); // package require
const app = express(); // express.js minimal setup/container

// BOILARPLATE
const middleware = require('./middleware'); // middlewares
const config = require('./config'); //configurations
const route = require('./route'); //routes

// MIDDLEWARE
app.use(middleware.cors);
app.use(middleware.bodyParser);
app.use(route.user);

// APPLICATION PORT 
const PORT = config.PORT;

// Listen on PORT 3000
app.listen(PORT, (err) => {
    if(err) console.log(err);
    else console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});