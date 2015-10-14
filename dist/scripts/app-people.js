/*!
 * =============================================================
 * Chitu Web App v1.0.0 (https://github.com/mazong1123/ratchet-pro)
 * Copyright 2015 mazong1123
 * Licensed under MIT (https://github.com/mazong1123/chitu/blob/master/LICENSE)
 *
 * v1.0.0 designed by @mazong1123.
 * =============================================================
 */
!function(){"use strict";var a=new window.RATCHET.Class.PageManager;a.ready(function(){window.RATCHET.getScript("scripts/jquery.js",function(){window.RATCHET.getScript("scripts/components.js",function(){var b={title:"人脉",iconClassName:"icon-person"},c={activeIndex:1},d={data:[{id:1,name:"好友",isActive:!0,targetId:"page-friends",targetIsActive:!0},{id:2,name:"为你推荐",isActive:!1,targetId:"page-recommendations",targetIsActive:!1},{id:3,name:"小组",isActive:!1,targetId:"page-groups",targetIsActive:!1}]};ReactDOM.render(React.createElement(window.Chitu.Component.SegmentedControl,d),document.querySelector(".subpage-selector-wrapper")),window.Chitu.Component.HeaderBar.render(b,".header-wrapper"),window.Chitu.Component.FooterBar.render(c,".footer-wrapper"),a.populateComponents()},function(){alert("好像出错了呀，刷新重来一次吧")})},function(){alert("好像出错了呀，刷新重来一次吧")})})}();