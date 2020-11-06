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

/**
 * @api {get} /order/user/:orderId/:token 사용자 주문 정보 가져오기
 * @apiSampleRequest /order/user/:orderId/:token
 * @apiName 사용자 주문 정보 가져오기
 * @apiGroup Order
 *
 * @apiParam {String} orderId Product Order Unique ID.
 * @apiParam {String} token User Token.
 *
 * @apiSuccess {String} result Return Result true or false.
 * @apiSuccess {String} message result: false ( Return Error Message ), result: true.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       result: true,
 *       message: order(information)
 *     }
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "result": false
 *       "message": "Error Message"
 *     }
 */

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


/**
 * @api {post} /order/cancel 사용자 주문 취소하기 (결제대기 상태)
 * @apiSampleRequest /order/cancel
 * @apiName 사용자 주문 취소하기 (결제대기 상태)
 * @apiGroup Order
 *
 * @apiParam {String} orderId Product Order Unique ID.
 * @apiParam {String} token User Token.
 *
 * @apiSuccess {String} result Return Result true or false.
 * @apiSuccess {String} message result: false ( Return Error Message ), result: true.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       result: true,
 *       message: order(information)
 *     }
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "result": false
 *       "message": "Error Message"
 *     }
 */

router.post('/cancel', (req, res, next) => {

    const body = req.body;
    const orderId = body.orderId;
    const token = body.token;

    const payload = {
        // by: 'customer',
        reason: 'JUST 그냥'
    };

    const options = {
        // customer login token
        customer: token
    };

    Order.cancelForMe(orderId, payload, options, (err, response) => {

        if (err) {
            res.json(err);
        } else {
            const data = response.data;
            res.json(data);
        }

    });

});

/**
 * @api {post} /order/refund 사용자 주문 취소 (결제완료 상태)
 * @apiSampleRequest /order/refund
 * @apiName 사용자 주문 취소 (결제완료 상태)
 * @apiGroup Order
 *
 * @apiParam {String} orderId Product Order Unique ID.
 * @apiParam {String} itemId Product Order Item Unique ID. ex) items 하위에 있는 _id를 사용합니다 (items.$._id).
 * @apiParam {String} refundMessage Refund Message.
 * @apiParam {String} token User Token.
 *
 * @apiSuccess {String} result Return Result true or false.
 * @apiSuccess {String} message result: false ( Return Error Message ), result: true.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       result: true,
 *       message: JSON(Response Data)
 *     }
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "result": false
 *       "message": "Error Message"
 *     }
 */
router.post('/refund', (req, res, next) => {

    const body = req.body;
    const refundMessage = body.refundMessage;
    const itemId = body.itemId;
    const token = body.token;
    const orderId = body.orderId;

    const payload = {
        reason: refundMessage,
        items: [{
                item: itemId, // items 하위에 있는 _id를 사용합니다 (items.$._id)
                quantity: 1
        }],
        shipments: []
    };

    const options = {
        customer: token
    }

    // Order.requestRefund('orderId', payload, ...);
    Order.requestRefundForMe(orderId, payload, options, (err, response) => {

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


/**
 * @api {get} /order/list/:token 고객의 주문 상품 리스트
 * @apiSampleRequest /order/list/:token
 * @apiName 고객의 주문 상품 리스트
 * @apiGroup Order
 *
 * @apiParam {String} token User Token.
 *
 * @apiSuccess {String} result Return Result true or false.
 * @apiSuccess {String} message result: false ( Return Error Message ), result: true.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       result: true,
 *       message: JSON(Response Data)
 *     }
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "result": false
 *       "message": "Error Message"
 *     }
 */

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

/**
 * @api {get} /order/detail/:orderId 고객의 상품 주문 정보 및 결제 상태 확인
 * @apiSampleRequest /order/detail/:orderId
 * @apiName 고객의 상품 주문 정보 및 결제 상태 확인
 * @apiGroup Order
 *
 * @apiParam {String} orderId Order Unique ID.
 *
 * @apiSuccess {String} result Return Result true or false.
 * @apiSuccess {String} message result: false ( Return Error Message ), result: true.
 *
 * @apiDescription #94 - 가입 승인
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       result: true,
 *       message: JSON(Response Data)
 *     }
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "result": false
 *       "message": "Error Message"
 *     }
 */
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

////////////////////////////////

/**
 * @api {get} /order/all/list 주문 전체 목록 보기
 * @apiSampleRequest /order/all/list
 * @apiName 주문 전체 목록 보기
 * @apiGroup Order
 *
 * @apiSuccess {String} result Return Result true or false.
 * @apiSuccess {String} message result: false ( Return Error Message ), result: true.
 *
 * @apiDescription #94 - 가입 승인
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       result: true,
 *       message: JSON(Response Data)
 *     }
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "result": false
 *       "message": "Error Message"
 *     }
 */

router.get("/all/list", (req, res) => {

    const options = {
        query: {},
    };

    Order.list(options, (err, result) => {

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
