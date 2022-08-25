"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[85],{8687:function(t,e,r){r.d(e,{Z:function(){return m}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.isLoading?r("Spinner"):r("form",{on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"name"}},[t._v("Name")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.name,expression:"restaurant.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter name",required:""},domProps:{value:t.restaurant.name},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"name",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"categoryId"}},[t._v("Category")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.categoryId,expression:"restaurant.categoryId"}],staticClass:"form-control",attrs:{id:"categoryId",name:"categoryId",required:""},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.restaurant,"categoryId",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"",selected:"",disabled:""}},[t._v("--請選擇--")]),t._l(t.categories,(function(e){return r("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.name)+" ")])}))],2)]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"tel"}},[t._v("Tel")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.tel,expression:"restaurant.tel"}],staticClass:"form-control",attrs:{id:"tel",type:"text",name:"tel",placeholder:"Enter telephone number"},domProps:{value:t.restaurant.tel},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"tel",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"address"}},[t._v("Address")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.address,expression:"restaurant.address"}],staticClass:"form-control",attrs:{id:"address",type:"text",placeholder:"Enter address",name:"address"},domProps:{value:t.restaurant.address},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"address",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"opening-hours"}},[t._v("Opening Hours")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.openingHours,expression:"restaurant.openingHours"}],staticClass:"form-control",attrs:{id:"opening-hours",type:"time",name:"opening_hours"},domProps:{value:t.restaurant.openingHours},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"openingHours",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"description"}},[t._v("Description")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.restaurant.description,expression:"restaurant.description"}],staticClass:"form-control",attrs:{id:"description",rows:"3",name:"description"},domProps:{value:t.restaurant.description},on:{input:function(e){e.target.composing||t.$set(t.restaurant,"description",e.target.value)}}})]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"image"}},[t._v("Image")]),t.restaurant.image?r("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:t.restaurant.image,width:"200",height:"200"}}):t._e(),r("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:t.handleFileChange}})]),r("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.isProcessing}},[t._v(" "+t._s(t.isProcessing?"處理中...":"送出")+" ")])])},n=[],s=r(1926),i=r(9032),o=r(2907),u={name:"AdminRestaurantForm",components:{Spinner:o.Z},props:{initialRestaurant:{type:Object,default:()=>({id:-1,name:"",tel:"",address:"",openingHours:"",description:"",image:"",categoryId:""})},isProcessing:{type:Boolean,default:!1}},data(){return{restaurant:this.initialRestaurant,categories:[],isLoading:!0}},watch:{initialRestaurant(t){this.restaurant={...this.restaurant,...t}}},methods:{fetchCategories:async function(){try{const{data:t}=await i.Z.categories.get();this.categories=t.categories,this.isLoading=!1}catch(t){console.log("error: ",t),s.F.fire({icon:"error",title:"無法取得餐廳類別，請稍後再試"})}},handleFileChange:function(t){const{files:e}=t.target;0!==e.length?this.restaurant.image=window.URL.createObjectURL(e[0]):this.restaurant.image=""},handleSubmit:function(t){if(!this.restaurant.name)return void s.F.fire({icon:"warning",title:"請填寫餐廳名稱"});if(!this.restaurant.categoryId)return void s.F.fire({icon:"warning",title:"請選擇餐廳類別"});const e=t.target,r=new FormData(e);this.$emit("after-submit",r)}},created(){this.fetchCategories()}},l=u,c=r(1001),d=(0,c.Z)(l,a,n,!1,null,null,null),m=d.exports},1085:function(t,e,r){r.r(e),r.d(e,{default:function(){return m}});var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("AdminRestaurantForm",{attrs:{"is-processing":t.isProcessing},on:{"after-submit":t.handleAfterSubmit}})],1)},n=[],s=(r(1703),r(8687)),i=r(9032),o=r(1926),u={components:{AdminRestaurantForm:s.Z},data(){return{isProcessing:!1}},methods:{handleAfterSubmit:async function(t){try{this.isProcessing=!0;const{data:e}=await i.Z.restaurants.create({formData:t});if("success"!==e.status)throw new Error(e.message);this.$router.push({name:"admin-restaurants"})}catch(e){console.log("error: ",e),o.F.fire({icon:"error",title:"無法新增餐廳，請稍後再試"})}for(let[r,a]of t.entries())console.log(r+": "+a)}}},l=u,c=r(1001),d=(0,c.Z)(l,a,n,!1,null,null,null),m=d.exports},9032:function(t,e,r){var a=r(1926);e["Z"]={categories:{get(){return a.l.get("/admin/categories")},post({name:t}){return a.l.post("/admin/categories",{name:t})},put({categoryId:t,name:e}){return a.l.put(`/admin/categories/${t}`,{name:e})},delete({categoryId:t}){return a.l["delete"](`/admin/categories/${t}`)}},restaurants:{getDetail({restaurantId:t}){return a.l.get(`/admin/restaurants/${t}`)},get(){return a.l.get("/admin/restaurants")},create({formData:t}){return a.l.post("/admin/restaurants",t)},update({restaurantId:t,formData:e}){return a.l.put(`/admin/restaurants/${t}`,e)}},users:{get(){return a.l.get("/admin/users")},edit({userId:t,isAdmin:e}){return a.l.put(`/admin/users/${t}`,{isAdmin:e})}}}}}]);
//# sourceMappingURL=85.a7d0d33d.js.map