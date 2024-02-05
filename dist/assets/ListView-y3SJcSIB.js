import{h as x,d as z,a as m,o as l,c as i,b as t,w as A,v as H,u as n,i as L,e as f,f as w,F as P,r as q,g as u,j as D,t as c}from"./index-4UUoQKv_.js";import{P as E}from"./PaginationWeb-JKP-R-Rx.js";const{$axios:b,$qs:R,showErrorMsg:yt}=x(),p=z({id:"customer",state:()=>({items:[],item:"",filter:{search:""},pagination:{page:1,lastPage:0,last_page:0,perPage:0,total:0,total_current:0}}),getters:{getItems:e=>e.items,getItem:e=>e.item,getPagination:e=>e.pagination,getFilter:e=>e.filter},actions:{async fetchItems(e={},o="customers"){try{const a=await b({method:"get",url:o+"?"+R.stringify(e),headers:{Authorization:`Bearer ${m().token}`}});return this.items=a.data.data.data,delete e.page,this.setFilter(e),this.setPagination(a.data.data),a}catch{return Promise.reject(!1)}},async fetchItem(e,o="ctv"){try{const a=await b({method:"get",url:o+`/${e}/customer`,headers:{"Content-Type":"application/json",Authorization:`Bearer ${m().token}`}});return this.item=a.data.data,a}catch{return Promise.reject(!1)}},async removeItem(e,o="customers"){try{const a=await b({method:"delete",url:o+`/${e}`,headers:{"Content-Type":"application/json",Authorization:`Bearer ${m().token}`}});return this.items=this.items.filter(g=>g.id!==e),a}catch{return Promise.reject(!1)}},setPagination(e){delete e.data,this.pagination={...e,page:e.page}},setFilter(e){for(var o in this.filter)this.filter[o]=e[o]}}}),U=t("div",{class:"page-breadcrumb"},[t("div",{class:"row"},[t("div",{class:"col-12 d-flex no-block align-items-center"},[t("h4",{class:"page-title"},"Khách hàng")])])],-1),G={class:"container-fluid"},W={class:"row"},J={class:"col-12"},O={class:"card"},Q={class:"form-group"},X={class:"card-body"},Y=t("h5",{class:"card-title mb-0"},null,-1),Z=t("i",{class:"fa fa-plus","aria-hidden":"true"},null,-1),tt={class:"table-responsive"},et={class:"table"},st=t("thead",null,[t("tr",null,[t("th",{scope:"col"},[t("b",null,"Số điện thoại")]),t("th",{scope:"col"},[t("b",null,"Họ tên")]),t("th",{scope:"col"},[t("b",null,"Giới tính")]),t("th",{scope:"col"},[t("b",null,"Năm sinh")]),t("th",{scope:"col"},[t("b",null,"Người nhập")]),t("th",{scope:"col"},[t("b",null,"Mô tả")]),t("th",{scope:"col"},[t("b",null,"Thời gian nhập")]),t("th",{scope:"col"},[t("b",null,"Thời gian cập nhật")]),t("th",{scope:"col"})])],-1),at={scope:"row"},nt={key:0},ot={key:0},rt={key:0},lt={key:0},it={key:0},ct={key:0},dt=t("i",{class:"fas fa-edit text-warning"},null,-1),ut=["onClick"],ht=t("i",{class:"fa fa-trash text-danger","aria-hidden":"true"},null,-1),_t=[ht],pt={key:0},mt=t("td",{class:"text-center",colspan:"5"},"Không tìm thấy dữ liệu",-1),gt=[mt],kt={__name:"ListView",setup(e){const o=m().getUser,{computed:a,dateFormat:g,RouterLink:v,ref:I,debounce:T,showSuccessMsg:N,confirmPopup:S,dateTimeFormat:y,isNumeric:$}=x(),{fetchItems:F,removeItem:j}=p(),h=(_,d)=>{F({page:_,...d})},B=_=>{S().then(()=>{j(_.id).then(d=>{N(d.data.data)})})},r=I("");h(1);const C=a(()=>p().getPagination),k=a(()=>T(V,200)),V=()=>{r.value.trim()!==""?setTimeout(()=>{h(1,{phone_number:r.value,full_name:r.value})},500):h(1)},K=()=>r.value&&$(r.value)?{phone_number:r.value}:{};return(_,d)=>(l(),i(P,null,[U,t("div",G,[t("div",W,[t("div",J,[t("div",O,[t("div",Q,[A(t("input",{type:"text",class:"form-control border-dark",placeholder:"Tìm kiếm (Họ tên, số điện thoại)","onUpdate:modelValue":d[0]||(d[0]=s=>L(r)?r.value=s:null),onKeyup:d[1]||(d[1]=(...s)=>n(k)&&n(k)(...s))},null,544),[[H,n(r)]])]),t("div",X,[Y,f(n(v),{class:"btn btn-primary",to:{name:"web-edit-customer",query:K()}},{default:w(()=>[Z,D(" Thêm mới")]),_:1},8,["to"])]),t("div",tt,[t("table",et,[st,t("tbody",null,[(l(!0),i(P,null,q(n(p)().getItems,(s,M)=>(l(),i("tr",{key:M},[t("td",at,c(s.phone_number),1),t("td",null,c(s.last_name)+" "+c(s.first_name),1),t("td",null,c(s.gender=="male"?"Nam":s.gender=="female"?"Nữ":"Không xác định"),1),t("td",null,[s.date_of_birth?(l(),i("span",nt,c(n(g)(s.date_of_birth)),1)):u("",!0)]),t("td",null,[s.user?(l(),i("span",ot,c(s.user.user_name),1)):u("",!0)]),t("td",null,[s.note?(l(),i("span",rt,c(s.note),1)):u("",!0)]),t("td",null,[s.created_at?(l(),i("span",lt,c(n(y)(s.created_at)),1)):u("",!0)]),t("td",null,[s.updated_at?(l(),i("span",it,c(n(y)(s.updated_at)),1)):u("",!0)]),t("td",null,[n(o).id==s.user_id?(l(),i("div",ct,[f(n(v),{class:"btn",to:{name:"web-edit-customer",params:{id:s.id}}},{default:w(()=>[dt]),_:2},1032,["to"]),t("button",{onClick:ft=>B(s),class:"btn"},_t,8,ut)])):u("",!0)])]))),128)),!n(p)().getItems.length&&n(r)!=""?(l(),i("tr",pt,gt)):u("",!0)])])]),f(E,{onHandlePage:h,pagination1:n(C)},null,8,["pagination1"])])])])])],64))}};export{kt as default};