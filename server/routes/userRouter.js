const router = require("express").Router();
const passport = require("passport");

router.post("/register", (req, res, next) => {
  console.log("тут был фетч");
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

// router.post("/register", (req, res) => {
//   res.json(req.body);
// });

router.post("/login", (req, res, next) => {
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
      req.session.user = user._id;
      return res.sendStatus(200);
    });
  })(req, res, next);
});

router.get(
  "/google",
  passport.authenticate("google", {
    scope: "email",
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.json(res);
  }
);

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie(req.app.get("cookieName")).sendStatus(200);
});

module.exports = router;
