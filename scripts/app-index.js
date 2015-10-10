/*!
 * =============================================================
 * Chitu Web App v1.0.0 (https://github.com/mazong1123/ratchet-pro)
 * Copyright 2015 mazong1123
 * Licensed under MIT (https://github.com/mazong1123/chitu/blob/master/LICENSE)
 *
 * v1.0.0 designed by @mazong1123.
 * =============================================================
 */
!function(){"use strict";var a=new window.RATCHET.Class.PageManager;a.ready(function(){window.RATCHET.getScript("scripts/jquery.js",function(){window.RATCHET.getScript("scripts/components.js",function(){var a={title:"赤兔",iconClassName:"icon-compose"},b={activeIndex:0},c={url:"data/feed.json"};ReactDOM.render(React.createElement(window.Chitu.Component.HeaderBar,a),document.querySelector(".header-wrapper")),ReactDOM.render(React.createElement(window.Chitu.Component.FooterBar,b),document.querySelector(".footer-wrapper")),ReactDOM.render(React.createElement(window.Chitu.Component.FeedList,c),document.querySelector(".feed-list-wrapper"))},function(){alert("好像出错了呀，刷新重来一次吧")})},function(){alert("好像出错了呀，刷新重来一次吧")})})}();