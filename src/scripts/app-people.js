(function () {
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

                ReactDOM.render(React.createElement(window.Chitu.Component.HeaderBar, headerBarData), document.querySelector('.header-wrapper'));
                ReactDOM.render(React.createElement(window.Chitu.Component.FooterBar, footerBarData), document.querySelector('.footer-wrapper'));
            }, function () {
                alert('好像出错了呀，刷新重来一次吧');
            });
        }, function () {
            alert('好像出错了呀，刷新重来一次吧');
        });
    });
})();