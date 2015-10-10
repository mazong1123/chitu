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

    window.Chitu.Component.Profile = React.createClass({
        displayName: 'Profile',

        render: function () {
            var avatar = this.props.avatar;
            var name = this.props.name;
            var title = this.props.title;

            return React.createElement('div', {
                className: 'pull-left feed-profile'
            }, React.createElement('div', {
                className: 'pull-left feed-profile-avatar'
            }, React.createElement('img', {
                src: avatar,
                alt: name
            })), React.createElement('div', {
                className: 'pull-right feed-profile-data'
            }, React.createElement('div', {
                className: 'feed-profile-name'
            }, name), React.createElement('div', {
                className: 'feed-profile-title'
            }, title)));
        }
    });

    window.Chitu.Component.FeedHeader = React.createClass({
        displayName: 'FeedHeader',

        render: function () {
            var avatar = this.props.avatar;
            var name = this.props.name;
            var title = this.props.title;
            var time = this.props.time;

            var profileData = {
                avatar: avatar,
                name: name,
                title: title
            };

            return React.createElement('div', {
                className: 'feed-header'
            }, React.createElement(window.Chitu.Component.Profile, profileData),
            React.createElement('div', {
                className: 'pull-right feed-time'
            }, time));
        }
    });

    window.Chitu.Component.FeedContent = React.createClass({
        displayName: 'FeedContent',

        createMarkup: function (text) {
            return { __html: text };
        },

        render: function () {
            var textContent = this.createMarkup(this.props.textContent);

            return React.createElement('div', {
                className: 'feed-content'
            }, React.createElement('p', { dangerouslySetInnerHTML: textContent }));
        }
    });

    window.Chitu.Component.Feed = React.createClass({
        displayName: 'Feed',

        render: function () {
            var profileHeaderData = this.props.profileHeaderData;
            var feedContentData = this.props.feedContentData;
            var feedActionsData = this.props.feedActionsData;

            return React.createElement('div', {
                className: 'feed'
            }, React.createElement('div', {
                className: 'feed-main'
            }, React.createElement(window.Chitu.Component.FeedHeader, profileHeaderData),
            React.createElement(window.Chitu.Component.FeedContent, feedContentData)
            ), React.createElement('div', {
                className: 'feed-actions'
            }, React.createElement(window.Chitu.Component.ActionBar, feedActionsData)));
        }
    });

    window.Chitu.Component.FeedList = React.createClass({
        displayName: 'FeedList',

        getInitialState: function () {
            return {
                data: []
            };
        },
        componentDidMount: function () {
            $.ajax({
                url: this.props.url,
                dataType: 'json',
                cache: false,
                success: function (result) {
                    this.setState({
                        data: result.data
                    });
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        },

        render: function () {
            var feedComponents = this.state.data.map(function (feedData) {
                // Reactjs needs 'key' for array data.
                feedData.key = feedData.id;

                // Append UI data.
                var feedActionData = feedData.feedActionsData.data;
                var iconClassList = ['icon-home', 'icon-star-filled', 'icon-info'];
                for (var i = 0; i < 3; i++) {
                    var fad = feedActionData[i];
                    fad.key = fad.id;
                    fad.iconClassName = iconClassList[i];
                    fad.isActive = false;
                    fad.url = '#';
                    fad.tabText = fad.count;
                }

                var feedComponent = React.createElement(window.Chitu.Component.Feed, feedData);

                return feedComponent;
            });

            return React.createElement('div', {
                className: 'feed-list'
            }, feedComponents);
        }
    });
})();