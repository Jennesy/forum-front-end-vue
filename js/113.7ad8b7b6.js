"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[113],{6113:function(e,s,t){t.r(s),t.d(s,{default:function(){return d}});var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"container py-5"},[t("form",{staticClass:"w-100",on:{submit:function(s){return s.stopPropagation(),s.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),t("div",{staticClass:"form-label-group mb-3"},[t("label",{attrs:{for:"name"}},[e._v("Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{id:"name",name:"name",type:"text",placeholder:"name",autocomplete:"username",required:""},domProps:{value:e.name},on:{input:function(s){s.target.composing||(e.name=s.target.value)}}})]),t("div",{staticClass:"form-label-group mb-2"},[t("label",{attrs:{for:"email"}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"username",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}})]),t("div",{staticClass:"form-label-group mb-3"},[t("label",{attrs:{for:"password"}},[e._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})]),t("div",{staticClass:"form-label-group mb-5"},[t("label",{attrs:{for:"password-check"}},[e._v("Password Check")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.passwordCheck,expression:"passwordCheck"}],staticClass:"form-control",attrs:{id:"password-check",type:"password",name:"passwordCheck",placeholder:"Password",autocomplete:"new-password",required:""},domProps:{value:e.passwordCheck},on:{input:function(s){s.target.composing||(e.passwordCheck=s.target.value)}}})]),t("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" "+e._s(e.isProcessing?"處理中...":"Submit")+" ")]),t("div",{staticClass:"text-center mb-3"},[t("p",[t("router-link",{attrs:{to:"/signin"}},[e._v("Sign In")])],1)]),t("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v("© 2017-2018")])])])},r=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"text-center mb-4"},[t("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Sign Up")])])}],i=(t(1703),t(6047)),o=t(1926),n={data(){return{name:"",email:"",password:"",passwordCheck:"",isProcessing:!1}},methods:{handleSubmit:async function(){try{if(!this.name)return void o.F.fire({icon:"warning",title:"請填寫名稱"});if(!this.email)return void o.F.fire({icon:"warning",title:"請填寫信箱"});if(!this.password)return void o.F.fire({icon:"warning",title:"請填寫密碼"});if(!this.passwordCheck)return void o.F.fire({icon:"warning",title:"請填寫確認密碼"});if(this.password!==this.passwordCheck)return void o.F.fire({icon:"warning",title:"密碼與確認密碼不同"});this.isProcessing=!0;const{data:e}=await i.Z.signup({name:this.name,email:this.email,password:this.password,passwordCheck:this.passwordCheck});if("success"!==e.status)throw new Error(e.message);o.F.fire({icon:"success",title:"成功建立帳號"}),this.$router.push({name:"sign-in"})}catch(e){this.isProcessing=!1,console.log("error: ",e),o.F.fire({icon:"error",title:"無法建立帳號，請稍後再試"})}}}},l=n,m=t(1001),c=(0,m.Z)(l,a,r,!1,null,"51b57731",null),d=c.exports}}]);
//# sourceMappingURL=113.7ad8b7b6.js.map