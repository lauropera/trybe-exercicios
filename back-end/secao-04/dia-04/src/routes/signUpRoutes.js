const express = require('express');
const router = express.Router();

const generateToken = require('../utils/generateToken');
const validateSignUp = require('../middlewares/validateSignUp');

router.post('/', validateSignUp, (req, res) => {
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = router;
