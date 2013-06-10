/*!
 * jQuery Form Plugin
 * version: 3.32.0-2013.04.09
 * @requires jQuery v1.5 or later
 * Copyright (c) 2013 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */

(function(c){function s(a){var j=a.data;a.isDefaultPrevented()||(a.preventDefault(),c(this).ajaxSubmit(j))}function n(a){var j=a.target,e=c(j);if(!e.is("[type=submit],[type=image]")){j=e.closest("[type=submit]");if(0===j.length)return;j=j[0]}var b=this;b.clk=j;"image"==j.type&&(void 0!==a.offsetX?(b.clk_x=a.offsetX,b.clk_y=a.offsetY):"function"==typeof c.fn.offset?(e=e.offset(),b.clk_x=a.pageX-e.left,b.clk_y=a.pageY-e.top):(b.clk_x=a.pageX-j.offsetLeft,b.clk_y=a.pageY-j.offsetTop));setTimeout(function(){b.clk=b.clk_x=b.clk_y=null},100)}function q(){if(c.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(a):window.opera&&window.opera.postError&&window.opera.postError(a)}}var A,B;A=void 0!==c("<input type='file'/>").get(0).files;B=void 0!==window.FormData;var C=!!c.fn.prop;c.fn.attr2=function(){if(!C)return this.attr.apply(this,arguments);var a=this.prop.apply(this,arguments);return a&&a.jquery||"string"===typeof a?a:this.attr.apply(this,arguments)};c.fn.ajaxSubmit=function(a){function j(b){function j(a){var b=null;try{a.contentWindow&&(b=a.contentWindow.document)}catch(c){q("cannot get iframe.contentWindow document: "+c)}if(b)return b;try{b=a.contentDocument?a.contentDocument:a.document}catch(d){q("cannot get iframe.contentDocument: "+d),b=a.document}return b}function f(){function a(){try{var b=j(t).readyState;q("state = "+b);b&&"uninitialized"==b.toLowerCase()&&setTimeout(a,50)}catch(c){q("Server abort: ",c," (",c.name,")"),m(A),u&&clearTimeout(u),u=void 0}}var b=k.attr2("target"),h=k.attr2("action");l.setAttribute("target",n);e||l.setAttribute("method","POST");h!=d.url&&l.setAttribute("action",d.url);!d.skipEncodingOverride&&(!e||/post/i.test(e))&&k.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});d.timeout&&(u=setTimeout(function(){v=!0;m(D)},d.timeout));var g=[];try{if(d.extraData)for(var y in d.extraData)d.extraData.hasOwnProperty(y)&&(c.isPlainObject(d.extraData[y])&&d.extraData[y].hasOwnProperty("name")&&d.extraData[y].hasOwnProperty("value")?g.push(c('<input type="hidden" name="'+d.extraData[y].name+'">').val(d.extraData[y].value).appendTo(l)[0]):g.push(c('<input type="hidden" name="'+y+'">').val(d.extraData[y]).appendTo(l)[0]));d.iframeTarget||(w.appendTo("body"),t.attachEvent?t.attachEvent("onload",m):t.addEventListener("load",m,!1));setTimeout(a,15);try{l.submit()}catch(r){document.createElement("form").submit.apply(l)}}finally{l.setAttribute("action",h),b?l.setAttribute("target",b):k.removeAttr("target"),c(g).remove()}}function m(a){if(!h.aborted&&!H)if(r=j(t),r||(q("cannot access response document"),a=A),a===D&&h)h.abort("timeout"),x.reject(h,"timeout");else if(a==A&&h)h.abort("server abort"),x.reject(h,"error","server abort");else if(r&&r.location.href!=d.iframeSrc||v){t.detachEvent?t.detachEvent("onload",m):t.removeEventListener("load",m,!1);a="success";var b;try{if(v)throw"timeout";var f="xml"==d.dataType||r.XMLDocument||c.isXMLDoc(r);q("isXml="+f);if(!f&&(window.opera&&(null===r.body||!r.body.innerHTML))&&--E){q("requeing onLoad callback, DOM not available");setTimeout(m,250);return}var e=r.body?r.body:r.documentElement;h.responseText=e?e.innerHTML:null;h.responseXML=r.XMLDocument?r.XMLDocument:r;f&&(d.dataType="xml");h.getResponseHeader=function(a){return{"content-type":d.dataType}[a]};e&&(h.status=Number(e.getAttribute("status"))||h.status,h.statusText=e.getAttribute("statusText")||h.statusText);var g=(d.dataType||"").toLowerCase(),l=/(json|script|text)/.test(g);if(l||d.textarea){var k=r.getElementsByTagName("textarea")[0];if(k)h.responseText=k.value,h.status=Number(k.getAttribute("status"))||h.status,h.statusText=k.getAttribute("statusText")||h.statusText;else if(l){var p=r.getElementsByTagName("pre")[0],n=r.getElementsByTagName("body")[0];p?h.responseText=p.textContent?p.textContent:p.innerText:n&&(h.responseText=n.textContent?n.textContent:n.innerText)}}else"xml"==g&&(!h.responseXML&&h.responseText)&&(h.responseXML=J(h.responseText));try{var f=h,e=d,F=f.getResponseHeader("content-type")||"",G="xml"===g||!g&&0<=F.indexOf("xml"),z=G?f.responseXML:f.responseText;G&&"parsererror"===z.documentElement.nodeName&&c.error&&c.error("parsererror");e&&e.dataFilter&&(z=e.dataFilter(z,g));"string"===typeof z&&("json"===g||!g&&0<=F.indexOf("json")?z=K(z):("script"===g||!g&&0<=F.indexOf("javascript"))&&c.globalEval(z));B=z}catch(I){a="parsererror",h.error=b=I||a}}catch(C){q("error caught: ",C),a="error",h.error=b=C||a}h.aborted&&(q("upload aborted"),a=null);h.status&&(a=200<=h.status&&300>h.status||304===h.status?"success":"error");"success"===a?(d.success&&d.success.call(d.context,B,"success",h),x.resolve(h.responseText,"success",h),s&&c.event.trigger("ajaxSuccess",[h,d])):a&&(void 0===b&&(b=h.statusText),d.error&&d.error.call(d.context,h,a,b),x.reject(h,"error",b),s&&c.event.trigger("ajaxError",[h,d,b]));s&&c.event.trigger("ajaxComplete",[h,d]);s&&!--c.active&&c.event.trigger("ajaxStop");d.complete&&d.complete.call(d.context,h,a);H=!0;d.timeout&&clearTimeout(u);setTimeout(function(){d.iframeTarget||w.remove();h.responseXML=null},100)}}var l=k[0],g,d,s,n,w,t,h,v,u,x=c.Deferred();if(b)for(g=0;g<p.length;g++)b=c(p[g]),C?b.prop("disabled",!1):b.removeAttr("disabled");d=c.extend(!0,{},c.ajaxSettings,a);d.context=d.context||d;n="jqFormIO"+(new Date).getTime();d.iframeTarget?(w=c(d.iframeTarget),(g=w.attr2("name"))?n=g:w.attr2("name",n)):(w=c('<iframe name="'+n+'" src="'+d.iframeSrc+'" />'),w.css({position:"absolute",top:"-1000px",left:"-1000px"}));t=w[0];h={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(a){var b="timeout"===a?"timeout":"aborted";q("aborting upload... "+b);this.aborted=1;try{t.contentWindow.document.execCommand&&t.contentWindow.document.execCommand("Stop")}catch(e){}w.attr("src",d.iframeSrc);h.error=b;d.error&&d.error.call(d.context,h,b,a);s&&c.event.trigger("ajaxError",[h,d,b]);d.complete&&d.complete.call(d.context,h,b)}};(s=d.global)&&0===c.active++&&c.event.trigger("ajaxStart");s&&c.event.trigger("ajaxSend",[h,d]);if(d.beforeSend&&!1===d.beforeSend.call(d.context,h,d))return d.global&&c.active--,x.reject(),x;if(h.aborted)return x.reject(),x;if(b=l.clk)if((g=b.name)&&!b.disabled)d.extraData=d.extraData||{},d.extraData[g]=b.value,"image"==b.type&&(d.extraData[g+".x"]=l.clk_x,d.extraData[g+".y"]=l.clk_y);var D=1,A=2;b=c("meta[name=csrf-token]").attr("content");if((g=c("meta[name=csrf-param]").attr("content"))&&b)d.extraData=d.extraData||{},d.extraData[g]=b;d.forceSync?f():setTimeout(f,10);var B,r,E=50,H,J=c.parseXML||function(a,b){window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml");return b&&b.documentElement&&"parsererror"!=b.documentElement.nodeName?b:null},K=c.parseJSON||function(a){return window.eval("("+a+")")};return x}if(!this.length)return q("ajaxSubmit: skipping submit process - no element selected"),this;var e,b,k=this;"function"==typeof a&&(a={success:a});e=this.attr2("method");b=this.attr2("action");(b=(b="string"===typeof b?c.trim(b):"")||window.location.href||"")&&(b=(b.match(/^([^#]+)/)||[])[1]);a=c.extend(!0,{url:b,success:c.ajaxSettings.success,type:e||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},a);b={};this.trigger("form-pre-serialize",[this,a,b]);if(b.veto)return q("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(a.beforeSerialize&&!1===a.beforeSerialize(this,a))return q("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var m=a.traditional;void 0===m&&(m=c.ajaxSettings.traditional);var p=[],f,g=this.formToArray(a.semantic,p);a.data&&(a.extraData=a.data,f=c.param(a.data,m));if(a.beforeSubmit&&!1===a.beforeSubmit(g,this,a))return q("ajaxSubmit: submit aborted via beforeSubmit callback"),this;this.trigger("form-submit-validate",[g,this,a,b]);if(b.veto)return q("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;b=c.param(g,m);f&&(b=b?b+"&"+f:f);"GET"==a.type.toUpperCase()?(a.url+=(0<=a.url.indexOf("?")?"&":"?")+b,a.data=null):a.data=b;var l=[];a.resetForm&&l.push(function(){k.resetForm()});a.clearForm&&l.push(function(){k.clearForm(a.includeHidden)});if(!a.dataType&&a.target){var D=a.success||function(){};l.push(function(b){var e=a.replaceTarget?"replaceWith":"html";c(a.target)[e](b).each(D,arguments)})}else a.success&&l.push(a.success);a.success=function(b,c,e){for(var f=a.context||this,g=0,j=l.length;g<j;g++)l[g].apply(f,[b,c,e||k,k])};f=0<c('input[type=file]:enabled[value!=""]',this).length;b="multipart/form-data"==k.attr("enctype")||"multipart/form-data"==k.attr("encoding");m=A&&B;q("fileAPI :"+m);var u;if(!1!==a.iframe&&(a.iframe||(f||b)&&!m))a.closeKeepAlive?c.get(a.closeKeepAlive,function(){u=j(g)}):u=j(g);else if((f||b)&&m){var s=new FormData;for(b=0;b<g.length;b++)s.append(g[b].name,g[b].value);if(a.extraData){b=c.param(a.extraData).split("&");m=b.length;f=[];var v,n;for(v=0;v<m;v++)b[v]=b[v].replace(/\+/g," "),n=b[v].split("="),f.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);for(b=0;b<f.length;b++)f[b]&&s.append(f[b][0],f[b][1])}a.data=null;f=c.extend(!0,{},c.ajaxSettings,a,{contentType:!1,processData:!1,cache:!1,type:e||"POST"});a.uploadProgress&&(f.xhr=function(){var b=jQuery.ajaxSettings.xhr();b.upload&&b.upload.addEventListener("progress",function(b){var c=0,e=b.loaded||b.position,f=b.total;b.lengthComputable&&(c=Math.ceil(100*(e/f)));a.uploadProgress(b,e,f,c)},!1);return b});f.data=null;var E=f.beforeSend;f.beforeSend=function(a,b){b.data=s;E&&E.call(this,a,b)};u=c.ajax(f)}else u=c.ajax(a);k.removeData("jqxhr").data("jqxhr",u);for(f=0;f<p.length;f++)p[f]=null;this.trigger("form-submit-notify",[this,a]);return this};c.fn.ajaxForm=function(a){a=a||{};a.delegation=a.delegation&&c.isFunction(c.fn.on);if(!a.delegation&&0===this.length){var j=this.selector,e=this.context;if(!c.isReady&&j)return q("DOM not ready, queuing ajaxForm"),c(function(){c(j,e).ajaxForm(a)}),this;q("terminating; zero elements found by selector"+(c.isReady?"":" (DOM not ready)"));return this}return a.delegation?(c(document).off("submit.form-plugin",this.selector,s).off("click.form-plugin",this.selector,n).on("submit.form-plugin",this.selector,a,s).on("click.form-plugin",this.selector,a,n),this):this.ajaxFormUnbind().bind("submit.form-plugin",a,s).bind("click.form-plugin",a,n)};c.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};c.fn.formToArray=function(a,j){var e=[];if(0===this.length)return e;var b=this[0],k=a?b.getElementsByTagName("*"):b.elements;if(!k)return e;var m,p,f,g,l,n;m=0;for(n=k.length;m<n;m++)if(l=k[m],(f=l.name)&&!l.disabled)if(a&&b.clk&&"image"==l.type)b.clk==l&&(e.push({name:f,value:c(l).val(),type:l.type}),e.push({name:f+".x",value:b.clk_x},{name:f+".y",value:b.clk_y}));else if((g=c.fieldValue(l,!0))&&g.constructor==Array){j&&j.push(l);p=0;for(l=g.length;p<l;p++)e.push({name:f,value:g[p]})}else if(A&&"file"==l.type)if(j&&j.push(l),g=l.files,g.length)for(p=0;p<g.length;p++)e.push({name:f,value:g[p],type:l.type});else e.push({name:f,value:"",type:l.type});else null!==g&&"undefined"!=typeof g&&(j&&j.push(l),e.push({name:f,value:g,type:l.type,required:l.required}));if(!a&&b.clk&&(k=c(b.clk),m=k[0],(f=m.name)&&!m.disabled&&"image"==m.type))e.push({name:f,value:k.val()}),e.push({name:f+".x",value:b.clk_x},{name:f+".y",value:b.clk_y});return e};c.fn.formSerialize=function(a){return c.param(this.formToArray(a))};c.fn.fieldSerialize=function(a){var j=[];this.each(function(){var e=this.name;if(e){var b=c.fieldValue(this,a);if(b&&b.constructor==Array)for(var k=0,m=b.length;k<m;k++)j.push({name:e,value:b[k]});else null!==b&&"undefined"!=typeof b&&j.push({name:this.name,value:b})}});return c.param(j)};c.fn.fieldValue=function(a){for(var j=[],e=0,b=this.length;e<b;e++){var k=c.fieldValue(this[e],a);null===k||("undefined"==typeof k||k.constructor==Array&&!k.length)||(k.constructor==Array?c.merge(j,k):j.push(k))}return j};c.fieldValue=function(a,j){var e=a.name,b=a.type,k=a.tagName.toLowerCase();void 0===j&&(j=!0);if(j&&(!e||a.disabled||"reset"==b||"button"==b||("checkbox"==b||"radio"==b)&&!a.checked||("submit"==b||"image"==b)&&a.form&&a.form.clk!=a||"select"==k&&-1==a.selectedIndex))return null;if("select"==k){var m=a.selectedIndex;if(0>m)return null;for(var e=[],k=a.options,n=(b="select-one"==b)?m+1:k.length,m=b?m:0;m<n;m++){var f=k[m];if(f.selected){var g=f.value;g||(g=f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value);if(b)return g;e.push(g)}}return e}return c(a).val()};c.fn.clearForm=function(a){return this.each(function(){c("input,select,textarea",this).clearFields(a)})};c.fn.clearFields=c.fn.clearInputs=function(a){var j=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,b=this.tagName.toLowerCase();if(j.test(e)||"textarea"==b)this.value="";else if("checkbox"==e||"radio"==e)this.checked=!1;else if("select"==b)this.selectedIndex=-1;else if("file"==e)/MSIE/.test(navigator.userAgent)?c(this).replaceWith(c(this).clone(!0)):c(this).val("");else if(a&&(!0===a&&/hidden/.test(e)||"string"==typeof a&&c(this).is(a)))this.value=""})};c.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})};c.fn.enable=function(a){void 0===a&&(a=!0);return this.each(function(){this.disabled=!a})};c.fn.selected=function(a){void 0===a&&(a=!0);return this.each(function(){var j=this.type;"checkbox"==j||"radio"==j?this.checked=a:"option"==this.tagName.toLowerCase()&&(j=c(this).parent("select"),a&&(j[0]&&"select-one"==j[0].type)&&j.find("option").selected(!1),this.selected=a)})};c.fn.ajaxSubmit.debug=!1})(jQuery);