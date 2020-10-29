const express = require('express');
const router = express.Router();

const Clayful = require('clayful');
const Product = Clayful.Product;
const Customer = Clayful.Customer;
const Cart = Clayful.Cart;
const Order = Clayful.Order;

Clayful.config({
//client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc2NmQwZDBjYWJhMmI0YTY2YjEzMGQzYTY2MzhlMzEyMjdjMzRmOWVlMDFlM2JjNTE4Y2M2MTFlNTkwYTk0ZjgiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjAyNzQxNDYxLCJzdG9yZSI6Ik1MRFNQNFdSTU1KWi5BRjNVVFMzVUE5WjYiLCJzdWIiOiI0NTM4NUtBTFVWVlUifQ.vBjbniLjSs3mxcvL7E2fXPP6ijJKFqasq1JxsFOePFs'
  client: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNmYTAzZTkwZTJhYTk1ZjAxOWMzY2MyOWI0YTdlZjdhMTA0NDQ1MTYyNDU2ZTFjNDU1MjZkZTNjODJiOTllNmIiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjAzMjgyNDYzLCJzdG9yZSI6Ik1MRFNQNFdSTU1KWi5BRjNVVFMzVUE5WjYiLCJzdWIiOiJZMjk2QTlXU1ZHSEcifQ.4Oyi-qbDX13umEaAMucEp8jOVWUTxPmiF9a2nrTxDZI"
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('payment');
});

router.get("/test1", (req, res) => {

  Clayful.config({
    client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc2NmQwZDBjYWJhMmI0YTY2YjEzMGQzYTY2MzhlMzEyMjdjMzRmOWVlMDFlM2JjNTE4Y2M2MTFlNTkwYTk0ZjgiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjAyNzQxNDYxLCJzdG9yZSI6Ik1MRFNQNFdSTU1KWi5BRjNVVFMzVUE5WjYiLCJzdWIiOiI0NTM4NUtBTFVWVlUifQ.vBjbniLjSs3mxcvL7E2fXPP6ijJKFqasq1JxsFOePFs'
  });

  const options = {
    query: {
      page: 1
    }
  };

  Product.list(options, (err, response) => {

    if (err) {
      res.json(err);
    } else {
      res.json(response);
    }

  });

})

router.get("/save", (req, res) => {

  Clayful.config({
    client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc2NmQwZDBjYWJhMmI0YTY2YjEzMGQzYTY2MzhlMzEyMjdjMzRmOWVlMDFlM2JjNTE4Y2M2MTFlNTkwYTk0ZjgiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjAyNzQxNDYxLCJzdG9yZSI6Ik1MRFNQNFdSTU1KWi5BRjNVVFMzVUE5WjYiLCJzdWIiOiI0NTM4NUtBTFVWVlUifQ.vBjbniLjSs3mxcvL7E2fXPP6ijJKFqasq1JxsFOePFs'
  });

  const Cart = Clayful.Cart;

  const payload = {
    product: '2UMCMRNWXCEP',
    variant: 'A9BQUAMWFGKS',
    quantity: 1,
    shippingMethod: "98U4TC4F9R5H",
  };

  const options = {
    customer: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjI5MTdmNmNhNDZiMmYwODYwYzQxMTU4YjM2ZjlmNDQ2MzUyYTBlMjE2ZDhjZmQ4NzA5ZDAwNTY1NjIzMDM2YzAiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2MDMyODQ4NjIsImV4cCI6MTYwMzg4OTY2Miwic3ViIjoiRE4zNkVQRFVKQTJMIn0.fllwSKY7ubcf7_CWBClInkvtuyPRKXolrAnszGe35bo"
  }

// Cart.addItem('customerId', payload, ...);
  Cart.addItemForMe(payload, options, (err, response) => {

    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.json(response);
    }

  });
})


router.get("/carts", (req, res) => {

  Clayful.config({
    client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc2NmQwZDBjYWJhMmI0YTY2YjEzMGQzYTY2MzhlMzEyMjdjMzRmOWVlMDFlM2JjNTE4Y2M2MTFlNTkwYTk0ZjgiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjAyNzQxNDYxLCJzdG9yZSI6Ik1MRFNQNFdSTU1KWi5BRjNVVFMzVUE5WjYiLCJzdWIiOiI0NTM4NUtBTFVWVlUifQ.vBjbniLjSs3mxcvL7E2fXPP6ijJKFqasq1JxsFOePFs'
  });

  const Cart = Clayful.Cart;

  const payload = {
    product: '2UMCMRNWXCEP',
    variant: 'A9BQUAMWFGKS',
    quantity: 1,
    shippingMethod: "98U4TC4F9R5H",
  };

  const options = {
    customer: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjI5MTdmNmNhNDZiMmYwODYwYzQxMTU4YjM2ZjlmNDQ2MzUyYTBlMjE2ZDhjZmQ4NzA5ZDAwNTY1NjIzMDM2YzAiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2MDMyODQ4NjIsImV4cCI6MTYwMzg4OTY2Miwic3ViIjoiRE4zNkVQRFVKQTJMIn0.fllwSKY7ubcf7_CWBClInkvtuyPRKXolrAnszGe35bo"
  }

// Cart.addItem('customerId', payload, ...);
  Cart.addItemForMe(payload, options, (err, response) => {

    if (err) {
      console.log(err);
      res.json(err);
    } else {
      res.json(response);
    }

  });
})

/*router.get("/pay", (req, res) => {

  Clayful.config({
    client: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNmYTAzZTkwZTJhYTk1ZjAxOWMzY2MyOWI0YTdlZjdhMTA0NDQ1MTYyNDU2ZTFjNDU1MjZkZTNjODJiOTllNmIiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjAzMjgyNDYzLCJzdG9yZSI6Ik1MRFNQNFdSTU1KWi5BRjNVVFMzVUE5WjYiLCJzdWIiOiJZMjk2QTlXU1ZHSEcifQ.4Oyi-qbDX13umEaAMucEp8jOVWUTxPmiF9a2nrTxDZI",
    debugLanguage: 'ko'
  });

  const payload = {
    items: [{
      _id: "SMP6QX2SE37R",
      product: 'SMP6QX2SE37R',
      variant: 'UMAZ5Z75RB9H',
      quantity: 1,
      price: 35000
    }],
    address: {
      billing: {
        postcode: '00000',
        country: 'KR',
        state: '서울특별시',
        city: '서울특별시',
        address1: '어딘가구 어딘가로 000',
        address2: '101호',
        name: {
          full: '홍길동'
        },
        mobile: '010-0000-0000',
        phone: '02-000-0000'
      },
      shipping: {
        postcode: '00000',
        country: 'KR',
        state: '서울특별시',
        city: '서울특별시',
        address1: '어딘가구 어딘가로 000',
        address2: '101호',
        name: {
          full: '홍길동'
        },
        mobile: '010-0000-0000',
        phone: '02-000-0000'
      },
    },
    currency: 'KRW',
    paymentMethod: 'YURLW47P2ZGL',
    request: 'I DO NOT WANT ANYTHING!!',
  };

  const options = {
    customer: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjA3YTMxNGRiZWY2N2Q4MDA1ZGU4Y2FjYWZjMDllNGMxYjc5MWJhNmYyMTgxMDU0NjIyNGZmMmY2Y2JlODc0NjEiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2MDMzNTUyMjMsImV4cCI6MTYwMzk2MDAyMywic3ViIjoiRE4zNkVQRFVKQTJMIn0.OzumOuYc-Wmh2_UUVnexEgNNZr9FHTUYNLE6ls-w1c8"
  }

// Cart.checkout('customerId', 'order', payload, ...);
  Cart.checkoutForMe('order', payload, options, (err, response) => {

    if (err) {

      console.log(err);
      res.json(err);

    } else {

      const data = response.data;
      const order = data.order;

      console.log(order._id);
      console.log(order.total.amount);
      console.log(order.currency.payment.code);
      console.log(order.customer.name.full);
      console.log(order.customer.mobile || order.customer.phone);
      console.log(order.customer.email);

      res.json(response);

    }

  });

})*/


module.exports = router;
