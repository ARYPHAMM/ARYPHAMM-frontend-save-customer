import{h as T,c as H,o as r,a as d,b as o,u as e,w as c,v as u,d as _,e as p}from"./index-B2klo6Vu.js";const L={class:"container-fluid"},w={class:"row"},V={class:"col-12"},N={class:"card"},U={key:0},C=o("h3",{class:"p-1"},"Cập nhật",-1),D=[C],E={key:1},Y=o("h3",{class:"p-1"},"Thêm mới",-1),$=[Y],B={class:"form-horizontal"},z={class:"card-body"},G=o("h4",{class:"card-title"},null,-1),R={class:"form-group row"},S=o("label",{for:"fname",class:"col-sm-3 text-end control-label col-form-label"},"Họ ",-1),j={class:"col-sm-9"},q=["innerHTML"],A={class:"form-group row"},F=o("label",{for:"fname",class:"col-sm-3 text-end control-label col-form-label"},"Tên đêm và tên ",-1),I={class:"col-sm-9"},J=["innerHTML"],K={class:"form-group row"},O=o("label",{for:"fname",class:"col-sm-3 text-end control-label col-form-label"},"Số điện thoại ",-1),P={class:"col-sm-9"},Q=["innerHTML"],W={class:"form-group row"},X=o("label",{for:"fname",class:"col-sm-3 text-end control-label col-form-label"},"Giới tính",-1),Z={class:"col-md-9"},ee={class:"form-check"},oe=o("label",{class:"form-check-label mb-0",for:"customControlValidation1"},"Nam",-1),te={class:"form-check"},se=o("label",{class:"form-check-label mb-0",for:"customControlValidation1"},"Nữ",-1),le=["innerHTML"],ne={class:"form-group row"},ae=o("label",{for:"fname",class:"col-sm-3 text-end control-label col-form-label"},"Ngày sinh ",-1),re={class:"col-md-9"},de=["innerHTML"],ce={class:"form-group row"},ie=o("label",{for:"fname",class:"col-sm-3 text-end control-label col-form-label"},"Mô tả ",-1),_e={class:"col-sm-9"},me=["innerHTML"],pe={__name:"EditView",setup(ue){const{route:f,ref:h,loadDetail:b,handleUpdate:v,router:g,error:k,errors:l,fillErrors:x,existError:a,$moment:y}=T(),t=h(H);let m=h(f.params.id);m.value&&b("get",`customers/${m.value}`).then(i=>{t.value=i.data.data,t.value.date_of_birth=y(t.value.date_of_birth).format("YYYY-MM-DD")});const M=()=>{let i=[t.value];m.value?i.push("put",`customers/${m.value}`):i.push("post","customers"),v(...i).then(()=>{g.push({name:"web-customer"})}).catch(s=>{x(s,k,l,!0)})};return(i,s)=>(r(),d("div",L,[o("div",w,[o("div",V,[o("div",N,[e(m)&&e(t).id?(r(),d("div",U,D)):(r(),d("div",E,$)),o("form",B,[o("div",z,[G,o("div",R,[S,o("div",j,[c(o("input",{type:"text",class:"form-control",placeholder:"Nhập họ","onUpdate:modelValue":s[0]||(s[0]=n=>e(t).last_name=n)},null,512),[[u,e(t).last_name]]),e(a)(e(l),"last_name")?(r(),d("span",{key:0,class:"text-danger",innerHTML:e(a)(e(l),"last_name")},null,8,q)):_("",!0)])]),o("div",A,[F,o("div",I,[c(o("input",{type:"text",class:"form-control",placeholder:"Nhập tên đêm và tên","onUpdate:modelValue":s[1]||(s[1]=n=>e(t).first_name=n)},null,512),[[u,e(t).first_name]]),e(a)(e(l),"first_name")?(r(),d("span",{key:0,class:"text-danger",innerHTML:e(a)(e(l),"first_name")},null,8,J)):_("",!0)])]),o("div",K,[O,o("div",P,[c(o("input",{type:"text",class:"form-control",placeholder:"Nhập số điện thoại","onUpdate:modelValue":s[2]||(s[2]=n=>e(t).phone_number=n)},null,512),[[u,e(t).phone_number]]),e(a)(e(l),"phone_number")?(r(),d("span",{key:0,class:"text-danger",innerHTML:e(a)(e(l),"phone_number")},null,8,Q)):_("",!0)])]),o("div",W,[X,o("div",Z,[o("div",ee,[c(o("input",{type:"radio",class:"form-check-input",name:"radio-stacked","onUpdate:modelValue":s[3]||(s[3]=n=>e(t).gender=n),value:"male"},null,512),[[p,e(t).gender]]),oe]),o("div",te,[c(o("input",{type:"radio",class:"form-check-input",name:"radio-stacked","onUpdate:modelValue":s[4]||(s[4]=n=>e(t).gender=n),value:"female"},null,512),[[p,e(t).gender]]),se]),e(a)(e(l),"gender")?(r(),d("span",{key:0,class:"text-danger",innerHTML:e(a)(e(l),"gender")},null,8,le)):_("",!0)])]),o("div",ne,[ae,o("div",re,[c(o("input",{type:"date",class:"form-control date-inputmask",placeholder:"Enter Date","onUpdate:modelValue":s[5]||(s[5]=n=>e(t).date_of_birth=n)},null,512),[[u,e(t).date_of_birth]]),e(a)(e(l),"date_of_birth")?(r(),d("span",{key:0,class:"text-danger",innerHTML:e(a)(e(l),"date_of_birth")},null,8,de)):_("",!0)])]),o("div",ce,[ie,o("div",_e,[c(o("textarea",{class:"form-control",name:"",id:"",rows:"3",placeholder:"Nhập mô tả","onUpdate:modelValue":s[6]||(s[6]=n=>e(t).note=n)},null,512),[[u,e(t).note]]),e(a)(e(l),"note")?(r(),d("span",{key:0,class:"text-danger",innerHTML:e(a)(e(l),"note")},null,8,me)):_("",!0)])])]),o("div",{class:"border-top"},[o("div",{class:"card-body"},[o("button",{onClick:M,type:"button",class:"btn btn-primary"},"Lưu")])])])])])])]))}};export{pe as default};