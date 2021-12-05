// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
import http from "./http"; //引入模块
cc.Class({
    extends: cc.Component,

    properties: {
        title:{
            default:null,
            type:cc.EditBox
        },
        startTime:{
            default:null,
            type:cc.EditBox
        },
        endTime:{
            default:null,
            type:cc.EditBox
        },
        address:{
            default:null,
            type:cc.EditBox
        },
        content:{
            default:null,
            type:cc.EditBox
        },
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

    //onLoad: function() {},

    launch:function(){
        let _http = new http();
        var accountNode = cc.director.getScene().getChildByName('Account');
        var account = accountNode.getComponent('account');

        var information=[];
        information[0]=this.content.string;
        information[1]=this.endTime.string;
        information[2]=this.address.string;
        information[3]=this.startTime.string;
        information[4]=this.title.string;
        information[5]=account.getid();
        information[6]=1;

        _http.addActivities("/activity/addNew",information,(res)=>{
            this.node.runAction(cc.sequence(cc.delayTime(0.1),cc.callFunc(function(){cc.director.loadScene("活动广场")})));
        })
        
    },

    start () {

    },

    // update (dt) {},
});
