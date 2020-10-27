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

/**
 * @api {get} /product/detail/:productId 상품 정보
 * @apiName 상품 정보
 * @apiGroup Product
 *
 * @apiParam {productId} Product Unique ID.
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


/**
 * @api {get} /product/list 상품 정보 리스트
 * @apiSampleRequest /product/list
 * @apiName 상품 정보 리스트
 * @apiGroup Product
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
