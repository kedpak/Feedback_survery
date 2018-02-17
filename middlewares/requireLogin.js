// Custom middleware for checking if user is logged in when
// charging user for credits.
module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'No user logged in.'});
  }
  // next moves on to next middleware after this one is completed. 
  next();
};
