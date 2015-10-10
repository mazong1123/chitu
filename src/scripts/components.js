(function () {
    'use strict'

    if (typeof window.Chitu === 'undefined') {
        window.Chitu = {};
    }

    if (typeof window.Chitu.Component === 'undefined') {
        window.Chitu.Component = {};
    }

    if (typeof window.Chitu.Component.Utility === 'undefined') {
        window.Chitu.Component.Utility = {};
    }

    window.Chitu.Component.HeaderBar = React.createClass({
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

    window.Chitu.Component.ActionBar = React.createClass({
        displayName: 'ActionBar',

        render: function () {
            var tabElements = this.props.data.map(function (tabData) {
                var tabComponent = React.createElement(window.Chitu.Component.ImageTextTab, tabData);

                return tabComponent;
            });

            return React.createElement('nav', {
                className: 'bar bar-tab'
            }, tabElements);
        }
    });

    window.Chitu.Component.ImageTextTab = React.createClass({
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
})();