window.__require = function t(e, n, c) {
function i(o, a) {
if (!n[o]) {
if (!e[o]) {
var r = o.split("/");
r = r[r.length - 1];
if (!e[r]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(r, !0);
if (s) return s(r, !0);
throw new Error("Cannot find module '" + o + "'");
}
}
var u = n[o] = {
exports: {}
};
e[o][0].call(u.exports, function(t) {
return i(e[o][1][t] || t);
}, u, u.exports, t, e, n, c);
}
return n[o].exports;
}
for (var s = "function" == typeof __require && __require, o = 0; o < c.length; o++) i(c[o]);
return i;
}({
account: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f3528gSWDpBo4ZJRDGiRebX", "account");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
cc.game.addPersistRootNode(this.node);
},
start: function() {},
getid: function() {
return this.id;
},
setid: function(t) {
this.id = t;
},
getname: function() {
return this.nickname;
},
setname: function(t) {
this.nickname = t;
},
getdepartment: function() {
return this.department;
},
setdepartment: function(t) {
this.department = t;
},
getemail: function() {
return this.email;
},
setemail: function(t) {
this.email = t;
},
getclass: function() {
return this.theclass;
},
setclass: function(t) {
this.theclass = t;
},
getactivityid: function() {
return this.activityid;
},
setactivityid: function(t) {
this.activityid = t;
}
});
cc._RF.pop();
}, {} ],
activityBar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "0fd99CJnYtKt52O82FPwE9y", "activityBar");
var c = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("./http"));
cc.Class({
extends: cc.Component,
properties: {
scrollview: cc.ScrollView,
eventPrefab: {
default: null,
type: cc.Prefab
}
},
onLoad: function() {
var t = this, e = new c.default(), n = cc.director.getScene().getChildByName("Account").getComponent("account");
if (null == n.getid()) for (var i = 0; i < 4; i++) {
var s = cc.instantiate(this.eventPrefab);
(i = 3) && (s.getComponentsInChildren(cc.Label)[0].string = "Please login first！");
this.scrollview.content.addChild(s);
s.setPosition(cc.v2(50, -300 - 160 * i));
} else e.get("/activity/public", {}, function(e) {
for (var n = 1; n < t.scrollview.content.childrenCount; ) {
t.scrollview.content.children[n].destroy();
n++;
}
for (var c = 0; c < e.data.length; c++) {
var i = cc.instantiate(t.eventPrefab);
i.getComponentsInChildren(cc.Label)[0].string = c + 1 + "." + e.data[c].title;
var s = new Date(e.data[c].startTime).toLocaleDateString(), o = new Date(e.data[c].endTime).toLocaleDateString();
i.getComponentsInChildren(cc.Label)[1].string = "● Time:" + s + "\n~" + o;
i.getComponentsInChildren(cc.Label)[2].string = "● Address:" + e.data[c].poster_url;
i.getComponentsInChildren(cc.Label)[3].string = "● Content:" + e.data[c].content;
t.scrollview.content.addChild(i);
var a = 50 + Math.ceil(130 * Math.random());
i.setPosition(cc.v2(a, -300 - 420 * c));
}
t.scrollview.scrollToOffset(cc.v2(0, 201), .5);
});
this.scrollview.setContentPosition(cc.v2(0, 200));
this.scrollview.node.on("scrolling", function() {
this.scrollview.getContentPosition().y < 200 && (this.scrollview.brake = 1);
}, this);
this.scrollview.node.on("scroll-ended", function() {
var t = this;
this.scrollview.brake = .9;
var c = this.scrollview.getContentPosition();
if (c.y < 100) if (null == n.getid()) {
for (var i = 1; i < this.scrollview.content.childrenCount; ) {
this.scrollview.content.children[i].destroy();
i++;
}
for (var s = 0; s < 4; s++) {
var o = cc.instantiate(this.eventPrefab);
(s = 3) && (o.getComponentsInChildren(cc.Label)[0].string = "Please login first！");
this.scrollview.content.addChild(o);
o.setPosition(cc.v2(50, -300 - 160 * s));
}
this.scrollview.scrollToOffset(cc.v2(0, 201), .5);
} else e.get("/activity/public", {}, function(e) {
for (var n = 1; n < t.scrollview.content.childrenCount; ) {
t.scrollview.content.children[n].destroy();
n++;
}
for (var c = 0; c < e.data.length; c++) {
var i = cc.instantiate(t.eventPrefab);
i.getComponentsInChildren(cc.Label)[0].string = c + 1 + "." + e.data[c].title;
var s = new Date(e.data[c].startTime).toLocaleDateString(), o = new Date(e.data[c].endTime).toLocaleDateString();
i.getComponentsInChildren(cc.Label)[1].string = "● Time:" + s + "\n~" + o;
i.getComponentsInChildren(cc.Label)[2].string = "● Address:" + e.data[c].poster_url;
i.getComponentsInChildren(cc.Label)[3].string = "● Content:" + e.data[c].content;
t.scrollview.content.addChild(i);
var a = 50 + Math.ceil(130 * Math.random());
i.setPosition(cc.v2(a, -300 - 420 * c));
}
t.scrollview.scrollToOffset(cc.v2(0, 201), .5);
}); else c.y < 200 && this.scrollview.scrollToOffset(cc.v2(0, 201), .5);
}, this);
},
start: function() {}
});
cc._RF.pop();
}, {
"./http": "http"
} ],
addOrJoinClass: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "60dbbkhveJIMqQLrpwXJW6i", "addOrJoinClass");
var c = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("./http"));
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
}
},
addOrJoinClass: function() {
var t = this, e = cc.director.getScene().getChildByName("Account").getComponent("account"), n = new c.default(), i = [];
i[0] = this.classNumber.string;
i[1] = this.className.string;
i[2] = e.getid();
n.addOrJoin("/class/addOrEnter", i, function(e) {
t.result.string = e.data;
});
},
start: function() {}
});
cc._RF.pop();
}, {
"./http": "http"
} ],
"back to login": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "1d118uff+BOtLm2uE8HSM0t", "back to login");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("登录");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
bar: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c0e81aNCixOf5LDJaxL3kfg", "bar");
var c = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("./http"));
cc.Class({
extends: cc.Component,
properties: {
scrollview: cc.ScrollView,
eventPrefab: {
default: null,
type: cc.Prefab
}
},
onLoad: function() {
var t = this, e = new c.default(), n = cc.director.getScene().getChildByName("Account").getComponent("account");
if (null == n.getid()) for (var i = 0; i < 4; i++) {
var s = cc.instantiate(this.eventPrefab);
(i = 3) && (s.getComponentsInChildren(cc.Label)[0].string = "Please login first！");
this.scrollview.content.addChild(s);
s.setPosition(cc.v2(50, -300 - 160 * i));
} else e.get("/activity/private/" + n.getid(), {}, function(e) {
for (var n = 1; n < t.scrollview.content.childrenCount; ) {
t.scrollview.content.children[n].destroy();
n++;
}
for (var c = 0; c < e.data.length; c++) {
var i = cc.instantiate(t.eventPrefab);
i.getComponentsInChildren(cc.Label)[0].string = c + 1 + "." + e.data[c].title;
var s = new Date(e.data[c].startTime).toLocaleDateString(), o = new Date(e.data[c].endTime).toLocaleDateString();
i.getComponentsInChildren(cc.Label)[1].string = "● Time:" + s + "~" + o;
i.getComponentsInChildren(cc.Label)[2].string = "● Address:" + e.data[c].poster_url;
t.scrollview.content.addChild(i);
i.setPosition(cc.v2(50, -300 - 180 * c));
}
t.scrollview.scrollToOffset(cc.v2(0, 201), .5);
});
this.scrollview.setContentPosition(cc.v2(0, 200));
this.scrollview.node.on("scrolling", function() {
this.scrollview.getContentPosition().y < 200 && (this.scrollview.brake = 1);
}, this);
this.scrollview.node.on("scroll-ended", function() {
var t = this;
this.scrollview.brake = .9;
var c = this.scrollview.getContentPosition();
if (c.y < 100) if (null == n.getid()) {
for (var i = 1; i < this.scrollview.content.childrenCount; ) {
this.scrollview.content.children[i].destroy();
i++;
}
for (var s = 0; s < 4; s++) {
var o = cc.instantiate(this.eventPrefab);
(s = 3) && (o.getComponentsInChildren(cc.Label)[0].string = "Please login first！");
this.scrollview.content.addChild(o);
o.setPosition(cc.v2(50, -300 - 160 * s));
}
this.scrollview.scrollToOffset(cc.v2(0, 201), .5);
} else e.get("/activity/private/" + n.getid(), {}, function(e) {
for (var n = 1; n < t.scrollview.content.childrenCount; ) {
t.scrollview.content.children[n].destroy();
n++;
}
for (var c = 0; c < e.data.length; c++) {
var i = cc.instantiate(t.eventPrefab);
i.getComponentsInChildren(cc.Label)[0].string = c + 1 + "." + e.data[c].title;
var s = new Date(e.data[c].startTime).toLocaleDateString(), o = new Date(e.data[c].endTime).toLocaleDateString();
i.getComponentsInChildren(cc.Label)[1].string = "● Time:" + s + "~" + o;
i.getComponentsInChildren(cc.Label)[2].string = "● Address:" + e.data[c].poster_url;
t.scrollview.content.addChild(i);
i.setPosition(cc.v2(50, -300 - 180 * c));
}
t.scrollview.scrollToOffset(cc.v2(0, 201), .5);
}); else c.y < 200 && this.scrollview.scrollToOffset(cc.v2(0, 201), .5);
}, this);
},
start: function() {}
});
cc._RF.pop();
}, {
"./http": "http"
} ],
createOrJoin: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "9751dtOQcpDEINuT38VI89b", "createOrJoin");
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
}
},
creatOrJoin: function() {
console.log(1);
this.classInput.node.x = -40;
this.complete.node.x = 260;
this.classNumberIput.node.x = -40;
this.nameLable.node.x = -260;
this.numberLable.node.x = -260;
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"go to login": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "d022eO/PutBiKeqBW85WiUP", "go to login");
var c = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("./http"));
cc.Class({
extends: cc.Component,
properties: {
lableInButton: {
default: null,
type: cc.Label
},
welcome: {
default: null,
type: cc.Label
},
department: {
default: null,
type: cc.Label
},
email: {
default: null,
type: cc.Label
},
yourClass: {
default: null,
type: cc.Label
},
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
}
},
toScene: function() {
var t = this, e = cc.director.getScene().getChildByName("Account");
if (null == e.getComponent("account").getid()) this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("登录");
}))); else {
new c.default().logout(function(n) {
if (0 == n.code) {
e.getComponent("account").setid(null);
t.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("登录");
})));
} else t.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
cc.director.loadScene("登录");
})));
});
}
},
onLoad: function() {
this.classInput.node.x = 6666;
this.complete.node.x = 6666;
this.classNumberIput.node.x = 6666;
this.nameLable.node.x = -6666;
this.numberLable.node.x = -6666;
var t = cc.director.getScene().getChildByName("Account").getComponent("account");
if (null == t.getid()) {
this.welcome.string = "Please login first!";
this.email.string = "";
this.department.string = "";
this.yourClass.string = "";
this.lableInButton.string = "登录";
} else {
this.welcome.string = "欢迎！" + t.getname();
this.email.string = "邮箱：" + t.getemail();
this.department.string = "所在院系：" + t.getdepartment();
var e = 0, n = "";
console.log(t.getclass());
if (null != t.getclass() && " " != t.getclass()) for (;e < t.getclass().length; ) {
n = n + t.getclass()[e].name + ":" + t.getclass()[e].code + "\n";
e++;
} else n = "您尚未加入任何班级！";
this.yourClass.string = "班级：" + n;
this.lableInButton.string = "注销";
}
},
start: function() {}
});
cc._RF.pop();
}, {
"./http": "http"
} ],
http: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "00e08B2+llLIohp3VAVxZda", "http");
var c = "http://47.101.187.188:8888";
cc.Class({
extends: cc.Component,
properties: {},
register: function(t, e, n) {
var i = c + t, s = cc.loader.getXMLHttpRequest(), o = e;
s.open("POST", i);
s.timeout = 5e3;
s.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
s.onreadystatechange = function() {
if (4 === s.readyState && 200 == s.status) {
var t = s.responseText;
n(JSON.parse(t));
}
};
s.send(JSON.stringify({
department: o[0],
email: o[1],
logoUrl: "string",
name: o[2],
password: o[3]
}));
},
login: function(t, e, n) {
var i = c + t, s = cc.loader.getXMLHttpRequest(), o = e;
s.open("POST", i);
s.timeout = 5e3;
s.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
s.onreadystatechange = function() {
if (4 === s.readyState && 200 == s.status) {
var t = s.responseText;
n(JSON.parse(t));
}
};
s.send(JSON.stringify({
email: o[0],
password: o[1]
}));
},
logout: function(t) {
var e = cc.loader.getXMLHttpRequest();
e.open("POST", "http://47.101.187.188:8888/session/destroy");
e.timeout = 5e3;
e.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
e.onreadystatechange = function() {
if (4 === e.readyState && 200 == e.status) {
var n = e.responseText;
t(JSON.parse(n));
}
};
e.send();
},
addActivities: function(t, e, n) {
var i = c + t, s = cc.loader.getXMLHttpRequest(), o = e;
s.open("POST", i);
s.timeout = 5e3;
s.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
s.onreadystatechange = function() {
if (4 === s.readyState && 200 == s.status) {
var t = s.responseText;
n(JSON.parse(t));
}
};
s.send(JSON.stringify({
content: o[0],
createTime: new Date().getTime(),
endTime: new Date(o[1]).getTime(),
id: 0,
isAuthor: 1,
isFinished: 0,
isPublic: o[6],
posterUrl: o[2],
startTime: new Date(o[3]).getTime(),
title: o[4],
userId: o[5]
}));
},
addExistedActivities: function(t, e, n) {
var i = c + t + "/" + e[0] + "/" + e[1], s = cc.loader.getXMLHttpRequest();
s.open("POST", i);
s.timeout = 5e3;
s.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
s.onreadystatechange = function() {
if (4 === s.readyState && 200 == s.status) {
var t = s.responseText;
n(JSON.parse(t));
}
};
s.send(JSON.stringify({}));
},
updateActivities: function(t, e, n) {
var i = c + t, s = cc.loader.getXMLHttpRequest(), o = e;
s.open("POST", i);
s.timeout = 5e3;
s.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
s.onreadystatechange = function() {
if (4 === s.readyState && 200 == s.status) {
var t = s.responseText;
n(JSON.parse(t));
}
};
s.send(JSON.stringify({
createTime: new Date().getTime(),
id: o[0],
title: o[1],
content: o[2],
startTime: new Date(o[3]).getTime(),
endTime: new Date(o[4]).getTime(),
isPublic: o[5],
posterUrl: o[6],
isAuthor: 1,
isFinished: 0,
userId: 0
}));
},
addOrJoin: function(t, e, n) {
var i = c + t, s = cc.loader.getXMLHttpRequest(), o = e;
s.open("POST", i);
s.timeout = 5e3;
s.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
s.onreadystatechange = function() {
if (4 === s.readyState && 200 == s.status) {
var t = s.responseText;
n(JSON.parse(t));
}
};
s.send(JSON.stringify({
code: o[0],
name: o[1],
userId: o[2]
}));
},
get: function(t, e, n) {
var i = c + t, s = cc.loader.getXMLHttpRequest();
s.open("GET", i);
s.timeout = 5e3;
s.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
s.onreadystatechange = function() {
console.log(s.status);
if (200 == s.status) {
var t = s.responseText;
n(JSON.parse(t));
}
};
s.send();
},
start: function() {}
});
cc._RF.pop();
}, {} ],
itself: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "87e3ffS9G1KtJNl36nd0LrM", "itself");
cc.Class({
extends: cc.Component,
properties: {
scrollview: cc.ScrollView
},
refresh: function() {
this.scrollview.scrollToTop(.5);
},
start: function() {}
});
cc._RF.pop();
}, {} ],
launchActivity: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "cf635SKpNZJ3733n/Cf915x", "launchActivity");
var c = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("./http"));
cc.Class({
extends: cc.Component,
properties: {
title: {
default: null,
type: cc.EditBox
},
startTime: {
default: null,
type: cc.EditBox
},
endTime: {
default: null,
type: cc.EditBox
},
address: {
default: null,
type: cc.EditBox
},
content: {
default: null,
type: cc.EditBox
}
},
launch: function() {
var t = this, e = new c.default(), n = cc.director.getScene().getChildByName("Account").getComponent("account"), i = [];
i[0] = this.content.string;
i[1] = this.endTime.string;
i[2] = this.address.string;
i[3] = this.startTime.string;
i[4] = this.title.string;
i[5] = n.getid();
i[6] = 1;
e.addActivities("/activity/addNew", i, function(e) {
t.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
cc.director.loadScene("活动广场");
})));
});
},
start: function() {}
});
cc._RF.pop();
}, {
"./http": "http"
} ],
launch: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6c6abzUws5FpZUwnvpJHspK", "launch");
var c = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("./http"));
cc.Class({
extends: cc.Component,
properties: {
title: {
default: null,
type: cc.EditBox
},
startTime: {
default: null,
type: cc.EditBox
},
endTime: {
default: null,
type: cc.EditBox
},
address: {
default: null,
type: cc.EditBox
},
content: {
default: null,
type: cc.EditBox
},
yourClass: {
default: null,
type: cc.EditBox
},
theFirstToggle: {
default: null,
type: cc.Toggle
}
},
onLoad: function() {
this.theFirstToggle.node.on("toggle", function() {
console.log(1);
}, this);
},
launch: function() {
var t = this, e = new c.default(), n = cc.director.getScene().getChildByName("Account").getComponent("account"), i = [];
i[0] = this.content.string;
i[1] = this.endTime.string;
i[2] = this.address.string;
i[3] = this.startTime.string;
i[4] = this.title.string;
i[5] = n.getid();
i[6] = 0;
console.log(this.theFirstToggle.ischecked);
if (this.theFirstToggle.isChecked) {
console.log("test2");
e.addActivities("/activity/addNew", i, function(e) {
console.log("test3");
t.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
cc.director.loadScene("黑板");
})));
});
} else {
console.log("test4");
e.addActivities("/class/" + this.yourClass.string + "/act", i, function(e) {
t.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
cc.director.loadScene("黑板");
})));
});
}
},
start: function() {}
});
cc._RF.pop();
}, {
"./http": "http"
} ],
login: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8667eRz4mpGxbweTEzuhG1U", "login");
var c = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("./http"));
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
},
login: function() {
var t = this, e = new c.default(), n = cc.director.getScene().getChildByName("Account").getComponent("account"), i = [];
i[0] = this.email.string;
i[1] = this.password.string;
e.login("/session/create", i, function(c) {
if (-1 == c.code) {
t.result.string = "邮箱或密码错误！";
t.email.string = "";
t.password.string = "";
} else {
n.setid(c.data.id);
n.setname(c.data.name);
n.setemail(c.data.email);
n.setdepartment(c.data.department);
e.get("/class/" + c.data.id, 0, function(t) {
n.setclass(t.data);
});
t.node.runAction(cc.sequence(cc.delayTime(.1), cc.callFunc(function() {
cc.director.loadScene("我");
})));
}
});
},
start: function() {}
});
cc._RF.pop();
}, {
"./http": "http"
} ],
"me skip to me ": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a4369aCP2FASaqCLfN+Y6Gu", "me skip to me ");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("我");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
register: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "85270ok8edKLaDDGbIOP7xT", "register");
var c = function(t) {
return t && t.__esModule ? t : {
default: t
};
}(t("./http"));
cc.Class({
extends: cc.Component,
properties: {
result: {
default: null,
type: cc.Label
},
department: {
default: null,
type: cc.EditBox
},
email: {
default: null,
type: cc.EditBox
},
nickname: {
default: null,
type: cc.EditBox
},
password: {
default: null,
type: cc.EditBox
},
passwordAgain: {
default: null,
type: cc.EditBox
}
},
register: function() {
var t = this;
if (!0 === function(t) {
return /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/.test(t);
}(this.email.string)) if (null != this.password.string && this.password.string.length < 6) {
this.result.string = "密码长度不得低于六位！";
this.password.string = "";
this.passwordAgain.string = "";
} else if (this.passwordAgain.string == this.password.string) {
var e = [];
e[0] = this.department.string;
e[1] = this.email.string;
e[2] = this.nickname.string;
e[3] = this.password.string;
new c.default().register("/user/account", e, function(e) {
t.result.string = "注册成功! 两秒后将自动切换到登录界面";
t.node.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function() {
cc.director.loadScene("登录");
})));
});
} else {
this.result.string = "两次输入密码不一致！";
this.password.string = "";
this.passwordAgain.string = "";
} else {
this.result.string = "输入的邮箱地址不符合格式！";
this.email.string = "";
}
},
start: function() {}
});
cc._RF.pop();
}, {
"./http": "http"
} ],
"skip to activity ground": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "31e69DlcFdLsYz1f2YomfKR", "skip to activity ground");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("活动广场");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"skip to launch activity": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "81ab7S2TpJDUp9lT+6sugcc", "skip to launch activity");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
null != cc.director.getScene().getChildByName("Account").getComponent("account").getid() && this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("活动发布");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"skip to launch": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "541f1fkL7JEKK4G6aLeweZ8", "skip to launch");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
null != cc.director.getScene().getChildByName("Account").getComponent("account").getid() && this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("发布");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"skip to me": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "20c32gm3u5KI6+HT5DFeDTn", "skip to me");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
null == cc.director.getScene().getChildByName("Account").getComponent("account").getid() ? this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("登录");
}))) : this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("我");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"skip to register": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c6f4b+AgGJGS4TKUVHUR+pt", "skip to register");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("注册");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ],
"skip to schedule": [ function(t, e, n) {
"use strict";
cc._RF.push(e, "00ed4iK89FAaokfQAqH8Ufk", "skip to schedule");
cc.Class({
extends: cc.Component,
properties: {},
toScene: function() {
this.node.runAction(cc.sequence(cc.fadeOut(.5), cc.callFunc(function() {
cc.director.loadScene("黑板");
})));
},
start: function() {}
});
cc._RF.pop();
}, {} ]
}, {}, [ "account", "activityBar", "addOrJoinClass", "back to login", "bar", "createOrJoin", "go to login", "http", "itself", "launch", "launchActivity", "login", "me skip to me ", "register", "skip to activity ground", "skip to launch activity", "skip to launch", "skip to me", "skip to register", "skip to schedule" ]);