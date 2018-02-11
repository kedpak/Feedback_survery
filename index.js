const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

// Connect to mongo db
mongoose.connect(keys.mongoDBuri);
const app = express();

// Call authroutes function (from routes/authRoutes) with app argument. 
require('./routes/authRoutes')(app);


// Use port provided by Heroku or use port 5000
app.listen(process.env.PORT || 5000, "0.0.0.0", function() {
	console.log("Listening on Port");
});
