(function(t){function a(a){for(var e,o,r=a[0],A=a[1],c=a[2],l=0,p=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(e in A)Object.prototype.hasOwnProperty.call(A,e)&&(t[e]=A[e]);u&&u(a);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,a=0;a<i.length;a++){for(var n=i[a],e=!0,r=1;r<n.length;r++){var A=n[r];0!==s[A]&&(e=!1)}e&&(i.splice(a--,1),t=o(o.s=n[0]))}return t}var e={},s={app:0},i=[];function o(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=e,o.d=function(t,a,n){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)o.d(n,e,function(a){return t[a]}.bind(null,e));return n},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],A=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var u=A;i.push([0,"chunk-vendors"]),n()})({0:function(t,a,n){t.exports=n("56d7")},"00f5":function(t,a,n){},"0ff7":function(t,a,n){},1107:function(t,a,n){"use strict";var e=n("3e4d"),s=n.n(e);s.a},"1c53":function(t,a,n){"use strict";var e=n("0ff7"),s=n.n(e);s.a},"2c3b":function(t,a,n){},"3e4d":function(t,a,n){},4528:function(t,a,n){"use strict";var e=n("8ac9"),s=n.n(e);s.a},"56d7":function(t,a,n){"use strict";n.r(a);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var e=n("2b0e"),s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"main"},[n("router-view",{attrs:{name:"main"}}),n("router-view",{attrs:{name:"sidebar"}})],1)],1)},i=[],o=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"header"},[t._m(0),n("ul",t._l(t.menu,(function(a){return n("li",{key:a.index},[n("a",{attrs:{href:""}},[t._v(t._s(a))])])})),0)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:""}},[e("img",{attrs:{src:n("d686"),alt:""}})])}],A={name:"Header",data:function(){return{menu:["首页"]}}},c=A,u=(n("1c53"),n("0c7c")),l=Object(u["a"])(c,o,r,!1,null,"1e8b1976",null),p=l.exports,f={name:"App",components:{Header:p}},d=f,g=(n("5c0b"),Object(u["a"])(d,s,i,!1,null,null,null)),m=g.exports,v=n("bc3a"),h=n.n(v),_=n("8c4f"),C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"article"},[t.isLoading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:n("cf1c"),alt:"loading"}})]):e("div",[e("div",{staticClass:"topic_header"},[e("div",{staticClass:"topic_title"},[(t.post.top=!0)?e("span",[t._v("置顶 - ")]):t._e(),e("span",[t._v(t._s(t.post.title))])]),e("div",{staticClass:"article_message"},[e("ul",[e("li",[t._v(" • 发布于"+t._s(t._f("timeFormat")(t.post.create_at))+" ")]),e("li",[t._v(" • 作者 "+t._s(t.post.author.loginname))]),e("li",[t._v(" • "+t._s(t.post.visit_count)+"次浏览")]),e("li",[t._v(" • 来自 "+t._s(t._f("postFormat")(t.post)))])])]),e("div",{staticClass:"topic_content",attrs:{id:"content"},domProps:{innerHTML:t._s(t.post.content)}})]),e("div",{staticClass:"reply_part"},[e("div",{staticClass:"topbarCount"},[t._v(t._s(t.post.reply_count)+" 回复")]),t._l(t.post.replies,(function(a,n){return e("div",{key:n,staticClass:"replySec"},[e("div",{staticClass:"replyUp"},[e("router-link",{attrs:{to:{name:"user_info",params:{name:a.author.loginname}}}},[e("img",{attrs:{src:a.author.avatar_url,alt:""}})]),e("span",[t._v(t._s(a.author.loginname))]),e("span",[t._v(t._s(n+1)+"楼")]),e("span",[t._v("•"+t._s(t._f("timeFormat")(a.create_at))+" ")]),e("span",[t._v(" 👍"+t._s(a.ups)+" ")]),a.author.loginname==t.post.author.loginname?e("span",{staticClass:"authorHimself"},[t._v("作者")]):t._e()],1),e("p",{domProps:{innerHTML:t._s(a.content)}})])}))],2)])])},y=[],q="https://www.easy-mock.com/mock/5fb8db183f90e10d966465a6/api/v1",w={topics:"/topics",article:"/topic/",userinfo:"/user/"};for(var b in w)Object.prototype.hasOwnProperty.call(w,b)&&(w[b]=q+w[b]);var O=w,k={name:"",data:function(){return{isLoading:!1,post:[]}},methods:{getData:function(){var t=this;this.$http.get(O.article+"".concat(this.$route.params.id)).then((function(a){1==a.data.success&&(t.post=a.data.data,t.isLoading=!1)}))}},beforeMount:function(){this.isLoading=!0,this.getData()},watch:{$route:function(t,a){this.getData()}}},D=k,K=(n("720e"),Object(u["a"])(D,C,y,!1,null,null,null)),I=K.exports,L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"postlist"},[t.isLoading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:n("cf1c"),alt:"loading"}})]):e("div",{staticClass:"posts"},[e("div",{staticClass:"topbar"},[e("ul",t._l(t.topbarMsg,(function(a){return e("li",{key:a.index},[e("a",{attrs:{href:""}},[t._v(t._s(a))])])})),0)]),e("div",{staticClass:"postbar"},[e("ul",[t._l(t.posts,(function(a){return e("li",{key:a.index},[e("span",{staticClass:"postAvatar"},[e("img",{attrs:{src:a.author.avatar_url,alt:"头像"}})]),e("span",{staticClass:"all_count"},[e("span",{staticClass:"reply_count"},[t._v(t._s(a.reply_count))]),e("span",[t._v("/")]),e("span",{staticClass:"visit_count"},[t._v(t._s(a.visit_count))])]),e("span",{class:[{put_good:1==a.good,put_top:1==a.top,"topiclist-tab":1!=a.good&&1!=a.top}]},[t._v(t._s(t._f("postFormat")(a)))]),e("router-link",{attrs:{to:{name:"post_content",params:{id:a.id,name:a.author.loginname}}}},[e("span",{staticClass:"post_title"},[t._v(t._s(a.title))])]),e("span",{staticClass:"last_reply"},[t._v(t._s(t._f("timeFormat")(a.last_reply_at)))])],1)})),e("div",{staticClass:"paginationForUse"},[e("bu-pagination",{attrs:{totalPage:50,currentPage:t.postPage,hideIfOnePage:""},on:{"update:currentPage":function(a){t.postPage=a},"update:current-page":function(a){t.postPage=a}}})],1)],2)])])])},M=[],S={name:"",data:function(){return{isLoading:!1,topbarMsg:["全部","精华","分享","问答","招聘"],posts:[],postPage:1}},methods:{getData:function(){var t=this;this.$http.get(O.topics,{params:{page:this.postPage,limit:20,tab:this.$route.params.tab}}).then((function(a){t.posts=a.data.data,t.isLoading=!1})).catch((function(t){console.log(t)}))}},beforeMount:function(){this.isLoading=!0,this.getData()},watch:{postPage:function(){this.getData()}}},E=S,T=(n("4528"),Object(u["a"])(E,L,M,!1,null,"1b361b06",null)),Q=T.exports,B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{},[t.isLoading?e("div",{staticClass:"loading"},[e("img",{attrs:{src:n("cf1c"),alt:"loading"}})]):e("div",{staticClass:"userInformation"},[e("section",[e("div",{staticClass:"topMsg"},[e("img",{attrs:{src:t.userinfo.avatar_url}}),e("span",[t._v(t._s(t.userinfo.loginname))])]),e("div",{staticClass:"subMsg"},[e("p",[t._v(t._s(t.userinfo.score)+"积分")]),e("p",[t._v("注册时间:"+t._s(t._f("timeFormat")(t.userinfo.create_at)))])])]),e("div",{staticClass:"reply_count"},[e("p",[t._v("最近回复的主题")]),t.topicShow?e("ul",t._l(t.userinfo.recent_replies,(function(a){return e("li",{key:a.index},[e("router-link",{attrs:{to:{name:"post_content",params:{id:a.id}}}},[t._v(t._s(a.title))])],1)})),0):t._e()]),e("div",{staticClass:"topic_count"},[e("p",[t._v("最近创建的主题")]),t.topicShow?e("ul",t._l(t.userinfo.recent_topics,(function(a){return e("li",{key:a.index},[e("router-link",{attrs:{to:{name:"post_content",params:{id:a.id}}}},[t._v(t._s(a.title))])],1)})),0):t._e()])])])},J=[],j=(n("b0c0"),{name:"",data:function(){return{isLoading:!1,userinfo:{},topicShow:!1}},methods:{getData:function(){var t=this;this.$http.get(O.userinfo+"".concat(this.$route.params.name)).then((function(a){t.topicShow=!0,t.userinfo=a.data.data,t.isLoading=!1})).catch((function(t){console.log(t)}))}},beforeMount:function(){this.isLoading=!0,this.getData()}}),P=j,x=(n("1107"),Object(u["a"])(P,B,J,!1,null,"0ae4ea2c",null)),W=x.exports,z=function(){var t=this,a=t.$createElement,n=t._self._c||a;return t.isLoading?n("div",{staticClass:"sidebar"},[n("div",{staticClass:"topBar"},[n("span",[t._v("作者")]),n("div",{staticClass:"topbarPartTwo"},[n("router-link",{attrs:{to:{name:"user_info",params:{name:t.userinfo.loginname}}}},[n("img",{attrs:{src:t.userinfo.avatar_url,alt:""}}),n("span",[t._v(t._s(t.userinfo.loginname))])])],1),n("div",{staticClass:"topbarPartThree"},[n("p",[t._v(t._s(t.userinfo.score)+"积分")])])]),n("div",{staticClass:"topBar"},[n("span",[t._v("最近主题")]),n("ul",t._l(t.topicLimit5,(function(a){return n("li",{key:a.index},[n("router-link",{attrs:{to:{name:"post_content",params:{id:a.id,name:a.author.loginname}}}},[t._v(t._s(a.title))])],1)})),0)]),n("div",{staticClass:"topBar"},[n("span",[t._v("最近回复")]),n("ul",t._l(t.replyLimit5,(function(a){return n("li",{key:a.index},[n("router-link",{attrs:{to:{name:"post_content",params:{id:a.id,name:a.author.loginname}}}},[t._v(t._s(a.title))])],1)})),0)])]):t._e()},F=[],Y=(n("fb6a"),{name:"SideBar",data:function(){return{isLoading:!1,userinfo:{}}},methods:{getData:function(){var t=this;this.$http.get(O.userinfo+"".concat(this.$route.params.name)).then((function(a){t.userinfo=a.data.data,t.isLoading=!0})).catch((function(t){console.log(t)}))}},computed:{topicLimit5:function(){return this.userinfo.recent_topics?this.userinfo.recent_topics.slice(0,5):""},replyLimit5:function(){return this.userinfo.recent_replies?this.userinfo.recent_replies.slice(0,5):""}},beforeMount:function(){this.getData()}}),H=Y,G=(n("8030"),Object(u["a"])(H,z,F,!1,null,"227a962a",null)),U=G.exports;e["a"].use(_["a"]);var N=new _["a"]({mode:"hash",routes:[{name:"root",path:"/",components:{main:Q}},{name:"post_content",path:"/topic/:id&author=:name",components:{main:I,sidebar:U}},{name:"user_info",path:"/user/:name",components:{main:W}}]}),R=n("3d97"),Z=n.n(R);n("b5c3");e["a"].use(Z.a),e["a"].prototype.$http=h.a,e["a"].config.productionTip=!1,e["a"].filter("postFormat",(function(t){return 1==t.top?"置顶":1==t.good?"精华":"share"==t.tab?"分享":"ask"==t.tab?"问答":"招聘"})),e["a"].filter("timeFormat",(function(t){if(!t)return"";var a=new Date(t),n=(new Date).getTime()-a.getTime();return n<0?"":n/1e3<30?"刚刚":n/1e3<60?parseInt(n/1e3)+"秒前":n/6e4<60?parseInt(n/6e4)+"分钟前":n/36e5<24?parseInt(n/36e5)+"小时前":n/864e5<31?parseInt(n/864e5)+"天前":n/2592e6<12?parseInt(n/2592e6)+"个月前":parseInt(n/31536e6)+"年前"})),new e["a"]({render:function(t){return t(m)},router:N,url:O}).$mount("#app")},"5c0b":function(t,a,n){"use strict";var e=n("00f5"),s=n.n(e);s.a},"720e":function(t,a,n){"use strict";var e=n("2c3b"),s=n.n(e);s.a},8030:function(t,a,n){"use strict";var e=n("b600"),s=n.n(e);s.a},"8ac9":function(t,a,n){},b600:function(t,a,n){},cf1c:function(t,a){t.exports="data:image/gif;base64,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"},d686:function(t,a,n){t.exports=n.p+"static/img/cnodejs_light.86f6a7c2.svg"}});
//# sourceMappingURL=app.42b5bae1.js.map