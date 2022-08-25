"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[374],{58687:function(t,e,r){r.d(e,{Z:function(){return g}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isLoading?r("Spinner"):r("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.name,expression:"restaurant.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name",required:""},domProps:{value:t.restaurant.name},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"categoryId"}},[t._v("Category")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.categoryId,expression:"restaurant.categoryId"}],staticClass:"form-control",attrs:{id:"categoryId",name:"categoryId",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.restaurant,"categoryId",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("--請選擇--")]),t._l(t.categories,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"tel"}},[t._v("Tel")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.tel,expression:"restaurant.tel"}],staticClass:"form-control",attrs:{id:"tel",type:"text",name:"tel",placeholder:"Enter telephone number"},domProps:{value:t.restaurant.tel},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"tel",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[t._v("Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.address,expression:"restaurant.address"}],staticClass:"form-control",attrs:{id:"address",type:"text",placeholder:"Enter address",name:"address"},domProps:{value:t.restaurant.address},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"address",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"opening-hours"}},[t._v("Opening Hours")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.openingHours,expression:"restaurant.openingHours"}],staticClass:"form-control",attrs:{id:"opening-hours",type:"time",name:"opening_hours"},domProps:{value:t.restaurant.openingHours},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"openingHours",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.description,expression:"restaurant.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3",name:"description"},domProps:{value:t.restaurant.description},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"description",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[t._v("Image")]),t.restaurant.image?r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:t.restaurant.image,width:"200",height:"200"}}):t._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:t.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" "+t._s(t.isProcessing?"處理中...":"送出")+" ")])])},n=[],s=r(16198),i=r(93019),o=(r(41539),r(78783),r(33948),r(60285),r(41637),r(68309),r(78975),r(41926)),u=r(19032),c=r(22907),l={name:"AdminRestaurantForm",components:{Spinner:c.Z},props:{initialRestaurant:{type:Object,default:function(){return{id:-1,name:"",tel:"",address:"",openingHours:"",description:"",image:"",categoryId:""}}},isProcessing:{type:Boolean,default:!1}},data:function(){return{restaurant:this.initialRestaurant,categories:[],isLoading:!0}},watch:{initialRestaurant:function(t){this.restaurant=(0,i.Z)((0,i.Z)({},this.restaurant),t)}},methods:{fetchCategories:function(){var t=(0,s.Z)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.categories.get();case 3:e=t.sent,r=e.data,this.categories=r.categories,this.isLoading=!1,t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log("error: ",t.t0),o.F.fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"});case 13:case"end":return t.stop()}}),t,this,[[0,9]])})));function e(){return t.apply(this,arguments)}return e}(),handleFileChange:function(t){var e=t.target.files;0!==e.length?this.restaurant.image=window.URL.createObjectURL(e[0]):this.restaurant.image=""},handleSubmit:function(t){if(this.restaurant.name)if(this.restaurant.categoryId){var e=t.target,r=new FormData(e);this.$emit("after-submit",r)}else o.F.fire({icon:"warning",title:"請選擇餐廳類別"});else o.F.fire({icon:"warning",title:"請填寫餐廳名稱"})}},created:function(){this.fetchCategories()}},d=l,m=r(1001),p=(0,m.Z)(d,a,n,!1,null,null,null),g=p.exports},11374:function(t,e,r){r.r(e),r.d(e,{default:function(){return f}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[t.isLoading?r("Spinner"):r("AdminRestaurantForm",{attrs:{"initial-restaurant":t.restaurant,"is-processing":t.isProcessing},on:{"after-submit":t.handleAfterSubmit}})],1)},n=[],s=r(93019),i=r(16198),o=(r(78975),r(68309),r(82526),r(41817),r(21703),r(58687)),u=r(19032),c=r(22907),l=r(41926),d={name:"AdminRestaurantEdit",components:{AdminRestaurantForm:o.Z,Spinner:c.Z},data:function(){return{restaurant:{id:-1,name:"",tel:"",address:"",openingHours:"",description:"",image:"",categoryId:""},isLoading:!0,isProcessing:!1}},methods:{fetchRestaurant:function(){var t=(0,i.Z)(regeneratorRuntime.mark((function t(e){var r,a,n,i,o,c,d,m,p,g,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isLoading=!0,t.next=4,u.Z.restaurants.getDetail({restaurantId:e});case 4:r=t.sent,a=r.data,n=a.restaurant,i=n.id,o=n.name,c=n.tel,d=n.address,m=n.opening_hours,p=n.description,g=n.image,f=n.CategoryId,this.restaurant=(0,s.Z)((0,s.Z)({},this.restaurant),{},{id:i,name:o,tel:c,address:d,openingHours:m,description:p,image:g,categoryId:f}),this.isLoading=!1,t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](0),this.isLoading=!1,console.log("error: ",t.t0),l.F.fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 16:case"end":return t.stop()}}),t,this,[[0,11]])})));function e(e){return t.apply(this,arguments)}return e}(),handleAfterSubmit:function(){var t=(0,i.Z)(regeneratorRuntime.mark((function t(e){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.isProcessing=!0,t.next=4,u.Z.restaurants.update({restaurantId:this.restaurant.id,formData:e});case 4:if(r=t.sent,a=r.data,"success"===a.status){t.next=8;break}throw new Error(a.message);case 8:this.$router.push({name:"admin-restaurants"}),t.next=16;break;case 11:t.prev=11,t.t0=t["catch"](0),this.isProcessing=!1,console.log("error: ",t.t0),l.F.fire({icon:"error",title:"無法更新餐廳資料，請稍後再試"});case 16:case"end":return t.stop()}}),t,this,[[0,11]])})));function e(e){return t.apply(this,arguments)}return e}()},beforeRouteUpdate:function(t,e,r){this.fetchRestaurant(t.params.id),r()},created:function(){var t=this.$route.params.id;this.fetchRestaurant(t)}},m=d,p=r(1001),g=(0,p.Z)(m,a,n,!1,null,null,null),f=g.exports},19032:function(t,e,r){r(68309);var a=r(41926);e["Z"]={categories:{get:function(){return a.l.get("/admin/categories")},post:function(t){var e=t.name;return a.l.post("/admin/categories",{name:e})},put:function(t){var e=t.categoryId,r=t.name;return a.l.put("/admin/categories/".concat(e),{name:r})},delete:function(t){var e=t.categoryId;return a.l["delete"]("/admin/categories/".concat(e))}},restaurants:{getDetail:function(t){var e=t.restaurantId;return a.l.get("/admin/restaurants/".concat(e))},get:function(){return a.l.get("/admin/restaurants")},create:function(t){var e=t.formData;return a.l.post("/admin/restaurants",e)},update:function(t){var e=t.restaurantId,r=t.formData;return a.l.put("/admin/restaurants/".concat(e),r)}},users:{get:function(){return a.l.get("/admin/users")},edit:function(t){var e=t.userId,r=t.isAdmin;return a.l.put("/admin/users/".concat(e),{isAdmin:r})}}}}}]);
//# sourceMappingURL=374-legacy.1979cfcf.js.map