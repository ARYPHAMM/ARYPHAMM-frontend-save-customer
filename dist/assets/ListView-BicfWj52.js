import{h as T,d as z,a as g,o as c,c as l,b as t,w as A,v as D,u as o,i as L,e as u,f,F as k,r as M,g as b,j as P,t as _}from"./index-4UUoQKv_.js";import{P as q}from"./PaginationWeb-JKP-R-Rx.js";const{$axios:y,$qs:E,showErrorMsg:mt}=T(),p=z({id:"category",state:()=>({items:[],item:"",filter:{search:""},pagination:{page:1,lastPage:0,last_page:0,perPage:0,total:0,total_current:0}}),getters:{getItems:e=>e.items,getItem:e=>e.item,getPagination:e=>e.pagination,getFilter:e=>e.filter},actions:{async fetchItems(e={},n="categories"){try{const a=await y({method:"get",url:n+"?"+E.stringify(e),headers:{Authorization:`Bearer ${g().token}`}});return this.items=a.data.data.data,delete e.page,this.setFilter(e),this.setPagination(a.data.data),a}catch{return Promise.reject(!1)}},async fetchItem(e,n="ctv"){try{const a=await y({method:"get",url:n+`/${e}/category`,headers:{"Content-Type":"application/json",Authorization:`Bearer ${g().token}`}});return this.item=a.data.data,a}catch{return Promise.reject(!1)}},async removeItem(e,n="categories"){try{const a=await y({method:"delete",url:n+`/${e}`,headers:{"Content-Type":"application/json",Authorization:`Bearer ${g().token}`}});return this.items=this.items.filter(m=>m.id!==e),a}catch{return Promise.reject(!1)}},setPagination(e){delete e.data,this.pagination={...e,page:e.page}},setFilter(e){for(var n in this.filter)this.filter[n]=e[n]}}}),K=t("div",{class:"page-breadcrumb"},[t("div",{class:"row"},[t("div",{class:"col-12 d-flex no-block align-items-center"},[t("h4",{class:"page-title"},"Danh mục")])])],-1),R={class:"container-fluid"},H={class:"row"},U={class:"col-12"},W={class:"card"},G={class:"form-group"},J={class:"card-body"},O=t("h5",{class:"card-title mb-0"},null,-1),Q=t("i",{class:"fa fa-plus","aria-hidden":"true"},null,-1),X={class:"table-responsive"},Y={class:"table"},Z=t("thead",null,[t("tr",null,[t("th",{scope:"col"},[t("b",null,"Tên")]),t("th",{scope:"col"},[t("b",null,"Số lượng danh mục con")]),t("th",{scope:"col"},[t("b",null,"Thời gian nhập")]),t("th",{scope:"col"},[t("b",null,"Thời gian cập nhật")]),t("th",{scope:"col"})])],-1),tt={scope:"row"},et={scope:"row"},at=t("i",{class:"fas fa-edit"},null,-1),st={key:0},ot={key:0},nt=t("i",{class:"fas fa-edit text-warning"},null,-1),rt=["onClick"],it=t("i",{class:"fa fa-trash text-danger","aria-hidden":"true"},null,-1),ct=[it],lt={key:0},dt=t("td",{class:"text-center",colspan:"5"},"Không tìm thấy dữ liệu",-1),ht=[dt],gt={__name:"ListView",setup(e){const{computed:n,RouterLink:a,ref:m,debounce:x,showSuccessMsg:I,confirmPopup:S,dateTimeFormat:v}=T(),{fetchItems:$,removeItem:j}=p(),d=(h,i)=>{$({page:h,...i})},B=h=>{S().then(()=>{j(h.id).then(i=>{I(i.data.data)})})},r=m("");d(1);const C=n(()=>p().getPagination),w=n(()=>x(F,200)),F=()=>{r.value.trim()!==""?setTimeout(()=>{d(1,{name:r.value})},500):d(1)},V=()=>r.value?{name:r.value}:{};return(h,i)=>(c(),l(k,null,[K,t("div",R,[t("div",H,[t("div",U,[t("div",W,[t("div",G,[A(t("input",{type:"text",class:"form-control border-dark",placeholder:"Tìm kiếm (Tên danh mục)","onUpdate:modelValue":i[0]||(i[0]=s=>L(r)?r.value=s:null),onKeyup:i[1]||(i[1]=(...s)=>o(w)&&o(w)(...s))},null,544),[[D,o(r)]])]),t("div",J,[O,u(o(a),{class:"btn btn-primary",to:{name:"web-edit-category",query:V()}},{default:f(()=>[Q,P(" Thêm mới")]),_:1},8,["to"])]),t("div",X,[t("table",Y,[Z,t("tbody",null,[(c(!0),l(k,null,M(o(p)().getItems,(s,N)=>(c(),l("tr",{key:N},[t("td",tt,_(s.name),1),t("td",et,[u(o(a),{to:{name:"web-sub-category",params:{id:s.id}}},{default:f(()=>[P(_(s.count)+" ",1),at]),_:2},1032,["to"])]),t("td",null,[s.created_at?(c(),l("span",st,_(o(v)(s.created_at)),1)):b("",!0)]),t("td",null,[s.updated_at?(c(),l("span",ot,_(o(v)(s.updated_at)),1)):b("",!0)]),t("td",null,[t("div",null,[u(o(a),{class:"btn",to:{name:"web-edit-category",params:{id:s.id}}},{default:f(()=>[nt]),_:2},1032,["to"]),t("button",{onClick:ut=>B(s),class:"btn"},ct,8,rt)])])]))),128)),!o(p)().getItems.length&&o(r)!=""?(c(),l("tr",lt,ht)):b("",!0)])])]),u(q,{onHandlePage:d,pagination1:o(C)},null,8,["pagination1"])])])])])],64))}};export{gt as default};
