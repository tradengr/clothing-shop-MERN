async function httpSignoutUser(req, res, next) {
  req.logOut(err => {
    if (err) return next(err);
    res.status(200).json({ ok: 'Success' });
  });
}

module.exports = { httpSignoutUser };