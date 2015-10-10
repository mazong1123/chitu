(function () {
    'use strict'

    var rachetPageManager = new window.RATCHET.Class.PageManager();
    rachetPageManager.ready(function () {
        window.RATCHET.getScript('scripts/jquery.js', function () {
            window.RATCHET.getScript('scripts/components.js', function () {
                var headerBarData = {
                    title: '赤兔',
                    iconClassName: 'icon-compose'
                };

                var footerBarData = {
                    data: [{
                        key: 0,
                        iconClassName: 'icon-home',
                        tabText: '赤兔',
                        isActive: true,
                        url: '#'
                    }, {
                        key: 1,
                        iconClassName: 'icon-star-filled',
                        tabText: '人脉',
                        isActive: false,
                        url: 'people.html'
                    }, {
                        key: 2,
                        iconClassName: 'icon-info',
                        tabText: '消息',
                        isActive: false,
                        url: '#'
                    }, {
                        key: 3,
                        iconClassName: 'icon-search',
                        tabText: '发现',
                        isActive: false,
                        url: '#'
                    }, {
                        key: 4,
                        iconClassName: 'icon-person',
                        tabText: '我',
                        isActive: false,
                        url: '#'
                    }]
                };

                var feedListData = {
                    url: 'data/feed.json'
                };

                ReactDOM.render(React.createElement(window.Chitu.Component.HeaderBar, headerBarData), document.querySelector('.header-wrapper'));
                ReactDOM.render(React.createElement(window.Chitu.Component.ActionBar, footerBarData), document.querySelector('.footer-wrapper'));
                ReactDOM.render(React.createElement(window.Chitu.Component.FeedList, feedListData), document.querySelector('.feed-list-wrapper'));
            }, function () {
                alert('好像出错了呀，刷新重来一次吧');
            });
        }, function () {
            alert('好像出错了呀，刷新重来一次吧');
        });
    });
})();