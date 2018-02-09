const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({hi: 'there'});
});

// Use port provided by Heroku or use port 5000

app.listen(process.env.PORT || 5000, "0.0.0.0", function() {
	console.log("Listening on Port");
});
