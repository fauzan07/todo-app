(this["webpackJsonptodo-application"]=this["webpackJsonptodo-application"]||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/logo.bc49ddcb.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/loader.1c9bd439.gif"},46:function(e,t,a){e.exports=a(90)},51:function(e,t,a){},62:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(38),r=a.n(l),o=(a(51),a(12)),s=a(4),i=a(21),u=a.n(i);a(60),a(61);var m=u.a.initializeApp({apiKey:"AIzaSyBGfZXfrS0-VlUkcjyjuppyNnpyvbvyLMM",authDomain:"todo-app-a1032.firebaseapp.com",databaseURL:"https://todo-app-a1032.firebaseio.com",projectId:"todo-app-a1032",storageBucket:"todo-app-a1032.appspot.com",messagingSenderId:"470447132223",appId:"1:470447132223:web:3b552d97e6ddf37618728a"}),d=(u.a.auth,u.a.database(),m),b=a(2),p=a(39),f=a.n(p);var E=function(){return c.a.createElement("section",{className:"loader-section bg-black"},c.a.createElement("div",{className:"text-center  spinner"},c.a.createElement("img",{src:f.a,className:"img-fluid",alt:"loading"})))},h=c.a.createContext(),g=function(e){var t=e.children,a=Object(n.useState)(null),l=Object(b.a)(a,2),r=l[0],o=l[1],s=Object(n.useState)(!0),i=Object(b.a)(s,2),u=i[0],m=i[1];return Object(n.useEffect)((function(){d.auth().onAuthStateChanged((function(e){o(e),m(!1)}))}),[]),u?c.a.createElement(E,null):c.a.createElement(h.Provider,{value:{currentUser:r}},t)},v=(a(62),a(18)),N=a.n(v),j=Object(s.h)((function(){var e=Object(n.useContext)(h).currentUser;return c.a.createElement(c.a.Fragment,null,e?c.a.createElement("nav",{className:"navbar navbar-expand-lg bg-orange fixed-top"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement(o.c,{to:"/",className:"navbar-brand"},c.a.createElement("img",{src:N.a,width:"50",className:"img-fluid",alt:"Responsive"}),c.a.createElement("span",{className:"logo-text"},"TODO")),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav mr-auto w-100 justify-content-end clearfix"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(o.c,{className:"nav-link",to:"/CreateBucket",activeClassName:"selected"},c.a.createElement("i",{className:"fa fa-book pr-2","aria-hidden":"true"}),"Create Bucket")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{className:"nav-link",onClick:function(){return d.auth().signOut()}},c.a.createElement("i",{className:"fa fa-sign-out pr-2","aria-hidden":"true"}),"Logout")))))):c.a.createElement("div",null))})),O=a(13),k=a.n(O),w=(a(83),function(){var e=Object(n.useContext)(h).currentUser,t=Object(n.useState)({}),a=Object(b.a)(t,2),l=a[0],r=a[1],s=Object(n.useState)(!1),i=Object(b.a)(s,2),u=i[0],m=i[1],d=Object(n.useState)(!0),p=Object(b.a)(d,2),f=p[0],g=p[1],v=e.uid;document.title="ToDo Application",Object(n.useEffect)((function(){N()}),[u]);var N=function(){k.a.get("https://todo-app-a1032.firebaseio.com/".concat(v,"/bucketContents.json")).then((function(e){setTimeout(r(e.data),5e4),g(!1),m(null!==l)})).catch((function(e){return console.log(e)}))};return c.a.createElement("div",null,c.a.createElement("br",null),f?c.a.createElement(E,null):c.a.createElement("section",{className:"all-buckets bg-black py-5"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("h3",{className:"text-warning py-3"},"Buckets"),c.a.createElement("div",{className:"bucket-data"},u?c.a.createElement("div",{className:"row"},l&&Object.entries(l).map((function(e){return c.a.createElement("div",{className:"col-lg-3",key:e[1].bucketName},c.a.createElement(o.b,{to:{pathname:"/bucket/"+e[1].bucketName,state:{bucketId:e[0]}}},c.a.createElement("div",{className:"bucket-box border bg-black shadow rounded my-3 p-5"},c.a.createElement("h5",{className:"text-center text-white"},e[1].bucketName))))}))):c.a.createElement("div",{className:"alert alert-warning",role:"alert"},"You haven't created any buckets. Kindly click on the 'Create Bucket' button in the navigation bar to create a Bucket.!")))))}),y=(a(84),a(41)),x=a(42),C=a(45),S=a(43),D=(a(85),function(){return c.a.createElement("div",{style:{width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.5)",zIndex:100,position:"fixed",left:0,top:0}})}),B=function(e){Object(C.a)(a,e);var t=Object(S.a)(a);function a(){return Object(y.a)(this,a),t.apply(this,arguments)}return Object(x.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(D,null),c.a.createElement("div",{className:"modalbody mt-5"},c.a.createElement("button",{className:"closebutton mt-3 mr-2",onClick:function(){return e.props.close(e.props.modalCloseHandler)}},"X"),this.props.content))}}]),a}(n.Component);var T=function(e){var t,a=Object(n.useContext)(h).currentUser,l=e.bucketId,r=Object(n.useState)(!1),o=Object(b.a)(r,2),s=o[0],i=o[1],u=Object(n.useState)(!1),m=Object(b.a)(u,2),d=m[0],p=m[1],f=Object(n.useState)(""),E=Object(b.a)(f,2),g=E[0],v=E[1],N=Object(n.useState)(""),j=Object(b.a)(N,2),O=j[0],w=j[1],y=Object(n.useState)(""),x=Object(b.a)(y,2),C=x[0],S=x[1],D=Object(n.useState)(!1),T=Object(b.a)(D,2),F=T[0],I=T[1],R=Object(n.useState)(!1),A=Object(b.a)(R,2),U=A[0],L=A[1],P=Object(n.useState)(""),M=Object(b.a)(P,2),V=M[0],K=M[1],W=Object(n.useState)(""),z=Object(b.a)(W,2),_=z[0],J=z[1],X=Object(n.useState)(""),Y=Object(b.a)(X,2),q=Y[0],G=Y[1],H=Object(n.useState)(""),Z=Object(b.a)(H,2),$=Z[0],Q=Z[1],ee=Object(n.useState)(!1),te=Object(b.a)(ee,2),ae=te[0],ne=te[1],ce=Object(n.useState)(!1),le=Object(b.a)(ce,2),re=le[0],oe=le[1],se=Object(n.useState)(!1),ie=Object(b.a)(se,2),ue=ie[0],me=ie[1],de=Object(n.useState)(!1),be=Object(b.a)(de,2),pe=be[0],fe=be[1],Ee=Object(n.useState)(""),he=Object(b.a)(Ee,2),ge=he[0],ve=he[1],Ne=c.a.useRef(),je=c.a.useRef(),Oe=c.a.useRef(),ke=a.uid,we=new Date,ye=null;(we.getMonth()<10||we.getDate()<10)&&(t="0"+(we.getMonth()+1),ye="0"+we.getDate());var xe=ye+"-"+t+"-"+we.getFullYear();Object(n.useEffect)((function(){ne(!1),oe(!1),me(!1),Ce(a.email)}),[ae,re,ue,a]);var Ce=function(e){k.a.get("https://todo-app-a1032.firebaseio.com/".concat(ke,"/bucketContents/").concat(l,"/todo.json")).then((function(e){Q(e.data)})).catch((function(e){return console.log(e)}))},Se=s?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container py-4"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 text-left"},c.a.createElement("h3",{className:"text-warning"},pe?"Edit ToDo":"Add ToDo"),U?c.a.createElement("p",{style:{color:"red"}},"Kindly complete the form before adding Column"):null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"postTitle",className:"text-white"},"Title"),c.a.createElement("input",{type:"text",id:"post_title",defaultValue:pe?g:"",placeholder:"Enter a title",ref:Ne,onChange:function(e){return K(e.target.value)},className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"postDescription",className:"text-white"},"Description"),c.a.createElement("textarea",{type:"text",id:"post_description",defaultValue:pe?O:"",placeholder:"Enter a Description",ref:je,onChange:function(e){return J(e.target.value)},className:"form-control"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"schedule",className:"text-white"},"Date"),c.a.createElement("input",{type:"date",id:"schedule_date",min:xe,defaultValue:pe?C:"",ref:Oe,onChange:function(e){return G(e.target.value)},className:"form-control"})),c.a.createElement("button",{disabled:F,className:"btn btn-warning",onClick:function(e){0===Ne.current.value.length||0===je.current.value.length||0===Oe.current.value.length?(I(!1),L(!0)):(pe?k.a.put("https://todo-app-a1032.firebaseio.com/".concat(ke,"/bucketContents/").concat(l,"/todo/").concat(ge,".json"),{postName:""===V?g:V,postDetail:""===_?O:_,postDate:""===q?C:q,user:a.email}).then((function(e){alert("ToDo edited succesfully"),me(!0)})).catch((function(e){return console.log("Error in editDetails"+e)})):k.a.post("https://todo-app-a1032.firebaseio.com/".concat(ke,"/bucketContents/").concat(l,"/todo.json"),{postName:V,postDetail:_,postDate:q,user:a.email}).then((function(e){alert("ToDo added succesfully"),ne(!0)})).catch((function(e){return console.log("Error"+e)})),i(!1),fe(!1),K(""),J(""),G(""))}},pe?"Edit ToDo":"Add ToDo"))))):null,De=d?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container my-4"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",null,c.a.createElement("h3",{className:"text-left text-warning"},"View ToDo")),c.a.createElement("div",null,c.a.createElement("button",{type:"button",id:"editBtn",className:"btn btn-sm btn-warning",onClick:function(e){p(!1),i(!0),fe(!0)}},c.a.createElement("i",{className:"fa fa-pencil","aria-hidden":"true"})),c.a.createElement("button",{type:"button",id:"deleteBtn",className:"btn btn-danger btn-sm ml-2",onClick:function(e){window.confirm("Are you sure you want to delete the ToDo?")&&(k.a.delete("https://todo-app-a1032.firebaseio.com/".concat(ke,"/bucketContents/").concat(l,"/todo/").concat(ge,".json")).then((function(e){alert("ToDo deleted succesfully"),oe(!0)})).catch((function(e){return console.log("Error"+e)})),p(!1))}},c.a.createElement("i",{className:"fa fa-trash","aria-hidden":"true"})))),c.a.createElement("hr",null),c.a.createElement("div",{className:"text-left my-4"},c.a.createElement("h4",null,"Title"),c.a.createElement("p",null,g)),c.a.createElement("div",{className:"text-left my-4"},c.a.createElement("h4",null,"Description"),c.a.createElement("p",null,O)),c.a.createElement("div",{className:"text-left my-4"},c.a.createElement("h4",null,"Date"),c.a.createElement("p",null,C)))))):null;return c.a.createElement("div",{className:"todo-data bg-black pt-3"},c.a.createElement("div",{className:"d-flex justify-content-between border p-2 shadow "},c.a.createElement("div",{className:"pt-2"},c.a.createElement("h4",{className:"text-white"},"Add To-Do")),c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-warning",onClick:function(){return i(!0)}},c.a.createElement("i",{class:"fa fa-plus-square","aria-hidden":"true"})))),c.a.createElement("div",{className:"todo-list my-4"},$?Object.entries($).map((function(e){return c.a.createElement("div",{className:"d-flex justify-content-between border p-2 shadow my-3"},c.a.createElement("div",null,c.a.createElement("h5",{className:"text-white",key:e[0]},e[1].postName),c.a.createElement("small",{className:"text-info"},e[1].postDate)),c.a.createElement("div",null,c.a.createElement("button",{id:e[0],value:e[1].postName,onClick:function(t){return function(e,t,a,n,c){p(!0),v(e),w(t),S(a),ve(n)}(e[1].postName,e[1].postDetail,e[1].postDate,e[0])},className:"btn btn-transparent mt-2"},c.a.createElement("i",{className:"text-white fa fa-list","aria-hidden":"true"}))))})):c.a.createElement("div",{className:"alert alert-warning",role:"alert"},"No todo added!")),c.a.createElement("br",null),s&&c.a.createElement(B,{content:Se,close:function(){i(!1),fe(!1)}}),d&&c.a.createElement(B,{content:De,close:function(){p(!1)}}))},F=(a(86),Object(s.h)((function(e){var t=Object(n.useContext)(h).currentUser,a=e.match.params.bucketName,l=t.uid,r=Object(s.g)();document.title="".concat(a," | ToDo App"),Object(n.useEffect)((function(){}),[]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"bg-black"},c.a.createElement("div",{className:"container bucket-section"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("div",null,c.a.createElement("h3",{className:"text-warning"},a)),c.a.createElement("div",null,c.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:function(t){window.confirm("Are you sure you want to delete the bucket?")&&k.a.delete("https://todo-app-a1032.firebaseio.com/".concat(l,"/bucketContents/").concat(e.location.state.bucketId,".json")).then((function(e){alert("bucket deleted succesfully"),r.push("/")})).catch((function(e){return console.log("Error"+e)}))}},"Delete Bucket"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-12 todo-list"},c.a.createElement(T,{pathname:e.location.pathname,bucketId:e.location.state.bucketId,boardTitle:a}))))))}))),I=(a(87),Object(s.h)((function(e){var t=Object(n.useContext)(h).currentUser,a=Object(n.useState)(!1),l=Object(b.a)(a,2),r=l[0],o=l[1],i=Object(n.useState)(!1),u=Object(b.a)(i,2),m=u[0],d=u[1],p=Object(n.useState)(!1),f=Object(b.a)(p,2),E=f[0],g=f[1],v=Object(n.useState)(""),N=Object(b.a)(v,2),j=N[0],O=N[1],w=Object(n.useState)(""),y=Object(b.a)(w,2),x=y[0],C=y[1],S=c.a.useRef(),D=c.a.useRef(),B=t.uid,T=Object(s.g)();Object(n.useEffect)((function(){g(!1)}),[E]);return c.a.createElement("section",{className:"createbucket bg-black"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-lg-10"},c.a.createElement("div",{className:"border shadow p-4"},c.a.createElement("h2",{className:"pb-3 text-white"},"Create a Board"),m?c.a.createElement("div",{class:"alert alert-danger",role:"alert"},"Kindly complete the form before adding the Bucket"):null,c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),0===S.current.value.length||0===D.current.value.length?(o(!1),d(!0)):k.a.post("https://todo-app-a1032.firebaseio.com/".concat(B,"/bucketContents.json"),{bucketName:j,bdate:x}).then((function(e){alert("Bucket added succesfully"),T.push("/"),g(!0)})).catch((function(e){return console.log(e)}))}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"exampleInputEmail1",className:"text-white"},"Enter a name of your bucket:"),c.a.createElement("input",{id:"bucketname",type:"text",name:"bucketname",class:"form-control",placeholder:"eg Frontend Bucket",ref:S,onChange:function(e){return O(e.target.value)}})),c.a.createElement("div",{class:"form-group"},c.a.createElement("label",{htmlFor:"exampleInputPassword1",className:"text-white"},"Password"),c.a.createElement("input",{id:"bdate",type:"date",name:"bdate",className:"form-control",ref:D,onChange:function(e){return C(e.target.value)}})),c.a.createElement("button",{type:"submit",id:"createBucket",className:"btn btn-warning",disabled:r},"Submit")))))))})));a(88);var R=Object(s.h)((function(e){var t=Object(n.useState)(""),a=Object(b.a)(t,2),l=a[0],r=a[1],o=Object(n.useState)(""),i=Object(b.a)(o,2),u=i[0],m=i[1],p=Object(n.useState)("Login"),f=Object(b.a)(p,2),E=f[0],g=f[1],v=Object(n.useState)(""),j=Object(b.a)(v,2),O=j[0],k=j[1],w=Object(n.useState)(!0),y=Object(b.a)(w,2),x=y[0],C=y[1],S=function(e){"reg"===e?(g("Register New User"),C(!1),k("")):(g("Login"),C(!0),k(""))};if(Object(n.useContext)(h).currentUser)return c.a.createElement(s.a,{to:"/"});var D=O?c.a.createElement("div",{className:"alert alert-danger",role:"alert"},O):null,B=x?c.a.createElement("button",{type:"submit",className:"loginBtn btn btn-warning",onClick:function(e){e.preventDefault(),d.auth().signInWithEmailAndPassword(l,u).catch((function(e){k(e.message)}))}},"Enter"):c.a.createElement("button",{type:"submit",className:"loginBtn btn btn-warning",onClick:function(e){e.preventDefault(),d.auth().createUserWithEmailAndPassword(l,u).catch((function(e){k(e.message)}))}},"Register"),T=x?c.a.createElement("button",{className:"loginBtn btn btn-warning float-right",onClick:function(){return S("reg")}},"Register"):c.a.createElement("button",{className:"loginBtn btn btn-warning float-right",onClick:function(){return S("login")}},"Login");return c.a.createElement("div",{className:"authentication"},c.a.createElement("div",{className:"container py-5"},c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-md-5 col-lg-5"},c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("img",{src:N.a,width:"50",className:"mr-1 img-fluid",alt:"Responsive"}),c.a.createElement("h1",{className:"title "},"ToDo Appictaion"),c.a.createElement("img",{src:N.a,width:"50",className:"ml-1 img-fluid",alt:"Responsive"})),c.a.createElement("div",{className:"mt-5 px-5 py-5 bg-black border shadow rounded signup-box"},c.a.createElement("h2",{className:"text-center"},E),c.a.createElement("div",null,D),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"email",className:"text-white"},"Email address"),c.a.createElement("input",{type:"text",className:"form-control",id:"email",name:"email",value:l,placeholder:"Enter a email",onChange:function(e){return r(e.target.value)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"password",className:"text-white"},"Password"),c.a.createElement("input",{type:"password",className:"form-control",id:"password",name:"password",value:u,placeholder:"Enter a password",onChange:function(e){return m(e.target.value)}})),B,T)))))})),A=a(44),U=function(e){var t=e.component,a=(e.children,Object(A.a)(e,["component","children"])),l=Object(n.useContext)(h).currentUser;return c.a.createElement(s.b,Object.assign({},a,{render:function(e){return l?c.a.createElement(t,e):c.a.createElement(s.a,{to:"/LoginRegister"})}}))};a(89);var L=function(){return c.a.createElement(g,null,c.a.createElement(o.a,null,c.a.createElement(j,null),c.a.createElement(s.d,null,c.a.createElement(U,{path:"/",exact:!0,component:w}),c.a.createElement(U,{path:"/CreateBucket",component:I}),c.a.createElement(U,{path:"/bucket/:bucketName",component:F}),c.a.createElement(s.b,{path:"/LoginRegister",component:R}),c.a.createElement(s.b,{path:"*",render:function(){return c.a.createElement("h3",null,"Page not Found!")}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.b3b2199c.chunk.js.map