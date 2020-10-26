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
    res.send('Pay respond with a resource');
});

// 상품 결제 정보 - 주문하면 결제 대기로 변환
router.post("/", (req, res) => {

    const body = req.body;
    const money = body.money;

    const payload = {
        items: [{
            _id: "SMP6QX2SE37R", // Product ID
            product: 'SMP6QX2SE37R', // Product ID
            variant: 'UMAZ5Z75RB9H', // Variant ID
            quantity: 1,
            price: money
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
        paymentMethod: 'YURLW47P2ZGL', // 배송방식 ID
        request: 'I DO NOT WANT ANYTHING!!',
    };

    const options = {
        customer: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjA3YTMxNGRiZWY2N2Q4MDA1ZGU4Y2FjYWZjMDllNGMxYjc5MWJhNmYyMTgxMDU0NjIyNGZmMmY2Y2JlODc0NjEiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2MDMzNTUyMjMsImV4cCI6MTYwMzk2MDAyMywic3ViIjoiRE4zNkVQRFVKQTJMIn0.OzumOuYc-Wmh2_UUVnexEgNNZr9FHTUYNLE6ls-w1c8"
    }

    // Cart.checkout('customerId', 'order', payload, ...);
    Cart.checkoutForMe('order', payload, options, (err, response) => {

        if (err) {

            console.log(err);
            res.json({result: false, message: err});

        } else {

            const data = response.data;
            const order = data.order;

            console.log(order._id);
            console.log(order.total.amount);
            console.log(order.currency.payment.code);
            console.log(order.customer.name.full);
            console.log(order.customer.mobile || order.customer.phone);
            console.log(order.customer.email);

            res.json({result: true, message: order});

        }

    });

})

router.get('/update', (req, res, next) => {

    Clayful.config({
        // 비공개
        client: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNmYTAzZTkwZTJhYTk1ZjAxOWMzY2MyOWI0YTdlZjdhMTA0NDQ1MTYyNDU2ZTFjNDU1MjZkZTNjODJiOTllNmIiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjAzMjgyNDYzLCJzdG9yZSI6Ik1MRFNQNFdSTU1KWi5BRjNVVFMzVUE5WjYiLCJzdWIiOiJZMjk2QTlXU1ZHSEcifQ.4Oyi-qbDX13umEaAMucEp8jOVWUTxPmiF9a2nrTxDZI",
        debugLanguage: 'ko'
    });

    const payload = {
        YURLW47P2ZGL: {
            paid: 2000
        }
    };

    const options = {
        customer: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjI5MTdmNmNhNDZiMmYwODYwYzQxMTU4YjM2ZjlmNDQ2MzUyYTBlMjE2ZDhjZmQ4NzA5ZDAwNTY1NjIzMDM2YzAiLCJyb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE2MDMyODQ4NjIsImV4cCI6MTYwMzg4OTY2Miwic3ViIjoiRE4zNkVQRFVKQTJMIn0.fllwSKY7ubcf7_CWBClInkvtuyPRKXolrAnszGe35bo"
    }

    // Order.updateTransactions('orderId', payload, ...);
    Order.updateTransactionsForMe('4CSCRLVT77FN', payload, options, (err, response) => {

        if (err) {
            console.log(err);
            res.json(err);
        } else {
            console.log(response.data);
            res.json(response.data);
        }

    });

});

module.exports = router;
