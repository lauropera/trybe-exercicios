module.exports = (req, __res, next) => {
  const { authorization } = req.headers;
  if (!authorization || authorization !== 16) {
    const error = {
      statusCode: 401,
      errorMessage: 'Token inválido!',
    };
    return next(error);
  }
  next();
};
