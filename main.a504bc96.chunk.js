(this.webpackJsonpfb=this.webpackJsonpfb||[]).push([[0],{78:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(25),i=c.n(n),r=(c(78),c(15)),o=(c(79),c(80),c(118)),j=(c(81),c(46)),l=c.n(j),d=c(47),b=c.n(d),p=c(48),u=c.n(p),h=c(3),m=Object(s.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,a=e.children;return Object(h.jsx)(m.Provider,{value:Object(s.useReducer)(t,c),children:a})},x=function(){return Object(s.useContext)(m)},f=c(24),g=f.a.initializeApp({apiKey:"AIzaSyBmW67wY_CbJSVRLnZS1eq2szZo5NHVj3A",authDomain:"facebook-clone-f7ff7.firebaseapp.com",databaseURL:"https://facebook-clone-f7ff7-default-rtdb.firebaseio.com",projectId:"facebook-clone-f7ff7",storageBucket:"facebook-clone-f7ff7.appspot.com",messagingSenderId:"986485458440",appId:"1:986485458440:web:869ed65d85de391b0fb3bd",measurementId:"G-DBSGGQG3E6"}).firestore(),v=f.a.auth(),N=new f.a.auth.GoogleAuthProvider,_=g;var S=function(){var e=x(),t=Object(r.a)(e,2),c=t[0].user,a=(t[1],Object(s.useState)("")),n=Object(r.a)(a,2),i=n[0],j=n[1],d=Object(s.useState)(""),p=Object(r.a)(d,2),m=p[0],O=p[1];return Object(h.jsxs)("div",{className:"MessageSender",children:[Object(h.jsxs)("div",{className:"MessageSender_top",children:[Object(h.jsx)(o.a,{src:c.photoURL}),Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{value:i,onChange:function(e){return j(e.target.value)},className:"MessageSender_input",placeholder:"What's on your mind,".concat(c.displayName,"?")}),Object(h.jsx)("input",{value:m,onChange:function(e){return O(e.target.value)},placeholder:"Image URL (Optinal)"}),Object(h.jsx)("button",{onClick:function(e){e.preventDefault(),_.collection("posts").add({image:"".concat(m),message:i,timestamp:f.a.firestore.FieldValue.serverTimestamp(),profilePic:"".concat(c.photoURL),username:"".concat(c.displayName)}),j(""),O("")},type:"submit",children:"Hidden submit"})]})]}),Object(h.jsxs)("div",{className:"MessageSender_button",children:[Object(h.jsxs)("div",{className:"MessageSender_option",children:[Object(h.jsx)(l.a,{style:{color:"red"}}),Object(h.jsx)("h3",{children:"Live Video"})]}),Object(h.jsxs)("div",{className:"MessageSender_option",children:[Object(h.jsx)(b.a,{style:{color:"green"}}),Object(h.jsx)("h3",{children:"Photo/Video"})]}),Object(h.jsxs)("div",{className:"MessageSender_option",children:[Object(h.jsx)(u.a,{style:{color:"yellow"}}),Object(h.jsx)("h3",{children:"Feeling/Activity"})]})]})]})},w=(c(91),c(49)),y=c.n(w),k=c(50),P=c.n(k),I=c(51),A=c.n(I),C=c(52),F=c.n(C),L=c(115);var R=function(e){var t=e.profilePic,c=e.image,s=e.username,a=e.timestamp,n=e.message;return Object(h.jsxs)("div",{className:"Post",children:[Object(h.jsxs)("div",{className:"Post_top",children:[Object(h.jsx)(o.a,{src:t,className:"Post_Avatar"}),Object(h.jsxs)("div",{className:"Post_topinfo",children:[Object(h.jsx)("h3",{children:s}),Object(h.jsx)("p",{children:new Date(null===a||void 0===a?void 0:a.toDate()).toUTCString()})]})]}),Object(h.jsx)("div",{className:"Post_bottom",children:Object(h.jsx)("p",{children:n})}),Object(h.jsx)("div",{className:"Post_image",children:Object(h.jsx)("img",{src:c,alt:""})}),Object(h.jsxs)("div",{className:"Post_options",children:[Object(h.jsxs)("div",{className:"Post_option",children:[Object(h.jsx)(y.a,{}),Object(h.jsx)("p",{children:"Like"})]}),Object(h.jsxs)("div",{className:"Post_option",children:[Object(h.jsx)(P.a,{}),Object(h.jsx)("p",{children:"Comment"})]}),Object(h.jsxs)("div",{className:"Post_option",children:[Object(h.jsx)(A.a,{}),Object(h.jsx)("p",{children:"Share"})]}),Object(h.jsxs)("div",{className:"Post_option",children:[Object(h.jsx)(F.a,{}),Object(h.jsx)(L.a,{})]})]})]})};c(92);var q=function(e){var t=e.image,c=e.profilesrc,s=e.title;return Object(h.jsxs)("div",{style:{backgroundImage:"url(".concat(t,")")},className:"Story",children:[Object(h.jsx)(o.a,{className:"Story_avatar",src:c}),Object(h.jsx)("h4",{children:s})]})};c(93);var z=function(){return Object(h.jsxs)("div",{className:"StoryReel",children:[Object(h.jsx)(q,{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzffLJfhRn_dw-_9H3QhmZ4uBYWvKr6f2tA&usqp=CAU",profilesrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmpdzso9YcOmRWvZ67F9lsVA7lEX0rpOdYpg&usqp=CAU",title:"Tanjiro"}),Object(h.jsx)(q,{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz0O_8Pflk4wkXMq83szqvcMS7kUfa2CjSmA&usqp=CAU",profilesrc:"https://9tailedkitsune.com/wp-content/uploads/2020/10/jujutsukaisen.jpg",title:"Itadori Yuuji"}),Object(h.jsx)(q,{image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2bkF0vWca88cKYqB2Dx9ZPpdV3laOxVVgg&usqp=CAU",profilesrc:"https://i.pinimg.com/originals/54/5b/d6/545bd626972e7cfa44e9db66e650c187.jpg",title:"Nobara Kugisaki"}),Object(h.jsx)(q,{image:"https://static.toiimg.com/thumb/msid-56833673,width-1200,height-900,resizemode-4/.jpg",profilesrc:"https://i.pinimg.com/736x/95/86/c3/9586c309fc9e49e282beb120559521cd.jpg",title:"Goku"}),Object(h.jsx)(q,{image:"https://www.feedride.com/wp-content/uploads/2020/02/Sabat-vegeta-header-633x330.jpg",profilesrc:"https://i1.sndcdn.com/artworks-000118701077-tvmk00-t500x500.jpg",title:"Vegeta"})]})};var U=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){_.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){return a(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(h.jsxs)("div",{className:"Feed",children:[Object(h.jsx)(z,{}),Object(h.jsx)(S,{}),c.map((function(e){return Object(h.jsx)(R,{profilePic:e.data.profilePic,message:e.data.message,timestamp:e.data.timestamp,username:e.data.username,image:e.data.image},e.id)}))]})},M=(c(94),c(53)),V=c.n(M),G=c(54),B=c.n(G),D=c(55),T=c.n(D),W=c(56),E=c.n(W),Y=c(57),Z=c.n(Y),J=c(58),K=c.n(J),Q=c(116),H=c(59),X=c.n(H),$=c(60),ee=c.n($),te=c(61),ce=c.n(te),se=c(62),ae=c.n(se);var ne=function(){var e=x(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(h.jsxs)("div",{className:"header",children:[Object(h.jsxs)("div",{className:"header_left",children:[Object(h.jsx)("img",{src:"https://cdn-0.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png",alt:""}),Object(h.jsxs)("div",{className:"header_input",children:[Object(h.jsx)(V.a,{}),Object(h.jsx)("input",{placeholder:"Search Applebook",type:"text"})]})]}),Object(h.jsxs)("div",{className:"header_center",children:[Object(h.jsx)("div",{className:"header_option header_option--active",children:Object(h.jsx)(B.a,{fontSize:"large"})}),Object(h.jsx)("div",{className:"header_option",children:Object(h.jsx)(T.a,{fontSize:"large"})}),Object(h.jsx)("div",{className:"header_option",children:Object(h.jsx)(E.a,{fontSize:"large"})}),Object(h.jsx)("div",{className:"header_option",children:Object(h.jsx)(Z.a,{fontSize:"large"})}),Object(h.jsx)("div",{className:"header_option",children:Object(h.jsx)(K.a,{fontSize:"large"})})]}),Object(h.jsxs)("div",{className:"header_info",children:[Object(h.jsx)(o.a,{src:c.photoURL}),Object(h.jsx)("h4",{children:c.displayName})]}),Object(h.jsxs)("div",{className:"header_right",children:[Object(h.jsx)(Q.a,{children:Object(h.jsx)(X.a,{})}),Object(h.jsx)(Q.a,{children:Object(h.jsx)(ee.a,{})}),Object(h.jsx)(Q.a,{children:Object(h.jsx)(ce.a,{})}),Object(h.jsx)(Q.a,{children:Object(h.jsx)(ae.a,{})})]})]})};c(95),c(96);var ie=function(e){var t=e.src,c=e.Icon,s=e.title;return Object(h.jsxs)("div",{className:"SidebarRow",children:[t&&Object(h.jsx)(o.a,{src:t}),c&&Object(h.jsx)(c,{}),Object(h.jsx)("p",{children:s})]})},re=c(63),oe=c.n(re),je=c(64),le=c.n(je),de=c(65),be=c.n(de),pe=c(66),ue=c.n(pe),he=c(67),me=c.n(he),Oe=c(68),xe=c.n(Oe),fe=c(69),ge=c.n(fe);var ve=function(){var e=x(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(h.jsxs)("div",{className:"Sidebar",children:[Object(h.jsx)(ie,{src:c.photoURL,title:c.displayName}),Object(h.jsx)(ie,{Icon:oe.a,title:"Covid-19 Information Center"}),Object(h.jsx)(ie,{Icon:le.a,title:"Pages"}),Object(h.jsx)(ie,{Icon:be.a,title:"Friends"}),Object(h.jsx)(ie,{Icon:ue.a,title:"Messenger"}),Object(h.jsx)(ie,{Icon:me.a,title:"Marketplace"}),Object(h.jsx)(ie,{Icon:xe.a,title:"Videos"}),Object(h.jsx)(ie,{Icon:ge.a,title:"Seemore"})]})};c(97);var Ne=function(){return Object(h.jsx)("div",{className:"Widgets",children:Object(h.jsx)("iframe",{src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",width:"340",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameborder:"0",allowfullscreen:"true",allow:"autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"})})},_e=c(117),Se=(c(98),c(40)),we="SET_USER",ye=function(e,t){switch(console.log(t),t.type){case we:return Object(Se.a)(Object(Se.a)({},e),{},{user:t.user});default:return e}};var ke=function(){var e=x(),t=Object(r.a)(e,2),c=(t[0],t[1]);return Object(h.jsxs)("div",{className:"Login",children:[Object(h.jsxs)("div",{className:"Login_logo",children:[Object(h.jsx)("img",{className:"apple_logo",src:"apple_logo.png",alt:""}),Object(h.jsx)("img",{className:"apple_text",src:"https://logoeps.com/wp-content/uploads/2013/07/apple-text-vector-logo.png",alt:""})]}),Object(h.jsx)(_e.a,{type:"Submit",onClick:function(){v.signInWithPopup(N).then((function(e){c({type:we,user:e.user}),console.log(e.user)})).catch((function(e){return alert(e.message)}))},children:"Sign In"})]})};var Pe=function(){var e=x(),t=Object(r.a)(e,2),c=t[0].user;return t[1],Object(h.jsx)("div",{className:"app",children:c?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(ne,{}),Object(h.jsxs)("div",{className:"app_body",children:[Object(h.jsx)(ve,{}),Object(h.jsx)(U,{}),Object(h.jsx)(Ne,{})]})]}):Object(h.jsx)(ke,{})})},Ie=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,119)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(O,{initialState:{user:null},reducer:ye,children:Object(h.jsx)(Pe,{})})}),document.getElementById("root")),Ie()}},[[99,1,2]]]);
//# sourceMappingURL=main.a504bc96.chunk.js.map