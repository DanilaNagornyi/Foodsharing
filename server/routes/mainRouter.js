const router = require("express").Router();
const Products = require("../models/product");

router.get("/products", async (req, res) => {
  try {
    const arrProducts = await Products.find();
    if (arrProducts) {
      res.json(arrProducts);
    } else {
      res.sendStatus(503);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post("/products", async (req, res) => {
  console.log(req.session.passport, req.body);
  try {
    if (req.session.passport) {
      const newProduct = new Products({
        category: req.body.category,
        name: req.body.name,
        description: req.body.description,
        photo: req.body.photo,
        geolocation: req.body.geolocation,
        quantity: req.body.quantity,
        validUntil: req.body.validUntil,
        owner: req.session.passport.user,
      });
      await newProduct.save();
      res.json(newProduct);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

router.patch("/products", async (req, res) => {
  if (res.session.passport) {
    try {
      const product = await Products.findById(req.body.id).populate("owner");
      if (res.session.passport.user === product.owner._id) {
        product.status = false;
        await product.save();
        res.json(product);
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
    const categoriesProducts = await Products.find({
      category: `${req.params.categories}`,
    });
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

module.exports = router;
