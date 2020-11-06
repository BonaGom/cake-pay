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

  const options = {
    query: {
      userId: 'seeso@seeso.com',
    },
  };

  Customer.list(options, (err, result) => {

    if (err) {
      res.json(err);
    } else {
      res.json(result.data);
    }

  });

  //res.send('respond with a resource');
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

router.get("/list", (req, res) => {

  const userId = req.params.userId;

  const options = {
    query: {
      userId: 'seeso@seeso.com',
    },
  };

  Customer.list(options, (err, result) => {

    if (err) {
      res.json(err);
    } else {
      console.log(result.data[0]._id);
      res.json(result.data);
    }

  });

});


/**
 * @api {get} /user/:userId 사용자 정보 보기
 * @apiSampleRequest /user/sesso@seeso.com
 * @apiName 사용자 상품 카트 담기
 * @apiGroup User
 *
 * @apiParam {String} userId User Unique ID.
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

router.get("/:userId", (req, res) => {

  /*
  {
  "name": {
    "first": null,
    "last": null,
    "full": null
  },
  "address": {
    "primary": null,
    "secondaries": []
  },
  "connect": true,
  "verified": false,
  "groups": [],
  "userId": "seeso1@seeso.com",
  "alias": null,
  "email": null,
  "avatar": null,
  "gender": null,
  "birthdate": null,
  "country": null,
  "mobile": null,
  "phone": null,
  "language": null,
  "currency": null,
  "timezone": null,
  "deactivatedAt": null,
  "lastLoggedInAt": null,
  "_id": "WUYCQJ3G6JRA",
  "social": [
  ],
  "meta": {
  },
  "createdAt": "2020-11-05T05:18:49.396Z",
  "updatedAt": "2020-11-05T05:18:49.396Z"
  }
   */

  const userId = req.params.userId;


  const options = {
    query: {
      userId: userId,
    },
  };

  Customer.list(options, (err, result) => {

    if (err) {
      res.json(err);
    } else {

      if(result.data.length === 0) {
        res.json({result: false, message: "not found user information"});
        return;
      }

      Customer.get(result.data[0]._id, (err, result) => {

        if (err) {
          res.json(err);
        } else {
          res.json(result.data);
        }

      });
    }
  });

})


/**
 * @api {delete} /user 사용자 정보 삭제
 * @apiSampleRequest /user
 * @apiName 사용자 정보 삭제
 * @apiGroup User
 *
 * @apiParam {String} userId User Unique ID.
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

router.delete("/", (req, res) => {

  /*
  {
  "name": {
    "first": null,
    "last": null,
    "full": null
  },
  "address": {
    "primary": null,
    "secondaries": []
  },
  "connect": true,
  "verified": false,
  "groups": [],
  "userId": "seeso1@seeso.com",
  "alias": null,
  "email": null,
  "avatar": null,
  "gender": null,
  "birthdate": null,
  "country": null,
  "mobile": null,
  "phone": null,
  "language": null,
  "currency": null,
  "timezone": null,
  "deactivatedAt": null,
  "lastLoggedInAt": null,
  "_id": "WUYCQJ3G6JRA",
  "social": [
  ],
  "meta": {
  },
  "createdAt": "2020-11-05T05:18:49.396Z",
  "updatedAt": "2020-11-05T05:18:49.396Z"
  }
   */

  const userId = req.body.userId;


  const options = {
    query: {
      userId: userId,
    },
  };

  Customer.list(options, (err, result) => {

    if (err) {
      res.json(err);
    } else {

      if(result.data.length === 0) {
        res.json({result: false, message: "not found user information"});
        return;
      }

      Customer.delete(result.data[0]._id, (err, result) => {

        if (err) {
          res.json(err);
        } else {
          res.json(result.data);
        }

      });
    }
  });

})

module.exports = router;
