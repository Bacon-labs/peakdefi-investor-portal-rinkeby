(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{GlWM:function(n,e,t){"use strict";t.r(e),t("ls82");var r=t("nMmO");function o(n,e,t,r,o,i,u){try{var a=n[i](u),c=a.value}catch(s){return void t(s)}a.done?e(c):Promise.resolve(c).then(r,o)}t("kB5k"),t("/TMw"),t("M39V"),e.default=function(n){var e,i,u=n.apiKey,a=n.networkId,c=n.preferred;return{name:n.label||"Fortmatic",svg:n.svg||'\n  <svg \n    height="40" \n    viewBox="0 0 40 40" \n    width="40" \n    xmlns="http://www.w3.org/2000/svg"\n  >\n    <path d="m2744.99995 1155h9.99997 10.00008v9.98139h-10.00008-9.99997-9.99998v9.9814.64001 9.28323.05815 9.9234h-9.99997v-9.9234-.05815-9.28323-.64001-9.9814-9.98139h9.99997zm9.99961 29.88552h-9.94167v-9.92324h19.93595v10.27235c0 2.55359-1.01622 5.00299-2.82437 6.80909-1.80867 1.8061-4.26182 2.82181-6.82018 2.82335h-.34973z" \n      fill="#617bff" \n      fill-rule="evenodd" \n      transform="translate(-2725 -1155)"/>\n  </svg>\n',iconSrc:n.iconSrc,wallet:(e=regeneratorRuntime.mark((function n(e){var o,i,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.e(39).then(t.t.bind(null,"Tez3",7));case 2:return o=new(0,n.sent.default)(u,1===a?void 0:Object(r.f)(a)),i=o.getProvider(),c=e.BigNumber,n.abrupt("return",{provider:i,instance:o,interface:{name:"Fortmatic",connect:o.user.login,disconnect:o.user.logout,address:{get:function(){return Promise.resolve(i.account)}},network:{get:function(){return Promise.resolve(a)}},balance:{get:function(){return i.account&&o.user.getBalances().then((function(n){return n[0]?c(n[0].crypto_amount).times(c("1000000000000000000")).toString(10):null}))}},dashboard:function(){return o.user.settings()}}});case 8:case"end":return n.stop()}}),n)})),i=function(){var n=this,t=arguments;return new Promise((function(r,i){var u=e.apply(n,t);function a(n){o(u,r,i,a,c,"next",n)}function c(n){o(u,r,i,a,c,"throw",n)}a(void 0)}))},function(n){return i.apply(this,arguments)}),type:"sdk",desktop:!0,mobile:!0,preferred:c}}}}]);