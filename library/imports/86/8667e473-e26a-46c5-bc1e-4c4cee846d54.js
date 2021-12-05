"use strict";
cc._RF.push(module, '8667eRz4mpGxbweTEzuhG1U', 'login');
// login.js

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
        email: {
            default: null,
            type: cc.EditBox
        },
        password: {
            default: null,
            type: cc.EditBox
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

    //onLoad:function () {},


    login: function login() {
        var _this = this;

        var _http = new _http3.default();
        var accountNode = cc.director.getScene().getChildByName('Account');
        var account = accountNode.getComponent('account');

        var information = [];
        information[0] = this.email.string;
        information[1] = this.password.string;

        _http.login("/session/create", information, function (res) {
            if (res.code == -1) {
                _this.result.string = "邮箱或密码错误！";
                _this.email.string = "";
                _this.password.string = "";
            } else {
                account.setid(res.data.id);
                account.setname(res.data.name);
                account.setemail(res.data.email);
                account.setdepartment(res.data.department);
                _http.get("/class/" + res.data.id, 0, function (res2) {
                    account.setclass(res2.data);
                });
                _this.node.runAction(cc.sequence(cc.delayTime(0.1), cc.callFunc(function () {
                    cc.director.loadScene("我");
                })));
            }
        });
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