(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(e,t,n){e.exports={error:"Login_error__3EJUh"}},203:function(e,t,n){e.exports=n(369)},233:function(e,t,n){},239:function(e,t,n){},369:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(35),c=n.n(o),u=n(56),i=n(30),l=n(42),s=n(169),p=n(170),d=n(20),m={usernameText:"",passwordText:""},g=function(e,t){return e===t},E=function(e,t){return JSON.stringify(localStorage.setItem(e,t))},f=function(e){return JSON.parse(localStorage.getItem(e))},b={isLogged:f("isLogged")||!1},h=n(116),v=n.n(h),w=n(171),y=n(172),O=n.n(y),S=function(){return function(){var e=Object(w.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"NEWS_REQUEST"}),e.prev=1,e.next=4,O.a.get("".concat("https://newsapi.org/v2/","top-headlines?sources=bbc-news&apiKey=").concat("7fd45e35dc9349c8ad721a77101089d6"));case 4:n=e.sent,t({type:"NEWS_SUCCESS",payload:n.data.articles}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:"NEWS_FAILURE",payload:e.t0});case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},j={isLoading:!1,news:[],error:null},C=Object(l.c)({loginForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USERNAME_TEXT":return Object(d.a)({},e,{usernameText:null!==t.payload?e.usernameText+t.payload:e.usernameText});case"PASSWORD_TEXT":return Object(d.a)({},e,{passwordText:null!==t.payload?e.passwordText+t.payload:e.passwordText});case"USERNAME_BACKSPACE":return Object(d.a)({},e,{usernameText:e.usernameText.substr(0,e.usernameText.length-1)});case"PASSWORD_BACKSPACE":return Object(d.a)({},e,{passwordText:e.passwordText.substr(0,e.passwordText.length-1)});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TRY_LOGIN":var n=function(e){var t=e.login,n=e.password;return g("Admin",t)&&g("12345",n)}({login:t.payload.login,password:t.payload.password});return E("isLogged",n),n?{isLogged:f("isLogged")}:{isLogged:f("isLogged"),error:!0};case"LOGOUT":return E("isLogged",!1),Object(d.a)({},e,{isLogged:f("isLogged")});default:return e}},news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEWS_REQUEST":return Object(d.a)({},e,{isLoading:!0});case"NEWS_SUCCESS":return Object(d.a)({},e,{isLoading:!1,news:t.payload});case"NEWS_FAILURE":return Object(d.a)({},e,{isLoading:!1,error:t.payload});default:return e}}}),T=(n(233),n(43)),L=n(82),x=function(e){var t=e.user,n=e.component,a=Object(L.a)(e,["user","component"]);return r.a.createElement(T.b,Object.assign({},a,{render:function(e){return t?r.a.createElement(n,e):r.a.createElement(T.a,{to:"/login"})}}))},B=(n(239),n(381)),A=n(16),N=function(e){var t=Object(A.a)({},e);return r.a.createElement(B.a.Item,Object.assign({as:u.b,activeClassName:"active"},t))},_=function(e){var t=e.user;return r.a.createElement(B.a,null,r.a.createElement(N,{content:"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e",exact:!0,to:"/"}),r.a.createElement(N,{content:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438",to:"/news"}),r.a.createElement(N,{content:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",to:"/profile"}),t?r.a.createElement(N,{content:"\u0412\u044b\u0439\u0442\u0438",to:"/logout",position:"right"}):r.a.createElement(N,{content:"\u041b\u043e\u0433\u0438\u043d",to:"/login",position:"right"}))},k=function(){return r.a.createElement("div",null,"Main")},U=n(87),R=n(88),W=n(90),I=n(89),P=n(92),F=n(376),K=n(382),M=n(379),D=n(378),G=function(e){var t=e.urlToImage,n=e.title,a=e.description;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,null,r.a.createElement(M.a,{style:{width:"100%"}},r.a.createElement(M.a.Content,null,r.a.createElement(D.a,null,r.a.createElement(D.a.Event,null,r.a.createElement(D.a.Label,{image:t,style:{width:"100px"}}),r.a.createElement(D.a.Content,null,r.a.createElement(D.a.Summary,null,a),r.a.createElement(D.a.Date,{content:n}))))))))},J=function(e){var t,n=e.isLoading,a=e.news,o=e.error;Object(L.a)(e,["isLoading","news","error"]);return t=o?'\u041e\u0448\u0438\u0431\u043a\u0430 "'.concat(o.message,'". \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.'):a.map(function(e,t){return r.a.createElement(G,Object.assign({key:t},e))}),r.a.createElement(r.a.Fragment,null,n?r.a.createElement(F.a,{size:"large",active:!0},"Loading"):t)},X=function(e){function t(){return Object(U.a)(this,t),Object(W.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchNewsCB()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,this.props))}}]),t}(r.a.Component),Q=Object(i.b)(function(e){var t=e.news;return Object(d.a)({},t)},function(e){return{fetchNewsCB:function(){return e(S())}}})(X),Y=function(){return r.a.createElement("div",null,"Profile")},q=n(377),z=n(380),$=n(181),H=n.n($),V=function(e){var t=e.usernameText,n=e.passwordText,a=e.redirect,o=e.usernameTextCB,c=e.passwordTextCB,u=e.usernameBackspaceCB,i=e.passwordBackspaceCB,l=e.tryLoginCB,s=e.isLogged,p=e.error;s&&a();return r.a.createElement(K.a,null,p&&!s?r.a.createElement("div",{className:H.a.error},"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435 \u0432\u0435\u0440\u043d\u043e "):null,r.a.createElement(q.a,{onSubmit:function(){l({login:t,password:n})}},r.a.createElement(q.a.Group,{widths:"equal"},r.a.createElement(q.a.Input,{fluid:!0,label:"Username",placeholder:"username",onChange:function(e){var t=e.nativeEvent.data;o(t)},onKeyUp:function(e){8===e.keyCode&&u()},value:t}),r.a.createElement(q.a.Input,{fluid:!0,label:"Password",placeholder:"password",onChange:function(e){var t=e.nativeEvent.data;c(t)},onKeyUp:function(e){8===e.keyCode&&i()},value:n})),r.a.createElement(z.a,{type:"submit",disabled:!(t&&n)},"Submit")))},Z=Object(i.b)(function(e){return Object(d.a)({},e.loginForm,e.login)},function(e){return{usernameTextCB:function(t){return e(function(e){return{type:"USERNAME_TEXT",payload:e}}(t))},passwordTextCB:function(t){return e(function(e){return{type:"PASSWORD_TEXT",payload:e}}(t))},usernameBackspaceCB:function(){return e({type:"USERNAME_BACKSPACE"})},passwordBackspaceCB:function(){return e({type:"PASSWORD_BACKSPACE"})},tryLoginCB:function(t){return e(function(e){return{type:"TRY_LOGIN",payload:e}}(t))}}})(V),ee=function(e){function t(){return Object(U.a)(this,t),Object(W.a)(this,Object(I.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(R.a)(t,[{key:"componentWillMount",value:function(){this.props.redirect("/"),this.props.logoutCB()}},{key:"render",value:function(){return null}}]),t}(r.a.Component),te=Object(i.b)(null,function(e){return{logoutCB:function(){return e({type:"LOGOUT"})}}})(ee),ne=function(){return r.a.createElement("div",null,"Notfound")},ae=Object(i.b)(function(e){return{isLogged:e.login.isLogged}})(Object(T.f)(function(e){var t=e.isLogged,n=e.history;return r.a.createElement("div",{className:"App"},r.a.createElement(_,{user:t}),r.a.createElement(T.d,null,r.a.createElement(T.b,{exact:!0,path:"/",component:k}),r.a.createElement(T.b,{path:"/news",component:Q}),r.a.createElement(x,{path:"/profile",component:Y,user:t}),r.a.createElement(T.b,{path:"/login",render:function(){return r.a.createElement(Z,{redirect:function(){return n.push("/profile")}})}}),r.a.createElement(T.b,{path:"/logout",render:function(){return r.a.createElement(te,{redirect:function(){return n.push("/")}})}}),r.a.createElement(T.b,{component:ne})))}));n(368),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var re=Object(l.d)(C,Object(l.a)(p.a,s.logger));c.a.render(r.a.createElement(i.a,{store:re},r.a.createElement(u.a,null,r.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[203,1,2]]]);
//# sourceMappingURL=main.b703dbec.chunk.js.map