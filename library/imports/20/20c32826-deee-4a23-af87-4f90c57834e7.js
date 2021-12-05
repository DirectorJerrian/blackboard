"use strict";
cc._RF.push(module, '20c32gm3u5KI6+HT5DFeDTn', 'skip to me');
// skip to me.js

'use strict';

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

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

    toScene: function toScene() {
        var account = cc.director.getScene().getChildByName('Account');
        var id = account.getComponent('account').getid();
        if (id == null) {
            this.node.runAction(cc.sequence(cc.fadeOut(0.5), cc.callFunc(function () {
                cc.director.loadScene('登录');
            })));
        } else {
            this.node.runAction(cc.sequence(cc.fadeOut(0.5), cc.callFunc(function () {
                cc.director.loadScene('我');
            })));
        }
    },

    // LIFE-CYCLE CALLBACKS:

    //onLoad:function () {},

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();