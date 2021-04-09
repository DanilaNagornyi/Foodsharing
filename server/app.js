const express = require("express");
const cors = require("cors");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const logger = require("morgan");
const passport = require("passport");
const mainRouter = require("./routes/mainRouter");
const userRouter = require("./routes/userRouter");
const profileRouter = require("./routes/profileRouter");
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

app.use(passport.initialize());
app.use(passport.session());

app.use("/", mainRouter);
app.use("/user", userRouter);
app.use("/profile", profileRouter);

app.listen(process.env.PORT, () => {
  console.log("Server App on port", process.env.PORT);
  mongoose.connect(
    process.env.MONGO_CONNECT,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
    console.log("DB Started")
  );
});

// const Products = require("./models/product");

// async function add() {
//   const a = new Products({
//     category: "fruits",
//     name: "Apple",
//     description: "Free Apple",
//     photo:
//       "https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1",
//     geolocation: "Moscow",
//     quantity: "5",
//     status: true,
//     validUntil: "15.07.2021",
//     owner: "606ffb3ea9a18b216ae14627",
//   });
//   await a.save();
// }

// add();
