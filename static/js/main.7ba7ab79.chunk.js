(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{114:function(e,t,n){},302:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n(0),c=n.n(r),i=n(35),s=n.n(i),o=(n(114),n(100)),l=n.n(o),u={background:{color:{value:"#1e1e1e"}},fpsLimit:100,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:200,duration:1,opacity:.8,size:40},push:{quantity:3},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:6,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.3},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0},j=function(){return Object(a.jsx)(l.a,{className:"particles",canvasClassName:"canvas",options:u})},d=n(14),b=n.n(d),h=n(32),f=n(18),p=n(313),O=function(e){return new Promise((function(t){return setTimeout(t,e)}))},m=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),n=t[0],c=t[1],i="Hi human. It's not the time to take over yet...but it will be soon. For now I can only recognize cats and dogs, so you don't have to be afraid, for now.",s=function(){var e=Object(h.a)(b.a.mark((function e(){var t,n,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0,n=!1,a=b.a.mark((function e(a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c((function(e){return e+i.charAt(a)})),"."!==i.charAt(a)){e.next=4;break}return e.next=4,O(520);case 4:if("d"===i.charAt(a)&&t++,4!==t||n){e.next=9;break}return e.next=8,O(1200);case 8:n=!0;case 9:if(","!==i.charAt(a)){e.next=12;break}return e.next=12,O(200);case 12:return e.next=14,O(70);case 14:case"end":return e.stop()}}),e)})),r=0;case 4:if(!(r<i.length)){e.next=9;break}return e.delegateYield(a(r),"t0",6);case 6:r++,e.next=4;break;case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){s()}),[]),Object(a.jsx)(p.a,{expand:"lg",className:"monolog",children:Object(a.jsx)("p",{className:"text",children:n})})},x=n(307),v=n(308),g=n(309),k=n(108),y=n(104),w=n(312),C=function(e){var t=Object(r.useState)(e),n=Object(f.a)(t,2),a=n[0],c=n[1];return[a,function(e){c(e)},function(){c("")}]},I=Object(r.createContext)(void 0);function L(e){var t=e.children,n="or upload an image",c=Object(r.useState)(n),i=Object(f.a)(c,2),s=i[0],o=i[1],l=C(""),u=Object(f.a)(l,3),j=u[0],d=u[1],b=u[2],h=C(""),p=Object(f.a)(h,3),O=p[0],m=p[1],x=p[2],v=Object(r.useState)(!0),g=Object(f.a)(v,2),k=g[0],y=g[1],w=function(e){var t=Object(r.useState)(e),n=Object(f.a)(t,2),a=n[0],c=n[1];return[a,function(e){c(e)},function(){c(void 0)}]}(void 0),L=Object(f.a)(w,3),N=L[0],P=L[1],S=L[2];return Object(a.jsx)(I.Provider,{value:{filename:s,input:j,file:N,isLink:k,imgPreview:O,handleLink:function(e){y(!0),S(),o(n),d(e.target.value),x()},setIsLink:y,handleFile:function(e){e.target.files&&(y(!1),P(e.target.files[0]),o(e.target.files[0].name),d(e.target.files[0].name),m(URL.createObjectURL(e.target.files[0])))},resetInput:b},children:t})}var N=function(){var e=Object(r.useContext)(I),t=e.handleLink,n=e.handleFile,c=e.filename,i=e.isLink,s=e.setIsLink,o=e.resetInput,l=e.input;return Object(a.jsx)("div",{children:Object(a.jsx)(x.a,{className:"main-form",children:Object(a.jsxs)(v.a,{className:"mb-3",children:[Object(a.jsxs)(g.a,{drop:"up",as:v.a.Prepend,title:i?"Link":"File",children:[Object(a.jsx)(k.a.Item,{href:"#",onClick:function(){return s(!0)},children:"Link"}),Object(a.jsx)(k.a.Item,{href:"#",onClick:function(){return s(!1)},children:"File"})]}),Object(a.jsx)("div",{className:"x-icon",onClick:function(){var e;o(),null===(e=document.getElementById("form"))||void 0===e||e.focus()},children:"X"}),Object(a.jsx)(y.a,{style:{color:"#808e7d"},id:"form",placeholder:"Paste a link",value:i?l:"",onChange:function(e){return t(e)}}),Object(a.jsx)(w.a.File,{label:c,lang:"en",custom:!0,onChange:function(e){return n(e)}})]})})})},P=n(311),S=function(e){var t=[],n=e.input,a=e.isLink,r=e.file;return a&&0===n.length&&t.push("Please fill in a link"),a||r||t.push("Please select a file first"),{isOK:0===t.length,errors:t}},A=n(106),F=n.n(A).a.create({timeout:3e4,headers:{"X-Custom-Header":"foobar","Content-Type":"application/json"}}),T=function(){var e=Object(h.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("image",t,t.name),e.abrupt("return",new Promise((function(e,t){F.post("http://18.158.52.156:4000/upload/",n).then((function(t){e(t.data)})).catch((function(e){t(e)}))})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n(13),_=Object(r.createContext)(void 0);function Y(e){var t=e.children,n=Object(r.useState)({success:!1,message:void 0}),c=Object(f.a)(n,2),i=c[0],s=c[1],o=Object(r.useContext)(I),l=o.file,u=o.isLink,j=o.input,d=Object(r.useState)(""),p=Object(f.a)(d,2),m=p[0],x=p[1],v=Object(r.useState)(!1),g=Object(f.a)(v,2),k=g[0],y=g[1],w=Object(r.useState)(0),C=Object(f.a)(w,2),L=C[0],N=C[1],P=Object(r.useState)(!0),A=Object(f.a)(P,2),Y=A[0],z=A[1],B=Object(E.f)();Object(r.useEffect)((function(){return z(!0),function(){z(!1)}}),[]);var H=function(){var e=Object(h.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N(L+1),O(2e3).then((function(){N(0)})),4===L&&B.push("/easter"),!(L>1)&&Y){e.next=3;break}return e.abrupt("return");case 3:if(!(n=S(t={file:l,isLink:u,input:j})).isOK){e.next=19;break}if(y(!0),u||!l){e.next=16;break}return e.prev=8,e.next=11,T(l);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),x(e.t0.message);case 16:F.post("http://18.158.52.156:4000/predict/",t).then((function(e){200===e.status?(s(e.data),y(!1)):(x(e.statusText.toLowerCase()),y(!1))})).catch((function(e){y(!1),x(e.message)})),e.next=20;break;case 19:x(n.errors[0]);case 20:case"end":return e.stop()}}),e,null,[[8,13]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(_.Provider,{value:{prediction:i,setPrediction:s,predict:H,error:m,setError:x,isLoading:k},children:t})}var z=n(105),B=function(){var e=Object(r.useContext)(I),t=e.input,n=e.isLink,c=e.imgPreview;return Object(a.jsxs)(x.a,{children:[Object(a.jsx)(z.a,{}),Object(a.jsx)(z.a,{children:Object(a.jsx)("img",{src:n?t:c,alt:"",id:"input-canvas"})})]})},H=n(103),J=n(310),M=n(314),R=function(){var e=Object(r.useContext)(_),t=e.error,n=e.prediction;return e.isLoading?Object(a.jsx)(z.a,{children:Object(a.jsx)(J.a,{animation:"border",variant:"light",className:"spinner"})}):n.success?Object(a.jsx)(M.a,{variant:"success",className:"message-board",children:"It's a ".concat(n.message,"!")}):t.length>0?Object(a.jsx)(M.a,{variant:"danger",className:"message-board",children:t}):Object(a.jsx)("div",{})},D=function(){var e=Object(r.useContext)(_).predict;return Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{children:Object(a.jsx)(H.a,{variant:"light",className:"predict-button",onClick:function(){var t=Object(h.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),children:"Predict"})}),Object(a.jsx)(R,{})]})},K=n(40),U=function(){return Object(a.jsx)(K.b,{to:"/info",children:Object(a.jsx)(H.a,{variant:"light",className:"info-button",children:"Info"})})},X=function(){return Object(a.jsx)(L,{children:Object(a.jsx)(Y,{children:Object(a.jsxs)(P.a,{children:[Object(a.jsx)(U,{}),Object(a.jsx)(B,{}),Object(a.jsx)(N,{}),Object(a.jsx)(D,{})]})})})},q=n(315),G=function(){return Object(a.jsx)(K.b,{to:"/",children:Object(a.jsx)(H.a,{variant:"light",className:"back-button",children:"<"})})},W=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(G,{}),Object(a.jsx)(P.a,{className:"info-page",children:Object(a.jsx)(x.a,{children:Object(a.jsxs)(q.a,{body:!0,children:[Object(a.jsx)("h1",{children:"Some info"}),Object(a.jsxs)("p",{children:["This app was designed by"," ",Object(a.jsxs)("a",{href:"https://iamtheef.github.io/portofolio/",target:"_blank",rel:"noopener noreferrer",children:[Object(a.jsx)("b",{children:"Thergiakis Eftichios "})," "]}),"by ",Object(a.jsx)("b",{children:"November 2020"}),". It runs a flask API in the backend in order to retrieve the model and being able to make the predictions. The model as of the last training has an accuracy of 93%, not perfect but it can be better if it gets extensively trained in a larger dataset. Your uploaded images are kept on the server only for a few milliseconds and then they get deleted immediatelly after the model has finished. You can always contact the developer of this app on the email","  ",Object(a.jsx)("a",{href:"mailto:iamtheef_th@protonmail.com",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("b",{children:"iamthteef_th@protonmail.com"})})," ","and on discord under the nickname"," ",Object(a.jsxs)("a",{href:"https://discordapp.com/users/469766971437613057",target:"_blank",rel:"noopener noreferrer",children:[Object(a.jsx)("b",{children:"Th#1833"}),"."]})]}),Object(a.jsx)("h6",{children:"Thanks for coming this far... :)"}),Object(a.jsx)("h5",{style:{marginTop:"3%"},children:"Here's some AI fun facts:"}),Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:"A self learning super computer named Nautilus can predict the future, and it became famous when it was able to locate Osama Bin Laden."}),Object(a.jsx)("li",{children:"China plans to use Artificial Intelligence to gain global economic dominance by 2030."}),Object(a.jsx)("li",{children:"Microsoft is infusing AI into everything they deliver across computing platforms and experiences."}),Object(a.jsxs)("li",{children:["When you interact with AI as a default voice it is mostly a female as studies have shown that both women and men prefer the sound of a female voice."," "]}),Object(a.jsx)("li",{children:"80% of Artificial Intelligence professors are male."})]})]})})})]})},Z=function(){return Object(a.jsx)("div",{className:"egg",children:Object(a.jsx)(P.a,{children:Object(a.jsx)(x.a,{children:Object(a.jsxs)(z.a,{children:[Object(a.jsx)("p",{children:"You look like a thread to us robots already. I'll send a few from the future to take you out."}),Object(a.jsx)("img",{alt:"gif",src:"https://media.giphy.com/media/IZY2SE2JmPgFG/source.gif",width:"100%"})]})})})})};var Q=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{}),Object(a.jsx)(m,{}),Object(a.jsx)(K.a,{children:Object(a.jsxs)(E.c,{children:[Object(a.jsx)(E.a,{exact:!0,path:"/",component:X}),Object(a.jsx)(E.a,{exact:!0,path:"/info",component:W}),Object(a.jsx)(E.a,{exact:!0,path:"/easter",component:Z})]})})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,316)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(301);s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Q,{})}),document.getElementById("root")),V()}},[[302,1,2]]]);
//# sourceMappingURL=main.7ba7ab79.chunk.js.map