﻿(function () {
    'use strict'

    var rachetPageManager = new window.RATCHET.Class.PageManager();
    rachetPageManager.ready(function () {
        window.RATCHET.getScript('scripts/jquery.js', function () {
            window.RATCHET.getScript('scripts/components.js', function () {
                var headerBarData = {
                    title: '发现',
                    iconClassName: 'icon-search'
                };

                var footerBarData = {
                    activeIndex: 3
                };

                window.Chitu.Component.HeaderBar.render(headerBarData, '.header-wrapper');
                window.Chitu.Component.FooterBar.render(footerBarData, '.footer-wrapper');
            }, function () {
                alert('好像出错了呀，刷新重来一次吧');
            });
        }, function () {
            alert('好像出错了呀，刷新重来一次吧');
        });
    });
})();