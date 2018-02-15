const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// Connect to mongo db
mongoose.connect(keys.mongoDBuri);
const app = express();

// Create cookie session for user to send to server to authenticate user.
app.use(
	cookieSession({
			maxAge: 30 * 24 * 60 * 1000,
			keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

// Call authroutes function (from routes/authRoutes) with app argument.
require('./routes/authRoutes')(app);

// Use port provided by Heroku or use port 5000
app.listen(process.env.PORT || 5000, "0.0.0.0", function() {
	console.log("Listening on Port");
});
