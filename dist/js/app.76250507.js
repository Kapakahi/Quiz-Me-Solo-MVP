(function(e){function t(t){for(var a,i,u=t[0],s=t[1],c=t[2],f=0,p=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);l&&l(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Welcome"),n("button",{staticClass:"button",on:{click:e.toggleMakeQuizPage}},[e._v("Make a quiz")]),n("button",{staticClass:"button",on:{click:e.toggleTakeQuizPage}},[e._v("Take a quiz")]),e.showMakeQuiz?n("MakeQuizPage"):e._e(),e.showTakeQuiz?n("TakeQuizPage"):e._e()],1)},r=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome"},[n("h1",{staticClass:"title"},[e._v("Welcome to Quiz Me!")])])}],s={name:"Welcome",props:{msg:String}},c=s,l=n("2877"),f=Object(l["a"])(c,i,u,!1,null,"73458b6f",null),p=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"make"},[n("h1",{staticClass:"title"},[e._v("Create your own Quiz")]),n("h2",{staticClass:"questionInput"},[e._v("Please enter your question:")]),n("div",{attrs:{className:"form-group"}},[n("input",{attrs:{type:"text",placeholder:"Question",name:"question",value:"Question",o:""},on:{change:function(t){return e.setQuestion(t)}}})])])},g=[],d={name:"MakeQuizPage",props:{msg:String},method:{setQuestion:function(e){this.question=e.target.value}}},m=d,v=(n("ab0a"),Object(l["a"])(m,h,g,!1,null,"3a923a94",null)),b=v.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"take"},[n("h1",{staticClass:"title"},[e._v("Take a Quiz")])])}],w={name:"TakeQuizPage",props:{msg:String}},Q=w,z=Object(l["a"])(Q,k,_,!1,null,"5da639cf",null),P=z.exports,y={name:"App",components:{Welcome:p,MakeQuizPage:b,TakeQuizPage:P},data:function(){return{showMakeQuiz:!1,showTakeQuiz:!1}},methods:{toggleMakeQuizPage:function(){this.showMakeQuiz=!this.showMakeQuiz,this.showWelcomePage=!this.showWelcomePage},toggleTakeQuizPage:function(){this.showTakeQuiz=!this.showTakeQuiz,this.showWelcomePage=!this.showWelcomePage}}},M=y,O=(n("d195"),Object(l["a"])(M,o,r,!1,null,"df1e1414",null)),T=O.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(T)}}).$mount("#app")},"693f":function(e,t,n){},ab0a:function(e,t,n){"use strict";var a=n("b19b"),o=n.n(a);o.a},b19b:function(e,t,n){},d195:function(e,t,n){"use strict";var a=n("693f"),o=n.n(a);o.a}});
//# sourceMappingURL=app.76250507.js.map