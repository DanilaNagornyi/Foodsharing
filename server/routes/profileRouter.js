const router = require('express').Router();
const User = require('../models/user');
const Products = require('../models/product');
const uploadMulter = require('../multerConfig');

router.get('/', async (req, res) => {
  try {
    if (req.session.passport) {
      const user = await User.findById(req.session.passport.user);
      if (user) {
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
            telegramid: user.telegramid,
          },
          product: productsArr,
        });
      } else {
        res.sendStatus(404);
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

router.patch('/', async (req, res) => {
  if (req.session.passport) {
    try {
      const user = await User.findById(req.session.passport.user);
      user.name = req.body.name;
      user.surname = req.body.surname;
      user.phone = req.body.phone;
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

router.post('/avatar', uploadMulter.single('file'), async (req, res) => {
  console.log('popal v avatar');
  try {
    if (!req.file) {
      res.send('File was not found');
      return;
    }
    const { filename } = req.file;
    const user = await User.findById(req.session.passport.user);
    const imgPuth = '/img/';
    user.photo = imgPuth + filename;
    await user.save();
    return res.json(user);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ message: 'Upload avatar error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json({
        name: user.name,
        surname: user.surname,
        phone: user.phone,
        telegram: user.telegram,
        city: user.city,
        photo: user.photo,
        geolocation: user.geolocation,
      });
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
