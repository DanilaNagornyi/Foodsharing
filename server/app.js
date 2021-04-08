const express = require("express");
const cors = require("cors");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const logger = require("morgan");
const passport = require("passport");
const mainRouter = require("./routes/mainRouter");
const userRouter = require("./routes/userRouter");
const User = require("./models/user");
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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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

// app.use(async (req, res, next) => {
//   const userId = req.session?.user;
//   if (userId) {
//     const currentUser = await User.findById(userId);
//     if (currentUser) {
//       res.locals.name = currentUser.name;
//       res.locals.email = currentUser.email;
//     }
//   }
//   next();
// });

app.use(passport.initialize());
app.use(passport.session());

app.use("/user", userRouter);
app.use("/", mainRouter);

app.listen(process.env.PORT, () => {
  console.log("Server App on port", process.env.PORT);
  mongoose.connect(
    process.env.MONGO_CONNECT,
    {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    console.log("DB Started")
  );
});
