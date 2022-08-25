"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[360],{4360:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container py-5"},[e.isLoading?s("Spinner"):s("form",{on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"name"}},[e._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",placeholder:"Enter Name",required:""},domProps:{value:e.user.name},on:{input:function(t){t.target.composing||e.$set(e.user,"name",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"image"}},[e._v("Image")]),e.user.image?s("img",{staticClass:"d-block img-thumbnail mb-3",attrs:{src:e.user.image,width:"200",height:"200"}}):e._e(),s("input",{staticClass:"form-control-file",attrs:{id:"image",type:"file",name:"image",accept:"image/*"},on:{change:e.handleFileChange}})]),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"處理中...":"Submit")+" ")])])],1)},r=[],a=(s(1703),s(6017)),n=s(2907),o=s(1926),u={name:"UserEdit",components:{Spinner:n.Z},data(){return{user:{id:-1,name:"",email:"",isAdmin:!1,image:""},isLoading:!0,isProcessing:!1}},methods:{fetchUser:async function(){try{this.isLoading=!0;const{data:e}=await a.Z.getCurrentUser(),{id:t,name:s,email:i,isAdmin:r,image:n}=e;this.user={...this.user,id:t,name:s,email:i,isAdmin:r,image:n},this.isLoading=!1}catch(e){this.isLoading=!1,console.log("error: ",e),o.F.fire({icon:"error",title:"無法取得資料，請稍後再試"})}},handleFileChange:function(e){const t=e.target.files;0!==t.length?this.user.image=window.URL.createObjectURL(t[0]):this.user.image=""},handleSubmit:async function(e){try{this.isProcessing=!0;const t=new FormData(e.target),{data:s}=await a.Z.editUser({userId:this.user.id,formData:t});if("success"!==s.status)throw new Error(s.message);o.F.fire({icon:"success",title:"成功更新個人資料"}),this.$router.push({name:"user",params:{id:this.user.id}})}catch(t){this.isProcessing=!1,console.log("error: ",t),o.F.fire({icon:"error",title:"無法更新個人資料，請稍後再試"})}}},created(){+this.$route.params.id!==this.$store.state.currentUser.id&&(o.F.fire({icon:"error",title:"您沒有編輯權限"}),this.$router.push({name:"user",params:{id:this.$route.params.id}})),this.fetchUser()},beforeRouteUpdate(e,t,s){e.params.id!==this.$store.state.currentUser.id&&(o.F.fire({icon:"error",title:"您沒有編輯權限"}),this.$router.push({name:"user",params:{id:e.params.id}})),this.fetchUser(),s()}},m=u,c=s(1001),l=(0,c.Z)(m,i,r,!1,null,null,null),d=l.exports}}]);
//# sourceMappingURL=360.5ec3538a.js.map