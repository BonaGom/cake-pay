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

/**
 * @api {post} /cart 사용자 상품 카트 담기
 * @apiSampleRequest /cart
 * @apiName 사용자 상품 카트 담기
 * @apiGroup Cart
 *
 * @apiParam {String} productId Product Unique ID.
 * @apiParam {String} variantId Product variantId Unique ID.
 * @apiParam {String} shippingId shipping Unique ID.
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
router.post('/', function(req, res, next) {

    /*
    {
      "shippingMethod": "98U4TC4F9R5H",
      "request": null,
      "bundleItems": [

      ],
      "addedAt": "2020-11-04T05:06:40.900Z",
      "product": "2UMCMRNWXCEP",
      "variant": "A9BQUAMWFGKS",
      "quantity": 1,
      "_id": "XH83R9RVRGVD"
    }
     */

    const body = req.body;
    const productId = body.productId;
    const variantId = body.variantId;
    const shippingId = body.shippingId;
    const token = body.token;

    const Cart = Clayful.Cart;

    const payload = {
        product: productId,
        variant: variantId,
        quantity: 1,
        shippingMethod: shippingId, // or null
    };

    const options = {
        customer: token
    };

    Cart.addItemForMe(payload, options, (err, response) => {

        if (err) {
            res.json(err);
        } else {
            res.json(response.data);
        }

    });

});

/**
 * @api {delete} /cart 사용자 상품 카트 단일 삭제
 * @apiSampleRequest /cart
 * @apiName 사용자 상품 카트 단일 삭제
 * @apiGroup Cart
 *
 * @apiParam {String} itemId Cart Item Unique ID.
 * @apiParam {String} userToken User Token.
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
router.delete('/', function(req, res, next) {

    /*
   {
     "shippingMethod": "98U4TC4F9R5H",
     "request": null,
     "bundleItems": [

     ],
     "addedAt": "2020-11-04T05:06:40.900Z",
     "product": "2UMCMRNWXCEP",
     "variant": "A9BQUAMWFGKS",
     "quantity": 1,
     "_id": "XH83R9RVRGVD" <- itemId
   }
    */

    const body = req.body;
    const token = body.userToken;
    const itemId = body.itemId;

    const options = {
        customer: token
    };

    Cart.deleteItemForMe(itemId, options, (err, response) => {

        if (err) {
            res.json(err);
        } else {
            res.json(response);
        }

    });

});

/**
 * @api {post} /cart/all/delete 사용자 상품 카트 전체 삭제
 * @apiSampleRequest /cart/all/delete
 * @apiName 사용자 상품 카트 전체 삭제
 * @apiGroup Cart
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
 *       message: order(information)
 *     }
 *
 * @apiErrorExample Error-Response:
 *     {
 *       "result": false
 *       "message": "Error Message"
 *     }
 */
router.post('/all/delete', function(req, res, next) {

    const body = req.body;
    const token = body.token;

    const Cart = Clayful.Cart;

    const options = {
        customer: token
    };

    Cart.emptyForMe(options, err => {

        if (err) {
            res.json(err);
        } else {
            res.json({result: true});
        }

    });

});

/**
 * @api {get} /cart/list/:token 사용자 카트 리스트
 * @apiSampleRequest /cart/list/deq04j1j13
 * @apiName 사용자 카트 리스트
 * @apiGroup Cart
 *
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
router.get('/list/:token', function(req, res, next) {

    const token = req.params.token;

    const Cart = Clayful.Cart;

    const payload = {
    };

    const options = {
        customer: token,
        query: {},
    };

    Cart.getForMe(payload, options, (err, result) => {

        if (err) {
            res.json(err);
        } else {
            res.json(result.data);
        }

    });

});

module.exports = router;
