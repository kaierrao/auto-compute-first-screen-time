!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.autoComputeFirstScreenTime=t():e.autoComputeFirstScreenTime=t()}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){var n=(new Date).getTime(),o=window,i=(o.document,r(2)),a=r(1),s=0;function c(){var e=i.mergeGlobal(i.initGlobal(),{intervalDotTimer:null,hasStoppedObserve:!1,dotList:[],imgMap:{},dotDelay:250,abortTimeWhenDelay:500});function t(t){var r=e.dotList[0],o=function(){return!e.hasReported&&!e.abortReport};if(e.abortByDelayTimeout)e.onReport({success:!1,delayFirstScreen:e.delayAll,abortTimeSetting:e.abortTimeWhenDelay,url:window.location.href.substring(0,200),dotList:e.dotList,globalIndex:e.globalIndex,type:"dot"});else{var s=function(){var o,s,c=null,m=[],u=[];for(o=0,s=e.dotList.length;o<s;o++)if(e.dotList[o].isTargetDot){c=e.dotList[o].firstScreenImages;break}if(c)for(o=0,s=c.length;o<s;o++)m.push(c[o].replace(/^http(s)?:/,"").replace(/^\/\//,""));var l=0;for(o=0,s=e.dotList.length;o<s;o++)e.dotList[o].delay&&e.dotList[o].dotTimeStamp<=t.dotTimeStamp&&(l+=e.dotList[o].delay);for(var f in e.requestDetails){var d=f.split(">time")[0].replace(/^http(s)?:/,"").replace(/^\/\//,"");u.push(d)}return{success:!0,maxErrorTime:t.maxErrorTime,dotList:e.dotList,isStaticPage:!e.isFirstRequestSent&&(!!/auto/.test(e.reportDesc)||"unknown"),requests:i.transRequestDetails2Arr(e),firstScreenTime:t.firstScreenTimeStamp-e.forcedNavStartTimeStamp,firstScreenTimeStamp:t.firstScreenTimeStamp,firstScreenImages:r.firstScreenImages,firstScreenImagesLength:r.firstScreenImages.length,firstScreenImagesDetail:t.firstScreenImagesDetail,navigationStartTimeStamp:e.forcedNavStartTimeStamp,navigationStartTime:e.forcedNavStartTimeStamp-e._originalNavStart,isOriginalNavStart:e.forcedNavStartTimeStamp===e._originalNavStart,delayFirstScreen:l,delayAll:e.delayAll,type:"dot",version:i.version,runtime:i.getTime()-n,reportDesc:e.reportDesc,url:window.location.href.substring(0,200),ignoredImages:e.ignoredImages,device:e.device,globalIndex:e.globalIndex,domChangeList:e.domChangeList,navigationTagChangeMap:a.navigationTagChangeMap,reportTimeFrom:t.reportTimeFrom}}();if(e.delayReport)var c=setTimeout(function(){o()&&(e.onReport(s),e.hasReported=!0),clearTimeout(c)},e.delayReport);else o()&&(e.onReport(s),e.hasReported=!0)}}function r(t){var r=t&&t.recordFirstScreen;if(e.delayAll>=e.abortTimeWhenDelay)e.abortByDelayTimeout=!0;else{var n=i.getTime(),a=function(t){var r=o.innerHeight,n=o.innerWidth;e.device.screenWidth||(e.device.screenWidth=n);e.device.screenHeight||(e.device.screenHeight=r);var a=t&&t.searchInFirstScreen,s=i.queryAllNode(e.ignoreTag),c=s.nextNode(),m=[],u=function(e){var t=i.parseUrl(e).protocol;t&&0===t.indexOf("http")&&-1===m.indexOf(e)&&m.push(e)};for(;c;){var l=i.getImgSrcFromDom(c,e.img);if(l){if(a)if(i.recordCurrentPos(c,e),i.isInFirstScreen(c))u(l);else{var f=i.currentPos;e.ignoredImages.push({src:l,screenHeight:r,screenWidth:n,scrollTop:f.scrollTop,top:f.top,bottom:f.bottom,vertical:f.scrollTop+f.top<=r,left:f.left,right:f.right,horizontal:f.right>=0&&f.left<=n})}else u(l);c=s.nextNode()}else c=s.nextNode()}return m}({searchInFirstScreen:r}),s=i.getTime();e.delayAll+=s-n;var c={isImgInFirstScreen:r||!1,isFromInternal:!(!t||!t.isFromInternal),firstScreenImages:a,firstScreenImagesLength:a.length,dotIndex:e.dotList.length,dotTimeStamp:n,dotTimeDuration:n-e.forcedNavStartTimeStamp,delay:s-n,finished:!1,isTargetDot:t&&t.isTargetDot||!1,firstScreenTimeStamp:-1,reportTimeFrom:"",firstScreenImagesDetail:[],maxErrorTime:"unkown"};if(e.dotList.push(c),a.length){var m=0,u=function(e){++m===a.length&&(c.finished=!0)},l=function(t){var r=i.getTime();return{loadTimeStamp:r,loadDuration:r-e.forcedNavStartTimeStamp,maxErrorTime:t.maxErrorTime,type:t.type}};i.forEach(a,function(t){if(e.imgMap[t])u();else{var r=new Image;if(r.src=i.formateUrlByAdd(t),r.complete){if(!e.imgMap[t]){var n=e.dotList[c.dotIndex-1]?c.dotTimeStamp-e.dotList[c.dotIndex-1].dotTimeStamp:0;e.imgMap[t]=l({maxErrorTime:n,type:"complete"})}u()}else r.onload=r.onerror=function(){e.imgMap[t]||(e.imgMap[t]=l({maxErrorTime:0,type:"onload"})),u()}}})}else c.finished=!0}}function c(){if(!e.hasStoppedObserve){e.hasStoppedObserve=!0,e.stopCatchingRequest=!0,i.stopWatchDomUpdate(e),i.stopCatchingRequest(e),clearInterval(e.intervalDotTimer),r({recordFirstScreen:!0});var n=function(){e.dotList.sort(function(e,t){return e.dotTimeStamp<t.dotTimeStamp?1:-1});var t,r=e.dotList.slice(1),n=e.dotList[0].firstScreenImages,o=function(e,t){for(var r=0,n=t.length;r<n;r++)if(-1===e.indexOf(t[r]))return!1;return!0};if(n.length>0){for(var i=0,a=r.length;i<a;i++)o(r[i].firstScreenImages,n)&&(t=r[i]);t||(t=e.dotList[0])}else(t=e.dotList[0]).firstScreenTimeStamp=performance.timing.domComplete,t.firstScreenTime=performance.timing.domComplete-e.forcedNavStartTimeStamp;return t}(e.dotList);e.onStableStatusFound(n),n.isTargetDot=!0,e.onAllXhrResolved&&e.onAllXhrResolved(n.dotTimeStamp);var o=null,s=function(){n.finished&&(!function(r){var n=e.dotList[0],o=function(){for(var t=[],r=n.firstScreenImages,o=0,i=r.length;o<i;o++){var a=r[o],s=e.imgMap[a];s&&t.push({src:a,type:s.type,maxErrorTime:s.maxErrorTime,loadTimeStamp:s.loadTimeStamp,loadDuration:s.loadDuration,from:"dot"})}return t.sort(function(e,t){return t.loadDuration-e.loadDuration}),t};0===r.firstScreenImages.length?/^hand/.test(e.reportDesc)?(r.firstScreenTimeStamp=e.handExcuteTime,r.reportTimeFrom="dot-hand-from-force",r.firstScreenImagesDetail=o(),t(r)):i.getDomReadyTime(e,function(e,n){r.firstScreenTimeStamp=e,r.reportTimeFrom=n,r.firstScreenImagesDetail=o(),t(r)}):function(){var s=function(t){var r=[];return i.forEach(t,function(t){r.push(e.imgMap[t])}),r.sort(function(e,t){return e.loadTimeStamp<t.loadTimeStamp?1:-1}),r[0]},c=function(e){var i=s(n.firstScreenImages);r.firstScreenTimeStamp=i.loadTimeStamp,r.maxErrorTime=i.maxErrorTime,r.reportTimeFrom=e,r.firstScreenImagesDetail=o(),t(r)};if(a.supportPerformance){!function(){var e=s(n.firstScreenImages);if(e&&"onload"===e.type)return!0;return!1}()?i.cycleGettingPerformaceTime(e,n.firstScreenImages,function(n){r.firstScreenImagesDetail=n.firstScreenImagesDetail,n.firstScreenTimeStamp<=e.forcedNavStartTimeStamp?c("dot-img-from-prepage-load"):(r.firstScreenTimeStamp=n.firstScreenTimeStamp,r.maxErrorTime=0,r.reportTimeFrom="dot-img-from-performance",t(r))}):c("dot-img-from-onload")}else c("dot-img-from-onload")}()}(n),clearInterval(o))};o=setInterval(s,1e3),s()}}return e.globalIndex="dot-"+s++,i.watchDomUpdate(e),{mergeUserConfig:function(t){i.mergeUserConfig(e,t)},testStaticPage:function(){i.testStaticPage(function(){c()},e)},observeDomChange:function(){var t,n=function(n){var o=i.getTime();t&&o-t<e.dotDelay||(t=o,r(n))};e.intervalDotTimer=setInterval(function(){n({isFromInternal:!0})},e.dotDelay),n()},overrideRequest:function(){i.overrideRequest(e,function(){c()})},recordDomInfo:r,onStopObserving:c,global:e}}e.exports={auto:function(e){var t=function(){var t=c();return t.global.reportDesc="auto-dot",t.mergeUserConfig(e),t.testStaticPage(),t.observeDomChange(),t.overrideRequest(),t},r=t(),n=r.global;return i.onNavigationStartChange(r.global,function(r){n.abortReport=!0,n.onNavigationStartChange(r),e.forcedNavStartTimeStamp=r.timeStamp,n=t().global}),r.global},hand:function(e){var t=c();t.global.reportDesc="hand-dot",t.global.handExcuteTime=(new Date).getTime(),t.mergeUserConfig(e),t.onStopObserving()}}},function(e,t){e.exports={watchingNavStartChange:!1,navigationTagChangeMap:{realChangeList:[],usedChangeList:[]},onloadFinished:!1,supportPerformance:"performance"in window&&"getEntriesByType"in window.performance&&window.performance.getEntriesByType("resource")instanceof Array}},function(e,t,r){var n=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,o=r(1),i=Array.prototype.slice;e.exports={version:"5.4.4",getDomReadyTime:function(e,t){if(e._isUsingOriginalNavStart){var r=0,n=function(){0!=performance.timing.domContentLoadedEventStart&&t(performance.timing.domContentLoadedEventStart,"domContentLoadedEventStart"),(++r>=50||0!=performance.timing.domContentLoadedEventStart)&&clearInterval(o)},o=setInterval(n,500);n()}else e.domUpdateTimeStamp?t(e.domUpdateTimeStamp,"domUpdateTimeStamp"):t(e.forcedNavStartTimeStamp,"forcedNavStartTimeStamp")},getImgSrcFromDom:function(e,t){var r;if("IMG"==e.nodeName.toUpperCase())r=e.getAttribute("src");else{var n=window.getComputedStyle(e),o=(n.getPropertyValue("background-image")||n.getPropertyValue("background")).match(/url\(.+\)/),i=o&&o[0];i&&(i=i.replace(/^url\([\'\"]?/,"").replace(/[\'\"]?\)$/,""),(/^http/.test(i)||/^\/\//.test(i))&&this._filteImg(i,t)&&(r=i))}return r},_filteImg:function(e,t){for(var r=0,n=t.length;r<n;r++)if(t[r].test(e))return!0;return!1},currentPos:{scrollTop:0,top:0,bottom:0,left:0,right:0},recordCurrentPos:function(e,t){var r,n=e.getBoundingClientRect(),o=document.querySelector(t.scrollWrapper);if(o){var i=o.getBoundingClientRect();r=i.top<0?-i.top:0}else r=document.documentElement.scrollTop||document.body.scrollTop;var a=n.top,s=n.bottom,c=n.left,m=n.right;this.currentPos.scrollTop=r,this.currentPos.top=a,this.currentPos.bottom=s,this.currentPos.left=c,this.currentPos.right=m},isInFirstScreen:function(e){if(!this.currentPos.top&&!this.currentPos.bottom)return!1;var t=window.innerHeight,r=window.innerWidth,n=this.currentPos.scrollTop,o=this.currentPos.top,i=this.currentPos.left,a=this.currentPos.right;return n+o<t&&a>0&&i<r},queryAllNode:function(e){var t=this;return document.createNodeIterator(document.body,NodeFilter.SHOW_ELEMENT,function(r){if(!t._shouldIgnoreNode(r,e))return NodeFilter.FILTER_ACCEPT})},_shouldIgnoreNode:function(e,t){for(var r=document.querySelectorAll(t),n=0,o=r.length;n<o;n++)if(this._isChild(e,r[n]))return!0;return!1},_isChild:function(e,t){for(var r=!1;e;){if(e===t){r=!0;break}e=e.parentNode}return r},parseUrl:function(e){var t=document.createElement("a");return t.href=e,t},transRequestDetails2Arr:function(e){var t=[],r={};for(var n in e.requestDetails){var o=n.split(">time")[0].replace(/^http(s)?:/,"").replace(/^\/\//,"");for(var i in r={src:o},e.requestDetails[n])r[i]=e.requestDetails[n][i];t.push(r)}return t},formateUrlByRemove:function(e){return e.replace(/^http(s)?\:/,"").replace(/^\/\//,"")},formateUrlByAdd:function(e){return/^http/.test(e)?e:/^\/\//.test(e)?window.location.protocol+e:window.location.protocol+"//"+e},initGlobal:function(){return{stopCatchingRequest:!1,isFirstRequestSent:!1,catchRequestTimeSections:[],ignoredImages:[],device:{},requestDetails:{},delayAll:0,ignoreTag:"[perf-ignore]",scrollWrapper:"[perf-scroll]",urlChangeStore:[],hasReported:!1,reportDesc:"",domUpdateTimeStamp:0,handExcuteTime:0,forcedNavStartTimeStamp:window.performance.timing.navigationStart,_originalNavStart:window.performance.timing.navigationStart,_isUsingOriginalNavStart:!0,abortReport:!1,onReport:function(){},onStableStatusFound:function(){},onNavigationStartChange:function(){},request:{limitedIn:[],exclude:[/(sockjs)|(socketjs)|(socket\.io)/]},renderTimeAfterGettingData:500,watingTimeWhenDefineStaticPage:2e3,img:[/(\.)(png|jpg|jpeg|gif|webp)/i],watchPerfStartChange:!0,delayReport:0,domChangeList:[],navigationStartChangeTag:["data-perf-start","perf-start"],navigationStartChangeDebounceTime:200,domUpdateMutationObserver:null,scriptLoadingMutationObserver:null,jsonpFilter:/callback=jsonp/,reportTimeFrom:""}},getTime:function(){return(new Date).getTime()},mergeGlobal:function(e,t){var r;for(r in t)e[r]=t[r];return e},forEach:function(e,t){if("object"==typeof e&&e.length)for(var r=0,n=e.length;r<n;r++)t(e[r],r)},overrideRequest:function(e,t){var r=this,o={},a=function(t){e.requestDetails[t]||(e.requestDetails[t]={status:"",completeTimeStamp:"",completeTime:"",type:""})},s=function(t,n){e.isFirstRequestSent||(e.isFirstRequestSent=!0);var i=t+">time:"+r.getTime();return a(i),e.requestDetails[i].status="sent",e.requestDetails[i].type=n,o[i]="start",{requestKey:i}},c=function(n){var i=r.getTime();a(n),e.requestDetails[n].status="complete",e.requestDetails[n].completeTimeStamp=i,e.requestDetails[n].completeTime=i-e.forcedNavStartTimeStamp,e.catchRequestTimeSections.push([i,i+e.renderTimeAfterGettingData]);var s=setTimeout(function(){o[n]="stopped",function(){for(var t in e.requestDetails)if(e.requestDetails[t]&&"complete"!==e.requestDetails[t].status)return!1;return!0}()&&function(){for(var e in o)if("stopped"!==o[e])return!1;return!0}()&&t(),clearTimeout(s)},e.renderTimeAfterGettingData)};!function(e,t){if(window.fetch&&"function"==typeof Promise){var r=window.fetch;window.fetch=function(){var n=this,o=arguments;return new Promise(function(i,a){var s,c;"string"==typeof o[0]?s=o[0]:"object"==typeof o[0]&&(s=o[0].url),s&&(c=e(s,"fetch").requestKey),r.apply(n,o).then(function(e){c&&t(c),i(e)}).catch(function(e){c&&t(c),a(e)})})}}}(s,c),function(t,n){var o=XMLHttpRequest.prototype,a=o.send;o.send=function(){if(function(t){var n=!0;e.stopCatchingRequest&&(n=!1);for(var o=r.getTime(),i=0;i<e.catchRequestTimeSections.length;i++){var a=e.catchRequestTimeSections[i];if(o>=a[0]&&o<=a[1])break}e.catchRequestTimeSections.length&&i===e.catchRequestTimeSections.length&&(n=!1);for(var s=0,c=e.request.limitedIn.length;s<c;s++)e.request.limitedIn[s].test(t)||(n=!1);for(s=0,c=e.request.exclude.length;s<c;s++)e.request.exclude[s].test(t)&&(n=!1);return n}(this._http.url)){var o=t(this._http.url,"xhr").requestKey,s=this.onreadystatechange;this.onreadystatechange=function(){4===this.readyState&&n(o),s&&s.apply&&s.apply(this,arguments)}}return a.apply(this,i.call(arguments))}}(s,c),function(t,o){var a={},s={},c=function(e){s[e]||(s[e]=!0,o(e))},m=function(r){var n=function(e){return/script/i.test(e.tagName)&&/^http/.test(e.src)?e.src:""}(r);if(n&&e.jsonpFilter.test(n)&&!a[n]){a[n]=!0;var o=t(n,"jsonp").requestKey,i=setTimeout(function(){c(o),clearTimeout(i)},3e3);r.readyState?r.addEventListener("readystatechange",function(){"loaded"!=script.readyState&&"complete"!=script.readyState||(c(o),clearTimeout(i))}):(r.addEventListener("load",function(){c(o),clearTimeout(i)}),r.addEventListener("error",function(){c(o),clearTimeout(i)}))}},u=function(e){for(var t=document.getElementsByTagName("script"),r=i.call(t,0),n=0,o=r.length;n<o;n++)e(r[n])};n?(e.scriptLoadingMutationObserver=new n(function(e,t){r.forEach(e,function(e){e.addedNodes&&r.forEach(e.addedNodes,function(e){m(e)})})}),e.scriptLoadingMutationObserver.observe(document.body,{attributes:!1,childList:!0,subtree:!0}),u(function(e){m(e)})):(e.scriptLoadingMutationObserverMockTimer=setInterval(function(){u(function(e){m(e)})},200),u(function(e){m(e)}))}(s,c)},stopCatchingRequest:function(e){e.scriptLoadingMutationObserverMockTimer&&clearInterval(e.scriptLoadingMutationObserverMockTimer),e.scriptLoadingMutationObserver&&e.scriptLoadingMutationObserver.disconnect()},mergeUserConfig:function(e,t){if(t){for(var r in t)-1!==["watingTimeWhenDefineStaticPage","onReport","onStableStatusFound","renderTimeAfterGettingData","onAllXhrResolved","onNavigationStartChange","watchPerfStartChange","forcedNavStartTimeStamp","delayReport","navigationStartChangeTag","jsonpFilter"].indexOf(r)&&(e[r]=t[r]);var n=t.request||t.xhr;n&&(n.limitedIn&&(e.request.limitedIn=e.request.limitedIn.concat(n.limitedIn)),n.exclude&&(e.request.exclude=e.request.exclude.concat(n.exclude))),t.img&&("object"==typeof t.img&&"function"==typeof t.img.test?e.img.push(t.img):console.error('[auto-compute-first-screen-time] param "img" should be type RegExp'))}e._isUsingOriginalNavStart=e.forcedNavStartTimeStamp==e._originalNavStart},testStaticPage:function(e,t){var r=function(){o.onloadFinished=!0;var r=setTimeout(function(){clearTimeout(r),t.isFirstRequestSent||e()},t.watingTimeWhenDefineStaticPage)};o.onloadFinished?r():window.addEventListener("load",r)},watchDomUpdate:function(e){n&&(e.domUpdateMutationObserver=new n(function(){e.domUpdateTimeStamp=(new Date).getTime(),e.domChangeList.unshift({timeStamp:e.domUpdateTimeStamp,duration:e.domUpdateTimeStamp-e.forcedNavStartTimeStamp})}),e.domUpdateMutationObserver.observe(document.body,{childList:!0,subtree:!0}))},stopWatchDomUpdate:function(e){e.domUpdateMutationObserver&&e.domUpdateMutationObserver.disconnect()},onNavigationStartChange:function(e,t){var r=this;if(e.watchPerfStartChange&&!o.watchingNavStartChange){o.watchingNavStartChange=!0;var i,a=o.navigationTagChangeMap.realChangeList,s=o.navigationTagChangeMap.usedChangeList,c=function(){var r=function(e){for(var t,r=0,n=e.length;r<n;r++)if(t=document.body.getAttribute(e[r]))return t;return""}(e.navigationStartChangeTag);if(function(e,t){return!(!t||t==e)||!(t||!e)}(i,r)){var n=(new Date).getTime(),o={preTagValue:i,curTagValue:r,value:r,timeStamp:n,time:n-e._originalNavStart};if(a.push(o),i=r,1===a.length)s.push(o);else{var c=s.length;n-s[c-1].timeStamp>=e.navigationStartChangeDebounceTime&&(s.push(o),t(o))}}};if(n)new n(function(t,n){r.forEach(t,function(t,r){-1!==e.navigationStartChangeTag.indexOf(t.attributeName)&&c()})}).observe(document.body,{attributes:!0,childList:!1,subtree:!1});else setInterval(c,250)}},cycleGettingPerformaceTime:function(e,t,r){var n=0,o=t.map(this.formateUrlByRemove),i=this,a=function(){var a,c,m=performance.getEntries(),u=0,l=[],f=[],d={};for(a=0,c=m.length;a<c;a++){var p=(g=m[a]).name;d[p]||(d[p]=!0,f.push(g))}for(a=0,c=f.length;a<c;a++){var g,S=(g=f[a]).name;if(-1!==o.indexOf(i.formateUrlByRemove(S))){u++;var v=parseInt(g.responseEnd),h=parseInt(g.fetchStart);l.push({src:S,responseEnd:v<0?0:v,fetchStart:h<0?0:h,from:"performance"})}}l.sort(function(e,t){return t.responseEnd-e.responseEnd}),u===t.length&&(clearInterval(s),r({firstScreenTime:parseInt(l[0].responseEnd),firstScreenTimeStamp:parseInt(l[0].responseEnd)+e._originalNavStart,firstScreenImagesDetail:l})),++n>=50&&clearInterval(s)},s=setInterval(a,1e3);a()},getByOnload:function(e,t,r,n){var o=this,i=[],a=function(t,r){var n=(new Date).getTime();i.push({src:t,responseEnd:n-e.forcedNavStartTimeStamp,fetchStart:"unkown",type:r})},s=(window.location.protocol,!0),c=0;o.forEach(t,function(n){var m=new Image;if(m.src=o.formateUrlByAdd(n),m.complete){if(c++,a(n,"complete"),c===t.length){var u=(new Date).getTime();i.sort(function(e,t){return t.responseEnd-e.responseEnd}),r({firstScreenTime:u-e.forcedNavStartTimeStamp,firstScreenTimeStamp:u+e._originalNavStart,firstScreenImagesDetail:i})}}else s=!1,m.onload=m.onerror=function(){if(c++,a(n,"onload"),c===t.length){var o=(new Date).getTime();i.sort(function(e,t){return t.responseEnd-e.responseEnd}),r({firstScreenTime:o-e.forcedNavStartTimeStamp,firstScreenTimeStamp:o+e._originalNavStart,firstScreenImagesDetail:i})}}}),s&&n()}}},function(e,t,r){var n=(new Date).getTime(),o=window,i=(o.document,r(2)),a=r(1),s=0;function c(){var e=i.mergeGlobal(i.initGlobal(),{hasStableFound:!1});function t(){if(!e.hasStableFound){i.stopWatchDomUpdate(e),i.stopCatchingRequest(e),e.hasStableFound=!0,e.stopCatchingRequest=!0;var t=c();e.onStableStatusFound(t)}}function r(t){var r=function(){return!e.hasReported&&!e.abortReport};if(t.ignoredImages=e.ignoredImages,t.device=e.device,t.success=!0,e.delayReport)var n=setTimeout(function(){r()&&(e.hasReported=!0,e.onReport(t)),clearTimeout(n)},e.delayReport);else r()&&e.onReport(t)}function c(){var t=i.getTime(),s=function(){var t=o.innerHeight,r=o.innerWidth;e.device.screenHeight=t,e.device.screenWidth=r;var n=i.queryAllNode(e.ignoreTag),a=n.nextNode(),s=[],c=function(e){var t=i.parseUrl(e).protocol;t&&0===t.indexOf("http")&&-1===s.indexOf(e)&&s.push(e)};for(;a;){var m=i.getImgSrcFromDom(a,e.img);if(m){if(i.recordCurrentPos(a,e),i.isInFirstScreen(a))c(m);else{var u=i.currentPos;e.ignoredImages.push({src:m,screenHeight:t,screenWidth:r,scrollTop:u.scrollTop,top:u.top,bottom:u.bottom,vertical:u.scrollTop+u.top<=t,left:u.left,right:u.right,horizontal:u.right>=0&&u.left<=r})}a=n.nextNode()}else a=n.nextNode()}return s}(),c=i.getTime(),m={type:"perf",isStaticPage:!e.isFirstRequestSent&&(!!/auto/.test(e.reportDesc)||"unknown"),firstScreenImages:[],firstScreenImagesLength:0,firstScreenImagesDetail:[],requests:i.transRequestDetails2Arr(e),delayAll:c-t,delayFirstScreen:c-t,firstScreenTime:-1,firstScreenTimeStamp:-1,maxErrorTime:0,navigationStartTimeStamp:e.forcedNavStartTimeStamp,navigationStartTime:e.forcedNavStartTimeStamp-e._originalNavStart,isOriginalNavStart:e.forcedNavStartTimeStamp===e._originalNavStart,version:i.version,runtime:i.getTime()-n,reportDesc:e.reportDesc,url:window.location.href.substring(0,200),globalIndex:e.globalIndex,domChangeList:e.domChangeList,navigationTagChangeMap:a.navigationTagChangeMap,reportTimeFrom:e.reportTimeFrom};return m.firstScreenImages=s,m.firstScreenImagesLength=s.length,s.length?i.getByOnload(e,s,function(e){m.firstScreenTime=e.firstScreenTime,m.firstScreenTimeStamp=e.firstScreenTimeStamp,m.firstScreenImagesDetail=e.firstScreenImagesDetail,m.reportTimeFrom="perf-img-from-onload",r(m)},function(){i.cycleGettingPerformaceTime(e,s,function(e){m.firstScreenTime=e.firstScreenTime,m.firstScreenTimeStamp=e.firstScreenTimeStamp,m.firstScreenImagesDetail=e.firstScreenImagesDetail,m.reportTimeFrom="perf-img-from-performance",r(m)})}):/^hand/.test(e.reportDesc)?(m.firstScreenTimeStamp=e.handExcuteTime,m.firstScreenTime=e.handExcuteTime-e._originalNavStart,m.reportTimeFrom="perf-hand-from-force",r(m)):i.getDomReadyTime(e,function(t,n){m.firstScreenTimeStamp=t,m.firstScreenTime=t-e._originalNavStart,m.reportTimeFrom=n,r(m)}),m}return e.globalIndex="perf-"+s++,i.watchDomUpdate(e),{mergeUserConfig:function(t){i.mergeUserConfig(e,t)},testStaticPage:function(){i.testStaticPage(function(){t()},e)},overrideRequest:function(){i.overrideRequest(e,function(){t()})},recordFirstScreenInfo:c,global:e}}e.exports={auto:function(e){var t=function(){var t=c();return t.global.reportDesc="auto-perf",t.mergeUserConfig(e),t.testStaticPage(),t.overrideRequest(),t}(),n=t.global;return i.onNavigationStartChange(t.global,function(t){n.abortReport=!0,n.onNavigationStartChange(t),e.forcedNavStartTimeStamp=t.timeStamp,n=r(0).auto(e)}),t.global},hand:function(e){var t=c();t.global.reportDesc="hand-perf",t.global.handExcuteTime=(new Date).getTime(),t.mergeUserConfig(e),t.recordFirstScreenInfo("perf-hand")}}},function(e,t,r){var n=!!document.querySelector,o="performance"in window&&"getEntriesByType"in window.performance&&window.performance.getEntriesByType("resource")instanceof Array,i=window.performance&&window.performance.timing,a=function(){};if(n){var s=document.querySelector("[perf-dot]")===document.body;Math.random()>function(){var e=document.body.getAttribute("perf-random");return"object"==typeof e&&null===e&&(e=1),"string"==typeof e&&(e=e.replace(/\s*/,"")?parseFloat(e):1),e||0===e||(e=1),e>1&&(e=1),e<0&&(e=0),e}()?(e.exports=a,e.exports.report=a):s?i?(e.exports=r(0).auto,e.exports.report=r(0).hand):(e.exports=a,e.exports.report=a):o?(e.exports=r(3).auto,e.exports.report=r(3).hand):i?(e.exports=r(0).auto,e.exports.report=r(0).hand):(e.exports=a,e.exports.report=a)}else e.exports=a,e.exports.report=a}])});