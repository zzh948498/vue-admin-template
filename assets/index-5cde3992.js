import{d as F,u as I,a as B,b as C,r as g,c as l,w as P,E as S,e as T,o as h,f as q,g as o,h as u,i as p,j as K,k as t,l as y,m as L,n as N,p as j,q as M,v as z,s as A,_ as D,t as G,x as H,y as J}from"./index-2db0d5cc.js";import"./el-form-item-4ed993c7.js";const x=d=>(G("data-v-e8d0d07b"),d=d(),H(),d),O={class:"login-container"},Q=x(()=>t("div",{class:"title-container"},[t("h3",{class:"title"},"Login Form")],-1)),W={class:"svg-container"},X={class:"svg-container"},Y=x(()=>t("div",{class:"tips"},[t("span",{style:{"margin-right":"20px"}},"username: admin"),t("span",null," password: any")],-1)),Z=F({__name:"index",setup(d){const b=I(),k=B(),V=C(),E=g({username:[{required:!0,trigger:"blur",validator:(e,s,a)=>{z(s)?a():a(new Error("Please enter the correct user name"))}}],password:[{required:!0,trigger:"blur",validator:(e,s,a)=>{s.length<6?a(new Error("The password can not be less than 6 digits")):a()}}]}),n=g({username:"admin",password:"111111"}),i=l(!1),r=l("password"),m=l(),_=l(),R=()=>{r.value==="password"?r.value="":r.value="password",A(()=>{var e;(e=_.value)==null||e.focus()})},v=l(),f=()=>{var e;(e=v.value)==null||e.validate(async s=>{if(s){i.value=!0;try{await b.login(n)}catch{i.value=!1;return}i.value=!1,k.push({path:m.value||"/"})}else return console.log("error submit!!"),!1})};return P(()=>V.query,e=>{m.value=e&&e.redirect},{immediate:!0}),(e,s)=>{const a=D,w=S,U=T;return h(),q("div",O,[o(p(K),{ref_key:"loginFormRef",ref:v,model:n,rules:E,class:"login-form","auto-complete":"on","label-position":"left"},{default:u(()=>[Q,o(w,{prop:"username",class:"mb-3"},{default:u(()=>[t("span",W,[o(a,{"icon-class":"user"})]),o(p(y),{ref:"username",modelValue:n.username,"onUpdate:modelValue":s[0]||(s[0]=c=>n.username=c),name:"username",type:"text",tabindex:"1","auto-complete":"on",placeholder:"Username"},null,8,["modelValue"])]),_:1}),o(w,{prop:"password",class:"mb-3 relative"},{default:u(()=>[t("span",X,[o(a,{"icon-class":"password"})]),(h(),L(p(y),{key:r.value,ref_key:"passwordRef",ref:_,modelValue:n.password,"onUpdate:modelValue":s[1]||(s[1]=c=>n.password=c),type:r.value,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on",onKeyup:N(f,["enter"])},null,8,["modelValue","type","onKeyup"])),t("span",{class:"show-pwd",onClick:R},[o(a,{"icon-class":r.value==="password"?"eye":"eye-open"},null,8,["icon-class"])])]),_:1}),o(U,{loading:i.value,type:"primary",style:{width:"100%","margin-bottom":"30px"},onClick:j(f,["prevent"])},{default:u(()=>[M(" Login ")]),_:1},8,["loading","onClick"]),Y]),_:1},8,["model","rules"])])}}});const oe=J(Z,[["__scopeId","data-v-e8d0d07b"]]);export{oe as default};