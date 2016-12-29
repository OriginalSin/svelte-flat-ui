!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Slider=e()}(this,function(){"use strict";function t(t,e){e.appendChild(t)}function e(t,e,n){e.insertBefore(t,n)}function n(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function r(t){return t?this._state[t]:this._state}function o(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var i=0;i<n.length;i+=1)n[i].call(this,e)}function a(t,e,n){var i=n&&n.defer?this._observers.pre:this._observers.post;return(i[t]||(i[t]=[])).push(e),n&&n.init===!1||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1),{cancel:function(){var n=i[t].indexOf(e);~n&&i[t].splice(n,1)}}}function d(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}}function u(t,e,n,i){for(var s in e)if(s in n){var r=n[s],o=i[s];if(r!==o||"object"==typeof r){var a=e[s];if(a)for(var d=0;d<a.length;d+=1){var u=a[d];u.__calling||(u.__calling=!0,u.call(t,r,o),u.__calling=!1)}}}}function f(r,o){function a(t){o.onButtonDown(t)}function d(t){o.onDragEnd(t)}var u=i("div");o.refs.slider=u,u.className="sf-slider";var f=i("div");o.refs.range=f,f.className="sf-slider__range",f.style.cssText="width: "+r.value+"%",t(f,u),t(s("\n  "),u);var l=i("span");return l.className="sf-slider__handle",l.style.cssText="left: "+r.value+"%",l.addEventListener("mousedown",a,!1),l.addEventListener("mouseup",d,!1),t(l,u),{mount:function(t,n){e(u,t,n)},update:function(t,e){f.style.cssText="width: "+e.value+"%",l.style.cssText="left: "+e.value+"%"},teardown:function(t){o.refs.slider===u&&(o.refs.slider=null),o.refs.range===f&&(o.refs.range=null),l.removeEventListener("mousedown",a,!1),l.removeEventListener("mouseup",d,!1),t&&n(u)}}}function l(t){t=t||{},this.refs={},this._state=Object.assign(h.data(),t.data),this._observers={pre:Object.create(null),post:Object.create(null)},this._handlers=Object.create(null),this._root=t._root,this._yield=t._yield,this._fragment=f(this._state,this),t.target&&this._fragment.mount(t.target,null)}var h=function(){return{data:function(){return{width:0,offset:0,dragging:!1}},methods:{onButtonDown:function(t){this.onDragStart(t),window.addEventListener("mousemove",this.onDragging.bind(this)),window.addEventListener("mouseup",this.onDragEnd.bind(this)),window.addEventListener("contextmenu",this.onDragEnd.bind(this))},onDragStart:function(t){var e=this.refs.slider,n=this.refs.range;this.set({width:e.clientWidth,offset:t.clientX-n.clientWidth,dragging:!0})},onDragging:function(t){if(this.get("dragging")){var e=(t.clientX,this.get("width")),n=this.get("offset"),i=t.clientX-n,s=parseInt(i/e*100);s>100&&(s=100),s<0&&(s=0),this.set({value:s})}},onDragEnd:function(){this.get("dragging")&&(this.set({dragging:!1}),window.removeEventListener("mousemove",this.onDragging),window.removeEventListener("mouseup",this.onDragEnd),window.removeEventListener("contextmenu",this.onDragEnd))}}}}();return l.prototype=h.methods,l.prototype.get=r,l.prototype.fire=o,l.prototype.observe=a,l.prototype.on=d,l.prototype.set=function(t){var e=this._state;this._state=Object.assign({},e,t),u(this,this._observers.pre,t,e),this._fragment&&this._fragment.update(t,this._state),u(this,this._observers.post,t,e)},l.prototype.teardown=function(t){this.fire("teardown"),this._fragment.teardown(t!==!1),this._fragment=null,this._state={}},l});
