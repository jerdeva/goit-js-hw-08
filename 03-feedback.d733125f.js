!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("1WSnx"),a=document.querySelector(".feedback-form");a.addEventListener("input",r.throttle((function(e){l[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(l))}),500));var l=JSON.parse(localStorage.getItem("feedback-form-state")||"{}");window.addEventListener("load",(function(){Object.keys(l).forEach((function(e){var t=a.querySelector('[name="'.concat(e,'"]'));t&&(t.value=l[e])}))})),a.addEventListener("submit",(function(e){e.preventDefault(),console.log(l),localStorage.removeItem("feedback-form-state"),l={}}))}();
//# sourceMappingURL=03-feedback.d733125f.js.map