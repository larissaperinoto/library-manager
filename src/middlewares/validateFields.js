const validateFields = (req, res, next) => {
  const { title, author, release } = req.body;

  if (!title) return res.status(400).json({ message: 'O campo "title" é obrigatório' });
  if (!author) return res.status(400).json({ message: 'O campo "author" é obrigatório' });
  if (!release) return res.status(400).json({ message: 'O campo "release" é obrigatório' });

  next();
};

module.exports = validateFields;