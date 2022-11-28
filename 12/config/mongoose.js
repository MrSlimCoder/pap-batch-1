const mongoose = require('mongoose'); // Mongodb (Mongoose) package

mongoose.connect(process.env.DB)
.then(() => {
    console.log('DATABASE IS CONNECTED');
})
.catch((e) => {
   console.log('DATABASE ERROR ', e);
});