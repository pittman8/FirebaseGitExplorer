(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/watermelon.dbc806b0.svg"},112:function(e,t,a){e.exports=a(248)},117:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),o=a.n(i);a(117),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(26),s=a(27),c=a(29),u=a(28),m=a(38),p=a(30),d=(a(56),a(118),function(e){var t=e.queryServer;return r.a.createElement("button",{"data-url":"/qux/qux-you-rang",onClick:t},"Ring Qux")}),g=a(11),h=a.n(g),E=a(20),v=a(53),f=a(68),b=a(98),w=a.n(b),k=function(e){return{root:{flexGrow:1},rooter:Object(f.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),layout:Object(v.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),backDiv:{height:"100%"},backDiv2:{height:"1000px",backgroundImage:"url(".concat(w.a,")"),backgroundRepeat:"repeat"},backDiv3:{backgroundColor:"#ddf3ff"},paperLion:{flexGrow:1,padding:e.spacing.unit,textAlign:"center",color:e.palette.primary.dark,backgroundColor:"#cce2ee"},paperLion2:{height:"56%",width:"100%",maxWidth:"500px",padding:"1%",color:e.palette.primary.dark,backgroundColor:e.palette.grey},paper:{padding:5*e.spacing.unit,textAlign:"center",color:e.palette.primary.dark},paperHome:Object(f.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),elfTypography:{fontSize:2*e.spacing.unit},containerDiv:{flexGrow:1}}},y=a(4),L=a.n(y),x=a(19),j=a.n(x),O=a(10),S=a.n(O),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).setData=function(e){var t=a.state.index,n=t,r=a.props.gistList.length-1;0===e?0!==t?n-=1:n=r:1===e&&(t!==r?n+=1:n=0),a.setState({index:n})},a.state={index:0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{container:!0,spacing:24},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(S.a,{className:t.paperLion},r.a.createElement(L.a,{variant:"h4"},"Get Gist Component"))),r.a.createElement("br",null),r.a.createElement(S.a,{className:t.paperLion},r.a.createElement("div",{className:t.layout},r.a.createElement(L.a,{id:"description",variant:"h6"},"description:"," ",this.props.gistList[this.state.index].description),r.a.createElement(L.a,{id:"id",variant:"h6"},"gistID:"," ",this.props.gistList[this.state.index].id),r.a.createElement(L.a,{id:"ownerLogin",variant:"h6"},"owner login:"," ",this.props.gistList[this.state.index].ownerLogin),r.a.createElement(L.a,{id:"gitPullUrl",variant:"h6"},"gitPullUrl:"," ",this.props.gistList[this.state.index].gitPullUrl),r.a.createElement(L.a,{id:"files",variant:"h6"},"files:"," ",this.props.gistList[this.state.index].files),r.a.createElement("img",{src:this.props.gistList[0].avatarUrl,alt:"unknown",height:"200",width:"200"}))),r.a.createElement("br",null),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(S.a,{className:t.paperLion},r.a.createElement(h.a,{variant:"contained",color:"primary","data-url":"/gists/git-gist-you-rang",onClick:this.props.queryServer},"Ring Git Gist"),r.a.createElement(h.a,{id:"fetch",variant:"contained",color:"primary","data-url":"/gists/git-gist-get-gist-list",onClick:this.props.fetchGistList},"Fetch Gist List"),r.a.createElement(h.a,{id:"prev",variant:"contained",color:"primary",onClick:function(t){return e.setData(0,e.setData(),t)}},"Prev"),r.a.createElement(h.a,{id:"next",variant:"contained",color:"primary",onClick:function(t){return e.setData(1,e.setData(),t)}},"Next")))))}}]),t}(n.Component),C=Object(E.withStyles)(k)(N),R=function(e){var t=e.queryServer;return r.a.createElement("button",{"data-url":"/test-routes/api/foo",onClick:t},"Test Foo Route")},G=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{container:!0,spacing:24},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(S.a,{className:e.paperLion},r.a.createElement(L.a,{variant:"h4"},"Get User Component"))),r.a.createElement("br",null),r.a.createElement(S.a,{className:e.paperLion},r.a.createElement("div",{className:e.layout},r.a.createElement(L.a,{id:"login",variant:"h6"},"login: ",this.props.body.login),r.a.createElement(L.a,{id:"name",variant:"h6"},"name: ",this.props.body.name),r.a.createElement(L.a,{id:"bio",variant:"h6"},"bio: ",this.props.body.bio),r.a.createElement(L.a,{id:"location",variant:"h6"},"location: ",this.props.body.location),r.a.createElement(L.a,{id:"url",variant:"h6"},"url: ",this.props.body.url),r.a.createElement(L.a,{id:"id",variant:"h6"},"id: ",this.props.body.id),r.a.createElement(L.a,{id:"node_id",variant:"h6"},"node_id: ",this.props.body.node_id),r.a.createElement("img",{src:this.props.body.avatar_url,alt:"unknown",height:"200",width:"200"}))),r.a.createElement("br",null),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(S.a,{className:e.paperLion},r.a.createElement(h.a,{variant:"contained",color:"primary","data-url":"/users/git-user-you-rang",onClick:this.props.queryServer},"Ring Get User"),r.a.createElement(h.a,{variant:"contained",color:"primary","data-url":"/users/git-user-get-user",onClick:this.props.queryServer},"Get User")))))}}]),t}(n.Component),q=Object(E.withStyles)(k)(G),U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).setData=function(e){var t=a.state.index,n=t,r=a.props.repoList.length-1;0===e?0!==t?n-=1:n=r:1===e&&(t!==r?n+=1:n=0),a.setState({index:n})},a.state={index:0},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{container:!0,spacing:24},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(S.a,{className:t.paperLion},r.a.createElement(L.a,{variant:"h4"},"Get Repos Component"))),r.a.createElement("br",null),r.a.createElement(S.a,{className:t.paperLion},r.a.createElement("div",{className:t.layout},r.a.createElement(L.a,{id:"name",variant:"h6"}," ","name:"," ",this.props.repoList[this.state.index].name," "),r.a.createElement(L.a,{id:"full_name",variant:"h6"}," ","full name:"," ",this.props.repoList[this.state.index].full_name," "),r.a.createElement(L.a,{id:"html",variant:"h6"}," ","html_url:"," ",this.props.repoList[this.state.index].html_url," "),r.a.createElement(L.a,{id:"login",variant:"h6"}," ","owner login:"," ",this.props.repoList[this.state.index].owner.login," "),r.a.createElement(L.a,{id:"url",variant:"h6"}," ","owner url:"," ",this.props.repoList[this.state.index].owner.url," "),r.a.createElement(L.a,{id:"private",variant:"h6"}," ","private:"," ",this.props.repoList[this.state.index].private.toString()," "))),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(S.a,{className:t.paperLion},r.a.createElement(h.a,{variant:"contained",color:"primary","data-url":"/users/git-user-you-rang",onClick:this.props.queryServer},"Ring Git User"),r.a.createElement(h.a,{id:"prev",variant:"contained",color:"primary",className:t.button,onClick:function(t){return e.setData(0,e.setData(),t)}},"Prev"),r.a.createElement(h.a,{id:"next",variant:"contained",color:"primary",className:t.button,onClick:function(t){return e.setData(1,e.setData(),t)}},"Next"))),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(S.a,{className:t.paperLion},r.a.createElement(h.a,{id:"private",variant:"contained",color:"primary",className:t.button,"data-url":"/users/git-user-get-user-repos",onClick:function(t){return e.props.fetchRepoList(t)}},"Private"),r.a.createElement(h.a,{id:"public",variant:"contained",color:"primary",className:t.button,"data-url":"/users/git-user-get-user-repos",onClick:function(t){return e.props.fetchRepoList(t)}},"Public"),r.a.createElement(h.a,{id:"all",variant:"contained",color:"primary",className:t.button,"data-url":"/users/git-user-get-user-repos",onClick:function(t){return e.props.fetchRepoList(t)}},"All")))))}}]),t}(n.Component),D=Object(E.withStyles)(k)(U),T=a(111),F=a(105),_=a.n(F),P=a(109),I=a.n(P),A=a(107),B=a.n(A),J=a(106),M=a.n(J),W=a(108),K=a.n(W),Q=a(104),V=a.n(Q),Y=a(72),z=a.n(Y),H=a(44),$=a.n(H),X=a(33),Z=a.n(X),ee=a(34),te=a.n(ee),ae=a(70),ne=a.n(ae),re=a(71),ie=a.n(re),oe=a(102),le=a.n(oe),se=a(101),ce=a.n(se),ue=a(25);function me(e){return r.a.createElement($.a,Object.assign({button:!0,component:"a"},e))}var pe=r.a.createElement("div",null,r.a.createElement($.a,{button:!0,component:ue.b,to:"/get-user"},r.a.createElement(Z.a,null,r.a.createElement(ne.a,null)),r.a.createElement(te.a,{primary:"Get User Info"})),r.a.createElement($.a,{button:!0,component:ue.b,to:"/get-user-repos"},r.a.createElement(Z.a,null,r.a.createElement(ne.a,null)),r.a.createElement(te.a,{primary:"Get Repos"})),r.a.createElement($.a,{button:!0,component:ue.b,to:"/get-gist"},r.a.createElement(Z.a,null,r.a.createElement(ce.a,null)),r.a.createElement(te.a,{primary:"Get Gist"}))),de=r.a.createElement("div",null,r.a.createElement(me,{button:!0,component:ue.b,to:"/login"},r.a.createElement(Z.a,null,r.a.createElement(le.a,null)),r.a.createElement(te.a,{primary:"Firebase Login"})),r.a.createElement(me,{button:!0,component:ue.b,to:"/qux"},r.a.createElement(Z.a,null,r.a.createElement(ie.a,null)),r.a.createElement(te.a,{primary:"Qux"})),r.a.createElement(me,{button:!0,component:ue.b,to:"/test-routes"},r.a.createElement(Z.a,null,r.a.createElement(ie.a,null)),r.a.createElement(te.a,{primary:"Test Routes"}))),ge=a(103),he=a.n(ge),Ee=Object(E.withStyles)(k)(function(e){var t=e.classes,a=r.a.createElement("div",{className:t.list},r.a.createElement(z.a,null,pe),r.a.createElement(V.a,null),r.a.createElement(z.a,null,de)),i=Object(n.useState)(!1),o=Object(T.a)(i,2),l=o[0],s=o[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(_.a,{position:"static"},r.a.createElement(M.a,null,r.a.createElement(B.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:function(){return s(!l)}},r.a.createElement(K.a,null)),r.a.createElement(L.a,{variant:"h6",color:"inherit",className:t.flex,align:"center"},"GitExplorer"))),r.a.createElement("div",{className:"App-header"},r.a.createElement("div",{className:"App-logo"},r.a.createElement("img",{src:he.a,alt:"watermelon",width:"100"})),r.a.createElement("h1",null,"Git Explorer")),r.a.createElement(I.a,{open:l,onClose:function(){}},r.a.createElement("div",{role:"button",onClick:function(){return s(!l)},onKeyDown:function(){return s(!l)}},a))))}),ve=a(32),fe=function(e){var t=e.result,a=e.server;return r.a.createElement("div",null,r.a.createElement("p",{className:"App-intro"},"result: ",t),r.a.createElement("p",{className:"App-intro"},"server: ",a))},be=function(e){var t=e.queryServerLogin,a=window.firebase.auth().currentUser;return a||(a={displayName:"unknown",email:"unknown",providerId:"unknown",photoURL:"unknown"}),r.a.createElement("div",null,r.a.createElement(L.a,{variant:"body1",gutterBottom:!0},a.displayName||"logged out"),r.a.createElement(L.a,{variant:"body1",gutterBottom:!0},a.email),r.a.createElement(L.a,{variant:"body1",gutterBottom:!0},a.providerId),r.a.createElement("img",{src:a.photoURL,alt:"user",width:"100",height:"100"}),r.a.createElement(S.a,null,r.a.createElement(h.a,{variant:"contained",color:"primary",onClick:function(){window.open("elf-sign-in.html")}},"Login"),r.a.createElement(h.a,{variant:"contained",color:"primary","data-url":"/test-verify",onClick:t},"Verify"),r.a.createElement(h.a,{variant:"contained",color:"primary","data-url":"/git-gist-you-rang",onClick:function(){window.firebase.auth().signOut().then(function(){console.log("Signed Out"),window.location.href="/"},function(e){console.error("Sign Out Error",e)})}},"Log Out")))},we=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).queryServer=function(e){var t=Object(m.a)(a);fetch(e.currentTarget.dataset.url).then(function(e){return e.json()}).then(function(e){console.log("parsed json",e),e.body&&(e.body=JSON.parse(e.body)),t.setState(e)}).catch(function(e){console.log("parsing failed, URL bad, network down, or similar",e)})},a.setGistList=function(e){console.log("parsed json",e),a.setState(function(){return{gistList:e.result}})},a.fetchGistList=function(e){var t=Object(m.a)(a);fetch(e.currentTarget.dataset.url).then(function(e){return e.json()}).then(function(e){t.setGistList(e)}).catch(function(e){console.log("parsing failed, URL bad, network down, or similar",e)})},a.setRepoList=function(e){console.log("retrieved repos: ",e),a.setState({repoList:e})},a.fetchRepoList=function(e){var t=Object(m.a)(a),n=e.currentTarget.id,r=[];console.log("fetchRepoList()",n),fetch(e.currentTarget.dataset.url).then(function(e){return e.json()}).then(function(e){if("private"===n){console.log("These are private repos");for(var a=0;a<e.result.length;a++)!0===e.result[a].private&&r.push(e.result[a])}else if("public"===n){console.log("These are public repos");for(var i=0;i<e.result.length;i++)!0!==e.result[i].private&&r.push(e.result[i])}else for(var o=0;o<e.result.length;o++)r.push(e.result[o]);t.setRepoList(r)}).catch(function(e){console.log("parsing failed, URL bad, network down, or similar",e)})},a.setData=function(){return console.log("setData function for testing: setData is in GetGist and RetRepo components")},a.getFirebaseToken=function(){return new Promise(function(e,t){window.firebase.auth().currentUser||(a.setData({result:"You need to log in."}),t({result:"You need to log in (env export?)."})),window.firebase.auth().currentUser.getIdToken(!0).then(function(t){e({token:t})}).catch(function(e){t(e)})})},a.queryServerLogin=function(e){var t=e.currentTarget.dataset.url;a.getFirebaseToken().then(function(e){console.log("TOKEN",e.token),fetch(t+"?token="+e.token).then(function(e){return e.json()}).then(function(e){a.setData(e)}).catch(function(e){console.log("parsing failed, URL bad, network down, or similar",e)})}).catch(function(e){console.log(e)})},a.state=e.appInit,a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(ue.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(Ee,null),r.a.createElement("br",null),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(S.a,{className:t.paperLion},r.a.createElement(fe,{result:this.state.result,server:this.state.server}))),r.a.createElement("br",null),r.a.createElement(ve.a,{path:"/test-routes",render:function(t){return r.a.createElement(R,Object.assign({},t,{queryServer:e.queryServer}))}}),r.a.createElement(ve.a,{path:"/qux",render:function(t){return r.a.createElement(d,Object.assign({},t,{queryServer:e.queryServer}))}}),r.a.createElement(ve.a,{path:"/get-user",render:function(t){return r.a.createElement(q,Object.assign({},t,{queryServer:e.queryServer,body:e.state.body}))}}),r.a.createElement(ve.a,{path:"/get-user-repos",render:function(t){return r.a.createElement(D,Object.assign({},t,{queryServer:e.queryServer,fetchRepoList:e.fetchRepoList,repoList:e.state.repoList}))}}),r.a.createElement(ve.a,{path:"/get-gist",render:function(t){return r.a.createElement(C,Object.assign({},t,{queryServer:e.queryServer,fetchGistList:e.fetchGistList,gistList:e.state.gistList}))}}),r.a.createElement(ve.a,{path:"/login",render:function(t){return r.a.createElement(be,Object.assign({},t,{queryServerLogin:e.queryServerLogin}))}})))}}]),t}(n.Component),ke=Object(E.withStyles)(k)(we),ye=a(55),Le=a.n(ye),xe=a(54),je=a.n(xe),Oe=a(110),Se=a.n(Oe),Ne={file:"unknown",result:"unknown",status:"unknown",server:"unknown",body:{login:"unknown",id:"unknown",node_id:"unknown",name:"unknown",avatar_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Face-smile-big.svg/1200px-Face-smile-big.svg.png",bio:"unknown",location:"unknown",url:"unknown"},gistList:[{id:"unknown1",description:"unknown1",ownerLogin:"unknown1",gitPullUrl:"unknown1",files:"unknown1",avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Face-smile-big.svg/1200px-Face-smile-big.svg.png"},{id:"unknown2",description:"unknown2",ownerLogin:"unknown2",gitPullUrl:"unknown2",files:"unknown2",avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Face-smile-big.svg/1200px-Face-smile-big.svg.png"}],repoList:[{name:"unknown1",full_name:"unknown1",html_url:"unknown1",owner:{login:"unknown1",url:"unknown1"},private:"unknown1"},{name:"unknown2",full_name:"unknown2",html_url:"unknown2",owner:{login:"unknown2",url:"unknown2"},private:"unknown2"}]},Ce=Object(E.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{light:je.a[300],main:je.a[500],dark:je.a[700]},secondary:{light:Le.a[300],main:Le.a[500],dark:Le.a[700]},background:{paper:"#cce2ee",default:"#ddf3ff"}}});o.a.render(r.a.createElement(function(){return r.a.createElement(E.MuiThemeProvider,{theme:Ce},r.a.createElement(Se.a,null),r.a.createElement(ke,{appInit:Ne}))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){},98:function(e,t,a){e.exports=a.p+"static/media/tree-of-life.9f67e0bd.png"}},[[112,1,2]]]);
//# sourceMappingURL=main.f5ab10f8.chunk.js.map