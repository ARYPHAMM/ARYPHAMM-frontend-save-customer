import{o as n,c as o,b as s,g as c,F as h,r as _,n as d,t as g}from"./index-4UUoQKv_.js";const u=(e,t)=>{const r=e.__vccOpts||e;for(const[p,i]of t)r[p]=i;return r},v={props:["pagination1"],data(){return{active:0}},watch:{pagination1:function(e,t){this.active=this.pagination1.page}},methods:{handlePage(e){e<=this.pagination1.last_page&&e!=0&&this.$emit("handlePage",e)},checkPage(e,t){return t<=4&&e<=7||e>=t-3&&e<=t+3}},created(){this.active=this.pagination1.page}},k={key:0,id:"pagination",class:"mt-1 mb-1 d-flex align-items-center justify-content-center"},m={"aria-label":"Page navigation example"},f={class:"pagination"},b=["disabled"],y=s("a",{class:"cursor-poninter page-link glyphicon glyphicon-chevron-left color-purple h-100 d-block",href:"#"},g("<"),-1),P=[y],C={key:0,class:"page-item"},V=s("a",{class:"cursor-poninter page-link",disabled:!0}," ... ",-1),B=[V],L=["onClick","disabled","innerHTML"],w={key:1,class:"page-item"},F=s("a",{class:"cursor-poninter page-link",disabled:!0}," ... ",-1),H=[F],M=["disabled"],N=s("a",{class:"cursor-poninter page-link glyphicon glyphicon-chevron-right color-purple h-100 d-block",href:"#"},g(">"),-1),T=[N];function j(e,t,r,p,i,l){return this.pagination1.total!=0&&this.pagination1.last_page>1?(n(),o("div",k,[s("nav",m,[s("ul",f,[s("li",{class:"page-item",disabled:i.active==1,onClick:t[0]||(t[0]=a=>l.handlePage(i.active-1))},P,8,b),i.active-4>0?(n(),o("li",C,B)):c("",!0),(n(!0),o(h,null,_(this.pagination1.last_page,a=>(n(),o("li",{class:d(["page-item",a==i.active?"active":""]),key:a},[l.checkPage(a,i.active)?(n(),o("a",{key:0,onClick:z=>l.handlePage(a),class:"cursor-poninter page-link",disabled:a==i.active,innerHTML:a},null,8,L)):c("",!0)],2))),128)),i.active+4<this.pagination1.last_page?(n(),o("li",w,H)):c("",!0),s("li",{disabled:this.pagination1.page==this.pagination1.last_page,onClick:t[1]||(t[1]=a=>l.handlePage(i.active+1)),class:"page-item"},T,8,M)])])])):c("",!0)}const E=u(v,[["render",j]]);export{E as P};
