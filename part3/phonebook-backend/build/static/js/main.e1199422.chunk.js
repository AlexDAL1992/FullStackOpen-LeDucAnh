(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{21:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(16),a=t.n(r),s=(t(6),t(7)),o=t(3),i=(t(21),t(0)),u=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Add a new contact"}),Object(i.jsxs)("form",{onSubmit:e.addPerson,children:[Object(i.jsxs)("div",{children:["Name:"," ",Object(i.jsx)("input",{onChange:e.handleNameChange,value:e.newName})]}),Object(i.jsxs)("div",{children:["Number:"," ",Object(i.jsx)("input",{onChange:e.handleNumberChange,value:e.newNumber})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"Add"})})]})]})},l=function(e){var n=e.handleFilterChange,t=e.filter;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Filter"}),"Filter shown with ",Object(i.jsx)("input",{onChange:n,value:t})]})},d=function(e){var n=e.persons,t=e.filter,c=e.deleteAPerson,r=e.setPersons;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Numbers"}),Object(i.jsx)("ul",{children:n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())||""===t})).map((function(e){return Object(i.jsxs)("li",{children:[e.name," ",e.number,Object(i.jsx)("button",{onClick:function(){window.confirm("Delete ".concat(e.name," ?"))&&(c(e.id),r(n.filter((function(n){return n.id!==e.id}))))},children:"Delete"})]},e.id)}))})]})},j=t(4),b=t.n(j),h="/api/persons",f={getAllPersons:function(){return b.a.get(h).then((function(e){return e.data}))},createNewPerson:function(e){return b.a.post(h,e).then((function(e){return e.data}))},deleteAPerson:function(e){return b.a.delete("".concat(h,"/").concat(e))},changePersonNumber:function(e,n){return b.a.put("".concat(h,"/").concat(e),n)}},m=function(e){var n=e.message,t=e.type;return null===n?null:Object(i.jsx)("div",{className:t,children:n})},O=function(){var e=Object(c.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(c.useState)(""),j=Object(o.a)(a,2),b=j[0],h=j[1],O=Object(c.useState)(""),p=Object(o.a)(O,2),g=p[0],x=p[1],v=Object(c.useState)(""),w=Object(o.a)(v,2),N=w[0],P=w[1],y=Object(c.useState)({message:null,type:null}),C=Object(o.a)(y,2),S=C[0],A=C[1];Object(c.useEffect)((function(){f.getAllPersons().then((function(e){return r(e)}))}),[]);var k=function(e,n){A({message:e,type:n}),setTimeout((function(){A({message:null,type:null})}),5e3)};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Phonebook"}),Object(i.jsx)(m,{message:S.message,type:S.type}),Object(i.jsx)(l,{handleFilterChange:function(e){P(e.target.value)},filter:N}),Object(i.jsx)(u,{handleNameChange:function(e){h(e.target.value)},handleNumberChange:function(e){x(e.target.value)},addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name===b}));if(void 0===n)f.createNewPerson({name:b,number:g}).then((function(e){r(t.concat(e)),h(""),x(""),k("Added ".concat(b),"successStyle")})).catch((function(e){k("".concat(JSON.stringify(e.response)),"errorStyle")}));else if(window.confirm("".concat(b," is already added to phonebook, replace the number with the new one?"))){var c=Object(s.a)(Object(s.a)({},n),{},{number:g});f.changePersonNumber(n.id,c).then((function(e){r(t.map((function(t){return t.id!==n.id?t:e.data}))),k("Number of ".concat(c.name," changed successfully"),"successStyle")})).catch((function(e){k("Person ".concat(c.name," not found!"),"errorStyle"),r(t.filter((function(e){return e.id!==n.id})))}))}},newName:b,newNumber:g}),Object(i.jsx)(d,{persons:t,filter:N,deleteAPerson:f.deleteAPerson,setPersons:r})]})};a.a.render(Object(i.jsx)(O,{}),document.getElementById("root"))},6:function(e,n,t){}},[[41,1,2]]]);
//# sourceMappingURL=main.e1199422.chunk.js.map