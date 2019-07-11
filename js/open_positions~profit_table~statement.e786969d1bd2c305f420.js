(window.webpackJsonp=window.webpackJsonp||[]).push([["open_positions~profit_table~statement"],{696:function(e,t,n){"use strict";var o=n(1),a=n.n(o),r=n(0),i=n.n(r),c=n(8),l=function(e){var t=e.has_selected_date,n=e.component_icon,o=e.localized_message,a=e.localized_period_message;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"empty-trade-history"},i.a.createElement(c.a,{icon:n,className:"empty-trade-history__icon"}),i.a.createElement("span",{className:"empty-trade-history__text"},t?a:o)))};l.propTypes={component_icon:a.a.string,has_selected_date:a.a.bool,localized_message:a.a.string,localized_period_message:a.a.string},t.a=l},697:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n(0),a=n.n(o),r=function(e){var t=e.i18n_heading,n=e.i18n_message,o=e.filter_component;return a.a.createElement("div",{className:"reports__meta"},a.a.createElement("div",{className:"reports__meta-description"},a.a.createElement("h1",{className:"reports__meta-description--heading"},t),a.a.createElement("p",{className:"reports__meta-description--paragraph"},n)),o&&a.a.createElement("div",{className:"reports__meta-filter"},o))}},698:function(e,t,n){"use strict";var o=n(1),a=n.n(o),r=n(0),i=n.n(r),c=n(351),l=function(e){var t=e.empty_message_component;return i.a.createElement(i.a.Fragment,null,e.is_empty&&i.a.createElement(t,{component_icon:e.component_icon,has_selected_date:e.has_selected_date,localized_message:e.localized_message}),e.is_loading&&i.a.createElement(c.a,null))};l.propTypes={component_icon:a.a.string,empty_message_component:a.a.func,has_selected_date:a.a.bool,localized_message:a.a.string},t.a=l},699:function(e,t,n){"use strict";var o=n(4),a=n.n(o),r=n(0),i=n.n(r),c=n(8),l=n(3),s=n(349),u=n(61),p=n(1),m=n.n(p),_=n(176),f=n(9),d=function(e){var t=e.id,n=e.is_loading,o=(0,e.getPositionById)(t);if(!o)return i.a.createElement("div",null);var a=o.contract_info;return i.a.createElement(_.a,{is_loading:n,expiry_time:a.date_expiry,has_result:!1,current_tick:o.current_tick,start_time:a.date_start,ticks_count:a.tick_count})};d.propTypes={getPositionById:m.a.func,id:m.a.oneOfType([m.a.number,m.a.string]),is_loading:m.a.bool,server_time:m.a.object};var y=Object(f.b)(function(e){var t=e.modules;return{is_loading:t.portfolio.is_loading,getPositionById:t.portfolio.getPositionById}})(d),b=function(e){return+e.replace(/,/g,"")>=0?"profit":"loss"};function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=g(this,w(t).call(this,e))).state={movement:null,amount:0},n}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,i.a.PureComponent),n=t,(o=[{key:"componentWillReceiveProps",value:function(e){var t=this;this.setState(function(){return{movement:e.amount>=t.state.amount?"profit":"loss",amount:e.amount}})}},{key:"render",value:function(){var e=this.props,t=e.amount,n=e.currency,o=e.status,a=this.state.movement;return i.a.createElement("div",{className:"open-positions__indicative"},i.a.createElement("div",{className:"open-positions__indicative--amount"},i.a.createElement(u.a,{amount:Math.abs(t),currency:n}),"no-resale"!==o&&0!==t&&i.a.createElement(c.a,{icon:"IconPriceMove",type:a})),"no-resale"===o&&i.a.createElement("div",{className:"open-positions__indicative-no-resale-msg indicative__no-resale-msg"},Object(l.localize)("Resale not offered")))}}])&&v(n.prototype,o),a&&v(n,a),t}();j.propTypes={amount:m.a.number,currency:m.a.string,status:m.a.string};var O=j,N=n(52),C=n(173),k=n(97),x=n(170),z=n.n(x),P=function(e){var t=e.payload,n=e.show_description,o="string"==typeof t.shortcode,a=z.a.extractInfoFromShortcode(t.shortcode);return o&&a?i.a.createElement("div",{className:"market-symbol-icon"},i.a.createElement("div",{className:"market-symbol-icon-name"},i.a.createElement(N.a,{classNameTarget:"market-symbol-icon__popover",classNameBubble:"market-symbol-icon__popover-bubble",alignment:"top",message:Object(k.b)(a.underlying),disable_target_icon:!0},i.a.createElement(C.a,{market:a.underlying})),n&&t.display_name),i.a.createElement("div",{className:"market-symbol-icon-category"},i.a.createElement(N.a,{classNameTarget:"category-type-icon__popover",classNameBubble:"category-type-icon__popover-bubble",alignment:"top",message:Object(k.c)(a.category),disable_target_icon:!0},i.a.createElement(c.a,{icon:"IconTradeType",type:z.a.isHighLow({shortcode_info:a})?"".concat(a.category.toLowerCase(),"_barrier"):a.category.toLowerCase()})),n&&a.category)):["deposit","withdrawal"].includes(t.action_type)?i.a.createElement("div",{className:"market-symbol-icon"},"deposit"===t.action_type?i.a.createElement(c.a,{icon:"IconDeposit"}):i.a.createElement(c.a,{icon:"IconWithdrawal"})):i.a.createElement("svg",{width:"32",height:"32",className:"unknown-icon"},i.a.createElement("rect",{width:"32",height:"32"}))};P.propTypes={action:m.a.string,payload:m.a.object,show_description:m.a.bool};var S=P,T=function(e){var t=e.value,n=e.children,o=b(t);return i.a.createElement("span",{className:"amount--".concat(o)},n)};T.propTypes={value:m.a.string};var D=T;n.d(t,"c",function(){return I}),n.d(t,"b",function(){return R}),n.d(t,"a",function(){return B});var I=function(e){return[{key:"icon",title:"",col_index:"action_type",renderCellContent:function(e){var t=e.cell_value,n=e.row_obj;return i.a.createElement(S,{action:t,key:n.transaction_id,payload:n})}},{title:Object(l.localize)("Ref. ID"),col_index:"refid"},{title:Object(l.localize)("Transaction time"),col_index:"date"},{key:"mode",title:Object(l.localize)("Transaction"),col_index:"action_type",renderCellContent:function(e){var t,n,o=e.cell_value,a=e.row_obj;return i.a.createElement(s.a,{mode:(t=o,n={deposit:"warn",withdrawal:"info",sell:"danger",buy:"success",default:"default"},Object.keys(n).find(function(e){return e===t})?n[t]:n.default)},a.action)}},{title:Object(l.localize)("Credit/Debit"),col_index:"amount",renderCellContent:function(t){var n=t.cell_value;return i.a.createElement("div",{className:"amount--".concat(b(n))},i.a.createElement(u.a,{has_sign:!0,amount:n.replace(/[,]+/g,""),currency:e}))}},{title:Object(l.localize)("Balance"),col_index:"balance",renderCellContent:function(t){var n=t.cell_value;return i.a.createElement(u.a,{amount:n.replace(/[,]+/g,""),currency:e})}}]},R=function(e,t){return[{key:"icon",title:"",col_index:"action_type",renderCellContent:function(e){var n=e.cell_value,o=e.row_obj;return e.is_footer?Object(l.localize)("Profit/loss on the last {{item_count}} contracts",{item_count:t}):i.a.createElement(S,{action:n,key:o.transaction_id,payload:o})}},{title:Object(l.localize)("Ref. ID"),col_index:"transaction_id"},{title:Object(l.localize)("Buy time"),col_index:"purchase_time"},{title:Object(l.localize)("Buy price"),col_index:"buy_price",renderCellContent:function(t){var n=t.cell_value;return t.is_footer?"":i.a.createElement(u.a,{amount:n,currency:e})}},{title:Object(l.localize)("Sell time"),col_index:"sell_time"},{title:Object(l.localize)("Sell price"),col_index:"sell_price",renderCellContent:function(t){var n=t.cell_value;return t.is_footer?"":i.a.createElement(u.a,{amount:n,currency:e})}},{title:Object(l.localize)("Profit/Loss"),col_index:"profit_loss",renderCellContent:function(t){var n=t.cell_value;return i.a.createElement(D,{value:n},i.a.createElement(u.a,{has_sign:!0,amount:n.replace(/[,]+/g,""),currency:e}))}}]},B=function(e){return[{title:"",col_index:"type",renderCellContent:function(e){var t=e.cell_value,n=e.row_obj;return e.is_footer?Object(l.localize)("Total"):i.a.createElement(S,{action:t,key:n.id,payload:n.contract_info})}},{title:Object(l.localize)("Ref. ID"),col_index:"reference"},{title:Object(l.localize)("Buy price"),col_index:"purchase",renderCellContent:function(t){var n=t.cell_value;return i.a.createElement(u.a,{amount:n,currency:e})}},{title:Object(l.localize)("Potential payout"),col_index:"payout",renderCellContent:function(t){var n=t.cell_value;return n?i.a.createElement(u.a,{amount:n,currency:e}):i.a.createElement("span",null,"-")}},{title:Object(l.localize)("Potential profit/loss"),col_index:"profit",renderCellContent:function(t){var n=t.row_obj;if(n.contract_info&&n.contract_info.profit){var o=n.contract_info.profit;return i.a.createElement("div",{className:a()("open-positions__profit-loss",{"open-positions__profit-loss--negative":o<0,"open-positions__profit-loss--positive":o>0})},i.a.createElement(u.a,{amount:Math.abs(o),currency:e}),i.a.createElement("div",{className:"open-positions__profit-loss--movement"},i.a.createElement(c.a,{icon:"IconPriceMove",type:o>0?"profit":"loss"})))}}},{title:Object(l.localize)("Indicative price"),col_index:"indicative",renderCellContent:function(t){var n=t.cell_value,o=t.row_obj;return i.a.createElement(O,{amount:+n,currency:e,status:o.contract_info&&!o.is_valid_to_sell?"no-resale":""})}},{title:Object(l.localize)("Remaining time"),col_index:"id",renderCellContent:function(e){var t=e.cell_value;return i.a.createElement(y,{id:t})}}]}},700:function(e,t,n){"use strict";var o=n(4),a=n.n(o),r=n(98),i=n.n(r),c=n(13),l=n(701),s=n(77),u=n(1),p=n.n(u),m=n(0),_=n.n(m),f=n(39),d=function(e){var t=e.col_index,n=e.children;return _.a.createElement("div",{className:a()("table__cell",t)},n)};d.propTypes={children:p.a.oneOfType([p.a.node,p.a.string]),col_index:p.a.string};var y=d;function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=v(this,g(t).call(this,e))).toggleDetails=function(){n.props.replace&&n.setState(function(e){return{showDetails:!e.showDetails}})},n.state={showDetails:!1},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,_.a.Component),n=t,(o=[{key:"render",value:function(){return _.a.createElement("div",{onClick:this.props.is_footer||!this.props.replace?void 0:this.toggleDetails,className:a()(this.props.className,{"statement__row--detail":this.state.showDetails})},this.state.showDetails?_.a.createElement("div",null,this.props.replace.component?this.props.replace.component:_.a.createElement("p",null,this.props.replace.message)):this.props.cells)}}])&&h(n.prototype,o),r&&h(n,r),t}();E.propTypes={cells:p.a.arrayOf(p.a.node),className:p.a.string,replace:p.a.object};var j=function(e){var t,n,o,r=e.className,i=e.columns,c=e.is_footer,l=e.is_header,s=e.replace,u=e.row_obj,p=void 0===u?{}:u,m=e.to,d=i.map(function(e){var t=e.col_index,n=e.renderCellContent,o=e.title,a=e.key,r=o;if(!l){var i=p[t]||"";r=n?n({cell_value:i,col_index:t,row_obj:p,is_footer:c}):i}return _.a.createElement(y,{col_index:t,key:a||t},r)}),b=a()("table__row",{"table__row-link":m||s},(t={},n="".concat(r,"__row"),o=r,n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t));return m?_.a.createElement(f.c,{className:b,to:{pathname:m,state:{from_table_row:!0}}},d):_.a.createElement(E,{className:b,cells:d,replace:s,is_footer:c})};j.propTypes={className:p.a.string,columns:p.a.array,is_footer:p.a.bool,is_header:p.a.bool,replace:p.a.object,row_obj:p.a.object,to:p.a.string};var O=j;function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function x(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=x(this,z(t).call(this,e))).resizeDimensions=i()(function(){n.setState({width:window.innerWidth-n.state.window_width+n.state.width,window_width:window.innerWidth})},250),n.state={height:200,width:200,window_width:1024},n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,_.a.PureComponent),n=t,(o=[{key:"componentDidMount",value:function(){this.setState({height:this.el_table_body.clientHeight,width:this.el_table_body.clientWidth,window_width:window.innerWidth}),window.onresize=this.resizeDimensions}},{key:"componentWillUnmount",value:function(){window.onresize=null}},{key:"componentDidUpdate",value:function(){this.alignHeader()}},{key:"alignHeader",value:function(){if(this.props.data_source.length){var e=this.el_table_body.firstChild,t=this.el_table_head.offsetWidth-e.offsetWidth;this.el_table_head.style.paddingRight="".concat(t,"px")}}},{key:"rowRenderer",value:function(e){var t=e.index,n=e.style,o=this.props,a=o.data_source,r=o.className,i=o.getRowAction,c=o.columns,l=o.id,s=a[t],u=i&&i(s),p=_.a.createElement(O,{className:r,row_obj:s,columns:c,key:l,to:"string"==typeof u?u:void 0,replace:"object"===C(u)?u:void 0});return _.a.createElement("div",{style:n},p)}},{key:"render",value:function(){var e,t=this,n=this.props,o=n.children,r=n.className,i=n.columns,c=n.data_source,u=n.footer,p=n.is_empty,m=n.onScroll,f=_.a.createElement(_.a.Fragment,null,_.a.createElement(l.a,{className:r,height:this.state.height,itemCount:c.length,itemSize:63,width:this.state.width},this.rowRenderer.bind(this)),o);return _.a.createElement("div",{className:a()("table",(e={},N(e,"".concat(r),r),N(e,"".concat(r,"__table"),r),N(e,"".concat(r,"__content"),r),e))},_.a.createElement("div",{className:"table__head",ref:function(e){t.el_table_head=e}},_.a.createElement(O,{className:r,columns:i,is_header:!0})),_.a.createElement("div",{className:"table__body",onScroll:m,ref:function(e){t.el_table_body=e}},p?f:_.a.createElement(s.Scrollbars,{autoHeight:!0,autoHeightMax:this.state.height,autoHide:!0},f)),u&&_.a.createElement("div",{className:"table__foot"},_.a.createElement(O,{className:r,row_obj:u,columns:i,is_footer:!0})))}}])&&k(n.prototype,o),r&&k(n,r),t}();S.propTypes={children:p.a.oneOfType([p.a.node,p.a.arrayOf(p.a.node)]),className:p.a.string,columns:p.a.array,data_source:c.PropTypes.arrayOrObservableArray,footer:p.a.object,getRowAction:p.a.func,onScroll:p.a.func};var T=S;n.d(t,"a",function(){return T})}}]);
//# sourceMappingURL=open_positions~profit_table~statement.e786969d1bd2c305f420.js.map