const bodyParser = require('body-parser'); // included in express.js

// postman/frontend data convert to json by using body parser 
module.exports = {
    bodyParser: bodyParser.json()
}