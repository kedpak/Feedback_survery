// Check if the user sending surveys has atleast one credit in account.

module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'No credits!'});
  }
  // next moves on to next middleware after this one is completed.
  next();
};
