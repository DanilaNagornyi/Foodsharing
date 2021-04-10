const router = require("express").Router();
const passport = require("passport");





router.post("/register", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(info.message);
    }
    if (!user) {
      return res.send(info.message);
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(info.message);
      }
      req.session.user = user._id;
      return res.sendStatus(200);
    });
  })(req, res, next);
});

router.post("/login", (req, res, next) => {
  console.log('back');
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.send(info.message);
    }
    if (!user) {
      return res.send(info.message);
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.send(info.message);
      }
      return res.json({ name: user.name });
    });
  })(req, res, next);
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: "email",
  })
);

router.get("/google/callback", (req, res, next) => {
  passport.authenticate("google", (err, user, info) => {
    if (err) {
      return res.sendStatus(503);
    }
    if (!user) {
      return res.sendStatus(400);
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.sendStatus(400);
      }
      req.session.user = user._id;
      return res.json(user);
    });
  })(req, res, next);
});

router.get("/checkAuth", (req, res) => {
  req.session.passport ? res.sendStatus(200) : res.sendStatus(401)
})
router.get("/logout", (req, res) => {
  console.log('Hi, logout');
  req.session.destroy();
  res.clearCookie(req.app.get("cookieName")).sendStatus(200);
});

module.exports = router;
