var express = require('express');
var Product = require('../models/product')
var User = require('../models/user')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trang chủ' });
});

/* GET Admin page. */
router.get('/siteadmin', function(req, res, next) {
  res.render('admin', { title: 'Site Admin' });
});

/* GET Admin Dasboard page. */
router.get('/manager', function(req, res, next) {
  res.render('admin-dashboard2', { title: 'Manager' });
});

/* GET categories page */
router.get('/categories', function(req, res, next) {
  res.render('categories', { title: 'Danh mục' });
});

/* GET detail page */
router.get('/detail', function(req, res, next) {
  res.render('detail', { title: 'Chi tiết sản phẩm' });
});

/* GET payment page */
router.get('/payment', function(req, res, next) {
  res.render('payment', { title: 'Thanh toán' });
});

/* GET cart page */
router.get('/shoppingcart', function(req, res, next) {
  res.render('cart', { title: 'Giỏ hàng' });
});

/* GET sign-in page */
router.get('/signin', function(req, res, next) {
  res.render('sign-in', { title: 'Đăng ký' });
});

/*GET all user */
router.get('/users', (req, res)=>{
  User.findAll()
  .then((users)=>{
    res.status(200).send(users)
  })
  .catch((err)=>{
    res.status(500).send({
      error: 'Could not retrive users'
    })
  })
})
/*Add a user */
router.post('/users', (req, res)=>{
  User.create({
    name: req.body.name
  }).then((user)=>{
    res.status(201).send(user)
  }).catch((err)=>{
    res.status(501).send({
      error: 'Could not add new user'
    })
  })
})
/*GET all product */
router.get('/products', (req, res)=>{
  Product.findAll()
  .then((users)=>{
    res.status(200).send(users)
  })
  .catch((err)=>{
    res.status(500).send({
      error: 'Could not retrive products'
    })
  })
})
/*Add a product */
router.post('/products', (req, res)=>{
  if(isNaN(req.body.price)){
    return res.status(403).send({
      error: "Price is not valid number"
    })
  }
  Product.create({
    title: req.body.title,
    oldprice: parseFloat(req.body.oldprice),
    price: parseFloat(req.body.price),
    detail: req.body.detail,
    manufacturer: req.body.manufacturer
  }).then((product)=>{
    res.status(201).send(product)
  }).catch((err)=>{
    res.status(501).send({
      error: 'Could not add new product'
    })
  })
})
module.exports = router;
