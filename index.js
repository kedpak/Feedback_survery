const express = require('express');
require('./services/passport');


const app = express();

// Call authroutes function (from routes/authRoutes) with app argument. 
require('./routes/authRoutes')(app);


// Use port provided by Heroku or use port 5000
app.listen(process.env.PORT || 5000, "0.0.0.0", function() {
	console.log("Listening on Port");
});
