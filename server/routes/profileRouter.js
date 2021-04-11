const router = require("express").Router();
const User = require("../models/user");
const Products = require("../models/product");

router.get("/", async (req, res) => {
  if (req.session.passport) {
    try {
      const user = await User.findById(req.session.passport.user);
      const productsArr = await Products.find({
        owner: req.session.passport.user,
      });
      res.json({
        user: {
          name: user.name,
          surname: user.surname,
          email: user.email,
          phone: user.phone,
          telegram: user.telegram,
          city: user.city,
          photo: user.photo,
        },
        product: productsArr,
      });
    } catch (error) {
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(401);
  }
});

router.patch("/", async (req, res) => {
  console.log(req.body);
  if (req.session.passport) {
    try {
      const user = await User.findById(req.session.passport.user);
      console.log(user, "find");
      user.name = req.body.name;
      user.surname = req.body.surname;
      user.phone = req.body.phone;
      user.telegram = req.body.telegram;
      user.city = req.body.city;
      await user.save();
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(401);
  }
});

router.get("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const user = await User.findById(req.params.id);
    if (user) {
      res.json({

        name: user.name,
        surname: user.surname,
        phone: user.phone,
        telegram: user.telegram,
        city: user.city,
        photo: user.photo,

      });
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});
module.exports = router;
