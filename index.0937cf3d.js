!function(){var e,t,o,n,r;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),r=function(){var e="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open"),bodyScrollLock[e?"enableBodyScroll":"disableBodyScroll"](document.body)},o.addEventListener("click",r),n.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));var c,i={};c=function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=!1;if("undefined"!=typeof window){var o={get passive(){t=!0}};window.addEventListener("testPassive",null,o),window.removeEventListener("testPassive",null,o)}function n(e){return l.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))}function r(e){var t=e||window.event;return!!n(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)}function c(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==s&&(document.body.style.overflow=s,s=void 0)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&1<window.navigator.maxTouchPoints),l=[],a=!1,d=-1,s=void 0,u=void 0;e.disableBodyScroll=function(e,o){if(e){if(!l.some((function(t){return t.targetElement===e}))){var c={targetElement:e,options:o||{}};l=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(l),[c]),i?(e.ontouchstart=function(e){1===e.targetTouches.length&&(d=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var o,c,i,l;1===t.targetTouches.length&&(c=e,l=(o=t).targetTouches[0].clientY-d,n(o.target)||(c&&0===c.scrollTop&&0<l||(i=c)&&i.scrollHeight-i.scrollTop<=i.clientHeight&&l<0?r(o):o.stopPropagation()))},a||(document.addEventListener("touchmove",r,t?{passive:!1}:void 0),a=!0)):function(e){if(void 0===u){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;t&&0<o&&(u=document.body.style.paddingRight,document.body.style.paddingRight=o+"px")}void 0===s&&(s=document.body.style.overflow,document.body.style.overflow="hidden")}(o)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},e.clearAllBodyScrollLocks=function(){i?(l.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),a&&(document.removeEventListener("touchmove",r,t?{passive:!1}:void 0),a=!1),d=-1):c(),l=[]},e.enableBodyScroll=function(e){e?(l=l.filter((function(t){return t.targetElement!==e})),i?(e.ontouchstart=null,e.ontouchmove=null,a&&0===l.length&&(document.removeEventListener("touchmove",r,t?{passive:!1}:void 0),a=!1)):l.length||c()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},"function"==typeof define&&define.amd?define(["exports"],c):c(i)}();
//# sourceMappingURL=index.0937cf3d.js.map
