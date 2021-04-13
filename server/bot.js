// const fetch = require('node-fetch');
// const mongoose = require('mongoose');

const bot = new Telegraf(process.env.BOT_TOKEN);

// mongoose.connect('mongodb+srv://gamzadmin:6Ws1ffnER86R5sme@cluster0.f86ke.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, }, (err) => {
//   err ? console.log(err) : console.log('Connect successful, good job');
// });

bot.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);
    await ctx.reply("Что-то пошло не так");
  }
});

bot.start(async (ctx) => {
  const {
    from: { id: telegramId, username },
  } = ctx.update.message;
  const user = await getOrCreateUser(telegramId, username);
  await user.save();
  ctx.reply(
    "Добро пожаловать в телеграм бот проекта Фудшеринг, теперь тебе будут приходить сообщения о новых публикациях в избранных категориях"
  );
});

bot.launch();
