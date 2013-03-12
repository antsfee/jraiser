/*!
 * jRaiser 2 Javascript Library
 * popuplayer - v1.0.0 (2013-01-13T19:24:51+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("popuplayer/1.0.x/",["base/1.0.x/","widget/1.0.x/"],function(e,t,n){"use strict";var r=e("base/1.0.x/"),i=e("widget/1.0.x/");return i.create(function(e){var t=this,n=t._wrapper=e.wrapper;t._popupTrigger=n.find(".ui-popup-trigger"),t._popupContent=n.find(".ui-popup-content"),t._popupTrigger.length||(t._popupTrigger=n),t._popupContent.length||(t._popupContent=n)},{_init:function(e){var t=this;t.popup=function(){t._cancelCloseTimer(),t._visible!==!0&&t._doAction(!0)},t.close=function(){t._cancelCloseTimer();var n=function(){t._visible!==!1&&t._doAction(!1)};e.closeDelay?t._closeTimer=setTimeout(n,e.closeDelay):n()},t.toggle=function(){t._visible===!0?t.close():t.popup()},t._popupTrigger&&e.popupWhen&&(e.popupWhen===e.closeWhen?t._popupTrigger.on(e.popupWhen,t.toggle):t._popupTrigger.on(e.popupWhen,t.popup).on(e.closeWhen,t.close)),t._popupStyle=r.extend({},e.popupStyle),t._closedStyle=r.extend({},e.closedStyle),e.visible?t.popup():t.close()},_destroy:function(e){var t=this;t._popupTrigger&&t._popupTrigger.off(e.popupWhen,t.toggle).off(e.popupWhen,t.popup).off(e.closeWhen,t.close),delete t.toggle,delete t.popup,delete t.close,delete t._popupStyle,delete t._closedStyle,delete t._visible,t._cancelCloseTimer()},_cancelCloseTimer:function(){this._closeTimer&&(clearTimeout(this._closeTimer),delete this._closeTimer)},_computeStyle:function(e){var t=this,n=t._popupContent,r=t["_"+e],i=t._options[e];if(n.css("display")!=="none"&&n.css("visibility")==="hidden"){var s=n.get(0),o;if(i.width===""||i.height==="")o={width:s.style.width,height:s.style.height,visibility:"hidden"},n.css({width:i.width,height:i.height,visibility:"visible"}),["width","height"].forEach(function(e){t._popupStyle[e]===""&&(r[e]=n[e]())}),n.css(o)}},_doAction:function(e){var t=this,n=t.trigger(e?"beforepopup":"beforeclose");if(!n.isDefaultPrevented()){var i=t._options.animation,s=e?"popupStyle":"closedStyle",o=t["_"+s];t._computeStyle(s),i?t._popupContent.animate(o,r.mix({callback:t._actionDone.bind(t,e)},i,{overwrite:!1})):(t._popupContent.css(o),t._actionDone(e))}},_actionDone:function(e){var t=this._options.popupClass;t&&this._wrapper[e?"addClass":"removeClass"](t),this._visible=e,this.trigger(e?"aftershow":"afterclose")}},{wrapper:null,visible:!1,popupWhen:"mouseenter",closeWhen:"mouseleave",popupStyle:{width:"",height:"",visibility:"visible"},closedStyle:{width:0,height:0,visibility:"hidden"},popupClass:"ui-popuplayer-popup",animation:null,closeDelay:50})})