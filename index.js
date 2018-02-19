const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
require('./models/User');
require('./services/passport');

// Connect to mongo db
mongoose.connect(keys.mongoDBuri);
const app = express();

app.use(bodyParser.json());
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
// Call paymentRoutes function with app argument.
require('./routes/paymentRoutes')(app);

// Call if in production mode.
if (process.env.NODE_ENV === 'production') {
	// Express serves production assets. ie: main.js, main.css.
	app.use(express.static('client/build'));


	// Express will serve an index.html file if no other routes are found.
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// Use port provided by Heroku or use port 5000
app.listen(process.env.PORT || 5000, "0.0.0.0", function() {
	console.log("Listening on Port");
});
