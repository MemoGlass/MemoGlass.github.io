(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{151:function(e,t,s){},460:function(e,t,s){"use strict";s.r(t);var i=s(2),a=s(24),c=s.n(a),n=(s.p,s(151),s.p+"static/media/logo.40a51e11.png"),r=s(28),o=s(1),l=function(){return Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsxs)("a",{href:"/",children:[" ",Object(o.jsx)("img",{src:n,alt:"Logo",style:{width:180,height:94.5,margin:-10}})," "]}),Object(o.jsxs)("div",{className:"links",children:[Object(o.jsx)(r.b,{to:"/aboutus",children:"About us"}),Object(o.jsx)(r.b,{to:"/login",style:{color:"white",borderRadius:"7px",backgroundColor:"#6abaf3"},children:"Login"})]})]})},d=s(6),j=function(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(l,{}),Object(o.jsx)("h1",{children:" This is Memory Glass "}),"Memory Glass is a startup focused on helping Alzheimers patients reconnect with those they can't remember. Our team is focused on combining technology with people with cognitive memory loss as an alternative to their current prescriptions. The  product combines smart glass technology with facial recognition in order to help identify loved ones of the patients."]})},h=s(29),b=s(55);var m=function(e){var t=e.Login,s=e.error,a=Object(i.useState)({email:"",password:""}),c=Object(h.a)(a,2),n=c[0],r=c[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(n)},children:Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsxs)("div",{className:"loginform",children:[Object(o.jsx)("h2",{children:"Login here"}),""!=s?Object(o.jsx)("div",{className:"error",children:s}):"",Object(o.jsx)("label",{htmlFor:"email",children:"Email"}),Object(o.jsx)("input",{type:"text",name:"email",id:"email",onChange:function(e){return r(Object(b.a)(Object(b.a)({},n),{},{email:e.target.value}))},value:n.name,required:!0}),Object(o.jsx)("label",{children:"Password"}),Object(o.jsx)("input",{type:"password",name:"password",id:"password",onChange:function(e){return r(Object(b.a)(Object(b.a)({},n),{},{password:e.target.value}))},value:n.password,required:!0}),Object(o.jsx)("button",{type:"submit",children:"Login"})]})]})})},u=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Settings"}),Object(o.jsx)("div",{})]})};s(157);var O=function(){return Object(o.jsxs)("div",{className:"dashboard",children:[Object(o.jsxs)("div",{className:"innerdash",children:[Object(o.jsx)("a",{href:"http://localhost:3000/contacts",children:Object(o.jsx)("p",{children:"Contacts"})}),Object(o.jsx)("a",{href:"http://localhost:3000/addcontact",children:Object(o.jsx)("p",{children:"Add new contact"})})]}),Object(o.jsxs)("div",{className:"innerdash",children:[Object(o.jsx)("a",{href:"http://localhost:3000/sync",children:"Sync with MemoryGlass"}),Object(o.jsx)("a",{href:"http://localhost:3000/settings",children:"Settings"})]})]})},x=function(){return Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsxs)("a",{href:"/",children:[" ",Object(o.jsx)("img",{src:n,alt:"Logo",style:{width:180,height:94.5,margin:-10}})," "]}),Object(o.jsx)("div",{className:"links",children:Object(o.jsx)(r.b,{to:"/",style:{color:"white",borderRadius:"7px",backgroundColor:"#6abaf3"},children:"Logout"})})]})},p=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Contacts"}),Object(o.jsx)("div",{})]})},v=function(e){var t=Object(i.useState)(0),s=Object(h.a)(t,2),a=s[0],c=s[1],n=e.children[a];return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"tabs",children:e.children.map((function(e,t){return Object(o.jsx)("button",{className:"tab-btn",onClick:function(){c(t)},children:e.props.title},t)}))}),Object(o.jsx)("div",{className:"tab-indicator-container",children:Object(o.jsx)("div",{className:"tab-indicator",style:{width:100/e.children.length+"%",transform:"translateX(".concat(100*a,"%)")}})}),Object(o.jsx)("div",{className:"tab-content",children:n.props.children})]})};function g(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(v,{children:[Object(o.jsxs)("div",{title:"Contacts",children:[Object(o.jsx)("div",{children:Object(o.jsx)(p,{})})," "," "]}),Object(o.jsxs)("div",{title:"Location History",children:[Object(o.jsx)("div",{children:Object(o.jsx)(p,{})})," "," "]}),Object(o.jsxs)("div",{title:"Reminders",children:["Add a new contact here "," "]}),Object(o.jsxs)("div",{title:"Lost Object",children:["Add a new contact here "," "]}),Object(o.jsxs)("div",{title:"Settings",children:[Object(o.jsx)("div",{children:Object(o.jsx)(u,{})})," "]})]})})}var f=function(){var e="admin@memoryglass.com",t="andrewisbald",s=Object(i.useState)({email:""}),a=Object(h.a)(s,2),c=a[0],n=a[1],r=Object(i.useState)(""),l=Object(h.a)(r,2),d=l[0],j=l[1],b=function(s){console.log(s),s.email==e&&s.password==t?(console.log("Logged in"),n({email:s.email})):(console.log("Details do not match"),j("\u26a0\ufe0f Email or password is incorrect \u26a0\ufe0f"))};return Object(o.jsx)("div",{className:"login",children:""!=c.email?Object(o.jsxs)("div",{children:[Object(o.jsx)(x,{}),Object(o.jsx)(g,{})]}):Object(o.jsx)(m,{Login:b,error:d})})},y=function(){var e=Object(i.useState)([{title:"Pitch \ud83d\udcca",body:"Memory glass is a small standalone device that uses digital projection and facial recognition to help Alzheimer\u2019s patients remember their loved ones.",id:1},{title:"Problem/Oppurtunity \ud83e\udd14",body:"Memory Glass is aimed at patients with cognitive diseases. These individuals are generally an older demographic, so we have a large focus on making the design intuitive. Also, 80% of people over the age of 65 already wear glasses, allowing them to adopt our device into their lives with very few issues.",id:2},{title:"Solution/Product \ud83d\udca1",body:"Our device will enhance a patient\u2019s quality of life by instantly reconnecting them to their families. It provides facial recognition to minimize stress and frustration. Memory glass also promotes social interaction within care environments between other patients or caregivers.",id:3},{title:"Business Model \ud83d\udcc8",body:"Memory Glass works as a SAAS model and leased hardware Business model. The software and hardware will cost customers $50/month and provide monthly profit of 20$/month, a 40% margin.",id:4},{title:"Market \ud83d\udcb0",body:"Alzheimer\u2019s includes 6 million in the U.S market. We will market to doctors, caregivers, and Alzheimer\u2019s family members. At 1% market penetration, the yearly revenue equates to $36 million.",id:5},{title:"Competition \ud83e\udd4a",body:"Memory Glass is a novel concept for Alzheimer\u2019s and has no direct competitors. Although there are companies focused on smart glasses, they do not include specific features tailored to Alzheimer\u2019s.",id:6},{title:"Unique Features \ud83e\udd84",body:"Memory Glass is an attachment to increase modularity and reduce cost. We use cloud-based facial recognition to dramatically increase battery life and processing power of the device. Finally, it utilizes built in 5G communication to efficiently transmit relevant data.",id:7},{title:"Go to Market Strategy \ud83e\udd35",body:"Upon diagnosis of Alzheimer\u2019s, family members will be provided an opportunity to purchase Memory Glass for their loved ones. It will be advertised through doctors and associations. Memory is just as important to the family as it is to the patient.",id:8},{title:"Traction \ud83e\udd1d",body:"We are sending out surveys to nursing homes, doctors, patients and family members to gather valuable feedback and validation. Engineering has provided a finished prototype which will be used for small scale testing and refinement.",id:9}]),t=Object(h.a)(e,2),s=t[0];t[1];return Object(o.jsxs)("div",{className:"AboutUs",children:[Object(o.jsx)(l,{}),Object(o.jsx)("h1",{children:"About MemoryGlass"}),s.map((function(e){return Object(o.jsxs)("div",{className:"about",children:[Object(o.jsx)("h2",{children:e.title}),Object(o.jsx)("p",{children:e.body})]},e.id)}))]})};var w=function(){return Object(o.jsx)(r.a,{children:Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)(d.c,{children:[Object(o.jsx)(d.a,{exact:!0,path:"/",children:Object(o.jsx)(j,{})}),Object(o.jsx)(d.a,{exact:!0,path:"/login",children:Object(o.jsx)(f,{})}),Object(o.jsx)(d.a,{exact:!0,path:"/aboutus",children:Object(o.jsx)(y,{})}),Object(o.jsx)(d.a,{exact:!0,path:"/contacts",children:Object(o.jsx)("contacts",{})}),Object(o.jsx)(d.a,{exact:!0,path:"/settings",children:Object(o.jsx)(u,{})}),Object(o.jsx)(d.a,{exact:!0,path:"/sync",children:Object(o.jsx)("sync",{})}),Object(o.jsxs)(d.a,{exact:!0,path:"/dashboard",children:[Object(o.jsx)(x,{}),Object(o.jsx)("h1",{children:"Welcome, Andrew"}),Object(o.jsx)("h2",{children:"What would you like to do today?"}),Object(o.jsx)(O,{})]})]})})})})};c.a.render(Object(o.jsx)(w,{}),document.getElementById("root"))}},[[460,1,2]]]);
//# sourceMappingURL=main.114b4f0f.chunk.js.map