const express = require('express');
const router = express.Router();
const Clayful = require('clayful');
const Product = Clayful.Product;
const Customer = Clayful.Customer;
const Cart = Clayful.Cart;
const Order = Clayful.Order;
const Image = Clayful.Image;
const Vendor = Clayful.Vendor;

Clayful.config({
    client: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNmYTAzZTkwZTJhYTk1ZjAxOWMzY2MyOWI0YTdlZjdhMTA0NDQ1MTYyNDU2ZTFjNDU1MjZkZTNjODJiOTllNmIiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjAzMjgyNDYzLCJzdG9yZSI6Ik1MRFNQNFdSTU1KWi5BRjNVVFMzVUE5WjYiLCJzdWIiOiJZMjk2QTlXU1ZHSEcifQ.4Oyi-qbDX13umEaAMucEp8jOVWUTxPmiF9a2nrTxDZI",
    debugLanguage: 'ko'
});


/**
 * @api {post} /vendor 입점사 등록하기
 * @apiSampleRequest /vendor
 * @apiName 입점사 등록하기
 * @apiGroup Vendor
 *
 * @apiParam {String} slug Vendor Slug Unique Name.
 * @apiParam {String} name Vendor Name .
 * @apiParam {String} description Vendor Description.
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
        "name": {
            "ko": "나이스"
        },
        "description": {
            "ko": "<p>스포츠 브랜드 나이스!</p>"
        },
        "logo": "6UQQCEM8GD3D",
        "meta": {
            "businessNum": "XX-32-42",
            "getsPaidAt": "2020-10-05T09:00:00.000Z",
            "notices": []
        },
        "slug": "nice",
        "_id": "2CVQZP7MY8AZ",
        "createdAt": "2020-10-05T08:55:06.144Z",
        "updatedAt": "2020-10-05T08:55:06.144Z"
    }
    */

    const body = req.body;
    const slug = body.slug;
    const name = body.name;
    const description = body.description;

    const payload = {
        slug: slug, // unique
        name: {
            'ko': name,
        },
        description: {
            'ko': description,
        },
        logo: null,

    };

    const options = {
    };

    Vendor.create(payload, options, (err, result) => {

        if (err) {
            // Error case
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
 * @api {get} /vendor/list 입점사 목록보기
 * @apiSampleRequest /vendor/list
 * @apiName 입점사 목록보기
 * @apiGroup Vendor
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

router.get('/list', function(req, res, next) {

    const options = {
        query: {},
    };

    Vendor.list(options, (err, result) => {

        if (err) {
            // Error case
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
 * @api {delete} /vendor 입점사 삭제
 * @apiSampleRequest /vendor
 * @apiName 입점사 삭제
 * @apiGroup Vendor
 *
 * @apiParam {String} vendorId Vendor Register Unique ID.
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

    const body = req.body;
    const vendorId = body.vendorId;

    const options = {
        query: {},
    };

    Vendor.delete(vendorId, options, (err, result) => {

        if (err) {
            // Error case
            res.json(err);
        } else {
            const headers = result.headers;
            const data = result.data;
            console.log(data);
            res.json({result: true, message: "success"});
        }

    });

});

/**
 * @api {get} /vendor/detail/:vendorId 입점사 정보 보기
 * @apiSampleRequest /vendor/detail/3djd3sk
 * @apiName 입점사 정보 보기
 * @apiGroup Vendor
 *
 * @apiParam {String} vendorId Vendor Register Unique ID.
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
router.get("/detail/:vendorId", (req, res) => {

    const vendorId = req.params.vendorId;

    const options = {
        query: {},
    };

    Vendor.get(vendorId, options, (err, result) => { // L2TRDEY5EV5Z

        if (err) {
            // Error case
            res.json(err);
        } else {
            const headers = result.headers;
            const data = result.data;
            console.log(data);
            res.json(data);
        }

    });

})

module.exports = router;