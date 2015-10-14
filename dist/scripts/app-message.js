/*!
 * =============================================================
 * Chitu Web App v1.0.0 (https://github.com/mazong1123/ratchet-pro)
 * Copyright 2015 mazong1123
 * Licensed under MIT (https://github.com/mazong1123/chitu/blob/master/LICENSE)
 *
 * v1.0.0 designed by @mazong1123.
 * =============================================================
 */
!function(){"use strict";var a=new window.RATCHET.Class.PageManager;a.ready(function(){window.RATCHET.getScript("scripts/jquery.js",function(){window.RATCHET.getScript("scripts/components.js",function(){var a={title:"消息",iconClassName:"icon-info"},b={activeIndex:2};window.Chitu.Component.HeaderBar.render(a,".header-wrapper"),window.Chitu.Component.FooterBar.render(b,".footer-wrapper")},function(){alert("好像出错了呀，刷新重来一次吧")})},function(){alert("好像出错了呀，刷新重来一次吧")})})}();