(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"17a5":function(t,e,a){"use strict";a("1c54")},"1c54":function(t,e,a){},5069:function(t,e,a){"use strict";a("860c")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},o=[],i={name:"App",data:function(){return{}}},s=i,c=a("2877"),l=Object(c["a"])(s,r,o,!1,null,null,null),u=l.exports,p=a("8c4f"),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("navbar"),a("profile"),a("RowColumn")],1)},m=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-app-bar",{attrs:{app:"",dark:"",color:t.themeColor}},[a("v-toolbar-title",{staticClass:"text-h4"},[a("span",{staticClass:"font-weight-thin white--text"},[t._v("MEME")]),a("span",{staticClass:"title font-weight-thin"},[t._v("Gram")])])],1)],1)},v=[],g={name:"navbar",props:{themeColor:{type:String,default:"#6e387b"}}},h=g,b=(a("da0d"),a("6544")),w=a.n(b),x=a("40dc"),j=a("2a7f"),_=Object(c["a"])(h,f,v,!1,null,"6913f5be",null),C=_.exports;w()(_,{VAppBar:x["a"],VToolbarTitle:j["a"]});var y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Profile"},[a("div",{staticClass:"mx-auto"},[a("avatar"),a("span",{staticClass:"text-h5 fonter"},[t._v("Suhan Bangera")])],1)])},V=[],O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-avatar",{attrs:{elevation:5,color:t.color,id:"avatar",dark:"",size:"110"}},[a("v-img",{attrs:{src:t.src},on:{click:function(e){return t.Changer()}}})],1)},M=[],k=(a("b0c0"),a("a15b"),{name:"avatar",props:{color:{type:String,default:"#6e387b"},name:{type:String,default:"Suhan"}},data:function(){return{rand:this.name,src:"https://avatars.dicebear.com/api/avataaars/"+this.name+".svg"}},methods:{Changer:function(){var t=this.RandString(Math.floor(5*Math.random()));this.src="https://avatars.dicebear.com/api/avataaars/"+t+".svg"},RandString:function(t){for(var e=[],a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcde0123456789",n=a.length,r=0;r<t;r++)e.push(a.charAt(Math.floor(Math.random()*n)));return e.join("")}}}),P=k,E=(a("17a5"),a("8212")),S=a("adda"),R=Object(c["a"])(P,O,M,!1,null,"1a8d4e9d",null),A=R.exports;w()(R,{VAvatar:E["a"],VImg:S["a"]});var $={name:"profile",components:{avatar:A}},T=$,z=(a("5069"),Object(c["a"])(T,y,V,!1,null,"d45d9ed0",null)),D=z.exports,G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",{staticClass:"marginer"},[a("v-container",[a("v-row",{staticClass:"d-flex"},t._l(t.memes,(function(e){return a("v-col",{key:e,staticClass:"col-6",attrs:{"no-gutters":""}},[a("v-card",{attrs:{tile:"",elevation:3,height:"200",justify:"center",hover:""},on:{click:function(a){return t.displayer(e)}}},[a("v-img",{attrs:{src:e}})],1)],1)})),1)],1),a("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-img",{attrs:{src:t.dialog_src,"hide-overlay":""}})],1)],1)],1)},I=[],J=["https://i.redd.it/a0v87gwzoge61.jpg","https://i.redd.it/q29egav34ee61.jpg","https://i.redd.it/iij16swxjie61.jpg","https://i.redd.it/vek7dm2hrge61.jpg","https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png","https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png","https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg","https://code-love.com/wp-content/uploads/2019/03/download.jpeg","https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg","https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg","https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg","https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg","https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg","https://i.redd.it/ka6s0a09zdx61.jpg"],B=J,U={name:"RowColumn",data:function(){return{memes:B,dialog:!1,dialog_src:"https://i.redd.it/a0v87gwzoge61.jpg"}},methods:{displayer:function(t){this.dialog_src=t,this.dialog=!this.dialog}}},X=U,F=(a("bf82"),a("b0af")),H=a("62ad"),K=a("a523"),L=a("169a"),N=a("f6c4"),Q=a("0fd9"),q=Object(c["a"])(X,G,I,!1,null,"4ac6db0d",null),W=q.exports;w()(q,{VCard:F["a"],VCol:H["a"],VContainer:K["a"],VDialog:L["a"],VImg:S["a"],VMain:N["a"],VRow:Q["a"]});var Y={name:"MemeProfile",components:{navbar:C,profile:D,RowColumn:W}},Z=Y,tt=a("7496"),et=Object(c["a"])(Z,d,m,!1,null,null,null),at=et.exports;w()(et,{VApp:tt["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("navbar"),a("RowColumn")],1)},rt=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-main",[a("v-container",[a("v-row",t._l(t.memes,(function(e){return a("v-col",{key:e.id,staticClass:"col-6"},[a("v-card",{attrs:{elevation:5},on:{click:function(a){return t.Displayer(e)}}},[a("v-img",{attrs:{src:e.url}}),a("v-card-text",{staticClass:"text-subtitle2"},[t._v(t._s(e.name))])],1)],1)})),1)],1),a("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-img",{attrs:{src:t.src}})],1)],1)],1)},it=[],st=a("1da1"),ct=(a("96cf"),a("d3b7"),{name:"RowColumn",methods:{GetApi:function(){var t=this;return Object(st["a"])(regeneratorRuntime.mark((function e(){var a,n,r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.imgflip.com/get_memes");case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,r=n.data,e.next=9,r;case 9:return o=e.sent,i=o.memes,console.log(i[0]),t.memes=i,console.log(t.memes[0]),e.abrupt("return",i);case 15:case"end":return e.stop()}}),e)})))()},Displayer:function(t){this.id=t.id,this.name=t.name,this.src=t.url,this.box_no=t.box_count,this.dialog=!this.dialog}},data:function(){return{memes:"",gtter:this.GetApi(),dialog:!1,box_no:2,src:"https://i.imgflip.com/30b1gx.jpg",id:"181913649",name:""}}}),lt=ct,ut=(a("ee9b"),a("99d9")),pt=Object(c["a"])(lt,ot,it,!1,null,"07b47167",null),dt=pt.exports;w()(pt,{VCard:F["a"],VCardText:ut["a"],VCol:H["a"],VContainer:K["a"],VDialog:L["a"],VImg:S["a"],VMain:N["a"],VRow:Q["a"]});var mt={name:"MemeGenerator",components:{navbar:C,RowColumn:dt}},ft=mt,vt=(a("d4cf"),Object(c["a"])(ft,nt,rt,!1,null,"647d9d54",null)),gt=vt.exports;w()(vt,{VApp:tt["a"]}),n["a"].use(p["a"]);var ht=[{path:"/memes",name:"MemeProfile",component:at},{path:"/",name:"About",component:gt}],bt=new p["a"]({routes:ht}),wt=bt,xt=a("f309");n["a"].use(xt["a"]);var jt=new xt["a"]({}),_t=a("31cd"),Ct=a.n(_t);n["a"].use(Ct.a),n["a"].config.productionTip=!1,new n["a"]({router:wt,vuetify:jt,render:function(t){return t(u)}}).$mount("#app")},"57cf":function(t,e,a){},"860c":function(t,e,a){},a67d:function(t,e,a){},b217:function(t,e,a){},bf82:function(t,e,a){"use strict";a("57cf")},d4cf:function(t,e,a){"use strict";a("a67d")},da0d:function(t,e,a){"use strict";a("f1cf")},ee9b:function(t,e,a){"use strict";a("b217")},f1cf:function(t,e,a){}});
//# sourceMappingURL=app.b9194a61.js.map