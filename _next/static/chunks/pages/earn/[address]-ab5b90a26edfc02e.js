(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[563],{7285:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},9546:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(7285);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},6505:function(e,t,n){"use strict";var r=n(930);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=d,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294)),s=(o=n(8252))&&o.__esModule?o:{default:o},c=n(7285),u=n(523),l=n(9546);n(7206);function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,u=p.length;c<u;c++){var l=p[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var d=a.props[l],f=r[l]||new Set;"name"===l&&i||!f.has(d)?(f.add(d),r[l]=f):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}var m=function(e){var t=e.children,n=i.useContext(c.AmpStateContext),r=i.useContext(u.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:h,headManager:r,inAmpMode:l.isInAmpMode(n)},t)};t.default=m},8252:function(e,t,n){"use strict";var r=n(7980),a=n(3227),o=n(8361),i=(n(2191),n(5971)),s=n(2715),c=n(1193);function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(7294));var d=function(e){i(n,e);var t=u(n);function n(e){var o;return a(this,n),(o=t.call(this,e)).emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=d},6042:function(e,t,n){"use strict";n.r(t);var r=n(29),a=n(6835),o=n(5988),i=n.n(o),s=n(7794),c=n.n(s),u=n(1744),l=n(2593),d=n(9008),f=n(7294),p=n(6594),h=n(248),m=n(4571),x=n(5878),v=n(5893),b=function(e){var t,n=e.address,r=(0,p.v9)((function(e){return e.pools[n]})),a=null===(t=h.D.find((function(e){return e.address===n})))||void 0===t?void 0:t.name,o="".concat(a," - ").concat(h.iC),s=(0,v.jsxs)(d.default,{children:[(0,v.jsx)("title",{children:o}),(0,v.jsx)("meta",{name:"description",content:""}),(0,v.jsx)("link",{rel:"icon",href:"/favicon.ico"})]});return r?(0,v.jsxs)(m.T3,{children:[s,(0,v.jsx)(i(),{id:"1654377590",children:[".page>.section{max-width:300px;margin:10px auto;border:1px solid grey;border-radius:8px;text-align:center;padding:20px 0;}",".page>.section>h4{margin:0 0 10px;}",".page>.section table{margin:0 auto;}",".page>.section h3{text-align:center;}"]}),(0,v.jsx)("h1",{className:"jsx-1654377590",children:a}),(0,v.jsx)(m.s6,{pool:r,poolAddress:n}),(0,v.jsx)(g,{pool:r,poolAddress:n}),(0,v.jsx)(j,{pool:r,poolAddress:n}),(0,v.jsx)(y,{pool:r,poolAddress:n}),(0,v.jsx)(w,{pool:r,poolAddress:n}),(0,v.jsxs)("div",{className:"jsx-1654377590",children:["Pool address: ",(0,v.jsx)(m.GS,{address:n})]})]}):(0,v.jsx)(m.SX,{children:s})};function g(e){var t=e.pool,n=t.managerAddress,r=t.tokenAddress,o=t.tokenDecimals,s=e.poolAddress,c=(0,f.useState)(""),d=c[0],p=c[1],b=(0,h.yL)(),g=(0,h.mA)(),j=(0,x.tQ)(r,s,g),y=j.allowance,w=j.balance,O=j.refetch,M=(0,f.useRef)();(0,f.useEffect)((function(){"allowance"===d&&M.current!==y&&p(""),M.current=y}),[d,y]);var k=(0,f.useState)(!1),S=k[0],_=k[1];(0,f.useEffect)((function(){g&&_(!1)}),[g]);var A=(0,x.AM)(s),P=(0,a.Z)(A,2),C=P[0],D=P[1],E=(0,f.useRef)(C);(0,f.useEffect)((function(){"deposit"===d&&E.current!==C&&p(""),E.current=C}),[d,C]);var N=(0,f.useMemo)((function(){if(!C)return{max:null,cannotDeposit:!0};var e=l.O$.from(C),t=e.eq(h.bM);if(!w)return{max:null,cannotDeposit:t};var n=l.O$.from(w);return{max:n.gt(e)?e:n,cannotDeposit:t}}),[C,w]),L=N.max,W=N.cannotDeposit,z=(0,f.useState)(""),R=z[0],$=z[1],H=(0,f.useMemo)((function(){var e=R?(0,u.vz)(R,o):h.bM;return{value:null!==L&&void 0!==L&&L.lt(e)?(0,h.WU)((0,u.bM)(L,o)):R,needsApproval:!!y&&l.O$.from(y).lt(e)}}),[L,o,R,y]),I=H.value,J=H.needsApproval,T=(0,f.useCallback)((function(){$((0,h.WU)((0,u.bM)(L,o)))}),[L,o]),U=n===g,B=Boolean(U||W||d);return(0,v.jsxs)(m.xu,{s:!0,loading:Boolean(!(!g||W)&&(!y||!w)||void 0===C),overlay:U?"Manager can't deposit":W?"This pool doesn't accept deposits":void 0,children:[(0,v.jsx)(i(),{id:"544869747",children:[".title.jsx-544869747>h3.jsx-544869747{margin:0;font-weight:400;font-size:18px;text-align:center;}","form.jsx-544869747{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin:12px 0;}","form.jsx-544869747>.input-container.jsx-544869747{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-bottom:8px;}","form.jsx-544869747>.input-container.jsx-544869747>.max.jsx-544869747{text-align:right;font-size:12px;height:14px;line-height:14px;margin-bottom:2px;margin-right:4px;}","form.jsx-544869747>.input-container.jsx-544869747>.max.jsx-544869747>span.jsx-544869747{cursor:pointer;}"]}),(0,v.jsx)("div",{className:"jsx-544869747 title",children:(0,v.jsx)("h3",{className:"jsx-544869747",children:"Deposit"})}),(0,v.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),g){var t=b.getSigner();if(J)return p("allowance"),void(0,h.lN)(r).connect(t).approve(s,h.PM).then((function(e){return e.wait()})).then((function(){O()})).catch((function(e){console.error(e),p("")}));p("deposit"),x.LJ.attach(s).connect(t).deposit((0,u.vz)(I,o)).then((function(e){return e.wait()})).then((function(){D()})).catch((function(e){console.error(e),p("")}))}else _(!0)},className:"jsx-544869747",children:[(0,v.jsxs)("div",{className:"jsx-544869747 input-container",children:[(0,v.jsx)("div",{className:"jsx-544869747 max",children:L?(0,v.jsxs)("span",{onClick:T,className:"jsx-544869747",children:["Max: ",(0,h.WU)((0,u.bM)(L,o))]}):null}),(0,v.jsx)(m._Z,{decimals:6,disabled:B,value:I,onChange:$})]}),(0,v.jsx)(m.zx,{disabled:Boolean(B||!I&&g),type:"submit",width:170,loading:Boolean(d),children:g?J?"Approve USDC":"Deposit":"Connect Wallet"})]}),(0,v.jsx)(m.bZ,{style:"warning",title:"TODO: Explain the risks"}),S?(0,v.jsx)(m.Ot,{onClose:function(){return _(!1)}}):null]})}function j(e){var t=e.pool,n=t.managerAddress,a=t.tokenAddress,o=t.tokenDecimals,i=e.poolAddress,s=(0,f.useState)(!1),l=s[0],d=s[1],p=(0,f.useState)("100"),m=p[0],b=p[1],g=(0,h.mA)(),j=(0,h.yL)(),y=n===g,w=(0,f.useState)("0"),O=w[0],M=w[1],k=(0,f.useRef)(void 0);(0,f.useEffect)((function(){y||k.current!==g&&(k.current=g,g&&x.LJ.attach(i).balanceOf(g).then((function(e){M((0,u.bM)(e,o))})))}),[g,o,i,y]);var S=!g||!j||y||l,_=S?void 0:function(e){e.preventDefault(),d(!0);var t=(0,u.vz)(m,o),n=j.getSigner(),s=x.LJ.attach(i),l=(0,h.lN)(a);s.amountDepositable().then(function(){var e=(0,r.Z)(c().mark((function e(r){var a,f,p,m;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.gt(r)){e.next=4;break}return alert("Maximum depositable amount is ".concat((0,u.bM)(r,o))),d(!1),e.abrupt("return");case 4:return e.next=6,l.allowance(g,i);case 6:return a=e.sent,f=l.connect(n),e.next=10,f.balanceOf(g);case 10:if(!e.sent.lt(t)){e.next=15;break}return alert("USDC balance too low"),d(!1),e.abrupt("return");case 15:if(!t.gt(a)){e.next=21;break}return e.next=18,f.approve(i,h.PM);case 18:return p=e.sent,e.next=21,p.wait();case 21:return e.next=23,s.connect(n).deposit(t);case 23:return m=e.sent,e.next=26,m.wait();case 26:M((function(e){return(0,u.bM)((0,u.vz)(e,o).add(t),o)})),d(!1);case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return(0,v.jsxs)("form",{className:"section",onSubmit:_,children:[(0,v.jsx)("h4",{children:"Deposit"}),n&&g&&(y?(0,v.jsx)("div",{children:"Manager can not deposit"}):(0,v.jsxs)("div",{children:["You deposited ",O]})),(0,v.jsx)("input",{type:"number",inputMode:"decimal",onChange:function(e){b(e.target.value)},value:m}),(0,v.jsx)("button",{disabled:S,children:"Deposit"})]})}function y(e){var t=e.pool,n=t.managerAddress,a=t.tokenDecimals,o=e.poolAddress,i=(0,f.useState)(!1),s=i[0],l=i[1],d=(0,f.useState)("100"),p=d[0],m=d[1],b=(0,x.q4)(o),g=(0,h.mA)(),j=(0,h.yL)(),y=n===g,w=(0,f.useState)("0"),O=w[0],M=w[1];(0,f.useEffect)((function(){g&&x.LJ.attach(o).amountWithdrawable(g).then((function(e){M((0,u.bM)(e,a))}))}),[M,g,a,b,O,o]);var k=!g||!j||y||s,S=k?void 0:function(e){e.preventDefault(),l(!0);var t=(0,u.vz)(p,a),n=x.LJ.attach(o);n.amountWithdrawable(g).then(function(){var e=(0,r.Z)(c().mark((function e(r){var o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.gt(r)){e.next=4;break}return alert("Maximum withdrawable amount is ".concat((0,u.bM)(r,a))),l(!1),e.abrupt("return");case 4:return e.next=6,n.connect(j.getSigner()).withdraw(t);case 6:return o=e.sent,e.next=9,o.wait();case 9:l(!1),M((0,u.bM)((0,u.vz)(O,a).sub(t),a));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())};return(0,v.jsxs)("form",{className:"section",onSubmit:S,children:[(0,v.jsx)("h4",{children:"Withdraw"}),n&&g&&(y?(0,v.jsx)("div",{children:"Manager can not withdraw"}):(0,v.jsxs)("div",{children:["Maximum withdrawable:"," ",(0,v.jsx)("a",{onClick:function(){return m(O)},children:O})]})),(0,v.jsx)("input",{type:"number",inputMode:"decimal",onChange:function(e){m(e.target.value)},value:p}),(0,v.jsx)("button",{disabled:k,children:"Withdraw"})]})}function w(e){var t=e.pool.tokenDecimals,n=e.poolAddress,r=(0,f.useState)(!1),a=r[0],o=r[1],i=(0,f.useState)(null),s=i[0],c=i[1],d=(0,h.mA)(),p=(0,h.yL)();if((0,f.useEffect)((function(){d&&x.LJ.attach(n).protocolEarningsOf(d).then((function(e){e.gt(l.O$.from(0))&&c({amount:e,account:d})}))}),[d,c,n]),!s||!p)return null;var m=a?void 0:function(e){e.preventDefault(),o(!0),x.LJ.attach(n).connect(p.getSigner()).withdrawProtocolEarnings().then((function(e){return e.wait()})).then((function(){o(!1),c({account:d,amount:l.O$.from(0)})}))};return(0,v.jsxs)("form",{className:"section",onSubmit:m,children:[(0,v.jsx)("h4",{children:"Earnings"}),(0,v.jsxs)("div",{children:["Your earnings:"," ",s&&s.account===d&&(0,u.bM)(s.amount,t)]}),(0,v.jsx)("button",{disabled:a||(null===s||void 0===s?void 0:s.amount.lte(l.O$.from(0))),children:"Withdraw"})]})}b.getInitialProps=function(e){return{address:(0,h.Kn)(e.query.address)}},t.default=b},5193:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/earn/[address]",function(){return n(6042)}])},9008:function(e,t,n){e.exports=n(6505)}},function(e){e.O(0,[774,888,179],(function(){return t=5193,e(e.s=t);var t}));var t=e.O();_N_E=t}]);