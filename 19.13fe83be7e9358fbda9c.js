(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7fyK":function(n,e,t){"use strict";t.r(e),t("ls82");var r=t("nMmO");function a(n,e,t,r,a,i,c){try{var o=n[i](c),u=o.value}catch(s){return void t(s)}o.done?e(u):Promise.resolve(u).then(r,a)}function i(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var c=n.apply(e,t);function o(n){a(c,r,i,o,u,"next",n)}function u(n){a(c,r,i,o,u,"throw",n)}o(void 0)}))}}t("kB5k"),t("/TMw"),t("M39V"),e.default=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{minimumBalance:"0"},e=n.minimumBalance,t=n.heading,a=n.description,c=n.icon,o=n.html,u=n.button;return function(){var n=i(regeneratorRuntime.mark((function n(i){var s,l,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(s=i.BigNumber,l=i.stateSyncStatus,f=i.stateStore,null!==i.balance){n.next=10;break}if(!l.balance){n.next=10;break}return n.prev=3,n.next=6,l.balance;case 6:n.next=10;break;case 8:n.prev=8,n.t0=n.catch(3);case 10:if(!s(f.balance.get()).lt(s(e))){n.next=12;break}return n.abrupt("return",{heading:t||"Get Some ETH",description:a||"Your current account has less than the necessary minimum balance of ".concat(s(e).div(s("1000000000000000000")).toString(10)," ETH."),eventCode:"nsfFail",icon:c||r.d,html:o,button:u});case 12:case"end":return n.stop()}}),n,null,[[3,8]])})));return function(e){return n.apply(this,arguments)}}()}}}]);