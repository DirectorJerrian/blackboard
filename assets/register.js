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
        result:{
            default:null,
            type:cc.Label
        },
        department:{
            default:null,
            type:cc.EditBox
        },
        email:{
            default:null,
            type:cc.EditBox
        },
        nickname:{
            default:null,
            type:cc.EditBox
        },
        password:{
            default:null,
            type:cc.EditBox
        },
        passwordAgain:{
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

    //onLoad:function () {},

    
    register:function(){
        function IsEmail(str) {
            var reg=/^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
            return reg.test(str);
        }

        if(IsEmail(this.email.string) !== true){
            this.result.string='输入的邮箱地址不符合格式！';
            this.email.string="";
            return 
        }
        if(this.password.string!=null){
            if(this.password.string.length<6){
                this.result.string='密码长度不得低于六位！';
                this.password.string="";
                this.passwordAgain.string="";
                return
            }
        }
        if(this.passwordAgain.string!=this.password.string){
            this.result.string='两次输入密码不一致！';
                this.password.string="";
                this.passwordAgain.string="";
                return
        }

        var information=[];
        information[0]=this.department.string;
        information[1]=this.email.string;
        information[2]=this.nickname.string;
        information[3]=this.password.string;

        let _http = new http();
        _http.register("/user/account",information,(res)=>{
            this.result.string='注册成功! 两秒后将自动切换到登录界面';
            this.node.runAction(cc.sequence(cc.delayTime(2),cc.callFunc(function(){cc.director.loadScene('登录')})));
        })
    },

    start () {

    },

    // update (dt) {},
});
