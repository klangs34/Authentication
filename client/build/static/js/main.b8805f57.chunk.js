(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,a,t){e.exports=t(54)},54:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),o=t(2),m=t(1),s=t(4),u=t(9),i=t.n(u),p=function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),u=Object(m.a)(o,2),p=u[0],b=u[1],f=Object(n.useState)(""),d=Object(m.a)(f,2),E=d[0],g=d[1],v=Object(n.useState)(!1),h=Object(m.a)(v,2),N=h[0],j=h[1],O=Object(n.useState)(!1),S=Object(m.a)(O,2),w=S[0],k=S[1],y=Object(n.useState)(!1),I=Object(m.a)(y,2),C=I[0],F=I[1];Object(n.useEffect)((function(){localStorage.getItem("jwtToken")&&""!==localStorage.getItem("jwtToken")&&j(!0)}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-light bg-light"},l.a.createElement(s.b,{to:"/",className:"navbar-brand"},"Spaceship"),N?l.a.createElement(l.a.Fragment,null,l.a.createElement(s.b,{to:"/member-profile",className:"ml-auto"},"Profile"),l.a.createElement("a",{className:"nav-link",href:"/",onClick:function(a){a.preventDefault(),localStorage.setItem("jwtToken",""),F(!0),setTimeout((function(){e.history.push("/")}),1200)}},"Logout")):l.a.createElement(s.b,{to:"/create-account"},"Create Account")),l.a.createElement("div",{className:"container"},E&&l.a.createElement("div",{className:"alert alert-danger mt-2",role:"alert"},E),w&&l.a.createElement("div",{className:"alert alert-success mt-2",role:"alert"},"Login Successful!"),C&&l.a.createElement("div",{className:"alert alert-success mt-2",role:"alert"},"Logout Successful!"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email Address"),l.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:r,onChange:function(e){return c(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",value:p,onChange:function(e){return b(e.target.value)}})),l.a.createElement("button",{onClick:function(e){e.preventDefault(),g(""),i.a.post("/api/login",{email:r,password:p}).then((function(e){g(""),localStorage.setItem("jwtToken",e.data.token),k(!0),j(!0)})).catch((function(e){g(e.response.data.error.message)}))},type:"submit",className:"btn btn-primary"},"Sign in"))))},b=function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(""),u=Object(m.a)(o,2),p=u[0],b=u[1],f=Object(n.useState)(""),d=Object(m.a)(f,2),E=d[0],g=d[1],v=Object(n.useState)(!1),h=Object(m.a)(v,2),N=h[0],j=h[1],O=Object(n.useState)(!1),S=Object(m.a)(O,2),w=S[0],k=S[1],y=Object(n.useState)(!1),I=Object(m.a)(y,2),C=I[0],F=I[1];Object(n.useEffect)((function(){localStorage.getItem("jwtToken")&&""!==localStorage.getItem("jwtToken")&&j(!0)}),[]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-light bg-light"},l.a.createElement(s.b,{to:"/",className:"navbar-brand"},"Spaceship"),N?l.a.createElement(l.a.Fragment,null,l.a.createElement(s.b,{to:"/member-profile",className:"ml-auto"},"Profile"),l.a.createElement("a",{className:"nav-link",href:"/",onClick:function(e){e.preventDefault(),localStorage.setItem("jwtToken",""),F(!0),j(!1)}},"Logout")):l.a.createElement(s.b,{to:"/login"},"Login")),l.a.createElement("div",{className:"container"},l.a.createElement("form",null,E&&l.a.createElement("div",{className:"alert alert-danger mt-2",role:"alert"},E),w&&l.a.createElement("div",{className:"alert alert-success mt-2",role:"alert"},"Account Created Successfully!"),C&&l.a.createElement("div",{className:"alert alert-success mt-2",role:"alert"},"Logout Successful!"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputEmail1"},"Email Address"),l.a.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:r,onChange:function(e){return c(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),l.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",value:p,onChange:function(e){return b(e.target.value)}})),l.a.createElement("button",{onClick:function(e){e.preventDefault(),function(e){return/^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(e)}(r)?i.a.post("/api/create-account",{email:r,password:p}).then((function(e){g(""),localStorage.setItem("jwtToken",e.data.token),k(!0),j(!0)})).catch((function(e){console.log(e.response.data.error.message),g(e.response.data.error.message)})):g("Invalid email format")},type:"submit",className:"btn btn-primary"},"Create account"))))},f=function(e){var a=localStorage.getItem("jwtToken");a&&""!==a||e.history.push("/login");var t=localStorage.getItem("jwtToken"),r=Object(n.useState)(""),c=Object(m.a)(r,2),o=c[0],u=c[1],p=Object(n.useState)(""),b=Object(m.a)(p,2),f=b[0],d=b[1],E=Object(n.useState)(""),g=Object(m.a)(E,2),v=g[0],h=g[1],N=Object(n.useState)(""),j=Object(m.a)(N,2),O=j[0],S=j[1],w=Object(n.useState)(""),k=Object(m.a)(w,2),y=k[0],I=k[1],C=Object(n.useState)(""),F=Object(m.a)(C,2),x=F[0],T=F[1],L=Object(n.useState)(!1),A=Object(m.a)(L,2),P=A[0],D=A[1];Object(n.useEffect)((function(){i.a.get("/api/member-profile",{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){u(e.data.username),d(e.data.firstName),h(e.data.lastName),S(e.data.salutation),I(e.data.occupation),T(e.data.email)}))}),[]);var z=function(e){e.preventDefault(),D(!1),"username"===e.target.name&&u(e.target.value),"firstName"===e.target.name&&d(e.target.value),"lastName"===e.target.name&&h(e.target.value),"salutation"===e.target.name&&S(e.target.value),"occupation"===e.target.name&&I(e.target.value)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-light bg-light"},l.a.createElement(s.b,{to:"/",className:"navbar-brand"},"Spaceship"),l.a.createElement(s.b,{to:"/",className:"ml-auto"},"Home"),l.a.createElement("a",{className:"nav-link",href:"/",onClick:function(a){a.preventDefault(),localStorage.setItem("jwtToken",""),D(!0),setTimeout((function(){e.history.push("/")}),1200)}},"Logout")),l.a.createElement("div",{className:"container"},l.a.createElement("form",null,P&&l.a.createElement("div",{className:"alert alert-success",role:"alert"},"Logout Successful!"),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-6"},l.a.createElement("label",{htmlFor:"username"},"Username"),l.a.createElement("input",{value:o,type:"text",className:"form-control",name:"username",id:"username",onChange:z,placeholder:"Username"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"firstName"},"First Name"),l.a.createElement("input",{value:f,type:"text",className:"form-control",name:"firstName",id:"firstName",onChange:z,placeholder:"First Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"lastName"},"Last Name"),l.a.createElement("input",{value:v,type:"text",className:"form-control",name:"lastName",id:"lastName",onChange:z,placeholder:"Last Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"occupation"},"Occupation"),l.a.createElement("input",{value:y,type:"text",className:"form-control",name:"occupation",id:"occupation",onChange:z})),l.a.createElement("div",{className:"form-row"},l.a.createElement("div",{className:"form-group col-md-4"},l.a.createElement("label",{htmlFor:"salutation"},"Salutation"),l.a.createElement("select",{name:"salutation",id:"salutation",className:"form-control",value:O,onChange:z},l.a.createElement("option",null,"Choose..."),l.a.createElement("option",null,"Mr."),l.a.createElement("option",null,"Mrs."),l.a.createElement("option",null,"Ms.")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{className:"form-check-input",type:"checkbox",name:"subscribe",id:"subscribe"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"subscribe"},"subscribe to weekly updates"))),l.a.createElement("button",{onClick:function(e){e.preventDefault(),i.a.put("/api/update-member-info",{username:o,firstName:f,lastName:v,salutation:O,occupation:y,email:x},{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){u(e.data.username),d(e.data.firstName),h(e.data.lastName),S(e.data.salutation),I(e.data.occupation),T(e.data.email)}))},className:"btn btn-primary"},"Submit"))))};var d=function(){return l.a.createElement("div",null,l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/login",component:p}),l.a.createElement(o.a,{path:"/create-account",component:b}),l.a.createElement(o.a,{path:"/member-profile",component:function(e){return l.a.createElement(f,e)}}),l.a.createElement(o.a,{exact:!0,path:"/",component:b})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(s.a,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.b8805f57.chunk.js.map