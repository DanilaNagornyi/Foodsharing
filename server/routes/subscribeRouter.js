const router = require('express').Router();
const fetch = require('node-fetch');
const { Telegraf } = require('telegraf');
const User = require('../models/user');
const Products = require('../models/product');
const Categories = require('../models/categories');

const bot = new Telegraf('1714842459:AAEURksRGz6e97Yf4wsppoxddL8iCzoyFJw');

router.get('/', async (req, res) => {
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

router.post('/', async (req, res) => {
  if (req.session.passport) {
    try {
      const user = await User.findById(req.session.passport.user);
      let valid = false;
      user.subscribes.forEach((e) =>
        String(e) === String(req.body.category) ? (valid = true) : null
      );
      if (valid) {
        const category = await Categories.findOne({ name: req.body.category });
        category.subscribers = category.subscribers.filter(
          (e) => String(e) !== String(user._id)
        );
        user.subscribes = user.subscribes.filter(
          (e) => String(e) !== String(req.body.category)
        );
        await category.save();
        await user.save();
      } else {
        await Categories.findOneAndUpdate(
          {
            name: req.body.category,
          },
          {
            $push: { subscribers: req.session.passport.user },
          },
          { safe: true, upsert: true, new: true }
        );
        user.subscribes = [...user.subscribes, req.body.category];
        await user.save();
      }

      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(401);
  }
});

router.delete('/', async (req, res) => {
  if (req.session.passport) {
    try {
      const user = await User.findById(req.session.passport.user);
      user.subscribes = user.subscribes.filter(
        (el) => el !== req.body.category
      );
      const category = await Categories.findOne({ name: req.body.category });
      category.subscribers = category.subscribers.filter(
        (el) => String(el) !== String(req.session.passport.user)
      );
      await category.save();
      await user.save();
      res.sendStatus(200);
    } catch (error) {
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(401);
  }
});

router.get('/message/:category/:id', async (req, res) => {
  const categories = {
    Fruits: 'фрукты',
    Vegetables: 'овощи',
    BabyFood: 'детское питание',
    BakeryProducts: 'хлеб и выпечка',
    Beverages: 'напитки',
    MilkProducts: 'молочные продукты',
    Canned: 'консервированные',
    Meat: 'мясо, рыба',
    HomeFood: 'домашняя кухня',
    Cereals: 'крупы',
  };
  try {
    const category = await Categories.findOne({ name: req.params.category });
    category.subscribers.forEach(async (e) => {
      const user = await User.findById(e);
      const product = await Products.findById(req.params.id);
      bot.telegram.sendMessage(
        Number(user.telegramid),
        `🥷 В категории ${
          categories[req.params.category]
        } новый пост загляни это ${product.name} по адресу:📍${
          product.geolocation
        } \n //food/${req.params.id}`
      );
      // bot.telegram.sendPhoto(Number(user.telegramid), product.photo);
    });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
