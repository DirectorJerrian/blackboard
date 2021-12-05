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
        scrollview:cc.ScrollView,
        eventPrefab:{
            default:null,
            type:cc.Prefab
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

    onLoad:function () {
        let _http = new http();
        var accountNode = cc.director.getScene().getChildByName('Account');
        var account = accountNode.getComponent('account');

        if(account.getid()==null){
            for(var i=0;i<4;i++){
                var newEvent = cc.instantiate(this.eventPrefab);
                if(i=3){
                    newEvent.getComponentsInChildren(cc.Label)[0].string="Please login first！";
                }
                this.scrollview.content.addChild(newEvent);
                newEvent.setPosition(cc.v2(50,-300-i*160));
            }
        }else{
            _http.get("/activity/public",{},(res)=>{
                var j=1;
                while(j<this.scrollview.content.childrenCount){
                    this.scrollview.content.children[j].destroy();
                    j++;
                }
                for(var i=0;i<res.data.length;i++){
                    var newEvent = cc.instantiate(this.eventPrefab);
                    newEvent.getComponentsInChildren(cc.Label)[0].string=(i+1)+"."+res.data[i].title;
                    var time1=new Date(res.data[i].startTime).toLocaleDateString();
                    var time2=new Date(res.data[i].endTime).toLocaleDateString();
                    newEvent.getComponentsInChildren(cc.Label)[1].string="● Time:"+time1+"\n~"+time2;
                    newEvent.getComponentsInChildren(cc.Label)[2].string="● Address:"+res.data[i].poster_url;
                    newEvent.getComponentsInChildren(cc.Label)[3].string="● Content:"+res.data[i].content;
                    this.scrollview.content.addChild(newEvent);
                    var randomx=50+Math.ceil(Math.random()*130);
                    newEvent.setPosition(cc.v2(randomx,-300-i*420));
                }
            
                this.scrollview.scrollToOffset(cc.v2(0,201),0.5);
            });
        }
        this.scrollview.setContentPosition(cc.v2(0,200));
        this.scrollview.node.on('scrolling',function(){
            var position=this.scrollview.getContentPosition();
            if(position.y<200){
                this.scrollview.brake=1;
            }
        },this);
        this.scrollview.node.on('scroll-ended',function(){
            this.scrollview.brake=0.9;
            var position=this.scrollview.getContentPosition();
            if(position.y<100){
                if(account.getid()==null){
                    var j=1;
                    while(j<this.scrollview.content.childrenCount){
                        this.scrollview.content.children[j].destroy();
                        j++;
                    }
                    for(var i=0;i<4;i++){
                        var newEvent = cc.instantiate(this.eventPrefab);
                        if(i=3){
                            newEvent.getComponentsInChildren(cc.Label)[0].string="Please login first！";
                        }
                        this.scrollview.content.addChild(newEvent);
                        newEvent.setPosition(cc.v2(50,-300-i*160));
                    }
                    this.scrollview.scrollToOffset(cc.v2(0,201),0.5);
                }else{
                    _http.get("/activity/public",{},(res)=>{
                        var j=1;
                        while(j<this.scrollview.content.childrenCount){
                            this.scrollview.content.children[j].destroy();
                            j++;
                        }
                        for(var i=0;i<res.data.length;i++){
                            var newEvent = cc.instantiate(this.eventPrefab);
                            newEvent.getComponentsInChildren(cc.Label)[0].string=(i+1)+"."+res.data[i].title;
                            var time1=new Date(res.data[i].startTime).toLocaleDateString();
                            var time2=new Date(res.data[i].endTime).toLocaleDateString();
                            newEvent.getComponentsInChildren(cc.Label)[1].string="● Time:"+time1+"\n~"+time2;
                            newEvent.getComponentsInChildren(cc.Label)[2].string="● Address:"+res.data[i].poster_url;
                            newEvent.getComponentsInChildren(cc.Label)[3].string="● Content:"+res.data[i].content;
                            this.scrollview.content.addChild(newEvent);
                            var randomx=50+Math.ceil(Math.random()*130);
                            newEvent.setPosition(cc.v2(randomx,-300-i*420));
                        }
                    
                        this.scrollview.scrollToOffset(cc.v2(0,201),0.5);
                    });
                }
            }else if(position.y<200){
                this.scrollview.scrollToOffset(cc.v2(0,201),0.5);
            }
        },this);
    },


    start () {

    },


    //update:function (dt) {},
});
