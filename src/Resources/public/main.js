(()=>{var e={875:()=>{document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".maskfield").forEach((function(e){e.addEventListener("change",(function(){return r(e)})),r(e)}))}));var e=function(e){for(var t=e.classList[2].substring(10),r=document.querySelector(".maskfield-map-"+t),n=[],u=0,o=Array.from(r.children);u<o.length;u++){var a=o[u];n.push({key:a.getAttribute("data-key"),values:JSON.parse(a.getAttribute("data-values"))})}return n},t=function(t){var r=t.querySelector("input").form,n=function(t){var r=[];return e(t).forEach((function(e){return r.push.apply(r,e.values)})),r.filter((function(e,t,r){return t===r.indexOf(e)}))}(t);return n.map((function(e){return document.getElementById(r.name+"_"+e).closest(".form-group").parentElement}))},r=function(e){var t=function(e){var t=e.querySelector(".item");if(!t){var r=e.querySelectorAll(".form-check input");return Array.from(r).find((function(e){return!0===e.checked})).value}return t.getAttribute("data-value")}(e);n(e,t)},n=function(r,n){var u=r.querySelector("input").form,o=e(r),a=t(r),i=o.find((function(e){return e.key===n})),c=i?i.values:[];a.forEach((function(e){var t=e.querySelector("input").id.substring(u.name.length+1);c.includes(t)?e.style.display="unset":e.style.display="none"}))}}},t={};function r(n){var u=t[n];if(void 0!==u)return u.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}(()=>{"use strict";r(875)})()})();
//# sourceMappingURL=main.js.map