const { getAIResponse } = require('./services/aiService');
const Message = require('./models/Message');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('🔌 User connected');

    socket.on('send_msg', async (msg) => {
      try {
        console.log('fsf',msg)
        // Save user message
        const savedMsg = await Message.create({
          content: msg.content,
          sender: msg.sender,
          timestamp: new Date()
        });
        console.log('dfsd',savedMsg)

        io.emit('receive_msg', savedMsg);

        // Simulate AI reply
        setTimeout(async () => {
          const aiReply = {
            content: getAIResponse(),
            sender: 'ai',
            timestamp: new Date()
          };
          const savedAI = await Message.create(aiReply);
          io.emit('receive_msg', savedAI);
        }, 1000);
      } catch (err) {
        console.error('Socket Error:', err.message);
      }
    });

    socket.on('disconnect', () => {
      console.log('❌ User disconnected');
    });
  });
}