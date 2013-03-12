/*!
 * jRaiser 2 Javascript Library
 * tabs - v1.0.0 (2013-01-09T18:15:31+0800)
 * http://jraiser.org/ | Released under MIT license
 */
define("tabs/1.0.x/",["base/1.0.x/","widget/1.0.x/"],function(e,t,n){"use strict";var r=e("base/1.0.x/"),i=e("widget/1.0.x/");return i.create(function(e){},{_init:function(e){var t=this;t._tabs=typeof e.tabs=="string"?e.wrapper.find(e.tabs):e.tabs,t._panels=typeof e.panels=="string"?e.wrapper.find(e.panels):e.panels,t._total=t._panels.length,t.show=function(n){var i;switch(typeof n){case"number":i=parseInt(n);break;case"string":t._panels.each(function(e,t){if(e.id===n)return i=t,!1}),i==null&&(i=0);break;default:e.isPreventDefault&&n.preventDefault(),i=t._tabs.indexOf(this)}var s={},o=t._active;t._active!=null&&(s.oldTab=t._tabs.get(o),s.oldPanel=t._panels.get(o),s.newTab=t._tabs.get(i),s.newPanel=t._panels.get(i),s.oldActive=t._active,s.newActive=i),r.mix(s,n,{overwrite:!1});if(!t.trigger("beforeshow",s).isDefaultPrevented()){t._tabs.removeClass(e.activeTabClass),t._tabs.eq(i).addClass(e.activeTabClass),t._panels.css(e.inactivePanelStyle).removeClass(e.activePanelClass);var u=t._panels.eq(i).css(e.activePanelStyle).addClass(e.activePanelClass).attr("id");t._active=i,e.useHashStorage&&u!==location.hash.substr(1)&&i&&(location.hash=u),t.trigger("aftershow",s)}},t.next=function(){e.next&&t.show(e.next.call(window,t._active,t._total))},t.prev=function(){e.prev&&t.show(e.prev.call(window,t._active,t._total))},t.play=function(){e.playInterval&&!t._autoPlayTimer&&(t._autoPlayTimer=setInterval(function(){t.next()},e.playInterval),t._isPlayingOn||(t._tabs.mouseover(t.pause).mouseout(t.play),t._panels.mouseover(t.pause).mouseout(t.play),t._isPlayingOn=!0))},t.pause=function(){t._autoPlayTimer&&(clearInterval(t._autoPlayTimer),delete t._autoPlayTimer)},t.stop=function(){t.pause(),t._isPlayingOn&&(t._tabs.off("mouseover",t.pause).off("mouseout",t.play),t._panels.off("mouseover",t.pause).off("mouseout",t.play),delete t._isPlayingOn)},e.showWhen&&t._tabs.on(e.showWhen,t.show),e.useHashStorage&&location.hash?t.show(location.hash.substr(1)):e.active!=null&&t.show(e.active)},_destroy:function(e){var t=this;t.stop(),e.showWhen&&t._tabs.off(e.showWhen,t.show),delete t._total,delete t.next,delete t.prev,delete t.show,delete t.play,delete t.pause,delete t.stop,delete t._tabs,delete t._panels,delete t._active}},{tabs:".ui-tabs-nav > *",panels:".ui-tabs-panels > *",active:0,showWhen:"ontouchstart"in document?"click":"mouseover",isPreventDefault:!1,useHashStorage:!1,activeTabClass:"ui-tabs-tab-active",activePanelClass:"ui-tabs-panel-active",activePanelStyle:{display:"block"},inactivePanelStyle:{display:"none"},next:function(e,t){return e==null?0:(e+1)%t},prev:function(e,t){if(e==null)return 0;var n=e-1;return n<0?t-n:n},playInterval:5e3})})