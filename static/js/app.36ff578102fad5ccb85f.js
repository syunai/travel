webpackJsonp([1],{"/5gh":function(t,e){},"1uYt":function(t,e){},"2bmg":function(t,e){},"6EuR":function(t,e){},"9n10":function(t,e){},EcRR:function(t,e){},Fxpj:function(t,e){},GKZW:function(t,e){},H2B3:function(t,e){},Ha4m:function(t,e){},I40a:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("NY/a")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),u={name:"HomeHeader",props:{},computed:c()({},Object(l.c)(["city"]))},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("router-link",{attrs:{to:"/city"}},[i("div",{staticClass:"header-right"},[t._v("\n      "+t._s(t.city)+"\n      "),i("span",{staticClass:"iconfont arrow-icon"},[t._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题\n  ")])}]};var h=i("VU/8")(u,d,!1,function(t){i("2bmg")},"data-v-73985527",null).exports,p={name:"HomeSwiper",props:{list:Array},data:function(){return{swiperOptions:{pagination:".swiper-pagination",loop:!0}}},computed:{showSwiper:function(){return this.list.length>0}}},m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",{ref:"mySwiper",attrs:{options:this.swiperOptions}},[this._l(this.list,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var f=i("VU/8")(p,m,!1,function(t){i("lKNJ"),i("x7XY")},"data-v-7bedc5cc",null).exports,v={name:"HomeIcons",props:{list:Array},data:function(){return{swiperOptions:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.list.forEach(function(e,i){var s=Math.floor(i/8);t[s]||t.push([]),t[s].push(e)}),t},showIcon:function(){return this.pages.length>0}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[t.showIcon?i("swiper",{attrs:{options:t.swiperOptions}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{staticClass:"icon-img-content",attrs:{src:e.imgUrl}})]),t._v(" "),i("p",{staticClass:"icon-desc ellipsis"},[t._v(t._s(e.desc))])])}),0)}),1):t._e()],1)},staticRenderFns:[]};var C=i("VU/8")(v,_,!1,function(t){i("NZBM"),i("hmdH")},"data-v-d98f5dc4",null).exports,y={name:"HomeRecommend",props:{list:Array},data:function(){return{}}},w={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("热门推荐")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{tag:"li",to:"/detail/"+e.id}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title ellipsis"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc ellipsis"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}),1)])},staticRenderFns:[]};var g=i("VU/8")(y,w,!1,function(t){i("EcRR")},"data-v-09df45fb",null).exports,b={name:"HomeWeekend",props:{list:Array},data:function(){return{}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"recommend-title"},[t._v("周末去哪儿")]),t._v(" "),i("ul",t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title ellipsis"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc ellipsis"},[t._v(t._s(e.desc))])])])}),0)])},staticRenderFns:[]};var x=i("VU/8")(b,k,!1,function(t){i("O52k")},"data-v-36fafccb",null).exports,S=i("mtWM"),$=i.n(S),L={name:"Home",components:{HomeHeader:h,HomeSwiper:f,HomeIcons:C,HomeRecommend:g,HomeWeekend:x},data:function(){return{swiperList:[],iconList:[],recommendList:[],weekendList:[],lastCity:""}},computed:c()({},Object(l.c)(["city"])),methods:{getHomeInfo:function(){$.a.get("/api/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.getHomeInfo(),this.lastCity=this.city},activated:function(){this.city!==this.lastCity&&(this.getHomeInfo(),this.lastCity=this.city)}},H={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("HomeHeader"),t._v(" "),i("HomeSwiper",{attrs:{list:t.swiperList}}),t._v(" "),i("HomeIcons",{attrs:{list:t.iconList}}),t._v(" "),i("HomeRecommend",{attrs:{list:t.recommendList}}),t._v(" "),i("HomeWeekend",{attrs:{list:t.weekendList}})],1)},staticRenderFns:[]};var I=i("VU/8")(L,H,!1,function(t){i("I40a")},null,null).exports,E={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"header"},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-back"},[this._v("")])]),this._v("\n    城市选择\n  ")],1)])},staticRenderFns:[]};var F=i("VU/8")({name:"CityHeader"},E,!1,function(t){i("PlwL")},"data-v-32d8920f",null).exports,N=i("r+/8"),R={name:"CitySearch",props:{cities:Object},computed:{hasNoList:function(){return 0===this.list.length}},data:function(){return{keyWords:"",list:[],timer:null}},mounted:function(){this.scroll=new N.a(this.$refs.searchBlock)},watch:{keyWords:function(){var t=this;this.timer&&clearTimeout(this.timer),this.keyWords?this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){(i.spell.indexOf(t.keyWords)>-1||i.name.indexOf(t.keyWords)>-1)&&e.push(i)});t.list=e},100):this.list=[]}},methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"]))},A={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyWords,expression:"keyWords"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市名或拼音"},domProps:{value:t.keyWords},on:{input:function(e){e.target.composing||(t.keyWords=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyWords,expression:"keyWords"}],ref:"searchBlock",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:t.hasNoList,expression:"hasNoList"}],staticClass:"search-item border-bottom"},[t._v("没有找到匹配数据")])],2)])])},staticRenderFns:[]};var O=i("VU/8")(R,A,!1,function(t){i("6EuR")},"data-v-6b3882b0",null).exports,T={name:"CityList",props:{cities:Object,hotCities:Array,letter:String},computed:c()({},Object(l.c)(["city"])),activated:function(){this.scroll.refresh()},mounted:function(){this.scroll=new N.a(this.$refs.wrapper,{click:!0})},watch:{letter:function(){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}},methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"]))},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(t.city))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){return t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}),0)]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){return t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}),0)])})],2)])},staticRenderFns:[]};var D=i("VU/8")(T,U,!1,function(t){i("Ha4m")},"data-v-4d4cd6b9",null).exports,G={name:"CityAlphabet",data:function(){return{touchStatus:!1,startY:0,timer:null}},props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},updated:function(){this.startY=this.$refs.A[0].offsetTop},methods:{handleLetterClick:function(t){this.$emit("letterChange",t.target.innerText)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.startY)/20);s>=0&&s<e.letters.length&&e.$emit("letterChange",e.letters[s])},8))},handleTouchEnd:function(){this.touchStatus=!1}}},V={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{click:t.handleLetterClick,touchstart:function(e){return e.preventDefault(),t.handleTouchStart.apply(null,arguments)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd}},[t._v(t._s(e))])}),0)},staticRenderFns:[]};var W={name:"City",components:{CityHeader:F,CitySearch:O,CityList:D,CityAlphabet:i("VU/8")(G,V,!1,function(t){i("olxF")},"data-v-27ad42a6",null).exports},data:function(){return{cities:{},hotCities:[],letter:""}},methods:{getCityInfo:function(){$.a.get("/api/city.json").then(this.handleGetCityInfoSucc)},handleGetCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.cities=e.cities,this.hotCities=e.hotCities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},j={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{cities:t.cities,hotCities:t.hotCities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{letterChange:t.handleLetterChange}})],1)},staticRenderFns:[]};var B=i("VU/8")(W,j,!1,function(t){i("P4OD")},null,null).exports,Y={name:"CommonGallary",props:{imgs:{Array:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGallaryClick:function(){this.$emit("close")}}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGallaryClick}},[e("div",{staticClass:"wrapper"},[e("swiper",{ref:"mySwiper",attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var P=i("VU/8")(Y,M,!1,function(t){i("wGzh")},"data-v-5257a8dc",null).exports,z={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var X=i("VU/8")({name:"FadeAnimation"},z,!1,function(t){i("lXqW")},"data-v-fb4e6eac",null).exports,q={name:"DetailBanner",props:{sightName:String,bannerImg:String,gallaryImgs:Array},data:function(){return{showGallary:!1}},methods:{handleBannerClick:function(){this.showGallary=!0},handleGallaryClose:function(){this.showGallary=!1}},components:{CommonGallary:P,FadeAnimation:X}},K={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerClick}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(t.sightName))]),t._v(" "),i("div",{staticClass:"banner-number"},[i("span",{staticClass:"iconfont banner-icon"},[t._v("")]),t._v(t._s(this.gallaryImgs.length)+"\r\n      ")])])]),t._v(" "),i("FadeAnimation",[i("CommonGallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallary,expression:"showGallary"}],attrs:{imgs:t.gallaryImgs},on:{close:t.handleGallaryClose}})],1)],1)},staticRenderFns:[]};var Z=i("VU/8")(q,K,!1,function(t){i("gdA2")},"data-v-1775fae0",null).exports,J={name:"DetailHeader",components:{},data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;if(t>60){var e=t/140;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("div",{staticClass:"iconfont header-abs-back"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[e("router-link",{attrs:{to:"/"}},[e("div",{staticClass:"iconfont header-fixed-back"},[this._v("")])]),this._v("\n    景点详情\n  ")],1)],1)},staticRenderFns:[]};var tt=i("VU/8")(J,Q,!1,function(t){i("GKZW")},"data-v-e3266166",null).exports,et={name:"DetailList",props:{list:Array},components:{}},it={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v("\n      "+t._s(e.title)+"\n    ")]),t._v(" "),e.children?i("div",{staticClass:"item-children"},[i("DetailList",{attrs:{list:e.children}})],1):t._e()])}),0)},staticRenderFns:[]};var st={name:"Detail",components:{DetailBanner:Z,DetailHeader:tt,DetailList:i("VU/8")(et,it,!1,function(t){i("1uYt")},"data-v-f1ce1b3c",null).exports},methods:{getDetailInfo:function(){$.a.get("api/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDetailInfoSucc)},handleGetDetailInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.categoryList=e.categoryList}}},mounted:function(){this.getDetailInfo()},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],categoryList:[]}}},nt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("DetailBanner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("DetailHeader"),this._v(" "),e("div",{staticClass:"content"},[e("DetailList",{attrs:{list:this.categoryList}})],1)],1)},staticRenderFns:[]};var at=i("VU/8")(st,nt,!1,function(t){i("Fxpj")},"data-v-eaa391ee",null).exports;s.a.use(r.a);var rt=new r.a({scrollBehavior:function(t,e,i){return{x:0,y:0}},routes:[{path:"/",name:"Home",component:I},{path:"/city",name:"City",component:B},{path:"/detail/:id",name:"Detail",component:at}]}),ot=(i("9n10"),i("M6Sr"),i("TzC8"),i("/5gh"),i("F3EI")),ct=i.n(ot),lt=(i("mgS3"),i("H2B3"),"北京");try{localStorage.city&&(lt=localStorage.city)}catch(t){}var ut={city:lt},dt={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(l.a);var ht=new l.a.Store({state:ut,actions:{changeCity:function(t,e){console.log(t),t.commit("changeCity",e)}},mutations:dt});i("j1ja");s.a.use(ct.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:rt,store:ht,components:{App:a},template:"<App/>"})},"NY/a":function(t,e){},NZBM:function(t,e){},O52k:function(t,e){},P4OD:function(t,e){},PlwL:function(t,e){},TzC8:function(t,e){},gdA2:function(t,e){},hmdH:function(t,e){},lKNJ:function(t,e){},lXqW:function(t,e){},mgS3:function(t,e){},olxF:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},wGzh:function(t,e){},x7XY:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.36ff578102fad5ccb85f.js.map