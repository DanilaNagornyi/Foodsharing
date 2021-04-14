const router = require("express").Router();
const Products = require("../models/product");
const User = require("../models/user");
const Categories = require("../models/categories");
const fetch = require("node-fetch");

router.get("/products", async (req, res) => {
  try {
    let arrProducts = await Products.find();
    arrProducts = arrProducts.filter((el) => el.status);
    const categories = await Categories.find();
    if (arrProducts.length && categories.length) {
      res.json({ products: arrProducts, categories });
    } else {
      res.sendStatus(503);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post("/products", async (req, res) => {
  // try {
  if (req.session.passport) {
    const newProduct = new Products({
      category: req.body.category,
      name: req.body.name,
      description: req.body.description,
      photo: req.body.photo,
      geolocation: req.body.geolocation,
      quantity: req.body.quantity,
      validUntil: req.body.validUntil.split("-").reverse().join("."),
      owner: req.session.passport.user,
      coordinate: req.body.coordinate,
    });
    await newProduct.save();
    const user = await User.findByIdAndUpdate(
      req.session.passport.user,
      {
        $push: { products: newProduct._id },
      },
      { safe: true, upsert: true, new: true }
    );
    const category = await Categories.findOneAndUpdate(
      {
        name: newProduct.category,
      },
      {
        $push: { productsList: newProduct._id },
      },
      { safe: true, upsert: true, new: true }
    );
    let curcategory = await Categories.findOne({
      name: newProduct.category,
    }).populate("subscribers");

    let arr = curcategory.subscribers.map((el) => el.telegramid);
    Promise.all(
      arr.map((url) =>
        fetch(
          `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${url}&text=New+post+in+your+selected+category+http://localhost:3000/food/${newProduct._id}`
        )
      )
    )
      .then((data) => console.log(data))
      .catch((e) => console.log(e));

    res.json(newProduct);
  } else {
    res.sendStatus(400);
  }
});

router.patch("/products/:id", async (req, res) => {
  console.log("reqbody----->", req.body);
  if (req.session.passport) {
    try {
      const product = await Products.findById(req.params.id);
      if (String(req.session.passport.user) === String(product.owner)) {
        product.geolocation = req.body.geolocation;
        product.name = req.body.name;
        product.description = req.body.description;
        product.quantity = req.body.quantity;
        product.coordinate = req.body.coordinate;
        await product.save();
        res.sendStatus(200);
      } else {
        res.sendStatus(403);
      }
    } catch (error) {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(401);
  }
});

router.patch("/products", async (req, res) => {
  if (req.session.passport) {
    try {
      const product = await Products.findById(req.body.id).populate("owner");
      if (String(req.session.passport.user) === String(product.owner._id)) {
        let category = await Categories.findOne({ name: product.category });
        category.productsList = category.productsList.filter(
          (el) => String(el) !== String(product._id)
        );
        product.status = false;
        await product.save();
        await category.save();
        res.sendStatus(200);
      } else {
        res.sendStatus(403);
      }
    } catch (error) {
      res.sendStatus(404);
    }
  } else {
    res.sendStatus(401);
  }
});

router.get("/products/:categories", async (req, res) => {
  try {
    let categoriesProducts = await Products.find({
      category: `${req.params.categories}`,
    });
    categoriesProducts = categoriesProducts.filter((el) => el.status);
    if (categoriesProducts.length) {
      res.json(categoriesProducts);
    } else {
      res.sendStatus(503);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get("/products/info/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id).populate("owner");
    if (
      req.session.passport &&
      req.session.passport.user === product.owner._id
    ) {
      res.sendStatus(200);
    } else {
      res.json({
        name: product.owner.name,
        surname: product.owner.surname,
        phone: product.owner.phone,
        telegram: product.owner.telegram,
        photo: product.owner.photo,
      });
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get("/products/search/:data", async (req, res) => {
  const data = req.params.data;
  try {
    const nameRegexp = new RegExp(`^${data}.*`, "i");
    const dataProducts = await Products.find();
    let result = dataProducts.filter((el) => nameRegexp.test(el.name));
    if (result) {
      res.json(result);
    } else {
      return res.sendStatus(404);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = router;
