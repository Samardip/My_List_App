(this.webpackJsonptableops=this.webpackJsonptableops||[]).push([[0],{14:function(e,t){},18:function(e){e.exports=JSON.parse('[{"sno":1,"name":"Jenny Chan","education":"Uneducated1","gender":"Male","desc":"GG well played"},{"sno":2,"name":"Jessica warren","education":"Uneducated2","gender":"Male","desc":"it was a great work"},{"sno":3,"name":"Tony Frank","education":"Uneducated3","gender":"Female","desc":"it was not a great work"},{"sno":4,"name":"Jeremy Clark","education":"Uneducated4","gender":"Female","desc":"it was wonderfull"},{"sno":5,"name":"Raymond Edwards","education":"Uneducated5","gender":"Male","desc":"here comes the party"},{"sno":6,"name":"Edwards","education":"Uneducated6","gender":"Female","desc":"Hello there, :)"}]')},26:function(e,t,n){},27:function(e,t,n){},34:function(e,t){},35:function(e,t){},42:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(17),s=n.n(r),d=(n(26),n(8)),i=n(2),o=n(3),l=(n(27),n(18)),u=n(0),j=function(e){var t=e.contact,n=e.editFormEvent,a=e.handleDeleteClick;return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.sno}),Object(u.jsx)("td",{children:t.name}),Object(u.jsx)("td",{children:t.education}),Object(u.jsx)("td",{children:t.gender}),Object(u.jsx)("td",{children:t.desc}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-warning",onClick:function(e){return n(e,t)},children:"Update"})}),Object(u.jsx)("td",{children:Object(u.jsx)("button",{className:"btn btn-danger",onClick:function(e){return a(e,t.sno)},children:"Delete"})})]},t.sno)},b=function(e){var t=e.editFormData,n=e.handleEditFormChange;return console.log(t),Object(u.jsxs)("div",{className:"container form-check",children:["Name",Object(u.jsx)("input",{type:"text",className:"form-control",name:"name",onChange:n,value:t.name,placeholder:"Enter name",required:!0}),"Education",Object(u.jsx)("input",{type:"text",className:"form-control",name:"education",onChange:n,value:t.education,placeholder:"Enter education",required:!0}),"Gender",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"radio",className:"mx-1 form-check-input",name:"gender",onChange:n,value:"Male",required:!0}),"Male",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"radio",className:"mx-1 form-check-input",name:"gender",onChange:n,value:"Female"}),"Female",Object(u.jsx)("br",{}),"Description",Object(u.jsx)("input",{type:"text",className:"form-control",name:"desc",onChange:n,value:t.desc,placeholder:"Enter Description",required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Update List"})]})},m=function(e){var t=e.addFormData,n=e.handleAddFormChange;return Object(u.jsxs)("div",{className:"container form-check",children:["Name",Object(u.jsx)("input",{type:"text",className:"form-control",name:"name",onChange:n,placeholder:"Enter name",value:t.name,required:!0}),"Education",Object(u.jsx)("input",{type:"text",className:"form-control",name:"education",onChange:n,placeholder:"Enter education",value:t.education,required:!0}),"Gender",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"radio",className:"mx-1 form-check-input",name:"gender",onChange:n,value:"Male"}),"Male",Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"radio",className:"mx-1 form-check-input",name:"gender",onChange:n,value:"Female",required:!0}),"Female",Object(u.jsx)("br",{}),"Description",Object(u.jsx)("input",{type:"text",className:"form-control",name:"desc",onChange:n,placeholder:"Enter Description",value:t.desc,required:!0}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"btn btn-primary",type:"submit",children:"ADD"})]})},h=n(11),x=(n(29),function(e){var t=e.pdfData,n=e.TableHead;return Object(u.jsx)("div",{children:Object(u.jsx)("button",{className:"btn btn-danger mx-2",onClick:function(){return function(){var e=new h.default;e.text("Table Data",20,10),e.autoTable({TableHead:n.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{dataKey:e.field})})),body:t}),e.save("TableData.pdf")}()},children:"PDF"})})}),p=n(19),O=n(12),f=function(e){var t=e.csvData,n=e.fileName;return Object(u.jsx)("button",{className:"btn btn-success",onClick:function(e){return function(e,t){var n={Sheets:{data:O.utils.json_to_sheet(e)},SheetNames:["data"]},a=O.write(n,{bookType:"xlsx",type:"array"}),c=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});p.saveAs(c,t+".xlsx")}(t,n)},children:"EXCEL"})};n(20);var g=function(){var e=Object(a.useState)(l),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({sno:"",name:"",education:"",gender:"",desc:""}),s=Object(o.a)(r,2),h=s[0],p=s[1],O=Object(a.useState)({sno:"",name:"",education:"",gender:"",desc:""}),g=Object(o.a)(O,2),v=g[0],D=g[1],y=Object(a.useState)(null),N=Object(o.a)(y,2),C=(N[0],N[1]),F=Object(a.useState)(null),k=Object(o.a)(F,2),w=k[0],E=k[1],T=function(e,t){e.preventDefault(),C(t.sno);var a={sno:t.sno,name:t.name,education:t.education,gender:t.gender,desc:t.desc};D(a),E(n)},S=function(e,t){e.preventDefault();var a=Object(d.a)(n),r=n.findIndex((function(e){return e.sno===t}));a.splice(r,1),c(a.map((function(e){return e})).filter((function(e,t){return e.sno=t+1})))};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{children:Object(u.jsx)("h5",{style:{position:"absolute",right:"151px",top:"27px"},children:"Download Table"})}),Object(u.jsx)("div",{className:"d-flex",style:{float:"right",justifyContent:"space-between",margin:"15px",width:"133px"},children:Object(u.jsxs)("div",{className:"d-flex p-2",children:[Object(u.jsx)(f,{csvData:n,fileName:"Table Data"}),Object(u.jsx)(x,{TableHead:[{title:"sno",field:"sno"},{title:"name",field:"name"},{title:"education",field:"education"},{title:"gender",field:"gender"},{title:"Description",field:"Description"}],pdfData:n})]})}),Object(u.jsxs)("form",{onSubmit:null!==w?function(e){e.preventDefault();var t={sno:v.sno,name:v.name,education:v.education,gender:v.gender,desc:v.desc},a=Object(d.a)(n);a[n.findIndex((function(e){return e.sno===v.sno}))]=t,c(a),C(null),E(null)}:function(e){e.preventDefault();var t={sno:n[n.length-1].sno+1,name:h.name,education:h.education,gender:h.gender,desc:h.desc};c([].concat(Object(d.a)(n),[t]));p({sno:"",name:"",education:"",gender:"",desc:""})},children:[Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Sno."}),Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Education"}),Object(u.jsx)("th",{children:"gender"}),Object(u.jsx)("th",{children:"Description"}),Object(u.jsx)("th",{children:"Update"}),Object(u.jsx)("th",{children:"Delete"})]})}),Object(u.jsx)("tbody",{children:n.map((function(e){return Object(u.jsx)(j,{contact:e,editFormEvent:T,handleDeleteClick:S},e.sno)}))})]}),null===w?Object(u.jsx)("h2",{className:"mx-5",children:"Add Details"}):Object(u.jsx)("h2",{className:"mx-5",children:"Update Details"}),null!==w?Object(u.jsx)(b,{editFormData:v,handleEditFormChange:function(e){e.preventDefault();var t=e.target.getAttribute("name"),n=e.target.value,a=Object(i.a)({},v);a[t]=n,D(a)}}):Object(u.jsx)(m,{addFormData:h,handleAddFormChange:function(e){e.preventDefault();var t=e.target.getAttribute("name"),n=e.target.value,a=Object(i.a)({},h);a[t]=n,p(a)}})]})]})},v=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,434)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),v()}},[[42,1,3]]]);
//# sourceMappingURL=main.4a1b9ac3.chunk.js.map