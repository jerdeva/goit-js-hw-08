var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r);var a=r("kEUo3");const n=document.querySelector(".feedback-form");n.addEventListener("input",a.throttle((function(e){l[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(l))}),500));const l={};localStorage.getItem("feedback-form-state");window.addEventListener("load",(function(){let e=JSON.parse(localStorage.getItem("feedback-form-state")||"{}");Object.keys(e).forEach((t=>{const o=n.querySelector(`[name="${t}"]`);o&&(o.value=e[t])})),console.log()})),n.addEventListener("submit",(function(){console.log(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.dc5ddc82.js.map
