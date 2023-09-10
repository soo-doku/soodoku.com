!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).swetrix={})}(this,(function(t){"use strict";function e(t){return(t=location.search.match(t))&&t[2]||void 0}function n(){return void 0!==navigator.languages?navigator.languages[0]:navigator.language}function o(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(t){}}function i(){return document.referrer||void 0}function a(){return e(l)}function r(){return e(h)}function s(){return e(p)}function c(){return location.pathname||""}var u=function(){return(u=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},l=/[?&](ref|source|utm_source)=([^?&]+)/,p=/[?&](utm_campaign)=([^?&]+)/,h=/[?&](utm_medium)=([^?&]+)/,d={stop:function(){}},g=(f.prototype.track=function(t){this.canTrack()&&(t=u({pid:this.projectID,pg:this.activePage,lc:n(),tz:o(),ref:i(),so:a(),me:r(),ca:s()},t),this.sendRequest("custom",t))},f.prototype.trackPageViews=function(t){var e,n,o;return this.canTrack()?(this.pageData||(null!=(this.pageViewsOptions=t)&&t.unique||(n=setInterval(this.trackPathChange,2e3)),null!=t&&t.noHeartbeat||(setTimeout(this.heartbeat,3e3),e=setInterval(this.heartbeat,28e3)),o=c(),this.pageData={path:o,actions:{stop:function(){clearInterval(n),clearInterval(e)}}},this.trackPage(o,null==t?void 0:t.unique)),this.pageData.actions):d},f.prototype.getPerformanceStats=function(){var t;return this.canTrack()&&!this.perfStatsCollected&&null!=(t=window.performance)&&t.getEntriesByType&&(t=window.performance.getEntriesByType("navigation")[0])?(this.perfStatsCollected=!0,{dns:t.domainLookupEnd-t.domainLookupStart,tls:t.secureConnectionStart?t.requestStart-t.secureConnectionStart:0,conn:t.secureConnectionStart?t.secureConnectionStart-t.connectStart:t.connectEnd-t.connectStart,response:t.responseEnd-t.responseStart,render:t.domComplete-t.domContentLoadedEventEnd,dom_load:t.domContentLoadedEventEnd-t.responseEnd,page_load:t.loadEventStart,ttfb:t.responseStart-t.requestStart}):{}},f.prototype.heartbeat=function(){var t;(null!=(t=this.pageViewsOptions)&&t.heartbeatOnBackground||"hidden"!==document.visibilityState)&&(t={pid:this.projectID},this.sendRequest("hb",t))},f.prototype.checkIgnore=function(t){var e,n=null==(e=this.pageViewsOptions)?void 0:e.ignore;if(Array.isArray(n))for(var o=0;o<n.length;++o){if(n[o]===t)return!0;if(n[o]instanceof RegExp&&n[o].test(t))return!0}return!1},f.prototype.trackPathChange=function(){var t;this.pageData&&(t=c(),this.pageData.path!==t)&&this.trackPage(t,!1)},f.prototype.getPreviousPage=function(){var t;if(this.activePage)return(o=this.checkIgnore(this.activePage))&&null!=(e=this.pageViewsOptions)&&e.doNotAnonymise||o?null:this.activePage;if("function"==typeof URL){var e=i();if(!e)return null;var n=location.host;try{var o,a=new URL(e),r=a.host,s=a.pathname;return n!==r||(o=this.checkIgnore(s))&&null!=(t=this.pageViewsOptions)&&t.doNotAnonymise||o?null:s}catch(t){}}return null},f.prototype.trackPage=function(t,e){var c,u,l,p;void 0===e&&(e=!1),this.pageData&&(this.pageData.path=t,(c=this.checkIgnore(t))&&null!=(u=this.pageViewsOptions)&&u.doNotAnonymise||(u=this.getPerformanceStats(),null!=(p=this.pageViewsOptions)&&p.noUserFlow||(l=this.getPreviousPage()),p={pid:this.projectID,lc:n(),tz:o(),ref:i(),so:a(),me:r(),ca:s(),unique:e,pg:c?null:t,perf:u,prev:l},this.activePage=t,this.sendRequest("",p)))},f.prototype.debug=function(t){var e;null!=(e=this.options)&&e.debug&&console.log("[Swetrix]",t)},f.prototype.canTrack=function(){var t;return null!=(t=this.options)&&t.disabled||"undefined"==typeof window||null!=(t=this.options)&&t.respectDNT&&"1"===(null==(t=window.navigator)?void 0:t.doNotTrack)?(this.debug(""),!1):!(!(null!=(t=this.options)&&t.debug||"localhost"!==(null===location||void 0===location?void 0:location.hostname)&&"127.0.0.1"!==(null===location||void 0===location?void 0:location.hostname)&&""!==(null===location||void 0===location?void 0:location.hostname))||null!==navigator&&void 0!==navigator&&navigator.webdriver&&(this.debug(""),1))},f.prototype.sendRequest=function(t,e){var n=(null==(n=this.options)?void 0:n.apiURL)||"https://api.swetrix.com/log",o=new XMLHttpRequest;o.open("POST","".concat(n,"/").concat(t),!0),o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify(e))},f);function f(t,e){this.projectID=t,this.options=e,this.pageData=null,this.pageViewsOptions=null,this.perfStatsCollected=!1,this.activePage=null,this.trackPathChange=this.trackPathChange.bind(this),this.heartbeat=this.heartbeat.bind(this)}t.LIB_INSTANCE=null,t.init=function(e,n){return t.LIB_INSTANCE||(t.LIB_INSTANCE=new g(e,n)),t.LIB_INSTANCE},t.track=function(e){t.LIB_INSTANCE&&t.LIB_INSTANCE.track(e)},t.trackViews=function(e){return new Promise((function(n){t.LIB_INSTANCE?"undefined"==typeof document||"complete"===document.readyState?n(t.LIB_INSTANCE.trackPageViews(e)):window.addEventListener("load",(function(){n(t.LIB_INSTANCE.trackPageViews(e))})):n(d)}))},Object.defineProperty(t,"__esModule",{value:!0})})),swetrix.init("Jg4AIvTba41k"),swetrix.trackViews();