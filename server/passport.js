const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bcrypt = require("bcrypt");
const User = require("./models/user");

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, { email: user.email, id: user._id });
  });
});

const authUser = async (req, email, pass, done) => {
  try {
    if (/login/.test(req.path)) {
      const user = await User.findOne({ email }).lean().exec();
      if (!user)
        return done(null, false, { message: "Неверный логин или пароль" });
      if (await bcrypt.compare(pass, user.password)) return done(null, user);
      return done(null, false, { message: "Неверный логин или пароль" });
    }
    if ((email && pass && req.body.name, req.body.phone, req.body.city)) {
      const user = await User.findOne({ email }).lean().exec();
      if (!user) {
        try {
          const hashPass = await bcrypt.hash(pass, 10);
          const newUser = new User({
            name: req.body.name,
            surname: req.body.surname,
            email,
            phone: req.body.phone,
            telegram: req.body.telegram,
            city: req.body.city,
            password: hashPass,
            photo: req.body.photo
          });
          await newUser.save();
          return done(null, newUser);
        } catch (error) {
          return done(null, false, { message: "Error" });
        }
      } else {
        return done(null, false, { message: "Mail is already used" });
      }
    }
    return done(null, false, { message: "Error" });
  } catch (error) {
    done(error);
  }
};

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passReqToCallback: true,
    },
    authUser
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/user/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          done(null, currentUser);
        } else {
          new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
            photo: profile.photos[0].value,
          })
            .save()
            .then((newUser) => {
              done(null, newUser);
            });
        }
      });
    }
  )
);
