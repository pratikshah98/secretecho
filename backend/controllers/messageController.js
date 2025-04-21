const Message = require('../models/Message');

exports.getMessages = async (req, res) => {
  const username = req.user.username;
  const messages = await Message.find({ sender: 'p@gmail.com' });
  res.json(messages);
};

exports.createMessage = async (req, res) => {
  const { content, sender } = req.body;
  const message = new Message({ sender, content });
  await message.save();
  res.json(message);
};
