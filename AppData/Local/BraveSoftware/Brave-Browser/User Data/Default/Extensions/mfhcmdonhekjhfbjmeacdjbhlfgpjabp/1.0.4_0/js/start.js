"use strict";webSafety.restart=function(){var e,a=webSafety;vAPI.app.onShutdown=function(){};var t=function(e){var a=new Date(e),t=(Date.now(),a.getTime(),adawareCloudService.getMetrics());t.LastCallbackDate=a.toISOString(),adawareTelemetry.sendEventTrackingInfo("DailyActivity",t),adawareCloudService.resetMetrics()};var n=function(e,a){return new Promise(function(t,n){adawareUtils.fetchWebCompanionData(function(a){var n=e(a);t(n)},function(){var e=a();n(e)},"http://localhost:9007/webcompanion/extension/wsext/token")})},r=function(){var e=Date.now();vAPI.storage.set({installDate:e}),adawareTelemetry.setInstallDate(e),function(){var e;try{chrome.tabs.query({url:"http://*.adaware.com/*"},function(a){a.length>0&&(e=a[0],chrome.tabs.executeScript(e.id,{code:'localStorage.getItem("configuration");'},function(e){var a;a=JSON.parse(e[0]),chrome.storage.sync.set({config:a})}))})}catch(e){}}(),function(){function e(e){return new Promise(function(a,t){var n=e;chrome.storage.sync.get("config",function(e){e&&Object.keys(e).length>0?(n.externalData.CampaignID=e.config.campaignId,n.externalData.sourceTraffic=e.config.sourceTraffic):(n.externalData.sourceTraffic="",n.externalData.CampaignID=""),a(n)})})}function t(e){return new Promise(function(a,t){try{let n=e;chrome.tabs.query({url:"https://webcompanion.com/w*"},e=>{if(e.length>0){let a=e[0].url,t={};decodeURIComponent(a.slice(a.indexOf("?")+1)).split("&").forEach((e,a)=>{let n=e.split("=",2);t[n[0]]=n[1]}),Object.keys(t).length>0&&(n.externalData.PartnerID=t.partnerId?t.partnerId:"",n.externalData.CampaignID=t.utm_campaign?t.utm_campaign:"",n.externalData.sourceTraffic=t.sourceTraffic?t.sourceTraffic:"",n.trackingData.MK=t.mk?t.mk:"",n.trackingData.IK=t.ik?t.ik:"")}a(n)})}catch(e){t(e)}})}n(function(e){var a=JSON.parse(JSON.parse(e)).data;return{trackingData:{MK:a.mk||"",IK:a.ik||""},externalData:{CampaignID:a.campaignId||"",PartnerID:a.pid||"",sourceTraffic:a.sourceTraffic||""}}},function(){return{trackingData:{MK:"",IK:""},externalData:{CampaignID:"",PartnerID:"",sourceTraffic:""}}}).then(e,e).then(t,t).then(function(e){adawareTelemetry.setExternalData(e.externalData),a.saveExternalData(),adawareTelemetry.sendEventTrackingInfo("CompleteInstall",e.trackingData),adawareTelemetry.setupUninstall()})}()},i=function(e){var i=[];i.push(new Promise(function(e,a){vAPI.storage.get({externalData:adawareTelemetry.getExternalData()},function(a){adawareTelemetry.setExternalData(a.externalData),e("externalData")})})),Promise.all(i).then(function(i){"install"===e.reason?r():"update"===e.reason?function(e){vAPI.storage.get({installDate:Date.now()},function(e){adawareTelemetry.setInstallDate(e.installDate)}),function(){function t(e){e.externalData&&(adawareTelemetry.setExternalData(e.externalData),a.saveExternalData()),adawareTelemetry.sendEventTrackingInfo("CompleteUpdate",e.trackingData),adawareTelemetry.setupUninstall()}n(function(a){var t=JSON.parse(JSON.parse(a)).data;return{trackingData:{FromExtensionVersion:e,MK:t.mk||"",IK:t.ik||"",WCVersion:t.WCVersion||""},externalData:{CampaignID:t.campaignId||"",PartnerID:t.pid||""}}},function(){return{trackingData:{FromExtensionVersion:e,MK:"",IK:"",WCVersion:""}}}).then(t,t)}()}(e.lastVersion):"startup"===e.reason&&(vAPI.storage.get({installDate:Date.now()},function(e){adawareTelemetry.setInstallDate(e.installDate)}),vAPI.storage.get({startupTime:Date.now()},function(e){Date.now()-e.startupTime>864e5&&t(e.startupTime),vAPI.storage.set({startupTime:Date.now()})}))})},o=function(n){n.version!==vAPI.app.version&&vAPI.storage.set({version:vAPI.app.version}),a.hnSwitches.fromString(n.hostnameSwitchesString),e=Date.now(),setInterval(function(){t(e),e=Date.now()},864e5)};return function(){vAPI.capturePreOpenedTabUrls();adawareCloudService.init(),vAPI.onExtensionLaunch(i);vAPI.storage.get({version:"0.0.0.0",hostnameSwitchesString:""},o)}}(),webSafety.restart(),chrome.runtime.onMessage.addListener(function(e,a,t){"contentUrls"==e.contents&&t({urls:adawareCloudService.filterUrlsRequest(e.urls)})});