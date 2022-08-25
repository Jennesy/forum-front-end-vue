"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[958],{84958:function(t,e,r){r.r(e),r.d(e,{default:function(){return E}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("h1",[t._v("餐廳描述頁")]),t.isLoading?r("Spinner"):[r("RestaurantDetail",{attrs:{"initial-restaurant":t.restaurant}}),r("hr"),r("RestaurantComments",{attrs:{"initial-restaurant-comments":t.restaurantComments},on:{"child-delete-comment":t.afterDeleteComment}}),r("CreateComment",{attrs:{"restaurant-id":t.restaurant.id},on:{"after-create-comment":t.afterCreateComment}})]],2)},s=[],a=r(16198),i=r(93019),o=(r(78975),r(68309),r(82526),r(41817),r(57327),r(41539),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12 mb-3"},[r("h1",[t._v(t._s(t.restaurant.name))]),r("p",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),r("div",{staticClass:"col-lg-4"},[r("img",{staticClass:"img-responsive center-block",staticStyle:{width:"250px","margin-bottom":"25px"},attrs:{src:t._f("emptyImageFilter")(t.restaurant.image)}}),r("div",{staticClass:"contact-info-wrap"},[r("ul",{staticClass:"list-unstyled"},[r("li",[r("strong",[t._v("Opening Hour:")]),t._v(" "+t._s(t.restaurant.openingHours)+" ")]),r("li",[r("strong",[t._v("Tel:")]),t._v(" "+t._s(t.restaurant.tel)+" ")]),r("li",[r("strong",[t._v("Address:")]),t._v(" "+t._s(t.restaurant.address)+" ")])])])]),r("div",{staticClass:"col-lg-8"},[r("p",[t._v(t._s(t.restaurant.description))]),r("router-link",{staticClass:"btn btn-primary btn-border mr-2",attrs:{to:{name:"restaurant-dashboard",params:{id:t.restaurant.id}}}},[t._v("Dashboard")]),t.restaurant.isFavorited?r("button",{staticClass:"btn btn-danger btn-border mr-2",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteFavorite.apply(null,arguments)}}},[t._v(" 移除最愛 ")]):r("button",{staticClass:"btn btn-primary btn-border mr-2",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addFavorite.apply(null,arguments)}}},[t._v(" 加到最愛 ")]),t.restaurant.isLiked?r("button",{staticClass:"btn btn-danger like mr-2",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteLike.apply(null,arguments)}}},[t._v(" Unlike ")]):r("button",{staticClass:"btn btn-primary like mr-2",attrs:{type:"button",disabled:t.isProcessing},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.addLike.apply(null,arguments)}}},[t._v(" Like ")])],1)])}),u=[],c=(r(21703),r(98247)),l=r(41926),m=r(76017),d={mixins:[c.Lf],props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant,isProcessing:!1}},watch:{initialRestaurant:function(t){this.restaurant=(0,i.Z)((0,i.Z)({},this.restaurant),t)}},methods:{addFavorite:function(){var t=(0,a.Z)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isProcessing=!0,t.next=4,m.Z.addFavorite(this.restaurant.id);case 4:if(e=t.sent,r=e.data,"success"===r.status){t.next=8;break}throw new Error(r.message);case 8:this.restaurant.isFavorited=!0,this.isProcessing=!1,t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](0),this.isProcessing=!1,console.log("error: ",t.t0),l.F.fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"});case 17:case"end":return t.stop()}}),t,this,[[0,12]])})));function e(){return t.apply(this,arguments)}return e}(),deleteFavorite:function(){var t=(0,a.Z)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isProcessing=!0,t.next=4,m.Z.deleteFavorite(this.restaurant.id);case 4:if(e=t.sent,r=e.data,"success"===r.status){t.next=8;break}throw new Error(r.message);case 8:this.restaurant.isFavorited=!1,this.isProcessing=!1,t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](0),this.isProcessing=!1,console.log("error: ",t.t0),l.F.fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"});case 17:case"end":return t.stop()}}),t,this,[[0,12]])})));function e(){return t.apply(this,arguments)}return e}(),addLike:function(){var t=(0,a.Z)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isProcessing=!0,t.next=4,m.Z.addLike(this.restaurant.id);case 4:if(e=t.sent,r=e.data,"success"===r.status){t.next=8;break}throw new Error(r.message);case 8:this.restaurant.isLiked=!0,this.isProcessing=!1,t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](0),this.isProcessing=!1,console.log("error: ",t.t0),l.F.fire({icon:"error",title:"無法Like餐廳，請稍後再試"});case 17:case"end":return t.stop()}}),t,this,[[0,12]])})));function e(){return t.apply(this,arguments)}return e}(),deleteLike:function(){var t=(0,a.Z)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isProcessing=!0,t.next=4,m.Z.deleteLike(this.restaurant.id);case 4:if(e=t.sent,r=e.data,"success"===r.status){t.next=8;break}throw new Error(r.message);case 8:this.restaurant.isLiked=!1,this.isProcessing=!1,t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](0),this.isProcessing=!1,console.log("error: ",t.t0),l.F.fire({icon:"error",title:"無法Unlike餐廳，請稍後再試"});case 17:case"end":return t.stop()}}),t,this,[[0,12]])})));function e(){return t.apply(this,arguments)}return e}()}},p=d,h=r(1001),f=(0,h.Z)(p,o,u,!1,null,"363b6ec2",null),v=f.exports,g=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"my-4"},[t._v("所有評論：")]),t._l(t.restaurantComments,(function(e){return r("div",{key:e.id},[r("blockquote",{staticClass:"blockquote mb-0"},[t.currentUser.isAdmin?r("button",{staticClass:"btn btn-danger float-right",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.childDeleteComment(e.id)}}},[t._v(" Delete ")]):t._e(),r("h3",[r("router-link",{attrs:{to:{name:"user",params:{id:e.User.id}}}},[t._v(" "+t._s(e.User.name)+" ")])],1),r("p",[t._v(t._s(e.text))]),r("footer",{staticClass:"blockquote-footer"},[t._v(" "+t._s(t._f("fromNow")(e.createdAt))+" ")])]),r("hr")])}))],2)},b=[],k=r(81947),x={mixins:[c.qk],props:{initialRestaurantComments:{type:Array,required:!0}},data:function(){return{restaurantComments:this.initialRestaurantComments}},watch:{initialRestaurantComments:function(t){this.restaurantComments=t}},methods:{childDeleteComment:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,k.Z.comments["delete"]({commentId:t});case 3:if(n=r.sent,s=n.data,"success"===s.status){r.next=7;break}throw new Error(s.message);case 7:e.$emit("child-delete-comment",t),r.next=14;break;case 10:r.prev=10,r.t0=r["catch"](0),console.log("error: ",r.t0),l.F.fire({icon:"error",title:"無法刪除評論，請稍後再試"});case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))()}},computed:{currentUser:function(){return(0,i.Z)({id:-1,name:"",email:"",image:"",isAdmin:!1},this.$store.state.currentUser)}}},C=x,_=(0,h.Z)(C,g,b,!1,null,"6c19448a",null),w=_.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSummit.apply(null,arguments)}}},[r("div",{staticClass:"form-group mb-4"},[r("label",{attrs:{for:"text"}},[t._v("留下評論：")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",attrs:{rows:"3",name:"text"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),r("div",{staticClass:"d-flex align-items-center justify-content-between"},[r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(e){return t.$router.back()}}},[t._v(" 回上一頁 ")]),r("button",{staticClass:"btn btn-primary mr-0",attrs:{type:"submit"}},[t._v("Submit")])])])},R=[],P=(r(9653),r(73210),{name:"CreateComment",props:{restaurantId:{type:Number,required:!0}},data:function(){return{text:""}},computed:{userId:function(){return this.$store.state.currentUser.id}},methods:{handleSummit:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t.text=t.text.trim(),""!==t.text){e.next=5;break}return l.F.fire({icon:"warning",title:"無法新增空白留言"}),e.abrupt("return");case 5:return e.next=7,k.Z.comments.create({text:t.text,restaurantId:t.restaurantId,id:t.userId});case 7:if(r=e.sent,n=r.data,"success"===n.status){e.next=11;break}throw new Error(n.message);case 11:t.$emit("after-create-comment",{commentId:n.commentId,restaurantId:t.restaurantId,text:t.text}),t.text="",e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](0),console.log("error: ",e.t0),l.F.fire({icon:"error",title:"無法新增留言，請稍後再試"});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))()}}}),Z=P,F=(0,h.Z)(Z,y,R,!1,null,"e60559b6",null),L=F.exports,D=r(22907),I={name:"Restaurant",components:{RestaurantDetail:v,RestaurantComments:w,CreateComment:L,Spinner:D.Z},data:function(){return{restaurant:{id:-1,name:"",tel:"",address:"",openingHours:"",description:"",image:"",categoryName:"",isFavorited:!1,isLiked:!1},restaurantComments:[],isLoading:!0}},computed:{currentUser:function(){return(0,i.Z)({id:-1,name:"",email:"",image:"",isAdmin:!1},this.$store.state.currentUser)}},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)},beforeRouteUpdate:function(t,e,r){this.fetchRestaurant(t.params.id),r()},methods:{fetchRestaurant:function(){var t=(0,a.Z)(regeneratorRuntime.mark((function t(e){var r,n,s,a,i,o,u,c,m,d,p,h,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isLoading=!0,t.next=4,k.Z.getRestaurant({restaurantId:e});case 4:r=t.sent,n=r.data,s=n.restaurant,a=s.id,i=s.name,o=s.tel,u=s.address,c=s.opening_hours,m=s.description,d=s.image,p=s.Category,h=n.isFavorited,f=n.isLiked,this.restaurant={id:a,name:i,tel:o,address:u,openingHours:c,description:m,image:d,categoryName:p?p.name:"未分類",isFavorited:h,isLiked:f},this.restaurantComments=n.restaurant.Comments,this.isLoading=!1,t.next=18;break;case 13:t.prev=13,t.t0=t["catch"](0),this.isLoading=!1,console.log("error: ",t.t0),l.F.fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 18:case"end":return t.stop()}}),t,this,[[0,13]])})));function e(e){return t.apply(this,arguments)}return e}(),afterDeleteComment:function(t){console.log("afterDeleteComment",t),this.restaurantComments=this.restaurantComments.filter((function(e){return e.id!==t}))},afterCreateComment:function(t){var e=t.commentId,r=t.restaurantId,n=t.text;this.restaurantComments.push({id:e,text:n,RestaurantId:r,createdAt:new Date,User:{id:this.currentUser.id,name:this.currentUser.name}})}}},U=I,$=(0,h.Z)(U,n,s,!1,null,null,null),E=$.exports}}]);
//# sourceMappingURL=958-legacy.15a03bc8.js.map