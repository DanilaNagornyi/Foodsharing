const router = require('express').Router();
const passport = require('passport');
const User = require('../models/user');
const uploadMulter = require('../multerConfig');

router.post('/register', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(400);
    }
    if (!user) {
      return res.sendStatus(401);
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.sendStatus(402);
      }
      return res.sendStatus(200);
    });
  })(req, res, next);
});

router.post('/registergoogle', async (req, res, next) => {
  try {
    if (req.session.passport) {
      if (req.body.phone && req.body.city) {
        const newGoogleUser = await User.findOneAndUpdate(
          {
            _id: req.session.passport.user,
          },
          {
            $set: {
              phone: req.body.phone,
              city: req.body.city,
              telegram: req.body.telegram,
            },
          },
          { new: true }
        );
        await newGoogleUser.save();
        res.json({ name: newGoogleUser.name });
      } else {
        res.sendStatus(400);
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.sendStatus(404);
    }
    if (!user) {
      return res.sendStatus(404);
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.sendStatus(404);
      }
      return res.json({ name: user.name });
    });
  })(req, res, next);
});

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  if (req.user.city) {
    res.redirect('/');
  } else {
    res.redirect('/completionofregistration');
  }
});

router.get('/checkAuth', (req, res) => {
  try {
    req.session.passport ? res.sendStatus(200) : res.sendStatus(401);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get('/logout', (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie(req.app.get('cookieName')).sendStatus(200);
  } catch (error) {
    req.sendStatus(500);
  }
});

module.exports = router;
