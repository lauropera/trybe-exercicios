const {
  accountService,
  profileService,
  commentService,
} = require('../services');

const getAccountById = async (req, res) => {
  const { id } = req.params;
  const account = await accountService.getAccountAndProfileById(id);
  return res.status(200).json(account);
};

const lazyGetAccountById = async (req, res) => {
  const { id } = req.params;
  const { includeProfile } = req.query;

  const account = await accountService.getAccountById(id);

  if (includeProfile) {
    const profile = await profileService.getProfileByAccountId(id);
    return res.status(200).json({ account, profile });
  }

  return res.status(200).json(account);
};

const getComments = async (req, res) => {
  const { id } = req.params;
  const comments = await commentService.getCommentsByAccountId(id);
  return res.status(200).json(comments);
};

const createAccount = async (req, res) => {
  const accountId = await accountService.createAccount(req.body);
  profileService.createProfile(req.body, accountId);
  return res.status(201).json({ message: 'Cadastrado com sucesso.' });
};

const addNewComment = async (req, res) => {
  const { id } = req.params;
  commentService.addNewComment(id, req.body);
  return res
    .status(201)
    .json({ message: 'Comentário adicionado com sucesso.' });
};

module.exports = {
  getAccountById,
  lazyGetAccountById,
  getComments,
  createAccount,
  addNewComment,
};
