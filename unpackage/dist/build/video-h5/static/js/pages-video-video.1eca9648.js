(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-video-video"],{"0907":function(a,e,t){"use strict";var n;t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return n}));var i=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{staticClass:"container_player"},[t("v-uni-view",{staticClass:"video-player"},[t("v-uni-video",{attrs:{src:a.videoData.video_path,controls:!0}})],1),t("v-uni-view",{staticClass:"video-title"},[a._v(a._s(a.videoData.title))]),t("v-uni-view",{staticClass:"video-details"},[a._v(a._s(a.videoData.details))])],1)],1)},r=[]},"0f0d":function(a,e,t){"use strict";t.r(e);var n=t("0907"),i=t("288a");for(var r in i)"default"!==r&&function(a){t.d(e,a,(function(){return i[a]}))}(r);t("464b");var d,s=t("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"5ff431b9",null,!1,n["a"],d);e["default"]=o.exports},1518:function(a,e,t){"use strict";var n=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("96cf");var i=n(t("1da1")),r={data:function(){return{}},computed:{userInfo:function(){return this.$store.state.userInfo}},methods:{login:function(){this.$emit("login")},logout:function(){var a=this;return(0,i.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a.$store.dispatch("logout");case 2:t=e.sent,2e4===t.code&&uni.showToast({title:t.msg||"退出成功",icon:"none"});case 4:case"end":return e.stop()}}),e)})))()}}};e.default=r},"22ede":function(a,e,t){"use strict";t.r(e);var n=t("1518"),i=t.n(n);for(var r in n)"default"!==r&&function(a){t.d(e,a,(function(){return n[a]}))}(r);e["default"]=i.a},"288a":function(a,e,t){"use strict";t.r(e);var n=t("bdbd"),i=t.n(n);for(var r in n)"default"!==r&&function(a){t.d(e,a,(function(){return n[a]}))}(r);e["default"]=i.a},3576:function(a,e,t){var n=t("fc6a7");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var i=t("4f06").default;i("bc184a3a",n,!0,{sourceMap:!1,shadowMode:!1})},"3a3a":function(a,e,t){"use strict";t.r(e);var n=t("d8c9"),i=t("22ede");for(var r in i)"default"!==r&&function(a){t.d(e,a,(function(){return i[a]}))}(r);t("910f");var d,s=t("f0c5"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"3b4083a8",null,!1,n["a"],d);e["default"]=o.exports},"464b":function(a,e,t){"use strict";var n=t("3576"),i=t.n(n);i.a},"910f":function(a,e,t){"use strict";var n=t("d09b"),i=t.n(n);i.a},bdbd:function(a,e,t){"use strict";var n=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t("3a3a")),r={name:"video",data:function(){return{model:"PC",videoData:{}}},components:{NavBar:i.default},onLoad:function(){var a=this,e=this.getOpenerEventChannel();e.on("onvideo",(function(e){a.videoData=e}))},methods:{getSystemInfo:function(){var a=this;uni.getSystemInfo({success:function(e){a.model=e.model}})}}};e.default=r},d09b:function(a,e,t){var n=t("dbd6");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var i=t("4f06").default;i("8de79440",n,!0,{sourceMap:!1,shadowMode:!1})},d8c9:function(a,e,t){"use strict";var n;t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return n}));var i=function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("v-uni-view",{staticClass:"nav-bar"},[n("div",{staticClass:"header-wrap"},[n("div",{staticClass:"header-logo"},[n("v-uni-image",{attrs:{src:t("f415"),mode:""}})],1),n("div",{staticClass:"header-aside"},[a.userInfo&&a.userInfo.mobile?n("div",{staticClass:"header-aside-item"},[n("div",[a._v(a._s(a.userInfo.mobile)+" |")]),n("div",{staticClass:"item-label",on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.logout.apply(void 0,arguments)}}},[a._v("退出")])]):n("div",{staticClass:"header-aside-item"},[n("div",[n("v-uni-image",{attrs:{src:t("dde3"),mode:""}})],1),n("div",{staticClass:"item-label",on:{click:function(e){arguments[0]=e=a.$handleEvent(e),a.login.apply(void 0,arguments)}}},[a._v("登录")])])])])])},r=[]},dbd6:function(a,e,t){var n=t("24fb");e=n(!1),e.push([a.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.header-wrap[data-v-3b4083a8]{position:relative;width:100%;height:%?128?%;z-index:1000;background-color:#191a20;display:flex;align-items:center;justify-content:space-between}.header-wrap .header-logo[data-v-3b4083a8]{height:100%;padding-left:%?80?%;display:flex;align-items:center}.header-wrap .header-logo svg[data-v-3b4083a8]{height:100%;width:%?170?%;fill:#00cc4c}.header-wrap .header-logo uni-image[data-v-3b4083a8]{width:%?80?%;height:%?80?%}.header-wrap .header-aside[data-v-3b4083a8]{display:flex;align-items:center;color:#fff;padding-right:%?80?%}.header-wrap .header-aside .header-aside-item[data-v-3b4083a8]{position:relative;display:flex;align-items:center}.header-wrap .header-aside .header-aside-item uni-image[data-v-3b4083a8]{width:%?56?%;height:%?56?%;display:block}.header-wrap .header-aside .header-aside-item .item-label[data-v-3b4083a8]{margin-left:%?12?%;font-size:%?28?%}',""]),a.exports=e},dde3:function(a,e){a.exports="data:image/png;base64,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"},f415:function(a,e){a.exports="data:image/png;base64,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"},fc6a7:function(a,e,t){var n=t("24fb");e=n(!1),e.push([a.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container_player[data-v-5ff431b9]{padding:0;background:#191a20;position:relative;width:100%;padding-bottom:%?40?%}.container_player .video-player[data-v-5ff431b9]{display:flex;justify-content:center}.container_player .video-player uni-video[data-v-5ff431b9]{width:100%;height:450px;display:block}.container_player .video-title[data-v-5ff431b9]{position:relative;color:#ccc;font-size:%?32?%;font-weight:400;cursor:default;padding:%?30?% 0;text-align:center}.container_player .video-details[data-v-5ff431b9]{font-size:%?24?%;text-align:center;color:#999}',""]),a.exports=e}}]);