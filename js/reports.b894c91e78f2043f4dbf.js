(window.webpackJsonp=window.webpackJsonp||[]).push([["reports"],{583:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(0),i=n.n(o),c=n(147),s=c.b.div({enter:{y:0,opacity:1,transition:{y:{type:"spring",stiffness:500,damping:15},default:{duration:300}}},exit:{y:35,opacity:0,transition:{duration:0}}}),l=function(e){var t=e.children,n=e.className,r=e.is_visible,a=e.keyname;return i.a.createElement(c.a,null,r&&i.a.createElement(s,{className:n,key:a},t))};l.propTypes={children:a.a.node,is_visible:a.a.bool,keyname:a.a.string};var u=c.b.div({enter:{y:0,opacity:1,delay:300,transition:{default:{duration:250}}},exit:{y:-50,opacity:0,transition:{duration:250}}}),p=c.b.div({enter:{y:0,opacity:1,delay:300,transition:{default:{duration:250}}},exit:{y:50,opacity:0,transition:{duration:250}}}),f=c.b.div({enter:{opacity:1,transition:{duration:300}},exit:{opacity:0,transition:{duration:300}}}),d=function(e){var t=e.children,n=e.className,r=e.is_visible,a=e.keyname,o=e.type;return"top"===o?i.a.createElement(c.a,null,r&&i.a.createElement(u,{className:n,key:a},t)):"bottom"===o?i.a.createElement(c.a,null,r&&i.a.createElement(p,{className:n,key:a},t)):i.a.createElement(c.a,null,r&&i.a.createElement(f,{className:n,key:a},t))};d.propTypes={children:a.a.node,is_visible:a.a.bool,keyname:a.a.string,type:a.a.string};var y=c.b.div({enter:{y:0,opacity:1,transition:{duration:200}},exit:{y:-20,opacity:0,transition:{duration:100}}}),b=c.b.div({enter:{y:0,opacity:1,transition:{duration:200}},exit:{y:20,opacity:0,transition:{duration:100}}}),m=function(e){var t=e.children,n=e.className,r=e.keyname,a=e.is_visible;return"bottom"===e.type?i.a.createElement(c.a,{flipMove:!1},a&&i.a.createElement(b,{className:n,key:r},t)):i.a.createElement(c.a,{flipMove:!1},a&&i.a.createElement(y,{className:n,key:r},t))};m.propTypes={children:a.a.node,is_visible:a.a.bool,keyname:a.a.string,type:a.a.string},n.d(t,"a",function(){return l}),n.d(t,"b",function(){return d}),n.d(t,"c",function(){return m})},587:function(e,t,n){var r;window,e.exports=(r=n(251),function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=34)}({0:function(e,t){e.exports=r},1:function(e,t,n){e.exports=n(4)()},10:function(e,t,n){},2:function(e,t,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},34:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(0),i=n.n(o),c=n(1),s=n.n(c);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=["default","success","warn","danger","info","success-invert","warn-invert"],p=["regular","large"],f=function(e){var t,n=e.mode,r=e.children,o=e.size,c=void 0===o?"regular":o,s=e.className,f=u.some(function(e){return e===n})?n:"default",d=p.some(function(e){return e===c})?c:"regular";return i.a.createElement("span",{className:a()("dc-label",s,(t={},l(t,"dc-label--".concat(d),d),l(t,"dc-label--".concat(f),f),t))},r)};f.propTypes={children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),mode:s.a.oneOf(u)};var d=f;n(10),t.default=d},4:function(e,t,n){"use strict";var r=n(5);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},5:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}).default)},588:function(e,t,n){},601:function(e,t,n){},642:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(0),i=n.n(o),c=n(32),s=n(3),l=n(583),u=n(185),p=n(44),f=n(11),d=n(587),y=n.n(d),b=(n(588),n(8)),m=n(19),v=n(75),_=function(e){var t=e.currency;return e.is_virtual?i.a.createElement(m.a,{i18n_default_text:"Practice wallet"}):i.a.createElement(m.a,{i18n_default_text:"{{currency}} wallet",values:{currency:t.toUpperCase()}})},h=function(e){var t=e.currency,n=e.balance,r=e.has_description,a=e.has_loginid,o=e.is_virtual,c=e.is_website_status_ready,s=e.loginid;return i.a.createElement("div",{className:"account-wallet"},!o&&i.a.createElement(b.a,{icon:"IconAccountsCurrency",type:t.toLowerCase()}),o&&i.a.createElement(b.a,{icon:"IconDemo"}),i.a.createElement("span",{className:"description"},r?i.a.createElement(_,{currency:t,is_virtual:o}):i.a.createElement("span",{className:"description__currency"},t.toUpperCase())),a&&i.a.createElement("span",{className:"current-loginid"},s),c&&i.a.createElement(y.a,{className:"account-wallet__label",mode:"".concat(o?"warn-invert":"success-invert"),size:"large"},i.a.createElement(v.a,{amount:n,currency:t})),!c&&i.a.createElement("div",null))};h.propTypes={has_description:a.a.bool,has_loginid:a.a.bool};var g=Object(f.b)(function(e){var t=e.client;return{balance:t.balance,currency:t.currency,is_virtual:t.is_virtual,is_website_status_ready:t.is_website_status_ready,loginid:t.loginid}})(h);n(601);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=O(this,(e=j(t)).call.apply(e,[this].concat(a)))).setWrapperRef=function(e){n.wrapper_ref=e},n.handleClickOutside=function(e){n.wrapper_ref&&!n.wrapper_ref.contains(e.target)&&n.props.history.push(p.a.trade)},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,i.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.props.enableRouteMode(),document.addEventListener("mousedown",this.handleClickOutside),this.props.toggleReports(!0)}},{key:"componentWillUnmount",value:function(){this.props.toggleReports(!1),this.props.disableRouteMode(),document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"render",value:function(){var e,t=this,n=[{onClick:function(){t.props.history.push(p.a.trade),t.props.toggleReports(!1)},icon:"ModalIconClose",title:Object(s.localize)("Close")},{component:function(){return i.a.createElement(g,{has_description:!0,has_loginid:!0})},title:""}];return i.a.createElement(l.b,{is_visible:this.props.is_visible,className:"reports-page-wrapper",keyname:"reports-page-wrapper"},i.a.createElement("div",{className:"reports",ref:this.setWrapperRef},i.a.createElement(u.a,{header_title:Object(s.localize)("Reports"),action_bar:n,action_bar_classname:"reports__inset_header",alignment:"center",id:"report",classNameHeader:"reports__tab-header",current_path:this.props.location.pathname,is_routed:!0,is_full_width:!0,list:(e=[],t.props.routes.forEach(function(t){e.push({default:t.default,icon:t.icon_component,label:t.title,value:t.component,path:t.path})}),e)})))}}])&&E(n.prototype,r),a&&E(n,a),t}();x.propTypes={disableRouteMode:a.a.func,enableRouteMode:a.a.func,history:a.a.object,is_visible:a.a.bool,location:a.a.object,routes:a.a.arrayOf(a.a.object),toggleReports:a.a.func};var R=Object(f.b)(function(e){var t=e.ui;return{disableRouteMode:t.disableRouteModal,enableRouteMode:t.setRouteModal,is_visible:t.is_reports_visible,toggleReports:t.toggleReports}})(Object(c.g)(x));n.d(t,"default",function(){return R})}}]);
//# sourceMappingURL=reports.b894c91e78f2043f4dbf.js.map