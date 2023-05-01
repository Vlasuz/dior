(function(d){"function"===typeof define&&define.amd?define(["jquery"],d):d(jQuery)})(function(d){function n(b){b=f.json?JSON.stringify(b):String(b);return f.raw?b:encodeURIComponent(b)}function l(b,e){var a;if(f.raw)a=b;else a:{var c=b;0===c.indexOf('"')&&(c=c.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{c=decodeURIComponent(c.replace(m," "))}catch(g){a=void 0;break a}try{a=f.json?JSON.parse(c):c;break a}catch(l$0){}a=void 0}return d.isFunction(e)?e(a):a}var m=/\+/g,f=d.cookie=function(b,
e,a){if(void 0!==e&&!d.isFunction(e)){a=d.extend({},f.defaults,a);if("number"===typeof a.expires){var c=a.expires,g=a.expires=new Date;g.setDate(g.getDate()+c)}return document.cookie=[f.raw?b:encodeURIComponent(b),"=",n(e),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}a=b?void 0:{};for(var c=document.cookie?document.cookie.split("; "):[],g=0,m=c.length;g<m;g++){var h=c[g].split("="),k;k=h.shift();k=f.raw?
k:decodeURIComponent(k);h=h.join("=");if(b&&b===k){a=l(h,e);break}b||void 0===(h=l(h))||(a[k]=h)}return a};f.defaults={};d.removeCookie=function(b,e){return void 0!==d.cookie(b)?(d.cookie(b,"",d.extend({},e,{expires:-1})),!0):!1}});
(function(e){e.fn.alterClass=function(t,n){var r=this;if(t.indexOf("*")===-1){r.removeClass(t);return!n?r:r.addClass(n)}var i=new RegExp("\\s"+t.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g");r.each(function(t,n){var r=" "+n.className+" ";while(i.test(r))r=r.replace(i," ");n.className=e.trim(r)});return!n?r:r.addClass(n)}})(jQuery);
jQuery(function($){var body=$("body");var openerClass="layout-active";var activeClass="popup-active";var loginHolder=$("#login");var forgetHolder=$("#fpass");var ua=navigator.userAgent;var iOS=/iPad|iPhone|iPod/.test(ua);var iOS11=/OS 11_0|OS 11_1|OS 11_2/.test(ua);var iOS11fix=iOS&&iOS11?"iOS11fix":"";if($.cookie("__auth")){$.removeCookie("__auth",{path:"/"});body.addClass(openerClass);body.addClass(iOS11fix);loginHolder.addClass(activeClass).find(".layout-close").one("click",function(evt){evt.preventDefault();
body.removeClass(openerClass);body.removeClass(iOS11fix);loginHolder.removeClass(activeClass)})}$("body").on("click",'a[href*="Customer/account/login"]',function(e){e.preventDefault();var self=$(this);var layout=self.data("layout");var scrollPosition=window.pageYOffset;body.removeClass(openerClass);body.removeClass(iOS11fix);forgetHolder.removeClass(activeClass);if(layout){var holder=$("#"+layout);body.toggleClass(openerClass);body.toggleClass(iOS11fix);holder.addClass(activeClass).find(".layout-close").off("click").one("click",
function(evt){evt.preventDefault();body.removeClass(openerClass);body.removeClass(iOS11fix);loginHolder.removeClass(activeClass);if(!!iOS11fix)window.scrollTo(0,scrollPosition)});if(window.matchMedia("(min-width: 992px)").matches)setTimeout(function(){holder.find(".required-entry").first().focus()},250);else holder.find(".required-entry").first().focus()}});$("#ajax-login-form").on("click",'a[href*="Customer/account/forgotpassword"]',function(e){e.preventDefault();var self=$(this);var scrollPosition=
window.pageYOffset;var layout=self.data("layout");body.removeClass(openerClass);body.removeClass(iOS11fix);loginHolder.removeClass(activeClass);if(layout){var holder=$("#"+layout);body.toggleClass(openerClass);body.toggleClass(iOS11fix);holder.addClass(activeClass).find(".layout-close").off("click").one("click",function(evt){evt.preventDefault();body.removeClass(openerClass);body.removeClass(iOS11fix);forgetHolder.removeClass(activeClass);if(!!iOS11fix)window.scrollTo(0,scrollPosition)});if(window.matchMedia("(min-width: 992px)").matches)setTimeout(function(){holder.find(".required-entry").first().focus()},
250);else holder.find(".required-entry").first().focus()}});var getOverlay=function(){return $("<div/>").addClass("ajaxlogin-overlay")};$("#ajax-login-form, #ajax-login-form-2").on("submit",function(e){e.preventDefault();var form=$(this),note=form.find(".note").hide(),note_error_code=form.find(".note_error_code").hide();if(!form.find("input").hasClass("validation-failed")){var url=form.attr("action");var spinner=getOverlay().appendTo(form.parent());$.post({url:url,data:form.serialize(),success:function(data){if(data.success===
true)if(data.partner)location.href=data.url;else if(data.message==="Ok")if(form[0].id==="ajax-login-form-2"){$(".sms-pass-block-2").show();$(".get_sms_button_2_wrapp").hide();$(".enter_button_2").show();$("#ajax-login-form-2").attr("action",data.action);$("#sms_code-2").focus().select()}else{$(".enter_button").show();$(".get_sms_button").hide();$(".sms-pass-block").show();$(".sms-pass").addClass("required-entry");$("#ajax-login-form").attr("action",data.action)}else if(data.error_code===true)note_error_code.fadeIn().html(data.message_code);
else if(data.success===false)note.fadeIn().html(data.message);else if(data.pageReload)location.reload();else location.href=ajxlConfig.beforeAuthUrl?ajxlConfig.beforeAuthUrl:ajxlConfig.redirectUrl;else note.fadeIn().html(data.message)},dataType:"json",async:false}).complete(function(){spinner.remove()})}});$("#ajax-fpass-form").on("submit",function(e){e.preventDefault();var form=$(this),note=form.find(".message").hide(),note_error=form.find(".note").hide();if(!form.find("input").hasClass("validation-failed")){var url=
form.attr("action");var spinner=getOverlay().appendTo(form.parent());$.post(url,form.serialize(),function(data){if(data.message&&data.success===true){form.find("input[name='email']").val("");note.fadeIn().html(data.message)}else note_error.fadeIn().html(data.message)},"json").complete(function(){spinner.remove()})}})});
function authType(url,phone){document.getElementById("billing:telephone").value=document.getElementById("billing:telephone-2").value;var parameters={telephone:phone};checkout.setLoadWaiting(true);new Ajax.Request(url,{method:"post",parameters:parameters,onSuccess:function(transport){if(transport.status==200){var response=transport.responseText.evalJSON();if(!response.success&&response.message){document.getElementsByClassName("note-2")[0].style.display="block";document.getElementsByClassName("note-2")[0].innerHTML=
response.message}if(!response.customer){jQuery("#personal_data").html(Translator.translate("Personal Data"));document.getElementsByClassName("wrap-checkout-sections")[0].style.display="block";document.getElementsByClassName("wrap-checkout-billing-info")[0].style.display="block";document.getElementsByClassName("section delivery-info")[0].style.opacity="1";document.getElementById("billing:firstname").select();document.getElementsByClassName("input-holder-wrapp")[0].style.display="none"}var loginUsername=
document.getElementById("login:username"),loginPhone2=document.getElementById("login_phone_2");if(response.sms){document.getElementsByClassName("input-holder-wrapp")[0].style.display="block";document.getElementById("ajax-login-form-2").action=response.action;document.getElementsByClassName("login-sms-pass-wrapp")[0].style.display="block";document.getElementsByClassName("accept_sms")[0].style.display="block";document.getElementsByClassName("enter_button_2")[0].style.display="none";document.getElementsByClassName("pass_wrap-2")[0].style.display=
"none";loginPhone2.type="hidden";loginPhone2.value=response.phone;loginUsername.type="hidden";loginUsername.classList.remove("required-entry","validate-email");document.getElementById("password-2").classList.remove("required-entry","validate-password");document.getElementById("note-2").classList.remove("note");document.getElementsByClassName("wrap-checkout-sections")[0].style.display="none";document.getElementsByClassName("wrap-checkout-billing-info")[0].style.display="none";document.getElementsByClassName("section delivery-info")[0].style.opacity=
"0"}else if(response.password){document.getElementsByClassName("input-holder-wrapp")[0].style.display="block";document.getElementsByClassName("login-sms-pass-wrapp")[0].style.display="block";document.getElementsByClassName("accept_sms")[0].style.display="none";loginUsername.type="hidden";loginPhone2.type="hidden";loginPhone2.classList.remove("required-entry","validate-phone");loginUsername.classList.remove("required-entry","validate-email");loginUsername.value=response.email;document.getElementById("specify_convenient").style.display=
"block";if(localStorage.getItem("loginBy")=="by_phone")document.getElementById("by_phone-2").click();else if(localStorage.getItem("loginBy")=="by_email")document.getElementById("by_email-2").click();document.getElementsByClassName("wrap-checkout-sections")[0].style.display="none";document.getElementsByClassName("wrap-checkout-billing-info")[0].style.display="none";document.getElementsByClassName("section delivery-info")[0].style.opacity="0"}}checkout.setLoadWaiting(false)}})};
