const passport = require('passport'); // Importing passport module.

module.exports = app => {
	// Route which initiates passport and tells to use google strategy.
	app.get('/auth/google', passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	// Route which exchanges code to recieve user profile. Puts user on hold until request is sent.
	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			// If google authentication is completed, Redirects to surveys page.
			res.redirect('/surveys');
		}
	);

	// Logs user out. Takes cookie and kills id inside cookie. Redirect back to initial dashboard.
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	// User can now get access to user through authentication
	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
