/**
 * Bundle of AWEMA sticky-params
 * Generated: 2019-03-27 09:58:01
 * Version: 1.0.0
 */

!function(){"use strict";const t=function(t){this.inited=!1;let e=AWEMA.utils.object;const s="awema-sticky-params-"+window.location.hostname;return e.isObject(t)&&!e.isEmpty(t)&&window.history&&"function"==typeof window.history.pushState&&function(){try{return localStorage.setItem("lsTest","lsTest"),localStorage.removeItem("lsTest"),!0}catch(t){return!1}}()?(this.routes=function(t){let e=[];return Object.keys(t).forEach(s=>{let i=t[s];e.push({regexp:new RegExp("^"+s.replace(/\*/g,"(.*?)")+"$"),params:i})}),e}(t),this.saved=function(t){try{let e=localStorage.getItem(t);return JSON.parse(e)||{}}catch(t){return{}}}(s),this.inited=!0,this.update(),window.addEventListener("popstate",this.update.bind(this)),window.addEventListener("beforeunload",()=>{this.update(),function(t,e){window.localStorage.setItem(t,JSON.stringify(e))}(s,this.saved)}),this):this};t.prototype.update=function(){if(!this.inited)return this;let t=AWEMA.utils,e=t.object,s=window.location,i=s.pathname,n=function(t){let{get:e,set:s}=AWEMA.utils.object,i=t.replace(/^\?/,"").split("&"),n={};return""===t?n:(i.forEach(t=>{let[i,a]=t.split("=");i=decodeURIComponent(i),a=decodeURIComponent(a);try{a=JSON.parse(a)}catch(t){}if(/\[\]$/.test(i)){i=i.replace(/\[\]$/,"");let t=e(n,i);t?t.push(a):s(n,i,[a])}else s(n,i,a)}),n)}(s.search),a=function(t,e){let s=[];for(let i=0;i<e.length;i++){let n=e[i];if(n.regexp.test(t)){let t=Array.isArray(n.params)?n.params:[n.params];if(t.indexOf("*")>-1){s="*";break}s=s.concat(t)}}return s}(i,this.routes);if(this._path===i)if("*"===a)e.set(this.saved,i,n);else{let t={};a.forEach(s=>{let i=e.get(n,s);e.set(t,s,i)}),e.set(this.saved,i,t)}else{let a=e.get(this.saved,i,{}),o=Object.assign(a,n),r=e.isEmpty(o)?"":"?"+t.stringifyQuery(o),c=s.origin+s.pathname+r+s.hash;window.history.replaceState(window.history.state,document.title,c)}return this._path=i,this};const e={name:"sticky-params",version:"1.0.0",install(){AWEMA.StickyParams=new t(AWEMA_CONFIG.stickyParams)}};if(window&&"AWEMA"in window)AWEMA.use(e);else{let t="__awema_plugins_stack__";window[t]=window[t]||[],window[t].push(e)}}();