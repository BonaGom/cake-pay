define({ "api": [
  {
    "type": "get",
    "url": "/order/list/:token",
    "title": "고객의 주문 상품 리스트",
    "sampleRequest": [
      {
        "url": "/order/list/:token"
      }
    ],
    "name": "_____________",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Return Result true or false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>result: false ( Return Error Message ), result: true.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  result: true,\n  message: JSON(Response Data)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"result\": false\n  \"message\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/order/user/:orderId/:token",
    "title": "사용자 주문 정보 가져오기",
    "sampleRequest": [
      {
        "url": "/order/user/:orderId/:token"
      }
    ],
    "name": "______________",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Product Order Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Return Result true or false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>result: false ( Return Error Message ), result: true.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  result: true,\n  message: order(information)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"result\": false\n  \"message\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/order/refund",
    "title": "사용자 주문 취소 (결제완료 상태)",
    "sampleRequest": [
      {
        "url": "/order/refund"
      }
    ],
    "name": "___________________",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Product Order Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "itemId",
            "description": "<p>Product Order Item Unique ID. ex) items 하위에 있는 _id를 사용합니다 (items.$._id).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refundMessage",
            "description": "<p>Refund Message.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Return Result true or false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>result: false ( Return Error Message ), result: true.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  result: true,\n  message: JSON(Response Data)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"result\": false\n  \"message\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/order/cancel",
    "title": "사용자 주문 취소하기 (결제대기 상태)",
    "sampleRequest": [
      {
        "url": "/order/cancel"
      }
    ],
    "name": "_____________________",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Product Order Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User Token.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Return Result true or false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>result: false ( Return Error Message ), result: true.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  result: true,\n  message: order(information)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"result\": false\n  \"message\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/order/detail/:orderId",
    "title": "고객의 상품 주문 정보 및 결제 상태 확인",
    "sampleRequest": [
      {
        "url": "/order/detail/:orderId"
      }
    ],
    "name": "_______________________",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "orderId",
            "description": "<p>Order Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Return Result true or false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>result: false ( Return Error Message ), result: true.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  result: true,\n  message: JSON(Response Data)\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>#94 - 가입 승인</p>",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"result\": false\n  \"message\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/pay",
    "title": "결제 등록",
    "sampleRequest": [
      {
        "url": "/pay"
      }
    ],
    "name": "_____",
    "group": "Pay",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "money",
            "description": "<p>product pay money.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "count",
            "description": "<p>product count.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "product",
            "description": "<p>/product/detail/:productId 주소에서 product ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "variant",
            "description": "<p>/product/detail/:productId 주소에서 variants 배열의 있는 ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "paymentMethod",
            "description": "<p>클레이풀 결제 방식 Unique ID중 하나입니다. EX) 현재는 아임포트 - YURLW47P2ZGL</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postcode",
            "description": "<p>Post Code.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>State Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>City.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address1",
            "description": "<p>기타주소를 입력 1  ex) 서울시 무슨동 어디로.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address2",
            "description": "<p>기타주소를 입력 2 ex) 888로.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>구재마의 이름.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>구매자의 핸드폰 번호.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>구매자의 전화 번호.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customer",
            "description": "<p>사용자 인증 토큰 - 로그인시 token을 받습니다..</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Return Result true or false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>result: false ( Return Error Message ), result: true.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  result: true,\n  message: order(information)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"result\": false\n  \"message\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/pays.js",
    "groupTitle": "Pay"
  },
  {
    "type": "get",
    "url": "/product/detail/:productId",
    "title": "상품 정보",
    "sampleRequest": [
      {
        "url": "/product/detail/:productId"
      }
    ],
    "name": "_____",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "productId",
            "optional": false,
            "field": "Product",
            "description": "<p>Unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Return Result true or false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>result: false ( Return Error Message ), result: true.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  result: true,\n  message: JSON(Response Data)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"result\": false\n  \"message\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/products.js",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/product/list",
    "title": "상품 정보 리스트",
    "sampleRequest": [
      {
        "url": "/product/list"
      }
    ],
    "name": "_________",
    "group": "Product",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Return Result true or false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>result: false ( Return Error Message ), result: true.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  result: true,\n  message: JSON(Response Data)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"result\": false\n  \"message\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/products.js",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/user",
    "title": "유저 연동 - 클레이풀",
    "sampleRequest": [
      {
        "url": "/user"
      }
    ],
    "name": "____________",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User Unique ID or EMail.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Return Result true or false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>result: false ( Return Error Message ), result: true.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  result: true,\n  message: order(information)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"result\": false\n  \"message\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/user/login",
    "title": "유저 로그인 - 클레이풀",
    "sampleRequest": [
      {
        "url": "/user/login"
      }
    ],
    "name": "_____________",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User Unique ID or EMail.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>Return Result true or false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>result: false ( Return Error Message ), result: true.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  result: true,\n  message: order(information)\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"result\": false\n  \"message\": \"Error Message\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  }
] });
