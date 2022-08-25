"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[203],{24203:function(t,e,r){r.r(e),r.d(e,{default:function(){return g}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("NavTabs"),r("h1",{staticClass:"mt-5"},[t._v("人氣餐廳")]),r("hr"),t.isLoading?r("Spinner"):r("div",{staticClass:"card-wrapper"},t._l(t.restaurants,(function(e){return r("div",{key:e.id,staticClass:"card"},[r("div",{staticClass:"row gy-1 align-items-center"},[r("div",{staticClass:"col-sm-4 col-lg-3 col-xl-4"},[r("router-link",{attrs:{to:{name:"restaurant",params:{id:e.id}}}},[r("img",{staticClass:"card-img",attrs:{src:t._f("emptyImageFilter")(e.image)}})])],1),r("div",{staticClass:"col-sm-8 col-lg-9 col-xl-8"},[r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(e.name))]),r("span",{staticClass:"badge badge-secondary"},[t._v("收藏數："+t._s(e.FavoriteCount))]),r("p",{staticClass:"card-text text-truncate"},[t._v(" "+t._s(e.description)+" ")]),r("router-link",{staticClass:"btn btn-primary mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:e.id}}}},[t._v("Dashboard ")]),e.isFavorited?r("button",{staticClass:"btn btn-danger mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.deleteFavorite(e)}}},[t._v(" 移除最愛 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.addFavorite(e)}}},[t._v(" 加到最愛 ")])],1)])])])})),0)],1)},s=[],n=r(16198),i=(r(78975),r(21249),r(68309),r(82526),r(41817),r(21703),r(22522)),o=r(98247),c=r(41926),u=r(81947),d=r(76017),l=r(22907),v={mixins:[o.Lf],components:{NavTabs:i.Z,Spinner:l.Z},data:function(){return{restaurants:[],isLoading:!0}},methods:{fetchRestaurants:function(){var t=(0,n.Z)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isLoading=!0,t.next=4,u.Z.getTopRestaurants();case 4:e=t.sent,r=e.data,this.restaurants=r.restaurants.map((function(t){return{id:t.id,name:t.name,image:t.image,FavoriteCount:t.FavoriteCount,description:t.description,isFavorited:t.isFavorited,isProcessing:!1}})),this.isLoading=!1,t.next=15;break;case 10:t.prev=10,t.t0=t["catch"](0),this.isLoading=!1,console.log("error: ",t.t0),c.F.fire({icon:"error",title:"無法取得人氣餐廳，請稍後再試"});case 15:case"end":return t.stop()}}),t,this,[[0,10]])})));function e(){return t.apply(this,arguments)}return e}(),addFavorite:function(){var t=(0,n.Z)(regeneratorRuntime.mark((function t(e){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isProcessing=!0,t.next=4,d.Z.addFavorite(e.id);case 4:if(r=t.sent,a=r.data,"success"===a.status){t.next=8;break}throw new Error(a.message);case 8:e.isFavorited=!0,e.FavoriteCount++,e.isProcessing=!1,t.next=18;break;case 13:t.prev=13,t.t0=t["catch"](0),e.isProcessing=!1,console.log("error: ",t.t0),c.F.fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"});case 18:case"end":return t.stop()}}),t,null,[[0,13]])})));function e(e){return t.apply(this,arguments)}return e}(),deleteFavorite:function(){var t=(0,n.Z)(regeneratorRuntime.mark((function t(e){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.Z.deleteFavorite(e.id);case 3:if(r=t.sent,a=r.data,"success"===a.status){t.next=7;break}throw new Error(a.message);case 7:e.isFavorited=!1,e.FavoriteCount--,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log("error: ",t.t0),c.F.fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"});case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));function e(e){return t.apply(this,arguments)}return e}()},created:function(){this.fetchRestaurants()}},p=v,f=r(1001),m=(0,f.Z)(p,a,s,!1,null,"5df1d1b7",null),g=m.exports}}]);
//# sourceMappingURL=203-legacy.47940956.js.map