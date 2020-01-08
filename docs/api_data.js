define({ "api": [
  {
    "type": "post",
    "url": "/auth/register/",
    "title": "Login User",
    "name": "LoginUser",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>role</p>"
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
            "field": "token",
            "description": "<p>JWT</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Reponse:",
          "content": "HTTP/1.1 200 OK\n{\n  \"token\": \"18927398172c hsdkucbfy voq2 3rj23.41.2,3k4hjd`x8o237c49p8123759[48c17]`\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/login/",
    "title": "logs in  User",
    "name": "LoginUser",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
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
            "field": "message",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Reponse:",
          "content": "HTTP/1.1 201 OK\n{\n  \"message\": \"success\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./auth/auth-router.js",
    "groupTitle": "Auth"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./docs/main.js",
    "group": "C:\\Users\\jlomo\\Back-End\\docs\\main.js",
    "groupTitle": "C:\\Users\\jlomo\\Back-End\\docs\\main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "id",
    "title": "",
    "name": "Add_Menu_items",
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message:",
            "description": "<p>201</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./menu/menu-router.js",
    "groupTitle": "Menu"
  },
  {
    "type": "number",
    "url": "id",
    "title": "menu item id",
    "name": "Delete_Menu",
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message:",
            "description": "<p>200 &quot;The    menu item has been removed&quot;</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./menu/menu-router.js",
    "groupTitle": "Menu"
  },
  {
    "type": "get",
    "url": "/api/menu",
    "title": "",
    "name": "GetMenu",
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message:",
            "description": "<p>200</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./menu/menu-router.js",
    "groupTitle": "Menu"
  },
  {
    "type": "number",
    "url": "id",
    "title": "menu item id",
    "name": "GetMenu",
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message:",
            "description": "<p>200</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./menu/menu-router.js",
    "groupTitle": "Menu"
  },
  {
    "type": "number",
    "url": "id",
    "title": "menu item id",
    "name": "Update_Menu_Items",
    "group": "Menu",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message:",
            "description": "<p>200</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./menu/menu-router.js",
    "groupTitle": "Menu"
  },
  {
    "type": "delete",
    "url": "/truck/:truck_id",
    "title": "",
    "name": "DeleteTrucks",
    "group": "trucks",
    "version": "0.0.0",
    "filename": "./trucks/trucks-router.js",
    "groupTitle": "trucks"
  },
  {
    "type": "get",
    "url": "/trucks/:operator_id",
    "title": "",
    "name": "GetTrucksByOperatorId",
    "group": "trucks",
    "version": "0.0.0",
    "filename": "./trucks/trucks-router.js",
    "groupTitle": "trucks"
  },
  {
    "type": "get",
    "url": "/trucks",
    "title": "",
    "name": "Gettrucks",
    "group": "trucks",
    "version": "0.0.0",
    "filename": "./trucks/trucks-router.js",
    "groupTitle": "trucks"
  },
  {
    "type": "post",
    "url": "/trucks",
    "title": "",
    "name": "PostTrucks",
    "group": "trucks",
    "version": "0.0.0",
    "filename": "./trucks/trucks-router.js",
    "groupTitle": "trucks"
  },
  {
    "type": "put",
    "url": "/trucks/:truck_id",
    "title": "",
    "name": "PutTrucks",
    "group": "trucks",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>truck's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./trucks/trucks-router.js",
    "groupTitle": "trucks"
  }
] });
