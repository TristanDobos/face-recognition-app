(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{102:function(e,a,t){e.exports=t(380)},107:function(e,a,t){},108:function(e,a,t){},109:function(e,a,t){},110:function(e,a,t){},379:function(e,a,t){},380:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),i=t(47),l=t.n(i),s=(t(107),t(95)),c=t(96),o=t(101),m=t(100),u=function(e){var a=e.signOff;return e.isSignedIn?r.a.createElement("div",null,r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{className:"f3 link dim black underline pa3 pointer",onClick:function(){return a("signin")}},"Sign out"))):r.a.createElement("div",null,r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{className:"f3 link dim black underline pa3 pointer",onClick:function(){return a("signin")}},"Sign in"),r.a.createElement("p",{className:"f3 link dim black underline pa3 pointer",onClick:function(){return a("register")}},"Register")))},d=(t(108),t(97)),p=t.n(d),h=(t(109),t(98)),b=t.n(h),g=function(){return r.a.createElement("div",{className:"ma4 mt0"},r.a.createElement(p.a,{className:"Tilt",options:{max:45},style:{height:100,width:100}},r.a.createElement("div",{className:"Tilt-inner pa3 br2 shadow-2",style:{paddingTop:"17px",paddingLeft:"20px",height:"90 rem",width:"90 rem"}},r.a.createElement("img",{src:b.a,alt:"logo"}))))},f=function(e){var a=e.onRouteChange;return r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center signin"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure "},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:"center"},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",onClick:function(){return a("home")},value:"Sign in"})),r.a.createElement("div",{className:"lh-copy mt3 center"},r.a.createElement("a",{href:"#0",onClick:function(){return a("register")},className:"f6 pointer link dim black db"},"Register")))))},E=(t(110),function(e){var a=e.onInputChange,t=e.onButtonSubmit;return r.a.createElement("div",null,r.a.createElement("p",{className:"f3 mb3 center"},"This Magic Brain will detect faces in your pictures."),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"form center pa4 br3 shadow-5"},r.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",name:"",placeholder:"Enter url",id:"",onChange:a}),r.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple ",onClick:t},"Detect"))))}),w=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"white center f3"},"Tristan, your current rank is..."),r.a.createElement("div",{className:"white center f2"},"coming soon"))},v=t(99),N=t.n(v),y=t(48),A=t.n(y),C=(t(379),function(e){var a=e.imageUrl,t=e.box;return r.a.createElement("div",{className:"center ma3"},r.a.createElement("div",{className:"absolute"},r.a.createElement("img",{id:"inputimage",src:a,alt:"",width:"500 px",height:"auto"}),r.a.createElement("div",{className:"bounding-box",style:{top:t.topRow,right:t.rightCol,bottom:t.bottomRow,left:t.leftCol}})))}),x=(t(94),function(e){var a=e.onRouteChange;return r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center register"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure "},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",for:"email-address"},"Name"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",for:"email-address"},"Email"),r.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",for:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:"center"},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",onClick:function(){return a("home")},type:"submit",value:"Sign up"})))))}),k=new A.a.App({apiKey:"c171543d0ea649da9e3c3ae3f8e3e091"}),S={particles:{number:{value:100,density:{enable:!0,value_area:800}}}},I=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).calculateFaceLocation=function(e){var a=e.outputs[0].data.regions[0].region_info.bounding_box,t=document.getElementById("inputimage"),n=Number(t.width),r=Number(t.height);return{leftCol:a.left_col*n,topRow:a.top_row*r,rightCol:n*(a.right_col-1),bottomRow:r*(a.bottom_row-1)}},e.displayFaceBox=function(a){console.log(a),e.setState({box:a})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),console.log("click"),k.models.predict(A.a.FACE_DETECT_MODEL,e.state.input).then((function(a){return e.displayFaceBox(e.calculateFaceLocation(a))})).catch((function(e){return console.log(e)}))},e.onInputChange=function(a){e.setState({input:a.target.value})},e.onRouteChange=function(a){"signout"===a?e.setState({isSignedIn:!1}):"home"===a&&e.setState({isSignedIn:!0}),e.setState({route:a})},e.state={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1},e}return Object(c.a)(t,[{key:"render",value:function(){var e=this.state,a=e.isSignedIn,t=e.route,n=e.box,i=e.imageUrl;return r.a.createElement("div",{className:"App"},r.a.createElement(N.a,{className:"particles",params:S}),r.a.createElement(u,{isSignedIn:a,signOff:this.onRouteChange}),"home"===t?r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(w,null),r.a.createElement(E,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),r.a.createElement(C,{box:n,imageUrl:i})):"signin"===this.state.route?r.a.createElement(f,{onRouteChange:this.onRouteChange}):r.a.createElement(x,{onRouteChange:this.onRouteChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},98:function(e,a){e.exports="data:image/png;base64,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"}},[[102,1,2]]]);
//# sourceMappingURL=main.dbea1afd.chunk.js.map