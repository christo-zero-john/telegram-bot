const botToken = '';
const {Telegraf} = require('telegraf');
const bot = new Telegraf(botToken);

bot.command(['start','calculate'], (ctx) => {
    ctx.reply(`Sent me your formukla`);
    
});

console.log("Bot started! Open your bot and sent the command /start or calculate");
bot.launch();