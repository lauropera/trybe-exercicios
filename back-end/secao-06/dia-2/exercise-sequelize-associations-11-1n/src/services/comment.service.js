const { Comment } = require('../models');

const getCommentsByAccountId = async (accountId) => {
  const comments = await Comment.findAll({
    where: { accountId },
  });
  return comments;
};

const addNewComment = (accountId, { message, upvoting, downvoting }) =>
  Comment.create({ message, upvoting, downvoting, accountId });

module.exports = {
  getCommentsByAccountId,
  addNewComment,
};
