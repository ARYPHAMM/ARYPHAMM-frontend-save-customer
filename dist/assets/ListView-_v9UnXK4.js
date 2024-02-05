import{h as T,d as M,a as m,o as i,c as l,b as t,w as N,v as z,u as n,i as A,e as f,f as k,F as w,r as D,g as u,j as P,t as d}from"./index-4UUoQKv_.js";import{P as q}from"./PaginationWeb-JKP-R-Rx.js";const{$axios:b,$qs:E,showErrorMsg:yt}=T(),p=M({id:"product",state:()=>({items:[],item:"",filter:{search:""},pagination:{page:1,lastPage:0,last_page:0,perPage:0,total:0,total_current:0}}),getters:{getItems:e=>e.items,getItem:e=>e.item,getPagination:e=>e.pagination,getFilter:e=>e.filter},actions:{async fetchItems(e={},o="products"){try{const a=await b({method:"get",url:o+"?"+E.stringify(e),headers:{Authorization:`Bearer ${m().token}`}});return this.items=a.data.data.data,delete e.page,this.setFilter(e),this.setPagination(a.data.data),a}catch{return Promise.reject(!1)}},async fetchItem(e,o="ctv"){try{const a=await b({method:"get",url:o+`/${e}/product`,headers:{"Content-Type":"application/json",Authorization:`Bearer ${m().token}`}});return this.item=a.data.data,a}catch{return Promise.reject(!1)}},async removeItem(e,o="products"){try{const a=await b({method:"delete",url:o+`/${e}`,headers:{"Content-Type":"application/json",Authorization:`Bearer ${m().token}`}});return this.items=this.items.filter(g=>g.id!==e),a}catch{return Promise.reject(!1)}},setPagination(e){delete e.data,this.pagination={...e,page:e.page}},setFilter(e){for(var o in this.filter)this.filter[o]=e[o]}}}),K=t("div",{class:"page-breadcrumb"},[t("div",{class:"row"},[t("div",{class:"col-12 d-flex no-block align-items-center"},[t("h4",{class:"page-title"},"Thuốc")])])],-1),R={class:"container-fluid"},G={class:"row"},H={class:"col-12"},U={class:"card"},W={class:"form-group"},J={class:"card-body"},O=t("h5",{class:"card-title mb-0"},null,-1),Q=t("i",{class:"fa fa-plus","aria-hidden":"true"},null,-1),X={class:"table-responsive"},Y={class:"table"},Z=t("thead",null,[t("tr",null,[t("th",{scope:"col"},[t("b",null,"Tên")]),t("th",{scope:"col"},[t("b",null,"Danh mục")]),t("th",{scope:"col"},[t("b",null,"Mô tả")]),t("th",{scope:"col"},[t("b",null,"Giá")]),t("th",{scope:"col"},[t("b",null,"Thời gian nhập")]),t("th",{scope:"col"},[t("b",null,"Thời gian cập nhật")]),t("th",{scope:"col"})])],-1),tt={scope:"row"},et={scope:"row"},st={key:0},at={key:0},ot={class:"ml-5"},nt=t("i",{class:"fa fa-arrow-right","aria-hidden":"true"},null,-1),rt={class:"text-danger"},ct={key:0},it={key:0},lt=t("i",{class:"fas fa-edit text-warning"},null,-1),dt=["onClick"],ut=t("i",{class:"fa fa-trash text-danger","aria-hidden":"true"},null,-1),ht=[ut],_t={key:0},pt=t("td",{class:"text-center",colspan:"5"},"Không tìm thấy dữ liệu",-1),gt=[pt],vt={__name:"ListView",setup(e){const{computed:o,RouterLink:a,ref:g,debounce:x,showSuccessMsg:I,confirmPopup:S,dateTimeFormat:y}=T(),{fetchItems:$,removeItem:j}=p(),h=(_,c)=>{$({page:_,...c})},B=_=>{S().then(()=>{j(_.id).then(c=>{I(c.data.data)})})},r=g("");h(1);const C=o(()=>p().getPagination),v=o(()=>x(F,200)),F=()=>{r.value.trim()!==""?setTimeout(()=>{h(1,{name:r.value})},500):h(1)},V=()=>r.value?{name:r.value}:{};return(_,c)=>(i(),l(w,null,[K,t("div",R,[t("div",G,[t("div",H,[t("div",U,[t("div",W,[N(t("input",{type:"text",class:"form-control border-dark",placeholder:"Tìm kiếm (Tên thuốc)","onUpdate:modelValue":c[0]||(c[0]=s=>A(r)?r.value=s:null),onKeyup:c[1]||(c[1]=(...s)=>n(v)&&n(v)(...s))},null,544),[[z,n(r)]])]),t("div",J,[O,f(n(a),{class:"btn btn-primary",to:{name:"web-edit-product",query:V()}},{default:k(()=>[Q,P(" Thêm mới")]),_:1},8,["to"])]),t("div",X,[t("table",Y,[Z,t("tbody",null,[(i(!0),l(w,null,D(n(p)().getItems,(s,L)=>(i(),l("tr",{key:L},[t("td",tt,[t("b",null,d(s.name),1)]),t("td",et,[s.sub_category?(i(),l("div",st,[s.sub_category.category?(i(),l("div",at,[t("b",null,d(s.sub_category.category.name),1)])):u("",!0),t("div",ot,[nt,P(" "+d(s.sub_category.name),1)])])):u("",!0)]),t("td",null,d(s.description),1),t("td",null,[t("b",rt,d(s.price?parseInt(s.price).toLocaleString():""),1)]),t("td",null,[s.created_at?(i(),l("span",ct,d(n(y)(s.created_at)),1)):u("",!0)]),t("td",null,[s.updated_at?(i(),l("span",it,d(n(y)(s.updated_at)),1)):u("",!0)]),t("td",null,[t("div",null,[f(n(a),{class:"btn",to:{name:"web-edit-product",params:{id:s.id}}},{default:k(()=>[lt]),_:2},1032,["to"]),t("button",{onClick:mt=>B(s),class:"btn"},ht,8,dt)])])]))),128)),!n(p)().getItems.length&&n(r)!=""?(i(),l("tr",_t,gt)):u("",!0)])])]),f(q,{onHandlePage:h,pagination1:n(C)},null,8,["pagination1"])])])])])],64))}};export{vt as default};