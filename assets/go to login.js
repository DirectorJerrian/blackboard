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
        lableInButton:{
            default:null,
            type:cc.Label
        },
        welcome:{
            default:null,
            type:cc.Label
        },
        department:{
            default:null,
            type:cc.Label
        },
        email:{
            default:null,
            type:cc.Label
        },
        yourClass:{
            default:null,
            type:cc.Label
        },
        classInput:{
            default:null,
            type:cc.EditBox
        },
        complete:{
            default:null,
            type:cc.Button
        },
        classNumberIput:{
            default:null,
            type:cc.EditBox
        },
        nameLable:{
            default:null,
            type:cc.Label
        },
        numberLable:{
            default:null,
            type:cc.Label
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
    toScene:function(){
        var account = cc.director.getScene().getChildByName('Account');
        var id = account.getComponent('account').getid();
        if(id==null){
            this.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(function(){cc.director.loadScene('登录')})));
        }else{
            let _http = new http();
            _http.logout((res)=>{
                if(res.code==0){
                    account.getComponent('account').setid(null);
                    this.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.callFunc(function(){cc.director.loadScene('登录')})));
                }else{
                    this.node.runAction(cc.sequence(cc.delayTime(2),cc.callFunc(function(){cc.director.loadScene('登录')})));
                }
            })
            
        }
    },

    onLoad: function() {
        this.classInput.node.x=6666;
        this.complete.node.x=6666;
        this.classNumberIput.node.x=6666;
        this.nameLable.node.x=-6666;
        this.numberLable.node.x=-6666;
        var account = cc.director.getScene().getChildByName('Account').getComponent('account');
        var id = account.getid();
        if(id==null){
            this.welcome.string="Please login first!";
            this.email.string="";
            this.department.string="";
            this.yourClass.string="";
            this.lableInButton.string="登录";
        }else{
            this.welcome.string="欢迎！"+account.getname();
            this.email.string="邮箱："+account.getemail();
            this.department.string="所在院系："+account.getdepartment();
            var n=0;
            var result="";
            console.log(account.getclass());
            let _http=new http();
            _http.get("/class/"+id,0,(res2)=>{account.setclass(res2.data);})
            console.log(1);
            if(account.getclass()!=null && account.getclass()!=" "){
                while(n<account.getclass().length){
                    result=result+account.getclass()[n].name+":"+account.getclass()[n].code+"\n";
                    n++;
                }
            }else{
                result="您尚未加入任何班级！";
            }
            this.yourClass.string=result;
            this.lableInButton.string="注销";
        }
    },

    start () {

    },

    // update (dt) {},
});
