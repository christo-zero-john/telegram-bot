const botToken = ''
const {Telegraf} = require('telegraf');
const bot = new Telegraf(botToken);

bot.command('help', ctx => {
    ctx.reply("Hello, How can I help you??")
})

console.log("Bot started! Open your bot and sent the command /help");
bot.launch();