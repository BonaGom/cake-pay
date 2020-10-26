const express = require('express');
const router = express.Router();
const Clayful = require('clayful');

const Product = Clayful.Product;
const Customer = Clayful.Customer;
const Cart = Clayful.Cart;
const Order = Clayful.Order;

Clayful.config({
    client: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNmYTAzZTkwZTJhYTk1ZjAxOWMzY2MyOWI0YTdlZjdhMTA0NDQ1MTYyNDU2ZTFjNDU1MjZkZTNjODJiOTllNmIiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjAzMjgyNDYzLCJzdG9yZSI6Ik1MRFNQNFdSTU1KWi5BRjNVVFMzVUE5WjYiLCJzdWIiOiJZMjk2QTlXU1ZHSEcifQ.4Oyi-qbDX13umEaAMucEp8jOVWUTxPmiF9a2nrTxDZI",
    debugLanguage: 'ko'
});

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('product respond with a resource');
});

// 상품 정보
router.get('/detail/:productId', (req, res, next) => {

    const options = {
        query: {},
    };

    Product.get(req.params.productId, options, (err, result) => {

        if (err) {
            // Error case
            console.log(err.code);
            res.json(err);
        } else {
            const headers = result.headers;
            const data = result.data;

            res.json(data);
        }

    });

});

// 상품 리스트
router.get('/list', (req, res, next) => {

    const options = {
        query: {},
    };

    Product.list(options, (err, result) => {

        if (err) {
            // Error case
            console.log(err.code);
            res.json(err);
        } else {

            const headers = result.headers;
            const data = result.data;

            console.log(data);
            res.json(data);
        }

    });

});

module.exports = router;
