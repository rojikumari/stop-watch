"use strict";webSafety.URI=function(){var t=/^([^:\/?#]+:)?(\/\/[^\/?#]*)?([^?#]*)(\?[^#]*)?(#.*)?/,i=/^[^:\/?#]+:/,e=/^(?:[^:\/?#]+:)?(\/\/[^\/?#]+)/,s=/^(?:[^:\/?#]+:)?(?:\/\/[^\/?#]+)/,n=/^https?:\/\/([0-9a-z_][0-9a-z._-]*[0-9a-z])\//,r=/^(?:[^:\/?#]+:)?(?:\/\/[^\/?#]*)?([^?#]*)/,o=/^(?:[^@]*@)?([0-9a-z._-]*)(:\d*)?$/i,a=/^(?:[^@]*@)?(\[[0-9a-f:]*\])(:\d*)?$/i,h=/^[0-9a-z._-]+[0-9a-z]$/i,u=/^(?:[^@]*@)?([0-9a-z._-]+)(?::\d*)?$/i,m=/^(?:[^@]*@)?(\[[0-9a-f:]+\])(?::\d*)?$/i,c=/^([a-z\d]+(-*[a-z\d]+)*)(\.[a-z\d]+(-*[a-z\d])*)*$/,p=function(t){return t.scheme="",t.hostname="",t._ipv4=void 0,t._ipv6=void 0,t.port="",t.path="",t.query="",t.fragment="",t},f={scheme:"",authority:"",hostname:"",_ipv4:void 0,_ipv6:void 0,port:"",domain:void 0,path:"",query:"",fragment:"",schemeBit:1,userBit:2,passwordBit:4,hostnameBit:8,portBit:16,pathBit:32,queryBit:64,fragmentBit:128,allBits:65535};f.authorityBit=f.userBit|f.passwordBit|f.hostnameBit|f.portBit,f.normalizeBits=f.schemeBit|f.hostnameBit|f.pathBit|f.queryBit,f.set=function(i){if(void 0===i)return p(f);var e,s=t.exec(i);return s?(this.scheme=void 0!==s[1]?s[1].slice(0,-1):"",this.authority=void 0!==s[2]?s[2].slice(2).toLowerCase():"",this.path=void 0!==s[3]?s[3]:"",""!==this.authority&&""===this.path&&(this.path="/"),this.query=void 0!==s[4]?s[4].slice(1):"",this.fragment=void 0!==s[5]?s[5].slice(1):"",h.test(this.authority)?(this.hostname=this.authority,this.port="",this):(s=o.exec(this.authority))||(s=a.exec(this.authority))?(this.hostname=void 0!==s[1]?s[1]:"",this.hostname.endsWith(".")&&(this.hostname=this.hostname.slice(0,-1)),this.port=void 0!==s[2]?s[2].slice(1):"",this):((e=f).hostname="",e._ipv4=void 0,e._ipv6=void 0,e.port="",e)):p(f)},f.assemble=function(t){void 0===t&&(t=this.allBits);var i=[];return this.scheme&&t&this.schemeBit&&i.push(this.scheme,":"),this.hostname&&t&this.hostnameBit&&i.push("//",this.hostname),this.port&&t&this.portBit&&i.push(":",this.port),this.path&&t&this.pathBit&&i.push(this.path),this.query&&t&this.queryBit&&i.push("?",this.query),this.fragment&&t&this.fragmentBit&&i.push("#",this.fragment),i.join("")},f.originFromURI=function(t){var i=s.exec(t);return null!==i?i[0].toLowerCase():""},f.schemeFromURI=function(t){var e=i.exec(t);return e?e[0].slice(0,-1).toLowerCase():""},f.authorityFromURI=function(t){var i=e.exec(t);return i?i[1].slice(2).toLowerCase():""},f.hostnameFromURI=function(t){var i=n.exec(t);if(i)return i[1];if(!(i=e.exec(t)))return"";var s=i[1].slice(2);if(h.test(s))return s.toLowerCase();if(!(i=u.exec(s))&&!(i=m.exec(s)))return"";for(var r=i[1];r.endsWith(".");)r=r.slice(0,-1);return r.toLowerCase()},f.domainFromHostname=function(t){var i=d[t];return void 0!==i?(i.tstamp=Date.now(),i.domain):y(t,t)},f.domain=function(){return this.domainFromHostname(this.hostname)},f.pathFromURI=function(t){var i=r.exec(t);return null!==i?i[1]:""};var d=Object.create(null),v=0,l=function(t){this.init(t)};l.prototype.init=function(t){return this.domain=t,this.tstamp=Date.now(),this},l.prototype.dispose=function(){this.domain="",B.length<15&&B.push(this)};var B=[],y=function(t,i){var e=d[t];return void 0!==e?e.tstamp=Date.now():(d[t]=function(t){var i=B.pop();return i?i.init(t):new l(t)}(i),50===(v+=1)&&F()),i},w=function(t,i){return d[i].tstamp-d[t].tstamp},F=function(){var t,i=Object.keys(d).sort(w).slice(35),e=i.length;for(v-=e;e--;)t=i[e],d[t].dispose(),delete d[t]};return f.domainFromURI=function(t){return t?this.domainFromHostname(this.hostnameFromURI(t)):""},f.isNetworkURI=function(t){return/^(?:ftps?|https?|wss?):\/\//.test(t)},f.isNetworkScheme=function(t){return/^(?:ftps?|https?|wss?)$/.test(t)},f.normalizedURI=function(){return this.assemble(this.normalizeBits)},f.rootURL=function(){return this.hostname?this.assemble(this.schemeBit|this.hostnameBit):""},f.isValidHostname=function(t){var i;try{i=c.test(t)}catch(t){return!1}return i},f.parentHostnameFromHostname=function(t){var i=this.domainFromHostname(t);if(""!==i&&i!==t)return t.slice(t.indexOf(".")+1)},f.parentHostnamesFromHostname=function(t){var i=this.domainFromHostname(t);if(""===i||i===t)return[];for(var e,s=[];!((e=t.indexOf("."))<0)&&(t=t.slice(e+1),s.push(t),t!==i););return s},f.allHostnamesFromHostname=function(t){var i=this.parentHostnamesFromHostname(t);return i.unshift(t),i},f.toString=function(){return this.assemble()},f}();