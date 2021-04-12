const router = require("express").Router();
const fetch = require('node-fetch');
const User = require("../models/user");
const Products = require("../models/product");
const Categories = require("../models/categories");
const user = require("../models/user");

router.get("/", async (req, res) => {
  if (req.session.passport) {
    try {
      const user = await User.findById(req.session.passport.user);
      res.json({ subscribe: user.subscribes });
    } catch (error) {
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(401);
  }
});

router.post("/", async (req, res) => {
  if (req.session.passport) {
    try {
      const user = await User.findById(req.session.passport.user);
      const category = await Categories.findOneAndUpdate(
        {
          name: req.body.category,
        },
        {
          $push: { subscribers: req.session.passport.user },
        },
        { safe: true, upsert: true, new: true }
      );
      user.subscribes = [...user.subscribes, req.body.category]
      await user.save()
      res.sendStatus(200)
    } catch (error) {
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(401);
  }
});

router.delete("/", async (req, res) => {
  if (req.session.passport) {
    try {
      const user = await User.findById(req.session.passport.user);
      user.subscribes = user.subscribes.filter(el => el !== req.body.category)
      const category = await Categories.findOne({ name: req.body.name });
      category.subscribers = category.subscribers.filter(el => el !== req.session.passport.user)
      await category.save()
      await user.save()
      res.sendStatus(200)
    } catch (error) {
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(401);
  }
});




module.exports = router;
