const { Account, Profile, Comment } = require('../models');

const getAccountAndProfileById = async (id) => {
  const account = await Account.findOne({
    where: { id },
    include: [
      { model: Profile, as: 'profile' },
      { model: Comment, as: 'comments' },
    ],
  });
  return account;
};

const getAccountById = async (id) => {
  const account = await Account.findOne({
    where: { id },
  });
  return account;
};

const createAccount = async ({ email, password }) => {
  const { id } = await Account.create({ email, password });
  return id;
};

module.exports = {
  getAccountAndProfileById,
  getAccountById,
  createAccount,
};
