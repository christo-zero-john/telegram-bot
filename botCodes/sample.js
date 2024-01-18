const botToken = '';
const {Telegraf} = require ('telegraf');
const bot = new Telegraf(botToken);

bot.command(['start'],ctx =>{
    ctx.reply("Bot started");
})

console.log("Bot started sent the command /start to your bot")
bot.launch();