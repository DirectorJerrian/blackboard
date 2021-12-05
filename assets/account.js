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

    onLoad: function() {
         cc.game.addPersistRootNode(this.node);
    },

    start () {

    },

    getid:function(){
        return this.id;
    },

    setid:function(id){
        this.id=id;
    },

    getname:function(){
        return this.nickname;
    },

    setname:function(nickname){
        this.nickname=nickname
    },

    getdepartment:function(){
        return this.department;
    },

    setdepartment:function(department){
        this.department=department
    },

    getemail:function(){
        return this.email;
    },

    setemail:function(email){
        this.email=email;
    },

    getclass:function(){
        return this.theclass;
    },

    setclass:function(theclass){
        this.theclass=theclass;
    },

    getactivityid:function(){
        return this.activityid;
    },

    setactivityid:function(activityid){
        this.activityid=activityid;
    },
    // update (dt) {},
});
