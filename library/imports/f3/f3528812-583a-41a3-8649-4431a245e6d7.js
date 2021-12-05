"use strict";
cc._RF.push(module, 'f3528gSWDpBo4ZJRDGiRebX', 'account');
// account.js

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

    onLoad: function onLoad() {
        cc.game.addPersistRootNode(this.node);
    },

    start: function start() {},


    getid: function getid() {
        return this.id;
    },

    setid: function setid(id) {
        this.id = id;
    },

    getname: function getname() {
        return this.nickname;
    },

    setname: function setname(nickname) {
        this.nickname = nickname;
    },

    getdepartment: function getdepartment() {
        return this.department;
    },

    setdepartment: function setdepartment(department) {
        this.department = department;
    },

    getemail: function getemail() {
        return this.email;
    },

    setemail: function setemail(email) {
        this.email = email;
    },

    getclass: function getclass() {
        return this.theclass;
    },

    setclass: function setclass(theclass) {
        this.theclass = theclass;
    },

    getactivityid: function getactivityid() {
        return this.activityid;
    },

    setactivityid: function setactivityid(activityid) {
        this.activityid = activityid;
    }
    // update (dt) {},
});

cc._RF.pop();