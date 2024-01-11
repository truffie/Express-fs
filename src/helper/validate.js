function validateID(req, _res, next) {
  const { id } = req.params;
  if (typeof +id != 'number') throw new Error('invalid id');
  if (id <= 0) throw new Error('error in id');
  next();
}
module.exports = { validateID };
