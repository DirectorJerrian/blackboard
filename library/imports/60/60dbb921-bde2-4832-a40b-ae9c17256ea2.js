"use strict";
cc._RF.push(module, '60dbbkhveJIMqQLrpwXJW6i', 'addOrJoinClass');
// addOrJoinClass.js

'use strict';

var _http2 = require('./http');

var _http3 = _interopRequireDefault(_http2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//引入模块
cc.Class({
    extends: cc.Component,

    properties: {
        result: {
            default: null,
            type: cc.Label
        },
        className: {
            default: null,
            type: cc.EditBox
        },
        classNumber: {
            default: null,
            type: cc.EditBox
        },
        yourClass: {
            default: null,
            type: cc.Label
        }
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

    // onLoad () {},

    addOrJoinClass: function addOrJoinClass() {
        var _this = this;

        var accountNode = cc.director.getScene().getChildByName('Account');
        var account = accountNode.getComponent('account');
        var _http = new _http3.default();

        var information = [];
        information[0] = this.classNumber.string;
        information[1] = this.className.string;
        information[2] = account.getid();
        _http.addOrJoin("/class/addOrEnter", information, function (res) {
            _this.result.string = res.data;
        });
        console.log(10);
        _http.get("/class/" + account.getid(), 0, function (res2) {
            account.setclass(res2.data);
        });
        var n = 0;
        var output = "";
        if (account.getclass() != null && account.getclass() != " ") {
            while (n < account.getclass().length) {
                output = output + account.getclass()[n].name + ":" + account.getclass()[n].code + "\n";
                n++;
            }
        } else {
            output = "您尚未加入任何班级！";
        }
        this.yourClass.string = output;
    },

    start: function start() {}
}

// update (dt) {},
); // Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc._RF.pop();