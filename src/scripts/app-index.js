(function () {
    'use strict'

    // Omit header/footer to prevent header/footer ugly refershing during page switching.
    window.RATCHET.Class.Pusher.settings.omitBars = true;

    var rachetPageManager = new window.RATCHET.Class.PageManager();
    rachetPageManager.ready(function () {
        window.RATCHET.getScript('scripts/jquery.js', function () {
            window.RATCHET.getScript('scripts/components.js', function () {
                var headerBarData = {
                    title: '赤兔',
                    iconClassName: 'icon-compose'
                };

                var footerBarData = {
                    activeIndex: 0
                };

                var feedListData = {
                    url: 'data/feed.json'
                };

                window.Chitu.Component.HeaderBar.render(headerBarData, '.header-wrapper');
                window.Chitu.Component.FooterBar.render(footerBarData, '.footer-wrapper');
                window.Chitu.Component.FeedList.render(feedListData, '.feed-list-wrapper');
            }, function () {
                alert('好像出错了呀，刷新重来一次吧');
            });
        }, function () {
            alert('好像出错了呀，刷新重来一次吧');
        });
    });
})();