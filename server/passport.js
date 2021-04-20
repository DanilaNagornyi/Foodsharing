const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcrypt');
var ObjectID = require('mongodb').ObjectID;
const User = require('./models/user');

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
        return done(null, false, { message: 'Неверный логин или пароль' });
      if (await bcrypt.compare(pass, user.password)) return done(null, user);
      return done(null, false, { message: 'Неверный логин или пароль' });
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
          });
          await newUser.save();
          return done(null, newUser);
        } catch (error) {
          return done(null, false, { message: 'Error' });
        }
      } else {
        return done(null, false, { message: 'Mail is already used' });
      }
    }
    return done(null, false, { message: 'Error' });
  } catch (error) {
    done(error);
  }
};

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
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
      callbackURL: 'https://fruitoninja.herokuapp.com/user/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          done(null, currentUser);
        } else {
          new User({
            googleId: profile.id,
            name: profile.name.familyName,
            surname: profile.name.givenName,
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

// passport.use(
//   new GoogleStrategy(
//     {
//       // options for google strategy
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//       callbackURL: "/auth/google/callback",
//     },
//     (accessToken, refreshToken, profile, done) => {
//       // check if user already exists in our own db
//       User.findOne({ googleId: profile.id }).then((currentUser) => {
//         if (currentUser) {
//           // already have this user
//           // console.log('user is: ', currentUser)
//           done(null, currentUser);
//         } else {
//           // if not, create user in our db
//           const { givenName: firstname, familyName: lastname } = profile.name;
//           new User({
//             googleId: profile.id,
//             firstname,
//             lastname,
//           })
//             .save()
//             .then((newUser) => {
//               // console.log('created new user: ', newUser)
//               done(null, newUser);
//             });
//         }
//       });
//     }
//   )
// );
