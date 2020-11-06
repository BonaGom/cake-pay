const express = require('express');
const router = express.Router();
const Clayful = require('clayful');
const Product = Clayful.Product;
const Customer = Clayful.Customer;
const Cart = Clayful.Cart;
const Order = Clayful.Order;
const Image = Clayful.Image;

const fs = require('fs');
const FormData = require('form-data');


const multer = require('multer');

const storage = multer.diskStorage({
    //경로 설정
    destination : function(req, file, cb){

        cb(null, 'public/images/');
    },

    //실제 저장되는 파일명 설정
    filename : function(req, file, cb){

        //파일명 설정을 돕기 위해 요청정보(req)와 파일(file)에 대한 정보를 전달함
        //Multer는 어떠한 파일 확장자도 추가하지 않습니다.
        //사용자 함수는 파일 확장자를 온전히 포함한 파일명을 반환해야 합니다.
        let mimeType;

        switch (file.mimetype) {
            case "image/jpeg":
                mimeType = "jpg";
                break;
            case "image/png":
                mimeType = "png";
                break;
            case "image/gif":
                mimeType = "gif";
                break;
            case "image/bmp":
                mimeType = "bmp";
                break;
            default:
                mimeType = "jpg";
                break;
        }

        cb(null, file.fieldname + "_" + new Date().getTime() + "_file" + "." + mimeType);
    }
});

const upload = multer({
    storage: storage
});

Clayful.config({
    client: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNmYTAzZTkwZTJhYTk1ZjAxOWMzY2MyOWI0YTdlZjdhMTA0NDQ1MTYyNDU2ZTFjNDU1MjZkZTNjODJiOTllNmIiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjAzMjgyNDYzLCJzdG9yZSI6Ik1MRFNQNFdSTU1KWi5BRjNVVFMzVUE5WjYiLCJzdWIiOiJZMjk2QTlXU1ZHSEcifQ.4Oyi-qbDX13umEaAMucEp8jOVWUTxPmiF9a2nrTxDZI",
    debugLanguage: 'ko'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('imagetest');
});


/**
 * @api {post} /image 상품 이미지 등록
 * @apiSampleRequest /image
 * @apiName 상품 이미지 등록
 * @apiGroup image
 *
 * @apiParam {String} image Image Parameter Name.
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

router.post('/', upload.single("image"), function(req, res, next) {

    const form = new FormData();

    console.log(req.file.path);

    form.append('model', 'Review');
    form.append('application', 'images');
    form.append('file', fs.createReadStream(req.file.path));

    Image.create(form, (err, result) => {

        if (err) {
            // Error case
            res.json(err);
        } else {
            const data = result.data;
            console.log(data);
            res.json({result: true});
        }

    });

});


module.exports = router;