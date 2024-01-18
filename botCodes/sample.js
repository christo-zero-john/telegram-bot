const botToken = '';
const {Telegraf} = require ('telegraf');
const bot = new Telegraf(botToken);

bot.command(['start'],ctx =>{
    ctx.reply("Bot started");
})

bot.launch();