"use strict";
cc._RF.push(module, '00e08B2+llLIohp3VAVxZda', 'http');
// http.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

var url = "http://47.101.187.188:8888"; //服务器地址

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:
    register: function register(path, params, callBack) {

        var requestUrl = url + path;

        var xhr = cc.loader.getXMLHttpRequest();

        // var data=self.paramData(params);

        var data = params;

        xhr.open("POST", requestUrl);

        xhr.timeout = 5000; //

        //xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");

        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4 && xhr.status == 200) {

                var respone = xhr.responseText;

                callBack(JSON.parse(respone));
            }
        };
        xhr.send(JSON.stringify({
            department: data[0],
            email: data[1],
            logoUrl: "string",
            name: data[2],
            password: data[3]
        }));
    },

    login: function login(path, params, callBack) {
        var requestUrl = url + path;
        var xhr = cc.loader.getXMLHttpRequest();
        // var data=self.paramData(params);
        var data = params;
        xhr.open("POST", requestUrl);
        xhr.timeout = 5000; //
        //xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status == 200) {
                var respone = xhr.responseText;
                callBack(JSON.parse(respone));
            }
        };
        xhr.send(JSON.stringify({
            email: data[0],
            password: data[1]
        }));
    },

    logout: function logout(callBack) {

        var requestUrl = url + "/session/destroy";

        var xhr = cc.loader.getXMLHttpRequest();

        xhr.open("POST", requestUrl);

        xhr.timeout = 5000; //

        //xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");

        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onreadystatechange = function () {

            if (xhr.readyState === 4 && xhr.status == 200) {

                var respone = xhr.responseText;

                callBack(JSON.parse(respone));
            }
        };
        xhr.send();
    },

    addActivities: function addActivities(path, params, callBack) {
        var requestUrl = url + path;
        var xhr = cc.loader.getXMLHttpRequest();
        // var data=self.paramData(params);
        var data = params;
        xhr.open("POST", requestUrl);
        xhr.timeout = 5000; //
        //xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status == 200) {
                var respone = xhr.responseText;
                callBack(JSON.parse(respone));
            }
        };
        xhr.send(JSON.stringify({
            content: data[0],
            createTime: new Date().getTime(),
            //endTime: data[1],
            endTime: new Date(data[1]).getTime(), //'2019/01/01 00:00:00'
            id: 0,
            isAuthor: 1,
            isFinished: 0,
            isPublic: data[6],
            posterUrl: data[2],
            //startTime: data[3],
            startTime: new Date(data[3]).getTime(), //'2019/01/01 00:00:00'
            title: data[4],
            userId: data[5]
        }));
    },

    addExistedActivities: function addExistedActivities(path, params, callBack) {
        var requestUrl = url + path + "/" + params[0] + "/" + params[1]; //params[0]为userId params[1]为activityId
        var xhr = cc.loader.getXMLHttpRequest();
        // var data=self.paramData(params);
        var data = params;
        xhr.open("POST", requestUrl);
        xhr.timeout = 5000; //
        //xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status == 200) {
                var respone = xhr.responseText;
                callBack(JSON.parse(respone));
            }
        };
        xhr.send(JSON.stringify({}));
    },

    updateActivities: function updateActivities(path, params, callBack) {
        var requestUrl = url + path;
        var xhr = cc.loader.getXMLHttpRequest();
        // var data=self.paramData(params);
        var data = params;
        xhr.open("POST", requestUrl);
        xhr.timeout = 5000; //
        //xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status == 200) {
                var respone = xhr.responseText;
                callBack(JSON.parse(respone));
            }
        };
        xhr.send(JSON.stringify({
            createTime: new Date().getTime(),
            id: data[0],
            title: data[1],
            content: data[2],
            startTime: new Date(data[3]).getTime(), //'2019/01/01 00:00:00'
            endTime: new Date(data[4]).getTime(), //'2019/01/01 00:00:00'
            isPublic: data[5],
            posterUrl: data[6],
            isAuthor: 1, //无法修改
            isFinished: 0, //无法修改
            userId: 0 //无法修改
            //data[0]为id data[1]为title ...
        }));
    },

    addOrJoin: function addOrJoin(path, params, callBack) {
        var requestUrl = url + path;
        var xhr = cc.loader.getXMLHttpRequest();
        // var data=self.paramData(params);
        var data = params;
        xhr.open("POST", requestUrl);
        xhr.timeout = 5000; //
        //xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status == 200) {
                var respone = xhr.responseText;
                callBack(JSON.parse(respone));
            }
        };
        xhr.send(JSON.stringify({
            code: data[0],
            name: data[1],
            userId: data[2]
        }));
    },

    get: function get(path, params, callBack) {

        var requestUrl = url + path;

        var xhr = cc.loader.getXMLHttpRequest();

        // var data=self.paramData(params);

        var data = params;

        xhr.open("GET", requestUrl);

        xhr.timeout = 5000; //

        //xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8");

        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.onreadystatechange = function () {
            console.log(xhr.status);

            if (xhr.status == 200) {
                var respone = xhr.responseText;

                callBack(JSON.parse(respone));
            }
        };
        xhr.send();
    },
    // onLoad () {},

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();