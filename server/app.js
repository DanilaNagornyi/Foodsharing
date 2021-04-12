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
const subscribeRouter = require("./routes/subscribeRouter");
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
app.use("/subscribe", subscribeRouter);

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
});

// const Categories = require("./models/categories");

// async function add() {
//   const arr =
//     [new Categories({ name: "Fruits" }),
//     new Categories({ name: "Vegetables" }),
//     new Categories({ name: "BabyFood" }),
//     new Categories({ name: "BakeryProducts" }),
//     new Categories({ name: "Beverages" }),
//     new Categories({ name: "MilkProducts" }),
//     new Categories({ name: "Canned" }),
//     new Categories({ name: "Meet" }),
//     new Categories({ name: "HomeFood" }),
//     new Categories({ name: "Cereals" })
//     ];
//   await Categories.insertMany(arr)
// }

// add();
