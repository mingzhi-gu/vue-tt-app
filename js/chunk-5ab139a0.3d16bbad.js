(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ab139a0"],{"0522":function(t,e,i){},"169a":function(t,e,i){},"20f5":function(t,e,i){},"365a":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"oneBar"},[i("router-link",{staticClass:"searchBar",attrs:{tag:"div",to:{name:"Search"}}},[i("van-icon",{attrs:{name:"search"}}),i("span",[t._v("搜索")])],1),i("topbar"),t.loading?[i("van-loading",{attrs:{type:"spinner",size:"1rem",color:"#0094ff",vertical:""}})]:t._e(),i("twobar"),i("goods-list")],2)},n=[],c=i("5530"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"scroll",staticClass:"topbar",on:{touchend:t.scrollTo,touchstart:function(e){t.move=!1},touchmove:function(e){t.move=!0}}},t._l(t.menuList,(function(e,s){return i("div",{key:s,staticClass:"topImg ",class:{active:s==t.index},attrs:{"data-id":s}},[i("div",{staticClass:"imgs"},[i("img",{attrs:{src:e.imgURL}})]),i("div",{staticClass:"title"},[t._v(t._s(e.title))])])})),0)},o=[],r=i("2f62"),l={created:function(){var t=this;this.$axios.getTwoList(this.menuList[this.index].title).then((function(e){t.getSideList(e)}))},data:function(){return{index:0,move:!1,menuList:[{title:"时令水果",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/时令水果.jpg"},{title:"酒水冲调",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/酒水冲调.jpg"},{title:"安心乳品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/安心乳品.jpg"},{title:"休闲零食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/休闲零食.jpg"},{title:"肉蛋食材",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/肉蛋食材.jpg"},{title:"新鲜蔬菜",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/新鲜食材.jpg"},{title:"熟食餐饮",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/熟食餐饮.jpg"},{title:"海鲜水产",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/海鲜水产.jpg"},{title:"粮油调味",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/粮油调味.jpg"},{title:"某手美食",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/某手美食.jpg"},{title:"纸杯清洁",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/纸品清洁.jpg"},{title:"个人护理",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/个人护理.jpg"},{title:"美妆护肤",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/美妆护肤.jpg"},{title:"家居收纳",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家居收纳.jpg"},{title:"家用电器",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/家用电器.jpg"},{title:"3C数码",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/3C数码.jpg"},{title:"母婴用品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/母婴用品.jpg"},{title:"鲜花绿植",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/鲜花绿植.jpg"},{title:"宠物用品",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/宠物用品.jpg"},{title:"图书玩具",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/图书文具.jpg"},{title:"手表配饰",imgURL:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/手表配饰.jpg"}]}},methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(r["c"])(["resetGoodsList"])),Object(r["b"])(["getSideList","getGoodsList"])),{},{scrollTo:function(t){var e=this;if(!this.move){if(t.target.dataset.id)this.index=+t.target.dataset.id;else if(t.target.parentElement.dataset.id)this.index=+t.target.parentElement.dataset.id;else{if(!t.target.parentElement.parentElement.dataset.id)return;this.index=+t.target.parentElement.parentElement.dataset.id}var i=t.target.getBoundingClientRect().left,s=t.target.offsetWidth,n=this.$refs.scroll.clientWidth,c=i-n/2+s/2;this.moveScroll(this.$refs.scroll.scrollLeft,c),this.$axios.getTwoList(this.menuList[this.index].title).then((function(t){e.getSideList(t),e.resetGoodsList(),e.getGoodsList({type:t[0],page:1,sort:"all"})}))}},moveScroll:function(t,e){var i=this,s=0,n=5;e<0&&(n*=-1);var c=setInterval((function(){s+=n,i.$refs.scroll.scrollLeft=t+s,Math.abs(s)>=Math.abs(e)&&(i.$refs.scroll.scrollLeft=t+e,clearInterval(c))}),2)}})},d=l,u=(i("b2a4"),i("2877")),g=Object(u["a"])(d,a,o,!1,null,"393706cf",null),m=g.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"side",staticClass:"twoBar",on:{touchstart:function(e){t.move=!1},touchmove:function(e){t.move=!0},touchend:t.scrollTo}},t._l(t.sideList,(function(e,s){return i("div",{key:s,class:{active:t.index==s},attrs:{"data-id":s}},[t._v(t._s(0==s?"全部":e))])})),0)},h=[],f={data:function(){return{list:[],index:0,move:!1,page:1,size:7,sortType:"all"}},computed:Object(c["a"])({},Object(r["d"])(["sideList"])),methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(r["b"])(["getGoodsList"])),Object(r["c"])(["resetGoodsList"])),{},{scrollTo:function(t){if(!this.move){if(t.target.dataset.id)this.index=+t.target.dataset.id;else if(t.target.parentElement.dataset.id)this.index=+t.target.parentElement.dataset.id;else{if(!t.target.parentElement.parentElement.dataset.id)return;this.index=+t.target.parentElement.parentElement.dataset.id}var e=t.target.getBoundingClientRect().top,i=this.$refs.side.offsetTop,s=this.$refs.side.offsetHeight/2;this.moveScroll(this.$refs.side.scrollTop,s-(e-i)),this.resetGoodsList(),this.getGoodsList({type:this.sideList[this.index],page:1,sort:this.sortType})}},moveScroll:function(t,e){var i=this;if(this.move)this.move=!1;else{var s=0,n=5;e>0&&(n*=-1);var c=setInterval((function(){s+=n,i.$refs.side.scrollTop=t+s,Math.abs(s)>=Math.abs(e)&&(i.$refs.side.scrollTop=t-e,clearInterval(c))}),2)}}}),mounted:function(){this.resetGoodsList(),this.getGoodsList({type:this.sideList[0],page:1,sort:this.sortType})}},v=f,b=(i("59f8"),Object(u["a"])(v,p,h,!1,null,"e8a81638",null)),y=b.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"goodsList"},[i("div",{staticClass:"list-header"},[i("div",{class:{active:"all"===t.type},on:{touchend:function(e){return t.changeType("all")}}},[t._v("综合")]),i("div",{class:{active:"sale"===t.type},on:{touchend:function(e){return t.changeType("sale")}}},[t._v("销量")]),i("div",{staticClass:"price",class:{"price-up":"price-up"===t.type,"price-down":"price-down"===t.type},on:{touchend:function(e){return t.changeType("price")}}},[t._v("价格")])]),i("div",{staticClass:"list-content"},[i("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.goodsList,(function(e){return i("card",{key:e.id,attrs:{id:e.id,title:e.title,desc:e.desc,tags:e.tags,price:e.price,price_off:e.price_off,num:t.counterMap[e.id],image:e.images[0]}})})),1)],1)],1)])},L=[],_=(i("96cf"),i("1da1")),k=i("ff86"),x={components:{card:k["a"]},data:function(){return{count:0,type:"all",isLoading:!1,loading:!1,finished:!1,page:1}},computed:Object(c["a"])({},Object(r["d"])(["goodsList","counterMap","finish"])),methods:Object(c["a"])(Object(c["a"])(Object(c["a"])({},Object(r["c"])(["resetGoodsList","setFinsh"])),Object(r["b"])(["getGoodsList"])),{},{changeType:function(t){"price"===t?"price-up"===this.type?this.type="price-down":this.type="price-up":this.type=t},onRefresh:function(){var t=this;setTimeout((function(){t.isLoading=!1,t.finished=!1,t.count+=1,t.page=1,t.resetGoodsList(),t.getGoodsList({page:1,sort:t.type})}),500)},onLoad:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.page+=1,t.loading=!0,e.next=4,t.getGoodsList({page:t.page,sort:t.type});case 4:i=e.sent,t.loading=!1,i?t.loading=!1:t.finished=!0;case 7:case"end":return e.stop()}}),e)})))()}})},C=x,O=(i("e15f"),Object(u["a"])(C,j,L,!1,null,null,null)),R=O.exports,w={components:{topbar:m,twobar:y,goodsList:R},computed:Object(c["a"])({},Object(r["d"])(["loading"]))},U=w,$=(i("4d8a"),Object(u["a"])(U,s,n,!1,null,"b8712750",null));e["default"]=$.exports},"4d8a":function(t,e,i){"use strict";i("aca9")},"59f8":function(t,e,i){"use strict";i("c958")},"5bb4":function(t,e,i){},9889:function(t,e,i){"use strict";i("0522")},aca9:function(t,e,i){},af7d:function(t,e,i){"use strict";i("169a")},b2a4:function(t,e,i){"use strict";i("5bb4")},c958:function(t,e,i){},e15f:function(t,e,i){"use strict";i("20f5")},ff86:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card"},[i("div",{staticClass:"cardImg"},[i("img",{ref:"img",attrs:{src:t.image,alt:""}})]),i("div",{staticClass:"card-content"},[i("div",{staticClass:"overflow-hidden title"},[t._v(t._s(t.title))]),i("div",{staticClass:"overflow-hidden desc"},[t._v(t._s(t.desc))]),i("div",{staticClass:"tags"},t._l(t.tags,(function(e,s){return i("div",{key:s},[t._v(t._s(e))])})),0),i("div",{staticClass:"prices"},[i("div",{staticClass:"price"},[t._v(t._s(t.price))]),i("div",{staticClass:"price-off"},[t._v(t._s(t.price_off))]),i("div",{staticClass:"counter"},[t.num?i("div",{on:{touchend:function(e){return t.changeHandler(t.id,-1)}}},[i("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/rec.png",alt:""}})]):t._e(),t.num?i("div",{staticClass:"num"},[t._v(t._s(t.num))]):t._e(),i("div",{on:{touchend:function(e){return t.changeHandler(t.id,1)}}},[i("img",{attrs:{src:"https://duyi-bucket.oss-cn-beijing.aliyuncs.com/img/add.png",alt:""}})])])])])])},n=[],c=i("5530"),a=i("2f62"),o=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.exist?i("div",{staticClass:"item",style:{width:t.width,height:t.height,opacity:t.opacity,transform:"translate("+t.moveX+"px,"+t.moveY+"px) scale("+t.sx+","+t.sy+")"}},[i("img",{attrs:{src:t.src}})]):t._e()},l=[],d={},u=d,g=(i("af7d"),i("2877")),m=Object(g["a"])(u,r,l,!1,null,"51356ad8",null),p=m.exports,h=o["a"].extend(p);function f(t){var e=t.startX,i=t.startY,s=t.endX,n=t.endY,c=t.width,a=t.height,o=t.src,r=new h({el:document.createElement("div"),data:function(){return{moveX:e,moveY:i,sx:1,sy:1,opacity:1,exist:!0,src:o,width:c,height:a}}});document.body.appendChild(r.$el),setTimeout((function(){r.moveX=s,r.moveY=n,r.sx=.1,r.sy=.1,r.opacity=0}),0),setTimeout((function(){r.exist=!1}),1e3),console.log(r)}var v={props:["id","title","desc","tags","price","price_off","image","num"],methods:Object(c["a"])(Object(c["a"])({},Object(a["c"])(["storageChange"])),{},{changeHandler:function(t,e){if(this.storageChange({id:t,value:e}),1===e){var i=this.$refs.img.getBoundingClientRect(),s=i.left,n=i.top;console.log(s,n);var c=document.getElementById("shoping-card"),a=c.getBoundingClientRect(),o=a.left,r=a.top,l=c.offsetWidth,d=c.offsetHeight,u=o+l/2,g=r+d/2,m=getComputedStyle(this.$refs.img,null),p=m.width,h=m.height;f({startX:s,startY:n,endX:u,endY:g,width:p,height:h,src:this.$refs.img.src})}}})},b=v,y=(i("9889"),Object(g["a"])(b,s,n,!1,null,null,null));e["a"]=y.exports}}]);
//# sourceMappingURL=chunk-5ab139a0.3d16bbad.js.map