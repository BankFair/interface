(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[328],{7285:function(e,n,t){"use strict";var a;Object.defineProperty(n,"__esModule",{value:!0}),n.AmpStateContext=void 0;var s=((a=t(7294))&&a.__esModule?a:{default:a}).default.createContext({});n.AmpStateContext=s},9546:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isInAmpMode=i,n.useAmp=function(){return i(s.default.useContext(r.AmpStateContext))};var a,s=(a=t(7294))&&a.__esModule?a:{default:a},r=t(7285);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.ampFirst,t=void 0!==n&&n,a=e.hybrid,s=void 0!==a&&a,r=e.hasQuery,i=void 0!==r&&r;return t||s&&i}},6505:function(e,n,t){"use strict";var a=t(930);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}Object.defineProperty(n,"__esModule",{value:!0}),n.defaultHead=u,n.default=void 0;var r,i=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};a.get||a.set?Object.defineProperty(n,t,a):n[t]=e[t]}return n.default=e,n}(t(7294)),l=(r=t(8252))&&r.__esModule?r:{default:r},o=t(7285),c=t(523),d=t(9546);t(7206);function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=[i.default.createElement("meta",{charSet:"utf-8"})];return e||n.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),n}function m(e,n){return"string"===typeof n||"number"===typeof n?e:n.type===i.default.Fragment?e.concat(i.default.Children.toArray(n.props.children).reduce((function(e,n){return"string"===typeof n||"number"===typeof n?e:e.concat(n)}),[])):e.concat(n)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,n){return e.reduce((function(e,n){var t=i.default.Children.toArray(n.props.children);return e.concat(t)}),[]).reduce(m,[]).reverse().concat(u(n.inAmpMode)).filter(function(){var e=new Set,n=new Set,t=new Set,a={};return function(s){var r=!0,i=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){i=!0;var l=s.key.slice(s.key.indexOf("$")+1);e.has(l)?r=!1:e.add(l)}switch(s.type){case"title":case"base":n.has(s.type)?r=!1:n.add(s.type);break;case"meta":for(var o=0,c=f.length;o<c;o++){var d=f[o];if(s.props.hasOwnProperty(d))if("charSet"===d)t.has(d)?r=!1:t.add(d);else{var u=s.props[d],m=a[d]||new Set;"name"===d&&i||!m.has(u)?(m.add(u),a[d]=m):r=!1}}}return r}}()).reverse().map((function(e,t){var r=e.key||t;if(!n.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(n){return e.props.href.startsWith(n)}))){var l=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e.props||{});return l["data-href"]=l.href,l.href=void 0,l["data-optimized-fonts"]=!0,i.default.cloneElement(e,l)}return i.default.cloneElement(e,{key:r})}))}var h=function(e){var n=e.children,t=i.useContext(o.AmpStateContext),a=i.useContext(c.HeadManagerContext);return i.default.createElement(l.default,{reduceComponentsToState:p,headManager:a,inAmpMode:d.isInAmpMode(t)},n)};n.default=h},8252:function(e,n,t){"use strict";var a=t(7980),s=t(3227),r=t(8361),i=(t(2191),t(5971)),l=t(2715),o=t(1193);function c(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=o(e);if(n){var s=o(this).constructor;t=Reflect.construct(a,arguments,s)}else t=a.apply(this,arguments);return l(this,t)}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var d=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,t):{};a.get||a.set?Object.defineProperty(n,t,a):n[t]=e[t]}return n.default=e,n}(t(7294));var u=function(e){i(t,e);var n=c(t);function t(e){var r;return s(this,t),(r=n.call(this,e)).emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(a(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),t}(d.Component);n.default=u},2020:function(e,n,t){"use strict";t.r(n);var a=t(9499),s=t(6835),r=t(29),i=t(5988),l=t.n(i),o=t(7794),c=t.n(o),d=t(1744),u=t(2593),m=t(9008),f=t(7294),p=t(9310),h=t(5462),x=t(2563),y=t(6594),j=t(5893);function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return N(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return N(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var a=0,s=function(){};return{s:s,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,r=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw r}}}}function N(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}var S="Borrow - ".concat(p.iC),M=function(e){var n,t=e.address,a=(0,p.mA)(),i=(0,p.yL)(),l=(0,y.I0)(),o=(0,y.v9)((function(e){return e.pools[t]})),d=null===(n=p.Q$.find((function(e){return e.address===t})))||void 0===n?void 0:n.name,u=(0,j.jsxs)(m.default,{children:[(0,j.jsx)("title",{children:S}),(0,j.jsx)("link",{rel:"icon",href:"".concat(p.O4,"/favicon.svg")})]}),v=function(e,n,t){var a=(0,f.useState)(),i=a[0],l=a[1],o=(0,f.useRef)();return(0,f.useEffect)((function(){if(e&&t&&n&&e!==o.current){o.current=e;for(var a=x.Ed.attach(t.loanDeskAddress),i=p.Kj===p.p5.mumbai?40:20,d=1;d<=i;d++)a.loanApplications(d).then(function(){var n=(0,r.Z)(c().mark((function n(r){var i,o,d,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.borrower===e){n.next=2;break}return n.abrupt("return");case 2:if(r.status===x.WR.OFFER_MADE){n.next=5;break}return l(null),n.abrupt("return");case 5:return n.next=7,Promise.all([a.loanOffers(r.id),(0,p.rY)(r.id.toNumber()).then((function(e){return e||fetch("".concat(p.g9,"/profile/").concat(r.profileId)).then((function(e){return e.json()})).then((function(e){return(0,p.wQ)(r.id.toNumber(),e),e}))}))]);case 7:i=n.sent,o=(0,s.Z)(i,2),d=o[0],u=o[1],l({details:d,account:e,loanDeskAddress:t.loanDeskAddress,contactDetails:u||{}});case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()).catch((function(e){console.error(e)}))}}),[e,t,n]),i}(a,i,o),b=(0,x.q4)(t,a),g=(0,f.useMemo)((function(){return b.filter((function(e){return e.status===x.kK.OUTSTANDING}))}),[b]);return(0,x.NQ)(t,a,l,o),o?(0,j.jsxs)(h.T3,{children:[u,(0,j.jsx)(h.VB,{href:"/borrow"}),(0,j.jsx)("h1",{children:d}),(0,j.jsx)(w,{pool:o,poolAddress:t,account:a,loans:b}),(0,j.jsx)(_,{pool:o,poolAddress:t,account:a,offer:v}),v||g.length?null:(0,j.jsx)(O,{pool:o,poolAddress:t,account:a})]}):(0,j.jsx)(h.SX,{children:u})};function _(e){var n,t,a,s,i=e.pool,o=i.loanDeskAddress,d=i.liquidityTokenDecimals,m=(i.block,e.poolAddress),v=e.account,b=e.offer,N=(0,p.yL)(),S=(0,y.I0)(),M=(0,f.useState)(!1),_=M[0],w=M[1],L=(0,f.useState)(!1),O=L[0],A=L[1],k=(0,f.useState)(!1),D=k[0],B=k[1],P=(0,f.useState)(1),C=P[0],G=P[1],I=(0,f.useMemo)((function(){if(!b)return[!1,null];var e=b.details,n=e.amount,t=e.apr,a=e.duration,s=e.installments,r=e.installmentAmount,i=Math.trunc(Date.now()/1e3),l=a.toNumber();return[l%p.L$===0&&s===l/p.L$,{amount:n,apr:(0,p.bc)(t),installments:s,installmentAmount:r,duration:l,borrowedTime:i,details:{baseAmountRepaid:p.wL,totalAmountRepaid:p.wL,interestPaid:p.wL,interestPaidUntil:i}}]}),[b]),E=I[0],R=I[1],F=(0,x.lr)(R);return b&&b.account===v&&b.loanDeskAddress===o?(B(null!==(n=null===(t=b.contactDetails)||void 0===t?void 0:t.isLocalCurrencyLoan)&&void 0!==n&&n),G(null!==(a=b.contactDetails)&&void 0!==a&&a.isLocalCurrencyLoan?3800:1),(0,j.jsxs)(h.xu,{className:"loan-offer",overlay:O?(0,j.jsx)("h2",{className:l().dynamic([["1430375520",[p.G9,p.LM]]]),children:"Funds withdrawn!"}):null,children:[(0,j.jsx)("h3",{className:l().dynamic([["1430375520",[p.G9,p.LM]]]),children:"Offer Received"}),(0,j.jsxs)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" field",children:[(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" label",children:"Amount"}),(0,j.jsxs)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]]),children:[D?(0,j.jsxs)(j.Fragment,{children:[(0,p.nx)(b.details.amount.mul(C),d,2,!0)," ","UGX"," ","("]}):null,(0,p.nx)(b.details.amount,d)," ",p.ob,D?(0,j.jsx)(j.Fragment,{children:")"}):null]})]}),(0,j.jsxs)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" field",children:[(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" label",children:"Installment amount"}),(0,j.jsxs)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]]),children:[D?(0,j.jsxs)(j.Fragment,{children:[(0,p.nx)(b.details.amount.mul(C),d,2,!0)," ","UGX"," ","("]}):null,(0,p.nx)(b.details.installmentAmount,d,2,!0)," ",p.ob,D?(0,j.jsx)(j.Fragment,{children:")"}):null]})]}),(0,j.jsxs)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" field",children:[(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" label",children:"Installments"}),(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]]),children:b.details.installments})]}),(0,j.jsxs)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" field",children:[(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" label",children:"Duration"}),(0,j.jsxs)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]]),children:[b.details.duration.toNumber()/p.L$," months"]})]}),(0,j.jsxs)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" field",children:[(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" label",children:"Interest APR"}),(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]]),children:(0,p.T3)(b.details.apr/1e3)})]}),(0,j.jsxs)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" field",children:[(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" label",children:"Grace Default Period"}),(0,j.jsxs)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]]),children:[b.details.gracePeriod.toNumber()/p.u3," days"]})]}),(0,j.jsxs)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" field",children:[(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" label",children:"Name"}),(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]]),children:b.contactDetails.name})]}),(0,j.jsxs)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" field",children:[(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" label",children:"Business Name"}),(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]]),children:b.contactDetails.businessName})]}),b.contactDetails.phone?(0,j.jsxs)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" field",children:[(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" label",children:"Phone"}),(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]]),children:(0,j.jsx)("a",{href:"tel:".concat(b.contactDetails.phone),className:l().dynamic([["1430375520",[p.G9,p.LM]]]),children:b.contactDetails.phone})})]}):null,b.contactDetails.email?(0,j.jsxs)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" field",children:[(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" label",children:"Email"}),(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]]),children:(0,j.jsx)("a",{href:"mailto:".concat(b.contactDetails.email),className:l().dynamic([["1430375520",[p.G9,p.LM]]]),children:b.contactDetails.email})})]}):null,(0,j.jsxs)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" schedule-container",children:[(0,j.jsx)(h.JJ,{amount:b.details.amount,monthly:E,schedule:F,liquidityTokenDecimals:d,isLocalCurrencyLoan:null!==(s=b.contactDetails.isLocalCurrencyLoan)&&void 0!==s&&s,fxRate:b.contactDetails.isLocalCurrencyLoan?3800:1}),(0,j.jsx)("div",{className:l().dynamic([["1430375520",[p.G9,p.LM]]])+" schedule-notice",children:"If the details above are incorrect do not proceed. Contact the pool manager to update the offer."})]}),(0,j.jsx)(h.zx,{disabled:O||_,loading:_,type:"submit",onClick:(0,r.Z)(c().mark((function e(){var n,t,a,s,r,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.prev=1,e.next=4,x.LJ.attach(m).connect(N.getSigner()).borrow(b.details.applicationId);case 4:return n=e.sent,e.next=7,(0,x.y5)(S,{tx:n,name:"Accept loan & withdraw"});case 7:t=e.sent,a=t.payload.receipt,s=g(a.events||[]),e.prev=10,s.s();case 12:if((r=s.n()).done){e.next=19;break}if((i=r.value).eventSignature!==x.X$){e.next=17;break}return e.next=17,S((0,x.vy)({poolAddress:m,loanId:u.O$.from(i.args.array[0])}));case 17:e.next=12;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(10),s.e(e.t0);case 24:return e.prev=24,s.f(),e.finish(24);case 27:A(!0),e.next=33;break;case 30:e.prev=30,e.t1=e.catch(1),console.error(e.t1);case 33:w(!1);case 34:case"end":return e.stop()}}),e,null,[[1,30],[10,21,24,27]])}))),children:"Accept Loan & Withdraw Funds"}),(0,j.jsx)(l(),{id:"1430375520",dynamic:[p.G9,p.LM],children:[".loan-offer>button{margin-top:16px;}",".loan-offer>h3{margin-top:0;}",".field.__jsx-style-dynamic-selector{margin-top:16px;}",".field.__jsx-style-dynamic-selector>.label.__jsx-style-dynamic-selector{color:var(--color-secondary);font-weight:400;margin-bottom:8px;}",".schedule-container.__jsx-style-dynamic-selector{color:".concat(p.G9,";background-color:").concat(p.LM,";margin-top:16px;padding:12px 16px;border-radius:8px;font-weight:600;}"),".schedule-container.__jsx-style-dynamic-selector>.schedule-notice.__jsx-style-dynamic-selector{margin-top:16px;}"]})]})):null}function w(e){var n=e.pool,t=e.poolAddress,a=e.account,s=e.loans,r=(0,p.yL)(),i=(0,y.I0)();return s.sort((function(e,n){return n.id-e.id})).map((function(e){return(0,j.jsx)(L,{pool:n,poolAddress:t,loan:e,provider:r,dispatch:i,account:a},e.id)}))}function L(e){var n=e.pool,t=n.liquidityTokenAddress,a=n.liquidityTokenDecimals,s=n.loanDeskAddress,r=e.poolAddress,i=e.loan,o=e.provider,c=e.dispatch,m=e.account,y=(0,f.useState)(""),v=y[0],g=y[1],N=(0,f.useState)(!1),S=N[0],M=N[1],_=(0,f.useState)(1),w=_[0],L=_[1],O=(0,p.NH)(i.amount,i.details.baseAmountRepaid,i.details.interestPaidUntil,i.apr),A=(0,f.useMemo)((function(){return u.O$.from(i.details.totalAmountRepaid)}),[i]),k=(0,x.tQ)(t,r,m),D=k.allowance,B=k.refetch,P=(0,f.useMemo)((function(){if(!D)return!1;var e=u.O$.from(D);return e.eq(p.bM)||e.lt(v?(0,d.vz)(v,a):p.bM)}),[D,v,a]),C=(0,f.useState)(null),G=C[0],I=C[1],E=G&&G.applicationId===i.applicationId?G:null;(0,f.useEffect)((function(){x.Ed.attach(s).loanApplications(i.applicationId).then((function(e){var n=e.profileId;return(0,p.rY)(i.applicationId).then((function(e){return e?{info:e,profileId:n}:fetch("".concat(p.g9,"/profile/").concat(n)).then((function(e){return e.json()})).then((function(e){var t;return(0,p.wQ)(i.applicationId,e),M(null!==(t=null===e||void 0===e?void 0:e.isLocalCurrencyLoan)&&void 0!==t&&t),L(S?3800:1),{info:e,profileId:n}}))}))})).then((function(e){var n=e.info,t=e.profileId;return I(b(b({},n),{},{profileId:t,applicationId:i.applicationId}))}))}),[i,s,o]);var R=(0,f.useState)(!1),F=R[0],T=R[1],$=(0,f.useCallback)((function(e){e.preventDefault(),T(!0);var n=o.getSigner(),s=(0,d.vz)(v,a);P?(0,p.lN)(t).connect(n).approve(r,s).then((function(e){return(0,x.y5)(c,{name:"Step 1 of 2 \u279c Approve ".concat(p.ob),tx:e})})).then((function(){return B()})).then((function(){T(!1)})).catch((function(e){console.error(e),T(!1)})):x.LJ.connect(n).attach(r).repay(u.O$.from(i.id),s).then((function(e){return(0,x.y5)(c,{tx:e,name:"Repay loan"})})).then((function(){return c((0,x.vy)({poolAddress:r,loanId:i.id}))})).then((function(){T(!1),g("")})).catch((function(e){console.error(e)}))}),[o,P,r,i,v,a,t,c,B]),q=i.status===x.kK.REPAID,z=(0,x.lr)(q?null:i),U=Number(v)>0;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(h.xu,{children:[(0,j.jsx)("h2",{className:l().dynamic([["3881781575",[p.SB]]]),children:"Loan Status"}),(0,j.jsx)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" stats",children:(0,j.jsxs)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" stat",children:[(0,j.jsx)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" label",children:"Outstanding"}),(0,j.jsxs)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" value",children:[S?(0,j.jsxs)(j.Fragment,{children:[(0,p.nx)(O.mul(w),a,2,!0)," ","UGX"," ","("]}):null,(0,p.nx)(O,a,2,!0)," ",p.ob,S?(0,j.jsx)(j.Fragment,{children:")"}):null]})]})})]}),(0,j.jsxs)("form",{onSubmit:$,className:l().dynamic([["3881781575",[p.SB]]])+" main",children:[(0,j.jsxs)(h.xu,{className:"repay",overlay:i.status===x.kK.REPAID?"Loan fully repaid":void 0,children:[(0,j.jsx)("h2",{className:l().dynamic([["3881781575",[p.SB]]]),children:"Repay Loan"}),(0,j.jsx)(h._Z,{decimals:a,value:v,onChange:g}),(0,j.jsx)(h.zx,{type:"submit",loading:F,disabled:!U||F,children:P&&U?"Step 1 of 2 \u279c Approve ".concat(p.ob):U&&!F?"Final Step \u279c Repay":"Repay"}),(0,j.jsx)(h.bZ,{style:"warning",title:"Late payments will affect your on chain credit rating"})]}),(0,j.jsxs)(h.xu,{className:"details",children:[(0,j.jsx)("h3",{className:l().dynamic([["3881781575",[p.SB]]]),children:"Loan Contract Details"}),(0,j.jsxs)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" field",children:[(0,j.jsx)("span",{className:l().dynamic([["3881781575",[p.SB]]])+" label",children:"Initial loan amount:"})," ",S?(0,j.jsxs)(j.Fragment,{children:[(0,p.nx)(u.O$.from(i.amount).mul(w),a,2,!0)," ","UGX"," ","("]}):null,(0,p.nx)(i.amount,a,2,!0)," ",p.ob,S?(0,j.jsx)(j.Fragment,{children:")"}):null]}),(0,j.jsxs)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" field",children:[(0,j.jsx)("span",{className:l().dynamic([["3881781575",[p.SB]]])+" label",children:"Repaid:"})," ",S?(0,j.jsxs)(j.Fragment,{children:[(0,p.nx)(A.mul(w),a,2,!0)," ","UGX"," ","("]}):null,(0,p.nx)(A,a,2,!0)," ",p.ob,S?(0,j.jsx)(j.Fragment,{children:")"}):null]}),(0,j.jsxs)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" field",children:[(0,j.jsx)("span",{className:l().dynamic([["3881781575",[p.SB]]])+" label",children:"Total interest paid:"})," ",S?(0,j.jsxs)(j.Fragment,{children:[(0,p.nx)(u.O$.from(i.details.interestPaid).mul(w),a,2,!0)," ","UGX"," ","("]}):null,(0,p.nx)(i.details.interestPaid,a,2,!0)," ",p.ob,S?(0,j.jsx)(j.Fragment,{children:")"}):null]}),(0,j.jsxs)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" field",children:[(0,j.jsx)("span",{className:l().dynamic([["3881781575",[p.SB]]])+" label",children:"Duration:"})," ",i.duration/p.L$," months"]}),(0,j.jsxs)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" field",children:[(0,j.jsx)("span",{className:l().dynamic([["3881781575",[p.SB]]])+" label",children:"Interest APR:"})," ",(0,p.T3)(i.apr/100)]}),(0,j.jsxs)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" field",children:[(0,j.jsx)("span",{className:l().dynamic([["3881781575",[p.SB]]])+" label",children:"Grace default period:"})," ",i.gracePeriod/p.u3," days"]}),(0,j.jsxs)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" field",children:[(0,j.jsx)("span",{className:l().dynamic([["3881781575",[p.SB]]])+" label",children:"Name:"})," ",null===E||void 0===E?void 0:E.name]}),(0,j.jsxs)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" field",children:[(0,j.jsx)("span",{className:l().dynamic([["3881781575",[p.SB]]])+" label",children:"Business name:"})," ",null===E||void 0===E?void 0:E.businessName]}),null!==E&&void 0!==E&&E.phone?(0,j.jsxs)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" field",children:[(0,j.jsx)("span",{className:l().dynamic([["3881781575",[p.SB]]])+" label",children:"Phone:"})," ",(0,j.jsx)("a",{href:"tel:".concat(E.phone),className:l().dynamic([["3881781575",[p.SB]]]),children:E.phone})]}):null,null!==E&&void 0!==E&&E.email?(0,j.jsxs)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" field",children:[(0,j.jsx)("span",{className:l().dynamic([["3881781575",[p.SB]]])+" label",children:"Email:"})," ",(0,j.jsx)("a",{href:"mailto:".concat(E.email),className:l().dynamic([["3881781575",[p.SB]]]),children:E.email})]}):null]})]}),q?null:(0,j.jsxs)(h.xu,{children:[(0,j.jsx)("h3",{className:l().dynamic([["3881781575",[p.SB]]]),children:"Future Re-Payments Due"}),(0,j.jsxs)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" schedule",children:[(0,j.jsx)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" label",children:"Due"}),(0,j.jsx)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" label",children:"Amount"}),z.map((function(e,n){return e.skip?null:(0,j.jsxs)(f.Fragment,{children:[(0,j.jsxs)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" "+((e.overdue?"red":"")||""),children:[e.date,e.overdue?(0,j.jsx)("strong",{className:l().dynamic([["3881781575",[p.SB]]]),children:" OVERDUE"}):null]}),(0,j.jsxs)("div",{className:l().dynamic([["3881781575",[p.SB]]])+" "+((e.overdue?"red":"")||""),children:[S?(0,j.jsxs)(j.Fragment,{children:[(0,p.nx)(e.amount.mul(w),a,2,!0)," ","UGX"," ","("]}):null,(0,p.nx)(e.amount,a,2,!0)," ",p.ob,S?(0,j.jsx)(j.Fragment,{children:")"}):null]})]},n)}))]})]}),(0,j.jsx)(l(),{id:"3881781575",dynamic:[p.SB],children:["h2.__jsx-style-dynamic-selector,h3.__jsx-style-dynamic-selector{margin-top:0;margin-bottom:16px;}",".stats.__jsx-style-dynamic-selector>.stat.__jsx-style-dynamic-selector>.label.__jsx-style-dynamic-selector{color:var(--color-secondary);font-weight:400;margin-bottom:8px;}",".stats.__jsx-style-dynamic-selector>.stat.__jsx-style-dynamic-selector>.value.__jsx-style-dynamic-selector{font-weight:700;font-size:24px;}",".main.__jsx-style-dynamic-selector>.repay button{margin-top:8px;margin-bottom:16px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".details>.field.__jsx-style-dynamic-selector{margin-top:8px;}",".details>.field.__jsx-style-dynamic-selector>.label.__jsx-style-dynamic-selector{color:var(--color-secondary);font-weight:400;margin-bottom:8px;}",".schedule.__jsx-style-dynamic-selector{display:grid;grid-template-columns:minmax(auto,max-content) auto;row-gap:8px;-webkit-column-gap:16px;column-gap:16px;}",".schedule.__jsx-style-dynamic-selector>.label.__jsx-style-dynamic-selector{color:var(--color-secondary);}",".schedule.__jsx-style-dynamic-selector>.red.__jsx-style-dynamic-selector{color:".concat(p.SB,";}"),"@media screen and (min-width:1000px){.main.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.main.__jsx-style-dynamic-selector>.box{-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;margin:0;}.main.__jsx-style-dynamic-selector>.box:first-child{margin-right:8px;}.main.__jsx-style-dynamic-selector>.box:last-child{margin-left:8px;}}"]})]})}M.getInitialProps=function(e){return{address:(0,p.Kn)(e.query.address)}},n.default=M;function O(e){var n=e.pool,t=n.managerAddress,a=n.loanDeskAddress,s=n.liquidityTokenDecimals,r=e.poolAddress,i=e.account,o=(0,p.yL)(),c=(0,y.I0)(),m=(0,f.useState)(!1),v=m[0],b=m[1];(0,f.useEffect)((function(){i&&b(!1)}),[i]);var g=(0,f.useState)(!1),N=g[0],S=g[1],M=(0,f.useState)(!1),_=M[0],w=M[1],L=(0,f.useState)(null),O=L[0],k=L[1],D=(0,f.useRef)();(0,f.useEffect)((function(){i!==D.current&&(D.current=i,i&&x.Ed.attach(a).borrowerStats(i).then((function(e){var n=e.hasOpenApplication;k({hasOpenApplication:n,account:i,loanDeskAddress:a})})).catch((function(e){console.error(e)})))}),[i,a,o]);var B=O&&O.hasOpenApplication&&O.account===i&&a===O.loanDeskAddress,P=(0,x.E3)(r,a),C=(0,f.useState)(""),G=C[0],I=C[1],E=(0,f.useState)(""),R=E[0],F=E[1],T=(0,f.useState)(""),$=T[0],q=T[1],z=(0,f.useState)(""),U=z[0],Z=z[1],X=(0,f.useState)(""),H=X[0],J=X[1],K=(0,f.useState)(""),Q=K[0],W=K[1],V=(0,f.useState)(""),Y=V[0],ee=V[1],ne=p.L$,te=(0,f.useMemo)((function(){if(!P)return{invalidAmountMessage:"",invalidAmountLocalMessage:"",invalidDurationMessage:""};var e=Number(Y)*Number(ne),n=e<P.minLoanDuration,t=e>P.maxLoanDuration,a=(0,p.BJ)(H,s,P.minLoanAmount);(0,p.BJ)(Q,s,u.O$.from(P.minLoanAmount).mul(p.gM));return{invalidAmountMessage:a?"":"Minimum amount is ".concat((0,p.nx)(u.O$.from(P.minLoanAmount),s)),invalidAmountLocalMessage:a?"":"Minimum amount is ".concat((0,p.nx)(u.O$.from(P.minLoanAmount).mul(p.gM),s)),invalidDurationMessage:n?"Minimum duration is ".concat(P.minLoanDuration/p.u3," day"):t?"Maximum duration is ".concat(P.maxLoanDuration/p.eV," years"):""}}),[P,Y,ne,s,H]),ae=te.invalidAmountLocalMessage,se=te.invalidAmountMessage,re=te.invalidDurationMessage,ie=(0,f.useState)(!1),le=ie[0],oe=ie[1],ce=!A(G),de=(0,f.useState)(!1),ue=de[0],me=de[1],fe=!A(R),pe=(0,f.useState)(!1),he=pe[0],xe=pe[1],ye=(0,f.useState)(!1),je=ye[0],ve=ye[1],be=!A(U)&&!A($),ge=(0,f.useState)(!1),Ne=ge[0],Se=ge[1],Me=(0,f.useState)(!1),_e=(Me[0],Me[1],(0,f.useState)(!1)),we=_e[0],Le=_e[1],Oe=(0,f.useState)(!1),Ae=Oe[0],ke=Oe[1],De=t===i,Be=!P||Boolean(i&&!O),Pe=De||Be,Ce=Boolean(N||Pe||!Q||!H||ce||fe||be||Ne||se||ae||re||B||_),Ge=(0,f.useState)(null),Ie=Ge[0],Ee=Ge[1],Re=(0,f.useState)(!1),Fe=Re[0],Te=Re[1],$e=(0,f.useCallback)((function(e){if(e.preventDefault(),i){if(!Ce){S(!0);var n=(0,d.vz)(H,s),t=u.O$.from(Number(Y)*Number(ne));o.getSigner().signMessage("My name is ".concat(G.trim(),".\nMy business name is ").concat(R.trim(),".").concat($?"\nMy phone is ".concat($.trim(),"."):"").concat(U?"\nMy email is ".concat(U.trim(),"."):"")).then((function(e){return fetch("".concat(p.g9,"/profile"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:G,businessName:R,phone:$,email:U,walletSignature:e,walletAddress:i.toLowerCase(),poolAddress:r})})})).then((function(e){return e.json()})).then((function(e){var a=e.id,s=e.digest;return Ee({parsedAmount:n,parsedDuration:t,id:a,digest:s,name:G,businessName:R,phone:$,email:U})})).catch((function(e){console.error(e),S(!1)}))}}else b(!0)}),[i,Ce,H,s,Y,ne,o,G,R,$,U,r]);return(0,j.jsxs)(h.xu,{loading:Be,overlay:i?De?"Manager can't request a loan":B?"A loan application you requested is pending approval":_?(0,j.jsxs)("div",{className:"jsx-1483254474",children:[(0,j.jsx)("h2",{className:"jsx-1483254474",children:"Thank you for applying!"}),(0,j.jsx)("h2",{className:"jsx-1483254474",children:"The pool manager will be in touch shortly."})]}):void 0:(0,j.jsx)(h.zx,{type:"button",onClick:function(){return b(!0)},children:"Connect Wallet"}),children:[(0,j.jsx)(l(),{id:"1483254474",children:["form.jsx-1483254474>h3.jsx-1483254474{z-index:5;position:relative;margin:0;}","form.jsx-1483254474>label.jsx-1483254474{display:block;margin-top:16px;}","form.jsx-1483254474>label.jsx-1483254474>.label.jsx-1483254474{color:var(--color-secondary);font-weight:400;margin-bottom:8px;}","form.jsx-1483254474>label.jsx-1483254474>input.jsx-1483254474{display:block;}","form.jsx-1483254474>label.jsx-1483254474>.alert{margin-top:8px;}","form.jsx-1483254474>.alert-positioner.jsx-1483254474{margin-top:16px;}","form.jsx-1483254474>.alert-positioner.jsx-1483254474>.alert{width:100%;}","form.jsx-1483254474>.button-container.jsx-1483254474{margin-top:16px;position:relative;display:table;}","form.jsx-1483254474>.button-container.jsx-1483254474>.clickable.jsx-1483254474{position:absolute;top:0;left:0;width:100%;height:100%;cursor:not-allowed;}","@media screen and (min-width:800px){form.jsx-1483254474 .info.jsx-1483254474>.item.jsx-1483254474{-webkit-flex-basis:60%;-ms-flex-preferred-size:60%;flex-basis:60%;}form.jsx-1483254474 .info.jsx-1483254474>.item.jsx-1483254474:first-child{-webkit-flex-basis:25%;-ms-flex-preferred-size:25%;flex-basis:25%;}}"]}),(0,j.jsxs)("form",{onSubmit:$e,className:"jsx-1483254474",children:[(0,j.jsx)("h3",{className:"jsx-1483254474",children:"Apply For a Loan"}),(0,j.jsxs)("label",{className:"jsx-1483254474",children:[(0,j.jsx)("div",{className:"jsx-1483254474 label",children:"Account"}),(0,j.jsx)("input",{type:"text",required:Boolean(i),disabled:!0,value:i?(0,p.Xn)(i):"",className:"jsx-1483254474"})]}),(0,j.jsxs)("label",{className:"jsx-1483254474",children:[(0,j.jsx)("div",{className:"jsx-1483254474 label",children:"Name"}),(0,j.jsx)("input",{type:"text",required:Boolean(i),placeholder:"John Smith",value:G,onChange:function(e){return I(e.target.value)},onBlur:function(){return oe(!0)},className:"jsx-1483254474 "+((le&&ce?"invalid":"")||"")}),le&&ce?(0,j.jsx)(h.bZ,{style:"error",title:"Please enter your name"}):null]}),(0,j.jsxs)("label",{className:"jsx-1483254474",children:[(0,j.jsx)("div",{className:"jsx-1483254474 label",children:"Business Name"}),(0,j.jsx)("input",{type:"text",required:Boolean(i),placeholder:"Green LLC",value:R,onChange:function(e){return F(e.target.value)},onBlur:function(){return me(!0)},className:"jsx-1483254474 "+((ue&&fe?"invalid":"")||"")}),ue&&fe?(0,j.jsx)(h.bZ,{style:"error",title:"Please enter your business name"}):null]}),(0,j.jsxs)("label",{className:"jsx-1483254474",children:[(0,j.jsx)("div",{className:"jsx-1483254474 label",children:"Phone"}),(0,j.jsx)("input",{type:"tel",placeholder:"+1 (555) 343-3411",value:$,onChange:function(e){return q(e.target.value)},onBlur:function(){return xe(!0)},className:"jsx-1483254474 "+((he&&je&&be?"invalid":"")||"")})]}),(0,j.jsxs)("label",{className:"jsx-1483254474",children:[(0,j.jsx)("div",{className:"jsx-1483254474 label",children:"Email"}),(0,j.jsx)("input",{type:"email",placeholder:"johnsmith@gmail.com",value:U,onChange:function(e){var n=e.target.value;Z(n),Se(Boolean(n&&!e.target.checkValidity()))},onBlur:function(){return ve(!0)},className:"jsx-1483254474 "+((he&&je&&(be||Ne)?"invalid":"")||"")}),he&&je?be?(0,j.jsx)(h.bZ,{style:"error",title:"Please enter an email or phone number"}):Ne?(0,j.jsx)(h.bZ,{style:"error",title:"Invalid email"}):null:null]}),(0,j.jsxs)("label",{className:"jsx-1483254474",children:[(0,j.jsx)("div",{className:"jsx-1483254474 label",children:"Amount"}),(0,j.jsx)(h._Z,{invalid:we&&Boolean(se),decimals:2,value:H,onChange:function(e){J(e);var n=e&&e.trim().length>=1?Number(e):0;W((n*p.gM).toFixed(2))},disabled:Pe,onBlur:function(){return Le(!0)},onKeyDown:function(e){return"Enter"===e.key?Le(!0):void 0}}),we&&se?(0,j.jsx)(h.bZ,{style:"error",title:se}):null]}),(0,j.jsxs)("label",{className:"jsx-1483254474",children:[(0,j.jsx)("div",{className:"jsx-1483254474 label",children:"Duration"}),(0,j.jsx)(h._Z,{decimals:4,value:Y,onChange:ee,invalid:Ae&&Boolean(re),onBlur:function(){return ke(!0)},disabled:Pe,noToken:!0,label:"months",paddingRight:60,onKeyDown:function(e){return"Enter"===e.key?ke(!0):void 0}}),Ae&&re?(0,j.jsx)(h.bZ,{style:"error",title:re}):null]}),(0,j.jsxs)("div",{className:"jsx-1483254474 button-container",children:[(0,j.jsx)(h.zx,{type:"submit",disabled:Ce,loading:N,children:"Request Loan"}),i&&Ce?(0,j.jsx)("div",{onClick:function(){oe(!0),me(!0),xe(!0),ve(!0),Le(!0),ke(!0)},className:"jsx-1483254474 clickable"}):null]})]}),v?(0,j.jsx)(h.Ot,{onClose:function(){return b(!1)}}):null,!!Ie&&(0,j.jsxs)(h.u_,{onClose:function(){Te(!1),S(!1),Ee(null)},children:[(0,j.jsx)("p",{style:{textAlign:"center"},className:"jsx-1483254474",children:"Signature accepted. Press submit request to continue."}),(0,j.jsx)(h.zx,{type:"button",loading:Fe,disabled:Fe,style:{display:"flex",margin:"0 auto 20px"},onClick:function(){Te(!0),x.Ed.attach(a).connect(o.getSigner()).requestLoan(Ie.parsedAmount,Ie.parsedDuration,Ie.id,Ie.digest).then((function(e){return(0,x.y5)(c,{name:"Request loan for ".concat(H," ").concat(p.ob),tx:e})})).then((function(e){var n;w(!0),S(!1),Ee(null),Te(!1);var t=null===(n=e.payload.receipt.events)||void 0===n?void 0:n[0];"LoanRequested(uint256,address)"===(null===t||void 0===t?void 0:t.eventSignature)&&(0,p.wQ)(u.O$.from(t.args.array[0]).toNumber(),{name:Ie.name,businessName:Ie.businessName,phone:Ie.phone,email:Ie.email})})).catch((function(e){console.error(e),Te(!1)}))},children:"Submit Request"})]})]})}function A(e){return Boolean(e.trim())}},4713:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/borrow/[address]",function(){return t(2020)}])},9008:function(e,n,t){e.exports=t(6505)}},function(e){e.O(0,[774,888,179],(function(){return n=4713,e(e.s=n);var n}));var n=e.O();_N_E=n}]);