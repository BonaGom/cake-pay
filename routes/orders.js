const express = require('express');
const router = express.Router();

const Clayful = require('clayful');
const Product = Clayful.Product;
const Customer = Clayful.Customer;
const Cart = Clayful.Cart;
const Order = Clayful.Order;

Clayful.config({
    //client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc2NmQwZDBjYWJhMmI0YTY2YjEzMGQzYTY2MzhlMzEyMjdjMzRmOWVlMDFlM2JjNTE4Y2M2MTFlNTkwYTk0ZjgiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjAyNzQxNDYxLCJzdG9yZSI6Ik1MRFNQNFdSTU1KWi5BRjNVVFMzVUE5WjYiLCJzdWIiOiI0NTM4NUtBTFVWVlUifQ.vBjbniLjSs3mxcvL7E2fXPP6ijJKFqasq1JxsFOePFs',
    client: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNmYTAzZTkwZTJhYTk1ZjAxOWMzY2MyOWI0YTdlZjdhMTA0NDQ1MTYyNDU2ZTFjNDU1MjZkZTNjODJiOTllNmIiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjAzMjgyNDYzLCJzdG9yZSI6Ik1MRFNQNFdSTU1KWi5BRjNVVFMzVUE5WjYiLCJzdWIiOiJZMjk2QTlXU1ZHSEcifQ.4Oyi-qbDX13umEaAMucEp8jOVWUTxPmiF9a2nrTxDZI",
    debugLanguage: 'ko'
});

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('order respond with a resource');
});

// 사용자 주문 정보 가져오기
router.get('/user/:orderId/:token', (req, res, next) => {

    const options = {
        customer: req.params.token,
        query: { },
    };

    Order.getForMe(req.params.orderId, options, (err, result) => {

        if (err) {
            // Error case
            console.log(err.code);
            res.json(err);
        } else {
            const headers = result.headers;
            const data = result.data;
            const order = result.data;
            console.log(order._id);
            console.log(order.items[0]._id);
            console.log(order.shipments);
            console.log(order.total.amount);
            console.log(order.currency.payment.code);
            console.log(order.customer.name.full);
            console.log(order.customer.mobile || order.customer.phone);
            console.log(order.customer.email);
            res.json(data);
        }
    });
});

// 결제취소 - 결제 대기에서만 가능
router.get('/cancel', (req, res, next) => {

    const payload = {
        // by: 'customer',
        reason: 'JUST 그냥'
    };

    const options = {
        // customer login token
        customer: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjI5MTdmNmNhNDZiMmYwODYwYzQxMTU4YjM2ZjlmNDQ2MzUyYTBlMjE2ZDhjZmQ4NzA5ZDAwNTY1NjIzMDM2YzAiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2MDMyODQ4NjIsImV4cCI6MTYwMzg4OTY2Miwic3ViIjoiRE4zNkVQRFVKQTJMIn0.fllwSKY7ubcf7_CWBClInkvtuyPRKXolrAnszGe35bo",
    };

    Order.cancelForMe('7HEHUY8AMJ8H', payload, options, (err, response) => {

        if (err) {
            //throw err;
            console.log(err);
            res.json(err);
        } else {
            console.log(response.data);
            const data = response.data;
            res.json(data);
        }

    });

});

// 결제 환불
router.get('/refund', (req, res, next) => {
    //res.send('order respond with a resource');

    const payload = {
        reason: '그냥요',
        items: [{
                item: '3Q3UU3RHJKZT',
                quantity: 1
        }],
        shipments: []
    };

    const options = {
        customer: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjA3YTMxNGRiZWY2N2Q4MDA1ZGU4Y2FjYWZjMDllNGMxYjc5MWJhNmYyMTgxMDU0NjIyNGZmMmY2Y2JlODc0NjEiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2MDMzNTUyMjMsImV4cCI6MTYwMzk2MDAyMywic3ViIjoiRE4zNkVQRFVKQTJMIn0.OzumOuYc-Wmh2_UUVnexEgNNZr9FHTUYNLE6ls-w1c8"
    }

    // Order.requestRefund('orderId', payload, ...);
    Order.requestRefundForMe('66LZCCWFSL7W', payload, options, (err, response) => {

        if (err) {
            //throw err;
            console.log(err);
            res.json(err);
        } else {
            console.log(response.data);
            res.json(response.data)
        }

    });

});


// 고객의 주문 상품 리스트 - 고객의 토큰 필요
router.get('/list/:token', (req, res, next) => {

    const options = {
        // customer login token
        customer: req.params.token,
        query: {},
    };

    Order.listForMe(options, (err, result) => {

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

// 상품 주문 정보
router.get("/detail/:orderId", (req, res) => {

    const options = {
        query: {},
    };

    Order.get(req.params.orderId, options, (err, result) => {

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

})



module.exports = router;
