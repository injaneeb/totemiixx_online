const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_API_TOKEN'; // جای این، توکن خودتو بزن
const bot = new TelegramBot(token, { polling: true });

const adminId = 123456789; // آیدی عددی خودت

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (chatId == adminId) {
    // ادمین داره جواب میده
    let replyId = text.split(':')[0];
    let replyText = text.split(':')[1];
    bot.sendMessage(replyId, `👤 پاسخ پشتیبانی: ${replyText}`);
  } else {
    // کاربر پیام میده
    bot.sendMessage(chatId, `✅ پیام شما ثبت شد، TOTEMIIXX به زودی جواب میده 😏🚀`);
    bot.sendMessage(adminId, `💬 پیام جدید از @${msg.chat.username}:\n${text}\n\nجواب بده با این فرمت:\n${chatId}:متن جواب`);
  }
});
