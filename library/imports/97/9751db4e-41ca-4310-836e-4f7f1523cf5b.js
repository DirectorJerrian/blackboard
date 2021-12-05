"use strict";
cc._RF.push(module, '9751dtOQcpDEINuT38VI89b', 'createOrJoin');
// createOrJoin.js

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

cc.Class({
    extends: cc.Component,

    properties: {
        classInput: {
            default: null,
            type: cc.EditBox
        },
        complete: {
            default: null,
            type: cc.Button
        },
        classNumberIput: {
            default: null,
            type: cc.EditBox
        },
        nameLable: {
            default: null,
            type: cc.Label
        },
        numberLable: {
            default: null,
            type: cc.Label
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
        } },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    creatOrJoin: function creatOrJoin() {
        console.log(1);
        this.classInput.node.x = -40;
        this.complete.node.x = 260;
        this.classNumberIput.node.x = -40;
        this.nameLable.node.x = -260;
        this.numberLable.node.x = -260;
    },

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();