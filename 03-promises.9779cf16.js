function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=r);var i=r("7Y9D8");function l(e,t){return new Promise(((o,n)=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}))}document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();let{elements:{delay:o,step:n,amount:r}}=t.currentTarget;o=Number(o.value),n=Number(n.value),r=Number(r.value);for(let t=0;t<r;t++)l(t,o).then((({position:t,delay:o})=>{setTimeout((()=>e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)),o)})).catch((({position:t,delay:o})=>{setTimeout((()=>e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)),o)})),o+=n}));
//# sourceMappingURL=03-promises.9779cf16.js.map
