(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/tree-of-life.9f67e0bd.png"},105:function(e,t,a){e.exports=a.p+"static/media/watermelon.dbc806b0.svg"},115:function(e,t,a){e.exports=a(246)},120:function(e,t,a){},246:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),o=a.n(i);a(120),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(21),l=a(22),c=a(24),u=a(23),m=a(44),p=a(25),d=(a(45),a(121),a(7)),g=a.n(d),h=a(4),E=a.n(h),v=function(e){var t=e.result,a=e.server;return r.a.createElement("div",null,r.a.createElement("p",{className:"App-intro"},"result: ",t),r.a.createElement("p",{className:"App-intro"},"server: ",a))},f=a(2),b=a.n(f),w=a(8),k=a.n(w),y=a(16),L=a(54),x=a(71),j=a(100),O=a.n(j),N=function(e){return{root:{flexGrow:1},rooter:Object(x.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),layout:Object(L.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),backDiv:{height:"100%"},backDiv2:{height:"1000px",backgroundImage:"url(".concat(O.a,")"),backgroundRepeat:"repeat"},backDiv3:{backgroundColor:"#ddf3ff"},paperLion:{flexGrow:1,padding:e.spacing.unit,textAlign:"center",color:e.palette.primary.dark,backgroundColor:"#cce2ee"},paperLion2:{height:"56%",width:"100%",maxWidth:"500px",padding:"1%",color:e.palette.primary.dark,backgroundColor:e.palette.grey},paper:{padding:5*e.spacing.unit,textAlign:"center",color:e.palette.primary.dark},paperHome:Object(x.a)({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}),elfTypography:{fontSize:2*e.spacing.unit},containerDiv:{flexGrow:1}}},S=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{container:!0,spacing:24},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:e.paperLion},r.a.createElement(b.a,{variant:"h4"},"Qux Component"))),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:e.paperLion},r.a.createElement(v,{result:this.props.result,server:this.props.server}))),r.a.createElement(E.a,{className:e.paperLion},r.a.createElement(k.a,{variant:"contained",color:"primary","data-url":"/qux/you-rang",onClick:this.props.queryServerLogin},"Ring Qux"))))}}]),t}(n.Component),C=Object(y.withStyles)(N)(S),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).setData=function(e){var t=a.state.index,n=t,r=a.props.gistList.length-1;0===e?0!==t?n-=1:n=r:1===e&&(t!==r?n+=1:n=0),a.setState({index:n})},a.state={index:0},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{container:!0,spacing:24},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:t.paperLion},r.a.createElement(b.a,{variant:"h4"},"Get Gist Component"))),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:t.paperLion},r.a.createElement(v,{result:this.props.result,server:this.props.server})),r.a.createElement(E.a,{className:t.paperLion},r.a.createElement(k.a,{variant:"contained",color:"primary","data-url":"/get-gist/you-rang",onClick:this.props.queryServerLogin},"Ring Git Gist"))),r.a.createElement(E.a,{className:t.paperLion},r.a.createElement("div",{className:t.layout},r.a.createElement(b.a,{id:"description",variant:"h6"},"description:"," ",this.props.gistList[this.state.index].description),r.a.createElement(b.a,{id:"id",variant:"h6"},"gistID:"," ",this.props.gistList[this.state.index].id),r.a.createElement(b.a,{id:"ownerLogin",variant:"h6"},"owner login:"," ",this.props.gistList[this.state.index].ownerLogin),r.a.createElement(b.a,{id:"gitPullUrl",variant:"h6"},"gitPullUrl:"," ",this.props.gistList[this.state.index].gitPullUrl),r.a.createElement(b.a,{id:"files",variant:"h6"},"files:"," ",this.props.gistList[this.state.index].files),r.a.createElement("img",{src:this.props.gistList[0].avatarUrl,alt:"unknown",height:"200",width:"200"}))),r.a.createElement("br",null),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:t.paperLion},r.a.createElement(k.a,{id:"fetch",variant:"contained",color:"primary","data-url":"/get-gist/get-gist-list",onClick:this.props.fetchGistList},"Fetch Gist List"),r.a.createElement(k.a,{id:"prev",variant:"contained",color:"primary",onClick:function(t){return e.setData(0,e.setData(),t)}},"Prev"),r.a.createElement(k.a,{id:"next",variant:"contained",color:"primary",onClick:function(t){return e.setData(1,e.setData(),t)}},"Next")))))}}]),t}(n.Component),_=Object(y.withStyles)(N)(U),G=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{container:!0,spacing:24},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:e.paperLion},r.a.createElement(b.a,{variant:"h4"},"Test Routes Component"))),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:e.paperLion},r.a.createElement(v,{result:this.props.result,server:this.props.server}))),r.a.createElement(E.a,{className:e.paperLion},r.a.createElement(k.a,{variant:"contained",color:"primary","data-url":"/test-routes/api/foo",onClick:this.props.queryServerLogin},"Test Foo Route"))))}}]),t}(n.Component),R=Object(y.withStyles)(N)(G),D=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{container:!0,spacing:24},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:e.paperLion},r.a.createElement(b.a,{variant:"h4"},"Get User Component"))),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:e.paperLion},r.a.createElement(v,{result:this.props.result,server:this.props.server})),r.a.createElement(E.a,{className:e.paperLion},r.a.createElement(k.a,{variant:"contained",color:"primary","data-url":"/get-user/you-rang",onClick:this.props.queryServerLogin},"Ring Get User"))),r.a.createElement(E.a,{className:e.paperLion},r.a.createElement("div",{className:e.layout},r.a.createElement(b.a,{id:"login",variant:"h6"},"login: ",this.props.body.login),r.a.createElement(b.a,{id:"name",variant:"h6"},"name: ",this.props.body.name),r.a.createElement(b.a,{id:"bio",variant:"h6"},"bio: ",this.props.body.bio),r.a.createElement(b.a,{id:"location",variant:"h6"},"location: ",this.props.body.location),r.a.createElement(b.a,{id:"url",variant:"h6"},"url: ",this.props.body.url),r.a.createElement(b.a,{id:"id",variant:"h6"},"id: ",this.props.body.id),r.a.createElement(b.a,{id:"node_id",variant:"h6"},"node_id: ",this.props.body.node_id),r.a.createElement("img",{src:this.props.body.avatar_url,alt:"unknown",height:"200",width:"200"}))),r.a.createElement("br",null),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:e.paperLion},r.a.createElement(k.a,{variant:"contained",color:"primary","data-url":"/get-user/get-user",onClick:this.props.queryServerLogin},"Get User")))))}}]),t}(n.Component),q=Object(y.withStyles)(N)(D),T=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).setData=function(e){var t=a.state.index,n=t,r=a.props.repoList.length-1;0===e?0!==t?n-=1:n=r:1===e&&(t!==r?n+=1:n=0),a.setState({index:n})},a.state={index:0},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{container:!0,spacing:24},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:t.paperLion},r.a.createElement(b.a,{variant:"h4"},"Get Repos Component"))),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:t.paperLion},r.a.createElement(v,{result:this.props.result,server:this.props.server})),r.a.createElement(E.a,{className:t.paperLion},r.a.createElement(k.a,{variant:"contained",color:"primary","data-url":"/get-user/you-rang",onClick:this.props.queryServerLogin},"Ring Git User"))),r.a.createElement(E.a,{className:t.paperLion},r.a.createElement("div",{className:t.layout},r.a.createElement(b.a,{id:"name",variant:"h6"}," ","name:"," ",this.props.repoList[this.state.index].name," "),r.a.createElement(b.a,{id:"full_name",variant:"h6"}," ","full name:"," ",this.props.repoList[this.state.index].full_name," "),r.a.createElement(b.a,{id:"html",variant:"h6"}," ","html_url:"," ",this.props.repoList[this.state.index].html_url," "),r.a.createElement(b.a,{id:"login",variant:"h6"}," ","owner login:"," ",this.props.repoList[this.state.index].owner.login," "),r.a.createElement(b.a,{id:"url",variant:"h6"}," ","owner url:"," ",this.props.repoList[this.state.index].owner.url," "),r.a.createElement(b.a,{id:"private",variant:"h6"}," ","private:"," ",this.props.repoList[this.state.index].private.toString()," "))),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:t.paperLion},r.a.createElement(k.a,{id:"prev",variant:"contained",color:"primary",className:t.button,onClick:function(t){return e.setData(0,e.setData(),t)}},"Prev"),r.a.createElement(k.a,{id:"next",variant:"contained",color:"primary",className:t.button,onClick:function(t){return e.setData(1,e.setData(),t)}},"Next"))),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:t.paperLion},r.a.createElement(k.a,{id:"private",variant:"contained",color:"primary",className:t.button,"data-url":"/get-user/get-repos",onClick:function(t){return e.props.fetchRepoList(t)}},"Private"),r.a.createElement(k.a,{id:"public",variant:"contained",color:"primary",className:t.button,"data-url":"/get-user/get-repos",onClick:function(t){return e.props.fetchRepoList(t)}},"Public"),r.a.createElement(k.a,{id:"all",variant:"contained",color:"primary",className:t.button,"data-url":"/get-user/get-repos",onClick:function(t){return e.props.fetchRepoList(t)}},"All")))))}}]),t}(n.Component),F=Object(y.withStyles)(N)(T),P=a(113),I=a(107),B=a.n(I),A=a(111),W=a.n(A),H=a(109),J=a.n(H),M=a(108),Q=a.n(M),K=a(110),Y=a.n(K),z=a(106),V=a.n(z),$=a(75),X=a.n($),Z=a(40),ee=a.n(Z),te=a(30),ae=a.n(te),ne=a(31),re=a.n(ne),ie=a(73),oe=a.n(ie),se=a(56),le=a.n(se),ce=a(104),ue=a.n(ce),me=a(74),pe=a.n(me),de=a(103),ge=a.n(de),he=a(28);function Ee(e){return r.a.createElement(ee.a,Object.assign({button:!0,component:"a"},e))}var ve=r.a.createElement("div",null,r.a.createElement(Ee,{button:!0,component:he.b,to:"/"},r.a.createElement(ae.a,null,r.a.createElement(ge.a,null)),r.a.createElement(re.a,{primary:"Home"})),r.a.createElement(Ee,{button:!0,component:"a",href:"elf-sign-in.html"},r.a.createElement(ae.a,null,r.a.createElement(ue.a,null)),r.a.createElement(re.a,{primary:"Login"})),r.a.createElement(Ee,{button:!0,component:he.b,to:"/firebaseLogout"},r.a.createElement(ae.a,null,r.a.createElement(le.a,null)),r.a.createElement(re.a,{primary:"Firebase Logout"})),r.a.createElement(ee.a,{button:!0,component:he.b,to:"/get-user"},r.a.createElement(ae.a,null,r.a.createElement(oe.a,null)),r.a.createElement(re.a,{primary:"Get User Info"})),r.a.createElement(ee.a,{button:!0,component:he.b,to:"/get-repos"},r.a.createElement(ae.a,null,r.a.createElement(oe.a,null)),r.a.createElement(re.a,{primary:"Get Repos"})),r.a.createElement(ee.a,{button:!0,component:he.b,to:"/get-gist"},r.a.createElement(ae.a,null,r.a.createElement(pe.a,null)),r.a.createElement(re.a,{primary:"Get Gist"})),r.a.createElement(ee.a,{button:!0,component:he.b,to:"/write-gists"},r.a.createElement(ae.a,null,r.a.createElement(pe.a,null)),r.a.createElement(re.a,{primary:"Write Gists"}))),fe=r.a.createElement("div",null,r.a.createElement(Ee,{button:!0,component:he.b,to:"/qux"},r.a.createElement(ae.a,null,r.a.createElement(le.a,null)),r.a.createElement(re.a,{primary:"Qux"})),r.a.createElement(Ee,{button:!0,component:he.b,to:"/test-routes"},r.a.createElement(ae.a,null,r.a.createElement(le.a,null)),r.a.createElement(re.a,{primary:"Test Routes"}))),be=a(105),we=a.n(be),ke=Object(y.withStyles)(N)(function(e){var t=e.classes,a=r.a.createElement("div",{className:t.list},r.a.createElement(X.a,null,ve),r.a.createElement(V.a,null),r.a.createElement(X.a,null,fe)),i=Object(n.useState)(!1),o=Object(P.a)(i,2),s=o[0],l=o[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(B.a,{position:"static"},r.a.createElement(Q.a,null,r.a.createElement(J.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:function(){return l(!s)}},r.a.createElement(Y.a,null)),r.a.createElement(b.a,{variant:"h6",color:"inherit",className:t.flex,align:"center"},"GitExplorer"))),r.a.createElement("div",{className:"App-header"},r.a.createElement("div",{className:"App-logo"},r.a.createElement("img",{src:we.a,alt:"watermelon",width:"100"})),r.a.createElement("h1",null,"Git Explorer")),r.a.createElement(W.a,{open:s,onClose:function(){}},r.a.createElement("div",{role:"button",onClick:function(){return l(!s)},onKeyDown:function(){return l(!s)}},a))))}),ye=a(33),Le=function(){var e=window.firebase.auth().currentUser;return e||(e={displayName:"unknown",email:"unknown",providerId:"unknown",photoURL:"unknown"}),r.a.createElement("div",null,r.a.createElement(E.a,null,r.a.createElement(b.a,{variant:"h5"},"Current User Information")),r.a.createElement("br",null),r.a.createElement(E.a,null,r.a.createElement(b.a,{variant:"body1",gutterBottom:!0},"Name: ",e.displayName||"logged out"),r.a.createElement(b.a,{variant:"body1",gutterBottom:!0},"Email: ",e.email),r.a.createElement(b.a,{variant:"body1",gutterBottom:!0},"Provider ID: ",e.providerId),r.a.createElement("img",{src:e.photoURL,alt:"user",width:"100",height:"100"})),r.a.createElement(E.a,null,r.a.createElement(k.a,{variant:"contained",color:"primary","data-url":"/git-gist-you-rang",onClick:function(){window.firebase.auth().signOut().then(function(){console.log("Signed Out"),window.location.href="/"},function(e){console.error("Sign Out Error",e)})}},"Log Out")))},xe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).runBatchRead=function(e){var t=e.currentTarget.dataset.url;fetch(t).then(function(e){return e.json()}).then(function(e){a.setState({gists:e})}).catch(function(e){console.log(e),a.setState({error:e.message,stack:e.stack})})},a.setData=function(e){var t=a.state.index,n=t,r=a.state.gists.length-1;0===e?0!==t?n-=1:n=r:1===e&&(t!==r?n+=1:n=0),a.setState({index:n})},a.state={index:0,gists:[{logged_in_user_id:"unknown",logged_in_user_name:"unknown",htmlUrl:"unknown",description:"unknown",files:"unknown"}]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{container:!0,spacing:24},r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:t.paperLion},r.a.createElement(b.a,{variant:"h4"},"Write Gists Component"))),r.a.createElement(E.a,{className:t.paperLion},r.a.createElement("div",{className:t.layout},r.a.createElement(b.a,{id:"logged_in_user_name",variant:"h6"},"Logged In UserName:"," ",this.state.gists[this.state.index].logged_in_user_name),r.a.createElement(b.a,{id:"logged_in_user_id",variant:"h6"},"Logged In UserID:"," ",this.state.gists[this.state.index].logged_in_user_id),r.a.createElement(b.a,{id:"description",variant:"h6"},"Description:"," ",this.state.gists[this.state.index].description),r.a.createElement(b.a,{id:"htmlUrl",variant:"h6"},"HtmlUrl:"," ",r.a.createElement("a",{href:this.state.gists[this.state.index].htmlUrl},this.state.gists[this.state.index].htmlUrl)),r.a.createElement(b.a,{id:"filename",variant:"h6"},"File name:"," ",this.state.gists[this.state.index].files))),r.a.createElement("br",null),r.a.createElement(g.a,{item:!0,xs:12},r.a.createElement(E.a,{className:t.paperLion},r.a.createElement(k.a,{id:"writeGists",variant:"contained",color:"primary","data-url":"/get-gist/write-gists",onClick:this.props.queryServerLogin},"Write Gists"),r.a.createElement(k.a,{id:"readGists",variant:"contained",color:"primary","data-url":"/get-gist/read-gists",onClick:this.runBatchRead},"Read Gists"),r.a.createElement("br",null),r.a.createElement(k.a,{id:"prev",variant:"contained",color:"primary",onClick:function(t){return e.setData(0,e.setData(),t)}},"Prev"),r.a.createElement(k.a,{id:"next",variant:"contained",color:"primary",onClick:function(t){return e.setData(1,e.setData(),t)}},"Next")))))}}]),t}(n.Component),je=Object(y.withStyles)(N)(xe),Oe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).setGistList=function(e){console.log("parsed json",e),a.setState(function(){return{gistList:e.result}})},a.fetchGistList=function(e){var t=Object(m.a)(a);fetch(e.currentTarget.dataset.url).then(function(e){return e.json()}).then(function(e){t.setGistList(e)}).catch(function(e){console.log("parsing failed, URL bad, network down, or similar",e)})},a.setRepoList=function(e){console.log("retrieved repos: ",e),a.setState({repoList:e})},a.fetchRepoList=function(e){var t=Object(m.a)(a),n=e.currentTarget.id,r=[];console.log("fetchRepoList()",n),fetch(e.currentTarget.dataset.url).then(function(e){return e.json()}).then(function(e){if("private"===n){console.log("These are private repos");for(var a=0;a<e.result.length;a++)!0===e.result[a].private&&r.push(e.result[a])}else if("public"===n){console.log("These are public repos");for(var i=0;i<e.result.length;i++)!0!==e.result[i].private&&r.push(e.result[i])}else for(var o=0;o<e.result.length;o++)r.push(e.result[o]);t.setRepoList(r)}).catch(function(e){console.log("parsing failed, URL bad, network down, or similar",e)})},a.setData=function(e){console.log(e)},a.getFirebaseToken=function(){return new Promise(function(e,t){window.firebase.auth().currentUser||(a.setData({result:"You need to log in."}),t({result:"You need to log in (env export?)."})),window.firebase.auth().currentUser.getIdToken(!0).then(function(t){e({token:t})}).catch(function(e){t(e)})})},a.makeParams=function(e){var t=encodeURIComponent;return"?"+Object.keys(e).map(function(a){return t(a)+"="+t(e[a])}).join("&")},a.queryServerLogin=function(e){var t=e.currentTarget.dataset.url;a.getFirebaseToken().then(function(e){console.log("TOKEN",e.token),t+=a.makeParams({token:e.token,test:"testParam"}),fetch(t).then(function(e){return e.json()}).then(function(e){e.body&&(e.body=JSON.parse(e.body)),a.setState(e),a.setData(e)}).catch(function(e){console.log("parsing failed, URL bad, network down, or similar",e)})}).catch(function(e){console.log(e)})},a.state=e.appInit,a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(he.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(ke,null),r.a.createElement("br",null),r.a.createElement(ye.a,{path:"/test-routes",render:function(t){return r.a.createElement(R,Object.assign({},t,{queryServerLogin:e.queryServerLogin,result:e.state.result,server:e.state.server}))}}),r.a.createElement(ye.a,{path:"/qux",render:function(t){return r.a.createElement(C,Object.assign({},t,{queryServerLogin:e.queryServerLogin,result:e.state.result,server:e.state.server}))}}),r.a.createElement(ye.a,{path:"/get-user",render:function(t){return r.a.createElement(q,Object.assign({},t,{queryServerLogin:e.queryServerLogin,body:e.state.body,result:e.state.result,server:e.state.server}))}}),r.a.createElement(ye.a,{path:"/get-repos",render:function(t){return r.a.createElement(F,Object.assign({},t,{queryServerLogin:e.queryServerLogin,fetchRepoList:e.fetchRepoList,repoList:e.state.repoList,result:e.state.result,server:e.state.server}))}}),r.a.createElement(ye.a,{path:"/get-gist",render:function(t){return r.a.createElement(_,Object.assign({},t,{queryServerLogin:e.queryServerLogin,fetchGistList:e.fetchGistList,gistList:e.state.gistList,result:e.state.result,server:e.state.server}))}}),r.a.createElement(ye.a,{path:"/write-gists",render:function(t){return r.a.createElement(je,Object.assign({},t,{queryServerLogin:e.queryServerLogin}))}}),r.a.createElement(ye.a,{path:"/firebaseLogout",component:Le})),r.a.createElement("br",null),r.a.createElement("p",{align:"center"},r.a.createElement("b",null,"Copyright \xa9 Hannah Pittman")),r.a.createElement("p",{align:"center"},r.a.createElement("b",null,"ISIT 322 Spring 2019 Professor Charlie Calvert")))}}]),t}(n.Component),Ne=Object(y.withStyles)(N)(Oe),Se=a(58),Ce=a.n(Se),Ue=a(57),_e=a.n(Ue),Ge=a(112),Re=a.n(Ge),De={file:"unknown",result:"unknown",status:"unknown",server:"unknown",body:{login:"unknown",id:"unknown",node_id:"unknown",name:"unknown",avatar_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Face-smile-big.svg/1200px-Face-smile-big.svg.png",bio:"unknown",location:"unknown",url:"unknown"},gistList:[{id:"unknown1",description:"unknown1",ownerLogin:"unknown1",gitPullUrl:"unknown1",files:"unknown1",htmlUrl:"unknown1",avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Face-smile-big.svg/1200px-Face-smile-big.svg.png"},{id:"unknown2",description:"unknown2",ownerLogin:"unknown2",gitPullUrl:"unknown2",files:"unknown2",htmlUrl:"unknown2",avatarUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Face-smile-big.svg/1200px-Face-smile-big.svg.png"}],repoList:[{name:"unknown1",full_name:"unknown1",html_url:"unknown1",owner:{login:"unknown1",url:"unknown1"},private:"unknown1"},{name:"unknown2",full_name:"unknown2",html_url:"unknown2",owner:{login:"unknown2",url:"unknown2"},private:"unknown2"}]},qe=Object(y.createMuiTheme)({typography:{useNextVariants:!0},palette:{primary:{light:_e.a[300],main:_e.a[500],dark:_e.a[700]},secondary:{light:Ce.a[300],main:Ce.a[500],dark:Ce.a[700]},background:{paper:"#cce2ee",default:"#ddf3ff"}}});o.a.render(r.a.createElement(function(){return r.a.createElement(y.MuiThemeProvider,{theme:qe},r.a.createElement(Re.a,null),r.a.createElement(Ne,{appInit:De}))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},45:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.0546556b.chunk.js.map