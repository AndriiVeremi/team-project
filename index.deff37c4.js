!function(){var e,t,o,n,c;"function"!=typeof(e=window.Element.prototype).matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".js-open-modal"),t=document.querySelector(".js-overlay-modal"),o=document.querySelectorAll(".js-modal-close");e.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var o=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+o+'"]').classList.add("active"),t.classList.add("active")}))})),o.forEach((function(e){e.addEventListener("click",(function(e){this.closest(".modal").classList.remove("active"),t.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(e){27==e.keyCode&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay2").classList.remove("active"))}),!1),t.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))})),t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),c=function(){var e="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open"),bodyScrollLock[e?"enableBodyScroll":"disableBodyScroll"](document.body)},o.addEventListener("click",c),n.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(e){e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),window.addEventListener("load",(function(){var e=document.querySelectorAll('[data-slider="reviews-slider"]');e&&e.forEach((function(e){var t=e.querySelector(".swiper-pagination");new Swiper(e.querySelector(".swiper"),{speed:1500,centeredSlides:!0,autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerView:1,spaceBetween:20,pagination:{el:t,clickable:!0,renderBullet:function(e,t){return'<li class="'+t+'"></li>'}},on:{transitionStart:function(){var t=this.previousIndex,o=e.getElementsByClassName("swiper-slide")[t];o&&setTimeout((function(){o.classList.remove("is-play")}),1e3)},transitionEnd:function(){var t=this.activeIndex;e.getElementsByClassName("swiper-slide")[t].classList.add("is-play")}}})}))}),!1)}();
//# sourceMappingURL=index.deff37c4.js.map
