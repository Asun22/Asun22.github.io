(function(e){function t(t){for(var r,l,i=t[0],n=t[1],c=t[2],d=0,m=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&m.push(s[l][0]),s[l]=0;for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);u&&u(t);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,i=1;i<a.length;i++){var n=a[i];0!==s[n]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},s={app:0},o=[];function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],n=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=n;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0318":function(e,t,a){"use strict";var r=a("ebfc"),s=a.n(r);s.a},"034f":function(e,t,a){"use strict";var r=a("85ec"),s=a.n(r);s.a},"09c4":function(e,t,a){"use strict";var r=a("d0f9"),s=a.n(r);s.a},"0cc1":function(e,t,a){},"12f5":function(e,t,a){},"2c61":function(e,t,a){"use strict";var r=a("12f5"),s=a.n(r);s.a},"34e1":function(e,t,a){},3845:function(e,t,a){},"3d10":function(e,t,a){},"3eef":function(e,t,a){"use strict";var r=a("aacb"),s=a.n(r);s.a},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),s=a("bc3a"),o=a.n(s);let l={};const i=o.a.create(l);i.interceptors.request.use((function(e){const t=window.sessionStorage.getItem("token");return t&&(e.headers.Authorization=t),e}),(function(e){return Promise.reject(e)})),i.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=i,window.axios=i,Object.defineProperties(e.prototype,{axios:{get(){return i}},$axios:{get(){return i}}})},r["default"].use(Plugin);Plugin;var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},c=[],u={name:"app",components:{}},d=u,m=(a("034f"),a("2877")),p=Object(m["a"])(d,n,c,!1,null,null,null),b=p.exports,h=a("2f62");r["default"].use(h["a"]);var g=new h["a"].Store({state:{token:""},mutations:{set_token(e,t){e.token=t,sessionStorage.token=t},del_token(e){e.token="",sessionStorage.removeItem("token")}},actions:{},modules:{}}),f=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sdlogin"},[a("div",{staticClass:"sdbox"},[e._m(0),a("div",{staticClass:"sdinput"},[a("div",{staticClass:"sdpad"},[a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}},[a("i",{staticClass:"el-icon-user-solid",attrs:{slot:"prefix"},slot:"prefix"})])],1),a("div",{staticClass:"sdpad"},[a("el-input",{attrs:{placeholder:"请输入内容","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}},[a("i",{staticClass:"el-icon-lock",attrs:{slot:"prefix"},slot:"prefix"})])],1),a("div",{staticClass:"sdann"},[a("el-row",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.login()}}},[e._v("登录")]),a("el-button",{attrs:{type:"info"}},[e._v("重置")])],1)],1)])])])},w=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sdimg"},[a("img",{attrs:{src:"logo.png",alt:""}})])}],y={name:"demo",props:[],components:{},data(){return{username:"admin",password:"123456"}},computed:{},watch:{},methods:{login(){o.a.post("http://127.0.0.1:8888/api/private/v1/login",{username:this.username,password:this.password}).then(e=>{console.log(e),"登录成功"==e.data.meta.msg?(this.$message({message:"登录成功",type:"success"}),sessionStorage.setItem("token",e.data.data.token),this.$router.push("/Home/Welcome")):this.$message.error("用户错误或者密码错误")})}},beforeCreate(){},created(){},beforeMount(){},mounted(){},beforeUpdate(){},updated(){},activated(){},deactivated(){},beforeDestroy(){},destroyed(){}},_=y,F=(a("3eef"),Object(m["a"])(_,v,w,!1,null,"0c41185a",null)),x=F.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",[a("a",{attrs:{href:"/"}},[e._v("用户管理")])]),a("el-breadcrumb-item",[e._v("用户列表")])],1),a("div",{staticClass:"sdbox"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.input1,expression:"input1"}],attrs:{placeholder:"请输入内容","suffix-icon":"el-icon-search"},domProps:{value:e.input1},on:{input:function(t){t.target.composing||(e.input1=t.target.value)}}}),a("button",{staticClass:"sdbut"},[e._v("添加用户")]),a("table",[e._m(0),a("tbody",[a("tr",[a("td",[e._v("#")]),e._v(" "+e._s(e.users)+" ")])])])])],1)},k=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("td",[e._v("#")]),a("td",[e._v("姓名")]),a("td",[e._v("邮箱")]),a("td",[e._v("电话")]),a("td",[e._v("角色")]),a("td",[e._v("状态")]),a("td",[e._v("操作")])])])}],$={name:"demo",props:[],components:{},data(){return{input1:"",users:[]}},computed:{},watch:{},methods:{},beforeCreate(){},created(){},beforeMount(){},mounted(){axios.get("http://127.0.0.1:8888/api/private/v1/users").then(e=>{console.log(e),this.users=e.data})},beforeUpdate(){},updated(){},activated(){},deactivated(){},beforeDestroy(){},destroyed(){}},z=$,P=(a("888f"),Object(m["a"])(z,C,k,!1,null,"e06ee088",null)),S=P.exports,V=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v(" Welcome ")])])}],q={name:"demo",props:[],components:{},data(){return{}},computed:{},watch:{},methods:{},beforeCreate(){},created(){},beforeMount(){},mounted(){},beforeUpdate(){},updated(){},activated(){},deactivated(){},beforeDestroy(){},destroyed(){}},j=q,E=Object(m["a"])(j,V,D,!1,null,"4ea03321",null),O=E.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/Home/Welcome"}}},[e._v("用户管理")]),a("el-breadcrumb-item",{attrs:{to:{path:"/Home/users"}}},[e._v("用户列表")])],1)],1),a("div",{staticClass:"sdtable"},[a("div",{staticClass:"sdidf",staticStyle:{"margin-top":"15px"}},[a("el-input",{staticClass:"input-with-select",attrs:{clearable:"",placeholder:"请输入内容",size:"60%"},on:{clear:e.userFn},model:{value:e.userParams.query,callback:function(t){e.$set(e.userParams,"query",t)},expression:"userParams.query"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.userFn},slot:"append"})],1),a("el-row",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("添加用户")])],1),a("el-dialog",{attrs:{title:"添加用户",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{model:{value:e.ruleForm.username,callback:function(t){e.$set(e.ruleForm,"username",t)},expression:"ruleForm.username"}})],1)],1),a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1)],1),a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1)],1),a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[a("el-input",{model:{value:e.ruleForm.mobile,callback:function(t){e.$set(e.ruleForm,"mobile",t)},expression:"ruleForm.mobile"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("确 定")])],1)],1)],1),a("div",{staticClass:"sdbody"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"#",width:"50"}}),a("el-table-column",{attrs:{prop:"username",label:"姓名",width:"110"}}),a("el-table-column",{attrs:{prop:"email",label:"邮箱"}}),a("el-table-column",{attrs:{prop:"create_time",label:"电话"}}),a("el-table-column",{attrs:{prop:"role_name",label:"角色"}}),a("el-table-column",{attrs:{prop:"mg_state",label:"状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#409EFF","inactive-color":"#DCDFE6"},on:{change:function(a){return e.changeState(t.row.id,t.row.mg_state)}},model:{value:t.row.mg_state,callback:function(a){e.$set(t.row,"mg_state",a)},expression:"scope.row.mg_state"}})]}}])}),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{enterable:!1,content:"修改",placement:"top"},on:{click:function(t){e.dialogVisible=!0}}},[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(a){return e.showdigth(t.row.id)}}})],1),a("el-tooltip",{attrs:{enterable:!1,content:"删除",placement:"top"}},[a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(a){return e.open(t.row.id)}}})],1),a("el-tooltip",{attrs:{enterable:!1,content:"分配权限",placement:"top"}},[a("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-setting",circle:""}})],1)]}}])})],1),a("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"editForm",staticClass:"demo-ruleForm",attrs:{disabled:"",model:e.editForm,rules:e.rulesFn,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1)],1),a("el-form",{ref:"editForm",staticClass:"demo-ruleForm",attrs:{model:e.editForm,rules:e.rulesFn,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1)],1),a("el-form",{ref:"editForm",staticClass:"demo-ruleForm",attrs:{model:e.editForm,rules:e.rulesFn,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[a("el-input",{model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.editUsers}},[e._v("确 定")])],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.userParams.pagenum,"page-sizes":[1,2,5,10],"page-size":e.userParams.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])])},H=[];const T=o.a.create({baseURL:"https://www.liulongbin.top:8888",timeout:"5000"});T.interceptors.request.use(e=>{const t=window.sessionStorage.getItem("token");return t&&(e.headers.Authorization=t),e}),T.interceptors.response.use(e=>(401==e.data.meta.status&&(window.sessionStorage.removeItem("token"),Qe.push("/Login")),e));var U=T;function W(e,t){return U.get(e,{params:t})}function M(e,t){return U.post(e,t)}function I(e,t){return U.put(e,t)}function L(e){return W(`/api/private/v1/users?query=${e.query}&pagenum=${e.pagenum}&pagesize=${e.pagesize}`)}function A(e,t){return I(`/api/private/v1/users/${e}/state/${t}`)}function B(e){return M("/api/private/v1/users",e)}function R(e){return I("/api/private/v1/users/"+e)}function Z(e){return W(`/api/private/v1/goods?query=${e.query}&pagenum=${e.pagenum}&pagesize=${e.pagesize}`)}function J(e){return W(`/api/private/v1/categories?query=${e.query}&pagenum=${e.pagenum}&pagesize=${e.pagesize}`)}function G(e){return W(`/api/private/v1/orders?query=${e.query}&pagenum=${e.pagenum}&pagesize=${e.pagesize}`)}function K(e){return I(`/api/private/v1/roles?id=${e.id}&roleName=${e.roleName}`)}var Q={name:"demo",props:[],components:{},data(){let e=(e,t,a)=>{let r=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;if(!t)return a(new Error("Email不能为空"));r.test(t)?a():a(new Error("请输入正确的Email"))},t=(e,t,a)=>{let r=/^1[3|4|5|8][0-9]\d{4,8}$/;if(!t)return a(new Error("电话不能为空"));r.test(t)?a():a(new Error("请输入正确的电话号"))};return{dialogVisible:!1,value:!1,totalNum:0,tableData:[],userParams:{query:"",pagenum:1,pagesize:5},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:18,message:"长度在 3 到 18 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]},ruleForm:{username:"",password:"",email:"",mobile:""},editForm:{password:"",email:"",mobile:""},rulesFn:{password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:t,trigger:"blur"}]},dialogTableVisible:!1,dialogFormVisible:!1}},computed:{},watch:{},methods:{open(){this.$confirm("确定要删除吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$message({type:"success",message:"删除成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消退出"})})},editUsers(){this.$refs.editForm.validate(async e=>{if(!e)return;const{data:t}=await this.$http.put("users/"+this.editForm.id,{email:this.editForm.email,mobile:this.editForm.mobile});if(200!==t.meta.status)return this.$message.error("xxx");this.dialogVisible=!1,this.userFn(),this.$message.success("保存")})},async showdigth(e){let{data:t}=await R(e);if(console.log(t),200!=t.meta.status)return this.$message.error("保存失败");this.editForm=t.data,this.$message({message:t.meta.msg,duration:1e3,type:"success"}),this.dialogVisible=!0},handleClose(e){this.$confirm("确认关闭？").then(t=>{e()}).catch(e=>{})},async userFn(){let{data:e}=await L(this.userParams);console.log(e),this.tableData=e.data.users,this.totalNum=e.data.total},handleSizeChange(e){this.userParams.pagesize=e,this.userFn()},handleCurrentChange(e){this.userParams.pagenum=e,this.userFn()},async submitUserAdd(){let{data:e}=await B(this.ruleForm);201==e.meta.status&&(this.$message({message:e.meta.msg,duration:1e3,type:"success"}),this.dialogFormVisible=!1,this.userFn())},submitForm(e){this.$refs[e].validate(e=>{if(!e)return console.log("error submit!!"),!1;this.submitUserAdd()})},resetForm(e){this.$refs[e].resetFields()},async changeState(e,t){let{data:a}=await A(e,t);200==a.meta.status&&this.$message({message:a.meta.msg,duration:1e3,type:"success"})}},beforeCreate(){},created(){},beforeMount(){},mounted(){this.userFn()},beforeUpdate(){},updated(){},activated(){},deactivated(){},beforeDestroy(){},destroyed(){}},X=Q,Y=(a("09c4"),Object(m["a"])(X,N,H,!1,null,"139189a4",null)),ee=Y.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/Home/Welcome"}}},[e._v("权限管理")]),a("el-breadcrumb-item",{attrs:{to:{path:"/Home/roles"}}},[e._v("角色列表")])],1)],1),a("div",{staticClass:"sdtable"},[a("el-row",[a("el-button",{attrs:{type:"primary"}},[e._v("添加角色")])],1),a("div",{staticClass:"sdtable"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"",width:"50"}}),a("el-table-column",{attrs:{type:"index",label:"#",width:"50"}}),a("el-table-column",{attrs:{prop:"roleName",label:"角色名称",width:"180"}}),a("el-table-column",{attrs:{prop:"roleDesc",label:"角色描述"}}),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{enterable:!1,content:"修改",placement:"top"},on:{click:function(t){e.dialogFormVisible=!0}}},[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(a){return e.showdigth(t.row.id)}}})],1),a("el-tooltip",{attrs:{enterable:!1,content:"删除",placement:"top"}},[a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(a){return e.open(t.row.id)}}})],1),a("el-tooltip",{attrs:{enterable:!1,content:"分配权限",placement:"top"}},[a("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-setting",circle:""}})],1)]}}])})],1)],1)],1)])},ae=[],re={name:"demo",props:[],components:{},data(){return{tableData:[],dialogVisible:!1,dialogTableVisible:!1,dialogFormVisible:!1,editForm:{username:"",usersname:""},rulesFn:{username:[{required:!0,message:"请输入名称",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],usersname:[{required:!0,message:"请描述",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}]}}},computed:{},watch:{},methods:{editUsers(){this.$refs.editForm.validate(async e=>{if(!e)return;const{data:t}=await this.$http.put("users/"+this.editForm.id,{email:this.editForm.username,mobile:this.editForm.username});if(200!==t.meta.status)return this.$message.error("xxx");this.dialogFormVisible=!1,this.userFn(),this.$message.success("保存")})},async showdigth(e){let{data:t}=await K(this.editForm);if(console.log(t),200!=t.meta.status)return this.$message.error("保存失败");this.editForm=t.data,this.$message({message:t.meta.msg,duration:1e3,type:"success"}),this.dialogVisible=!0},open(){this.$confirm("确定要删除吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$message({type:"success",message:"删除成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消退出"})})}},beforeCreate(){},created(){},beforeMount(){},mounted(){this.$axios.get("https://www.liulongbin.top:8888/api/private/v1/roles").then(e=>{this.tableData=e.data.data})},beforeUpdate(){},updated(){},activated(){},deactivated(){},beforeDestroy(){},destroyed(){}},se=re,oe=(a("b30f"),Object(m["a"])(se,te,ae,!1,null,"523e4986",null)),le=oe.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("商品列表")]),a("div",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/Home/Welcome"}}},[e._v("用户管理")]),a("el-breadcrumb-item",{attrs:{to:{path:"/Home/users"}}},[e._v("用户列表")])],1)],1),a("div",{staticClass:"sdtable"},[a("div",{staticClass:"sdidf",staticStyle:{"margin-top":"15px"}},[a("el-input",{staticClass:"input-with-select",attrs:{clearable:"",placeholder:"请输入内容",size:"60%"},on:{clear:e.userFn},model:{value:e.goodsParams.query,callback:function(t){e.$set(e.goodsParams,"query",t)},expression:"goodsParams.query"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.userFn},slot:"append"})],1),a("el-row",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("添加商品")])],1)],1),a("div",{staticClass:"sdbody"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"#",width:"50"}}),a("el-table-column",{attrs:{prop:"goods_name",label:"姓名",width:"700"}}),a("el-table-column",{attrs:{prop:"goods_price",label:"商品价格(元)",width:"150"}}),a("el-table-column",{attrs:{prop:"goods_weight",label:"商品重量",width:"150"}}),a("el-table-column",{attrs:{prop:"add_time",label:"创建时间",width:"150"}}),a("el-table-column",{attrs:{prop:"address",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{enterable:!1,content:"修改",placement:"top"},on:{click:function(t){e.dialogVisible=!0}}},[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(a){return e.showdigth(t.row.id)}}})],1),a("el-tooltip",{attrs:{enterable:!1,content:"删除",placement:"top"}},[a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(a){return e.open(t.row.id)}}})],1)]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.goodsParams.pagenum,"page-sizes":[1,2,5,10],"page-size":e.goodsParams.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])])},ne=[],ce={name:"demo",props:[],components:{},data(){return{goodsParams:{query:"",pagenum:1,pagesize:10},dialogVisible:!1,value:!1,totalNum:0,tableData:[],dialogTableVisible:!1,dialogFormVisible:!1}},computed:{},watch:{},methods:{async userFn(){let{data:e}=await Z(this.goodsParams);this.tableData=e.data.goods,this.totalNum=e.data.total},handleSizeChange(e){this.goodsParams.pagesize=e,this.userFn()},handleCurrentChange(e){this.goodsParams.pagenum=e,this.userFn()}},beforeCreate(){},created(){},beforeMount(){},mounted(){this.userFn()},beforeUpdate(){},updated(){},activated(){},deactivated(){},beforeDestroy(){},destroyed(){}},ue=ce,de=(a("5ac0"),Object(m["a"])(ue,ie,ne,!1,null,"b419fd94",null)),me=de.exports,pe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"sdbody"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"#",width:"50"}}),a("el-table-column",{attrs:{prop:"cat_name",label:"分类名称",width:"110"}}),a("el-table-column",{attrs:{prop:"cat_deleted",label:"是否有效"}},[a("i",{staticClass:"el-icon-success"})]),a("el-table-column",{attrs:{prop:"cat_level",label:"排序"}}),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{enterable:!1,content:"修改",placement:"top"},on:{click:function(t){e.dialogVisible=!0}}},[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(a){return e.showdigth(t.row.id)}}})],1),a("el-tooltip",{attrs:{enterable:!1,content:"删除",placement:"top"}},[a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(a){return e.open(t.row.id)}}})],1),a("el-tooltip",{attrs:{enterable:!1,content:"分配权限",placement:"top"}},[a("el-button",{attrs:{size:"mini",type:"warning",icon:"el-icon-setting",circle:""}})],1)]}}])})],1),a("el-dialog",{attrs:{title:"提示",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"editForm",staticClass:"demo-ruleForm",attrs:{disabled:"",model:e.editForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名",prop:"username"}},[a("el-input",{model:{value:e.editForm.username,callback:function(t){e.$set(e.editForm,"username",t)},expression:"editForm.username"}})],1)],1),a("el-form",{ref:"editForm",staticClass:"demo-ruleForm",attrs:{model:e.editForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{model:{value:e.editForm.email,callback:function(t){e.$set(e.editForm,"email",t)},expression:"editForm.email"}})],1)],1),a("el-form",{ref:"editForm",staticClass:"demo-ruleForm",attrs:{model:e.editForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[a("el-input",{model:{value:e.editForm.mobile,callback:function(t){e.$set(e.editForm,"mobile",t)},expression:"editForm.mobile"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.categoriesParams.pagenum,"page-sizes":[1,2,5,10],"page-size":e.categoriesParams.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])},be=[],he={data(){return{tableData:[],editForm:{password:"",email:"",mobile:""},categoriesParams:{query:"",pagenum:1,pagesize:10},dialogVisible:!1,value:!1,totalNum:0,tableData:[],dialogTableVisible:!1,dialogFormVisible:!1,data:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"}}},mounted(){this.userFn()},methods:{async userFn(){let{data:e}=await J(this.categoriesParams);console.log(e),this.tableData=e.data.result,this.totalNum=e.data.total},handleSizeChange(e){this.categoriesParams.pagesize=e,this.userFn()},handleCurrentChange(e){this.categoriesParams.pagenum=e,this.userFn()},handleNodeClick(e){console.log(e)}}},ge=he,fe=(a("0318"),Object(m["a"])(ge,pe,be,!1,null,"33b071c7",null)),ve=fe.exports,we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-button",{attrs:{type:"text"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("打开嵌套表单的 Dialog")]),a("el-dialog",{attrs:{title:"收货地址",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{attrs:{model:e.form}},[a("el-form-item",{attrs:{label:"活动名称","label-width":e.formLabelWidth}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("确 定")])],1)],1)],1)},ye=[],_e={data(){return{gridData:[],dialogTableVisible:!1,dialogFormVisible:!1,form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px"}}},Fe=_e,xe=Object(m["a"])(Fe,we,ye,!1,null,"7fe59890",null),Ce=xe.exports,ke=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/Home/Welcome"}}},[e._v("用户管理")]),a("el-breadcrumb-item",{attrs:{to:{path:"/Home/users"}}},[e._v("用户列表")])],1)],1),a("div",{staticClass:"sdbody"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"#",width:"50"}}),a("el-table-column",{attrs:{prop:"order_number",label:"订单编号",width:"190"}}),a("el-table-column",{attrs:{prop:"order_price",label:"订单价格",width:"150"}}),a("el-table-column",{attrs:{prop:"order_pay",label:"是否付款",width:"150"}}),a("el-table-column",{attrs:{prop:"is_send",label:"是否发货",width:"150"}}),a("el-table-column",{attrs:{prop:"create_time",label:"下单时间",width:"150"}}),a("el-table-column",{attrs:{prop:"address",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{enterable:!1,content:"修改",placement:"top"},on:{click:function(t){e.dialogVisible=!0}}},[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(a){return e.showdigth(t.row.id)}}})],1),a("el-tooltip",{attrs:{enterable:!1,content:"删除",placement:"top"}},[a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(a){return e.open(t.row.id)}}})],1)]}}])})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":e.ordersParams.pagenum,"page-sizes":[1,2,5,10],"page-size":e.ordersParams.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalNum},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])},$e=[],ze={name:"demo",props:[],components:{},data(){return{ordersParams:{query:"",pagenum:1,pagesize:10},dialogVisible:!1,value:!1,totalNum:0,tableData:[],dialogTableVisible:!1,dialogFormVisible:!1}},computed:{},watch:{},methods:{async userFn(){let{data:e}=await G(this.ordersParams);console.log(e),this.tableData=e.data.goods,this.totalNum=e.data.total},handleSizeChange(e){this.ordersParams.pagesize=e,this.userFn()},handleCurrentChange(e){this.ordersParams.pagenum=e,this.userFn()}},beforeCreate(){},created(){},beforeMount(){},mounted(){this.userFn()},beforeUpdate(){},updated(){},activated(){},deactivated(){},beforeDestroy(){},destroyed(){}},Pe=ze,Se=Object(m["a"])(Pe,ke,$e,!1,null,"6c0655b8",null),Ve=Se.exports,De=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("div",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/Home/Welcome"}}},[e._v("权限管理")]),a("el-breadcrumb-item",{attrs:{to:{path:"/Home/roles"}}},[e._v("角色列表")])],1)],1),a("div",{staticClass:"sdtable"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"#",width:"50"}}),a("el-table-column",{attrs:{prop:"authName",label:"权限名称",width:"180"}}),a("el-table-column",{attrs:{prop:"path",label:"路径"}}),a("el-table-column",{attrs:{prop:"level",label:"权限等级"}})],1)],1)])])},qe=[],je={name:"demo",props:[],components:{},data(){return{stripe:"true",tableData:[]}},computed:{},watch:{},methods:{},beforeCreate(){},created(){},beforeMount(){},mounted(){this.$axios.get("http://127.0.0.1:8888/api/private/v1/rights/list").then(e=>{this.tableData=e.data.data})},beforeUpdate(){},updated(){},activated(){},deactivated(){},beforeDestroy(){},destroyed(){}},Ee=je,Oe=(a("2c61"),Object(m["a"])(Ee,De,qe,!1,null,"3c45b071",null)),Ne=Oe.exports,He=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("el-container",[a("el-header",[a("div",{staticClass:"sdheaderimg"},[a("img",{attrs:{src:"https://www.escook.cn/vue-shop/img/heima.b5a855ee.png",alt:""}}),a("p",{staticClass:"sdheaderp"},[e._v("电商后台管理系统")])]),a("div",[[a("button",{staticClass:"sdtc",on:{click:e.open}},[e._v("退出")])]],2)]),a("el-container",[a("el-aside",{style:{width:e.isCollapse?"64px":"200px"},attrs:{width:"200px"}},[a("div",{staticClass:"znavp",on:{click:function(t){e.isCollapse=!e.isCollapse}}},[e._v(" ||| ")]),a("el-menu",{attrs:{router:"","collapse-transition":!1,collapse:e.isCollapse,"unique-opened":"","background-color":"#333744","active-text-color":"#409Eff","text-color":"#fff","default-active":e.activePath}},e._l(e.menus,(function(t){return a("el-submenu",{key:t.id,attrs:{index:"/"+t.path}},[a("template",{slot:"title"},[a("i",{class:e.icon[t.id]}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.authName))])]),e._l(t.children,(function(t){return a("el-menu-item",{key:t.id,attrs:{index:"/Home/"+t.path},on:{click:function(a){return e.savePath("/Home/"+t.path)}}},[a("i",{staticClass:"el-icon-menu"}),e._v(" "+e._s(t.authName)+" ")])}))],2)})),1)],1),a("el-main",[a("router-view")],1)],1)],1)],1)},Te=[],Ue={name:"Home",components:{},data(){return{isCollapse:!1,menus:[],icon:{125:"el-icon-user-solid",103:"el-icon-folder-add",101:"el-icon-s-goods",102:"el-icon-s-order",145:"el-icon-s-marketing"},activePath:""}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},open(){this.$confirm("确定要退出吗","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{sessionStorage.removeItem("token"),this.$router.push("/Login"),this.$message({type:"success",message:"退出成功!"})}).catch(()=>{this.$message({type:"info",message:"已取消退出"})})},savePath(e){window.sessionStorage.setItem("activePath",e),this.activePath=e}},watch:{$route(e,t){"/Welcome"==e.path?this.activePath="":this.activePath=e.path,window.sessionStorage.getItem("activePath",e.activePath)}},created(){let e=window.sessionStorage.getItem("activePath");this.activePath=e},mounted(){this.$axios.get("http://127.0.0.1:8888/api/private/v1/menus").then(e=>{this.menus=e.data.data})}},We=Ue,Me=(a("b13a"),Object(m["a"])(We,He,Te,!1,null,"850301b8",null)),Ie=Me.exports,Le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[e._v("首页")]),a("el-breadcrumb-item",{attrs:{to:{path:"/Home/Welcome"}}},[e._v("商品管理")]),a("el-breadcrumb-item",{attrs:{to:{path:"/Home/roles"}}},[e._v("参数列表")])],1)],1),a("div",{staticClass:"sdtable"},[e._m(0),a("div",[a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[e._v("选择商品分类：")]),a("el-cascader",{attrs:{options:e.options,props:{expandTrigger:"hover"}},on:{change:e.handleChange},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),a("el-card",{staticClass:"box-card"},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"用户管理"}},[a("el-row",[a("el-button",{attrs:{type:"primary"}},[e._v("添加角色")])],1),a("div",{staticClass:"sdtable"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"",width:"50"}}),a("el-table-column",{attrs:{type:"index",label:"#",width:"50"}}),a("el-table-column",{attrs:{prop:"roleName",label:"角色名称",width:"180"}}),a("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{enterable:!1,content:"修改",placement:"top"},on:{click:function(t){e.dialogVisible=!0}}},[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(a){return e.showdigth(t.row.id)}}})],1),a("el-tooltip",{attrs:{enterable:!1,content:"删除",placement:"top"}},[a("el-button",{attrs:{size:"mini",type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(a){return e.open(t.row.id)}}})],1)]}}])})],1)],1)],1),a("el-tab-pane",{attrs:{label:"配置管理"}})],1)],1)],1)])])},Ae=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sdzhuyi"},[a("i",{staticClass:"el-icon-warning-outline"}),a("span",[e._v("注意：只允许为第三级分类设置相关参数!")])])}],Be={name:"demo",props:[],components:{},data(){return{tableData:[],isshow:!1,paramsData:[],value:[],options:[{value:"",label:"",children:[{value:"",label:"",children:[{value:"",label:""}]},{value:"",label:"",children:[{value:"",label:""}]}]}]}},computed:{},watch:{},methods:{handleChange(e){console.log(e)}},beforeCreate(){},created(){},beforeMount(){},mounted(){this.$axios.get("http://127.0.0.1:8888/api/private/v1/categories").then(e=>{this.paramsData=e.data.data})},beforeUpdate(){},updated(){},activated(){},deactivated(){},beforeDestroy(){},destroyed(){}},Re=Be,Ze=(a("bd64"),Object(m["a"])(Re,Le,Ae,!1,null,"438d9fb4",null)),Je=Ze.exports;r["default"].use(f["a"]);const Ge=[{path:"/",redirect:"Login"},{path:"/Login",name:"Login",component:x},{path:"/Home",name:"Home",component:Ie,redirect:"/Home/Welcome",children:[{path:"Shouye",name:"Shouye",component:S},{path:"Welcome",name:"Welcome",component:O},{path:"users",name:"Users",component:ee},{path:"roles",name:"Roles",component:le},{path:"goods",name:"Goods",component:me},{path:"categories",name:"Categories",component:ve},,{path:"rights",name:"Rights",component:Ne},{path:"orders",name:"Orders",component:Ve},{path:"reports",name:"Reports",component:Ce},{path:"params",name:"Params",component:Je}],beforeEnter:(e,t,a)=>{window.sessionStorage.getItem("token")?a():(alert("请先登录"),a("/Login"))}}],Ke=new f["a"]({routes:Ge});var Qe=Ke,Xe=a("b970");a("157a");r["default"].use(Xe["a"]);var Ye=a("5c96"),et=a.n(Ye);a("0fae");r["default"].use(et.a),r["default"].config.productionTip=!1,r["default"].prototype.$http=o.a,new r["default"]({store:g,router:Qe,render:function(e){return e(b)}}).$mount("#app")},"5ac0":function(e,t,a){"use strict";var r=a("34e1"),s=a.n(r);s.a},"85ec":function(e,t,a){},"888f":function(e,t,a){"use strict";var r=a("3845"),s=a.n(r);s.a},aacb:function(e,t,a){},b13a:function(e,t,a){"use strict";var r=a("3d10"),s=a.n(r);s.a},b30f:function(e,t,a){"use strict";var r=a("0cc1"),s=a.n(r);s.a},bd64:function(e,t,a){"use strict";var r=a("e2ec"),s=a.n(r);s.a},d0f9:function(e,t,a){},e2ec:function(e,t,a){},ebfc:function(e,t,a){}});
//# sourceMappingURL=app.119f3e2d.js.map