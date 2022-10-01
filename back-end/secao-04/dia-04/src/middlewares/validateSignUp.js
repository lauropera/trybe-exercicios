module.exports = (req, _res, next) => {
  const { firstName, email, password, phone } = req.body;
  if ([firstName, email, password, phone].includes(undefined)) {
    const error = {
      statusCode: 401,
      message: 'Campos ausentes!',
    };
    return next(error);
  }
  next();
};
