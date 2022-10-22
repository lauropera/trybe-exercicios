const { Profile } = require('../models');

const getProfileByAccountId = async (accountId) => {
  const profile = await Profile.findOne({
    where: { accountId },
  });
  return profile;
};

const createProfile = async ({ firstName, lastName, phone }, accountId) =>
  Profile.create({ firstName, lastName, phone, accountId });

module.exports = {
  getProfileByAccountId,
  createProfile,
};
