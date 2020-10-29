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
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
 * @api {post} /user 유저 연동 - 클레이풀
 * @apiSampleRequest /user
 * @apiName 유저 연동 - 클레이풀
 * @apiGroup User
 *
 * @apiParam {String} userId User Unique ID or EMail.
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
router.post("/", (req, res) => {

  const body = req.body;
  const userId = body.userId;

  const payload = {
    connect: true,
    userId: userId
  };

  Customer.create(payload, (err, result) => {

    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }

  });

})

/**
 * @api {post} /user/login 유저 로그인 - 클레이풀
 * @apiSampleRequest /user/login
 * @apiName 유저 로그인 - 클레이풀
 * @apiGroup User
 *
 * @apiParam {String} userId User Unique ID or EMail.
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
router.post("/login", (req, res) => {

  const body = req.body;
  const userId = body.userId;

  const payload = {
    userId: userId
  };

  Customer.authenticate(payload, (err, result) => {

    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }

  });

})

module.exports = router;
