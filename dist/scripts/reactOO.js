/*!
 * =============================================================
 * Chitu Web App v1.0.0 (https://github.com/mazong1123/ratchet-pro)
 * Copyright 2015 mazong1123
 * Licensed under MIT (https://github.com/mazong1123/chitu/blob/master/LICENSE)
 *
 * v1.0.0 designed by @mazong1123.
 * =============================================================
 */
!function(){"use strict";window.ReactOO={},window.ReactOO.ReactBase=Class.extend({init:function(){var a=this;a.component=a.createReactClass()},createReactClass:function(){var a=this;return React.createClass({displayName:a.getReactDisplayName(),render:function(){return a.onReactRender(this)},getInitialState:function(){return a.onReactGetInitialState(this)},componentDidMount:function(){return a.onReactComponentDidMount(this)}})},getReactDisplayName:function(){},onReactRender:function(a){},onReactGetInitialState:function(a){return null},onReactComponentDidMount:function(a){},render:function(a,b){var c=this;ReactDOM.render(React.createElement(c.component,a),document.querySelector(b))},getReactComponent:function(){var a=this;return a.component}})}();