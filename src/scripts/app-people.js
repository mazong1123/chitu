﻿(function () {
    'use strict'

    var rachetPageManager = new window.RATCHET.Class.PageManager();
    rachetPageManager.ready(function () {
        window.RATCHET.getScript('scripts/jquery.js', function () {
            window.RATCHET.getScript('scripts/components.js', function () {
                var headerBarData = {
                    title: '人脉',
                    iconClassName: 'icon-person'
                };

                var footerBarData = {
                    activeIndex: 1
                };

                var subPageSegementedControlData = {
                    data: [{
                        id: 1,
                        name: '好友',
                        isActive: true,
                        targetId: 'page-friends',
                        targetIsActive: true
                    }, {
                        id: 2,
                        name: '为你推荐',
                        isActive: false,
                        targetId: 'page-recommendations',
                        targetIsActive: false
                    }, {
                        id: 3,
                        name: '小组',
                        isActive: false,
                        targetId: 'page-groups',
                        targetIsActive: false
                    }]
                };

                window.Chitu.Component.SegmentedControl.render(subPageSegementedControlData, '.subpage-selector-wrapper');
                window.Chitu.Component.HeaderBar.render(headerBarData, '.header-wrapper');
                window.Chitu.Component.FooterBar.render(footerBarData, '.footer-wrapper');

                // We created ratchetPro's complex components(segmented control) programmatically, call populateComponets() to tell ratchetPro.
                rachetPageManager.populateComponents();
            }, function () {
                alert('好像出错了呀，刷新重来一次吧');
            });
        }, function () {
            alert('好像出错了呀，刷新重来一次吧');
        });
    });
})();