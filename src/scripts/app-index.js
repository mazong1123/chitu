(function () {
    var rachetPageManager = new window.RATCHET.Class.PageManager();
    rachetPageManager.ready(function () {
        var HeaderBar = React.createClass({
            displayName: 'HeaderBar',

            render: function () {
                var title = this.props.title;
                var iconClassName = this.props.iconClassName;

                return React.createElement('header', {
                    className: 'bar bar-nav'
                },
                React.createElement('a', {
                    className: 'icon ' + iconClassName + ' pull-right'
                }),
                React.createElement('h1', {
                    className: 'title'
                }, title));
            }
        });

        var FooterBar = React.createClass({
            displayName: 'FooterBar',

            render: function () {
                var tabElements = this.props.data.map(function (tabData) {
                    var tabComponent = React.createElement(ImageTextTab, tabData);

                    return tabComponent;
                });

                return React.createElement('nav', {
                    className: 'bar bar-tab'
                }, tabElements);
            }
        });

        var ImageTextTab = React.createClass({
            displayName: 'ImageTextTab',

            render: function () {
                var iconClassName = ' ' + this.props.iconClassName;
                var tabText = this.props.tabText;
                var activeClass = '';
                if (this.props.isActive) {
                    activeClass = ' active';
                }

                var url = this.props.url;

                return React.createElement('a', {
                    className: 'tab-item' + activeClass,
                    href: url
                }, React.createElement('span', {
                    className: 'icon' + iconClassName
                }), React.createElement('span', {
                    className: 'tab-label'
                }, tabText));
            }
        });

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
                url: '#'
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

        ReactDOM.render(React.createElement(HeaderBar, headerBarData), document.querySelector('.header-wrapper'));
        ReactDOM.render(React.createElement(FooterBar, footerBarData), document.querySelector('.footer-wrapper'));
    });
})();