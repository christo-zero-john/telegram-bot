const botToken = '6374135626:AAFk_xQaV1_G3YYsS18kFQ2y509x1wWVKLc';
const {Telegraf} = require ('telegraf');
const bot = new Telegraf(botToken);

bot.command(['start'],ctx =>{
    ctx.reply("Bot started");
})

bot.launch();