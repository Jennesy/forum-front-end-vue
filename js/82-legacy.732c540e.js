"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[82],{23082:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container py-5"},[r("NavTabs"),r("h1",{staticClass:"mt-5"},[e._v("美食達人")]),r("hr"),e.isLoading?r("Spinner"):r("div",{staticClass:"card-wrapper text-center"},e._l(e.users,(function(e){return r("UserCard",{key:e.id,attrs:{"initial-user":e}})})),1)],1)},n=[],i=r(16198),a=(r(78975),r(21249),r(68309),r(22522)),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex flex-row flex-sm-column align-items-center bg-light p-3 rounded"},[r("router-link",{attrs:{to:{name:"user",params:{id:e.user.id}}}},[r("img",{staticClass:"rounded",attrs:{src:e._f("emptyAvatarFilter")(e.user.image,e.user.id),width:"140px",height:"140px"}})]),r("div",[r("h2",[e._v(e._s(e.user.name))]),r("span",{staticClass:"badge badge-secondary"},[e._v("追蹤人數："+e._s(e.user.FollowerCount))])]),r("p",{staticClass:"mt-3"},[e.user.isFollowed?r("button",{staticClass:"btn btn-danger",attrs:{type:"button",disabled:e.user.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.deleteFollowing(e.user.id)}}},[e._v(" 取消追蹤 ")]):r("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:e.user.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFollowing(e.user.id)}}},[e._v(" 追蹤 ")])])],1)},u=[],c=r(93019),l=(r(21703),r(98247)),d=r(41926),p=r(76017),h={mixins:[l.XR],props:{initialUser:{type:Object,required:!0}},data:function(){return{user:(0,c.Z)((0,c.Z)({},this.initialUser),{},{isProcessing:!1})}},methods:{addFollowing:function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(t){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.user.isProcessing=!0,e.next=4,p.Z.addFollowing(t);case 4:if(r=e.sent,s=r.data,"success"===s.status){e.next=8;break}throw new Error(s.message);case 8:this.user.isFollowed=!0,this.user.FollowerCount++,this.user.isProcessing=!1,e.next=18;break;case 13:e.prev=13,e.t0=e["catch"](0),this.user.isProcessing=!1,console.log("error: ",e.t0),d.F.fire({icon:"error",title:"無法加入追蹤，請稍後再試"});case 18:case"end":return e.stop()}}),e,this,[[0,13]])})));function t(t){return e.apply(this,arguments)}return t}(),deleteFollowing:function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(t){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.user.isProcessing=!0,e.next=4,p.Z.deleteFollowing(t);case 4:if(r=e.sent,s=r.data,"success"===s.status){e.next=8;break}throw new Error(s.message);case 8:this.user.isFollowed=!1,this.user.FollowerCount--,this.user.isProcessing=!1,e.next=18;break;case 13:e.prev=13,e.t0=e["catch"](0),this.user.isProcessing=!1,console.log("error: ",e.t0),d.F.fire({icon:"error",title:"無法取消追蹤，請稍後再試"});case 18:case"end":return e.stop()}}),e,this,[[0,13]])})));function t(t){return e.apply(this,arguments)}return t}()}},f=h,g=r(1001),m=(0,g.Z)(f,o,u,!1,null,"5af00e8f",null),v=m.exports,w=r(22907),b={name:"UsersTop",components:{NavTabs:a.Z,UserCard:v,Spinner:w.Z},data:function(){return{users:[],isLoading:!0}},methods:{fetchUsers:function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.isLoading=!0,e.next=4,p.Z.getTopUsers();case 4:t=e.sent,r=t.data,this.users=r.users.map((function(e){return{id:e.id,name:e.name,image:e.image,FollowerCount:e.FollowerCount,isFollowed:e.isFollowed}})),this.isLoading=!1,e.next=15;break;case 10:e.prev=10,e.t0=e["catch"](0),this.isLoading=!1,console.log("error: ",e.t0),d.F.fire({icon:"error",title:"無法取得美食達人，請稍後再試"});case 15:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(){return e.apply(this,arguments)}return t}()},created:function(){this.fetchUsers()}},x=b,F=(0,g.Z)(x,s,n,!1,null,"20ac3ad8",null),_=F.exports}}]);
//# sourceMappingURL=82-legacy.732c540e.js.map