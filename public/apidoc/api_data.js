define({ "api": [
  {
    "type": "get",
    "url": "/order/detail/:orderId",
    "title": "고객의 상품 주문 정보 및 결제 상태 확인",
    "name": "고객의_상품_주문_정보_및_결제_상태_확인",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "orderId",
            "optional": false,
            "field": "Order",
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
    "filename": "routes/orders.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/order/list/:token",
    "title": "고객의 주문 상품 리스트",
    "name": "고객의_주문_상품_리스트",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "token",
            "optional": false,
            "field": "User",
            "description": "<p>Token.</p>"
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
    "name": "사용자_주문_정보_가져오기",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "orderId",
            "optional": false,
            "field": "Product",
            "description": "<p>Order Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "token",
            "optional": false,
            "field": "User",
            "description": "<p>Token.</p>"
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
    "url": "/order/cancel",
    "title": "사용자 주문 취소하기 (결제대기 상태)",
    "name": "사용자_주문_취소하기_(결제대기_상태)",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "orderId",
            "optional": false,
            "field": "Product",
            "description": "<p>Order Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "token",
            "optional": false,
            "field": "User",
            "description": "<p>Token.</p>"
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
    "title": "사용자 주문 취소하기 (결제완료 상태)",
    "name": "사용자_주문_취소하기_(결제완료_상태)",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "orderId",
            "optional": false,
            "field": "Product",
            "description": "<p>Order Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "refundMessage",
            "optional": false,
            "field": "Refund",
            "description": "<p>Message.</p>"
          },
          {
            "group": "Parameter",
            "type": "token",
            "optional": false,
            "field": "User",
            "description": "<p>Token.</p>"
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
    "url": "/pay",
    "title": "결제 등록",
    "name": "결제_등록",
    "group": "Pay",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "money",
            "optional": false,
            "field": "product",
            "description": "<p>pay money.</p>"
          },
          {
            "group": "Parameter",
            "type": "product",
            "optional": false,
            "field": "Product",
            "description": "<p>Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "variant",
            "optional": false,
            "field": "Variant",
            "description": "<p>Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "paymentMethod",
            "optional": false,
            "field": "Payment",
            "description": "<p>Method Unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "postcode",
            "optional": false,
            "field": "PosyCode.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "state",
            "optional": false,
            "field": "State.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "city",
            "optional": false,
            "field": "City.",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "address1",
            "optional": false,
            "field": "etc",
            "description": "<p>address 1.</p>"
          },
          {
            "group": "Parameter",
            "type": "name",
            "optional": false,
            "field": "Buy",
            "description": "<p>User Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "customer",
            "optional": false,
            "field": "User",
            "description": "<p>Token.</p>"
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
    "name": "상품_정보",
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
    "name": "상품_정보_리스트",
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
  }
] });