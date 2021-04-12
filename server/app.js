const express = require("express");
const cors = require("cors");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const { Telegraf } = require('telegraf');
const logger = require("morgan");
const User = require("./models/user");
const passport = require("passport");
const { getOrCreateUser } = require('./helpers/helpers');
const mainRouter = require("./routes/mainRouter");
const userRouter = require("./routes/userRouter");
const profileRouter = require("./routes/profileRouter");
const subscribeRouter = require('./routes/subscribeRouter')
const { subscribe } = require("./routes/mainRouter");
require("dotenv").config();
require("./passport");
const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
  })
);

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.set("trust proxy", 1);
app.set("cookieName", "sid");

app.use(
  session({
    name: app.get("cookieName"),
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    secret: process.env.SECRET_KEY,
    resave: true,
    saveUninitialized: false,
    cookie: { expires: 1000 * 60 * 60 * 12, httpOnly: true },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", mainRouter);
app.use("/user", userRouter);
app.use("/profile", profileRouter);
app.use("/subscribe", subscribeRouter)

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    console.log(error);
    await ctx.reply('Что-то пошло не так');
  }
});
bot.start(async ctx => {
  const { from: { id: telegramId, username } } = ctx.update.message;
  const user = await getOrCreateUser(telegramId, username);
  await user.save()
  ctx.reply('Здорово, что ты хочешь поучаствовать в фудшеринге! Теперь бот будет присылать тебе уведомления о новых постах в избранных тобой категориях.')
})



app.listen(process.env.PORT, () => {
  console.log("Server App on port", process.env.PORT);
  mongoose.connect(
    process.env.MONGO_CONNECT,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
      autoIndex: true,
      poolSize: 10,
      bufferMaxEntries: 0,
    },
    console.log("DB Started")
  );
  bot.launch();
});


