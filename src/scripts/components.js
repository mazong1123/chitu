(function () {
    'use strict'

    if (typeof window.Chitu === 'undefined') {
        window.Chitu = {};
    }

    if (typeof window.Chitu.Definition === 'undefined') {
        window.Chitu.Definition = {};
    }

    if (typeof window.Chitu.Component === 'undefined') {
        window.Chitu.Component = {};
    }

    if (typeof window.Chitu.Component.Utility === 'undefined') {
        window.Chitu.Component.Utility = {};
    }

    window.Chitu.Definition.HeaderBar = window.ReactOO.ReactBase.extend({
        getReactDisplayName: function () {
            return 'HeaderBar';
        },

        onReactRender: function (reactInstance) {
            var title = reactInstance.props.title;
            var iconClassName = reactInstance.props.iconClassName;

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

    window.Chitu.Definition.ActionBar = window.ReactOO.ReactBase.extend({
        init: function () {
            var self = this;
            self._super();

            self.imageTextTab = new window.Chitu.Definition.ImageTextTab();
        },

        getClassName: function(){
            return 'bar bar-tab';
        },

        getReactDisplayName: function () {
            return 'ActionBar';
        },

        onReactRender: function (reactInstance) {
            var self = this;

            var tabElements = reactInstance.props.data.map(function (tabData) {
                var tabComponent = React.createElement(self.imageTextTab.getReactComponent(), tabData);

                return tabComponent;
            });

            return React.createElement('nav', {
                className: self.getClassName()
            }, tabElements);
        }
    });

    window.Chitu.Definition.BigActionBar = window.Chitu.Definition.ActionBar.extend({
        init: function () {
            var self = this;
            self._super();
        },

        getClassName: function () {
            var self = this;
            var baseClassName = self._super();

            var className = baseClassName + ' big';

            return className;
        },

        getReactDisplayName: function () {
            return 'BigActionBar';
        }
    });

    window.Chitu.Definition.ImageTextTab = window.ReactOO.ReactBase.extend({
        init: function () {
            var self = this;
            self._super();
        },

        getContainerClassName: function (isActive) {
            var tabClass = 'tab-item';
            if (isActive) {
                tabClass += ' active';
            }

            return tabClass;
        },

        getIconClassName: function (iconClass) {
            var iconClassName = 'icon' + ' ' + iconClass;

            return iconClassName;
        },

        getReactDisplayName: function () {
            return 'ImageTextTab';
        },

        onReactRender: function (reactInstance) {
            var self = this;

            var iconClass = reactInstance.props.iconClassName;
            var tabText = reactInstance.props.tabText;
            var isActive = reactInstance.props.isActive;
            var url = reactInstance.props.url;

            var containerClassName = self.getContainerClassName(isActive);
            var iconClassName = self.getIconClassName(iconClass);

            return React.createElement('a', {
                className: containerClassName,
                href: url
            }, React.createElement('span', {
                className: iconClassName
            }), React.createElement('span', {
                className: 'tab-label'
            }, tabText));
        }
    });

    window.Chitu.Definition.BigImageTextTab = window.Chitu.Definition.ImageTextTab.extend({
        getContainerClassName: function (isActive) {
            var tabClass = 'tab-item big';
            if (isActive) {
                tabClass += ' active';
            }

            return tabClass;
        }
    });

    window.Chitu.Definition.FooterBar = window.ReactOO.ReactBase.extend({
        init: function () {
            var self = this;
            self._super();

            self.actionBar = new window.Chitu.Definition.ActionBar();
        },

        getReactDisplayName: function () {
            return 'ImageTextTab';
        },

        onReactRender: function (reactInstance) {
            var self = this;

            var actionBarData = {
                data: [{
                    key: 0,
                    iconClassName: 'icon-home',
                    tabText: '赤兔',
                    isActive: false,
                    url: 'index.html'
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
                    url: 'message.html'
                }, {
                    key: 3,
                    iconClassName: 'icon-search',
                    tabText: '发现',
                    isActive: false,
                    url: 'explore.html'
                }, {
                    key: 4,
                    iconClassName: 'icon-person',
                    tabText: '我',
                    isActive: false,
                    url: 'me.html'
                }]
            };

            var activeIndex = reactInstance.props.activeIndex;
            actionBarData.data[activeIndex].isActive = true;

            return React.createElement(self.actionBar.getReactComponent(), actionBarData);
        }
    });

    window.Chitu.Definition.Profile = window.ReactOO.ReactBase.extend({
        getReactDisplayName: function () {
            return 'Profile';
        },

        onReactRender: function (reactInstance) {
            var avatar = reactInstance.props.avatar;
            var name = reactInstance.props.name;
            var title = reactInstance.props.title;

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

    window.Chitu.Definition.FeedHeader = window.ReactOO.ReactBase.extend({
        init: function () {
            var self = this;
            self._super();

            self.profile = new window.Chitu.Definition.Profile();
        },

        getReactDisplayName: function () {
            return 'FeedHeader';
        },

        onReactRender: function (reactInstance) {
            var self = this;

            var avatar = reactInstance.props.avatar;
            var name = reactInstance.props.name;
            var title = reactInstance.props.title;
            var time = reactInstance.props.time;

            var profileData = {
                avatar: avatar,
                name: name,
                title: title
            };

            return React.createElement('div', {
                className: 'feed-header'
            }, React.createElement(self.profile.getReactComponent(), profileData),
            React.createElement('div', {
                className: 'pull-right feed-time'
            }, time));
        }
    });

    window.Chitu.Definition.FeedContent = window.ReactOO.ReactBase.extend({
        getReactDisplayName: function () {
            return 'FeedContent'
        },

        createMarkup: function (text) {
            return { __html: text };
        },

        onReactRender: function (reactInstance) {
            var self = this;

            var textContent = self.createMarkup(reactInstance.props.textContent);

            return React.createElement('div', {
                className: 'feed-content'
            }, React.createElement('p', { dangerouslySetInnerHTML: textContent }));
        }
    });

    window.Chitu.Definition.Feed = window.ReactOO.ReactBase.extend({
        init: function(){
            var self = this;
            self._super();

            self.feedHeader = new window.Chitu.Definition.FeedHeader();
            self.feedContent = new window.Chitu.Definition.FeedContent();
            self.actionBar = new window.Chitu.Definition.ActionBar();
        },

        getReactDisplayName: function () {
            return 'Feed';
        },

        onReactRender: function (reactInstance) {
            var self = this;

            var profileHeaderData = reactInstance.props.profileHeaderData;
            var feedContentData = reactInstance.props.feedContentData;
            var feedActionsData = reactInstance.props.feedActionsData;

            return React.createElement('div', {
                className: 'feed'
            }, React.createElement('div', {
                className: 'feed-main'
            }, React.createElement(self.feedHeader.getReactComponent(), profileHeaderData),
            React.createElement(self.feedContent.getReactComponent(), feedContentData)
            ), React.createElement('div', {
                className: 'feed-actions'
            }, React.createElement(self.actionBar.getReactComponent(), feedActionsData)));
        }
    });

    window.Chitu.Definition.FeedList = window.ReactOO.ReactBase.extend({
        init: function(){
            var self = this;
            self._super();

            self.feed = new window.Chitu.Definition.Feed();
        },

        getReactDisplayName: function () {
            return 'FeedList';
        },

        onReactGetInitialState: function (reactInstance) {
            return {
                data: []
            };
        },

        onReactComponentDidMount: function (reactInstance) {
            $.ajax({
                url: reactInstance.props.url,
                dataType: 'json',
                cache: false,
                success: function (result) {
                    reactInstance.setState({
                        data: result.data
                    });
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error(reactInstance.props.url, status, err.toString());
                }.bind(reactInstance)
            });
        },

        onReactRender: function (reactInstance) {
            var self = this;

            var feedComponents = reactInstance.state.data.map(function (feedData) {
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

                var feedComponent = React.createElement(self.feed.getReactComponent(), feedData);

                return feedComponent;
            });

            return React.createElement('div', {
                className: 'feed-list'
            }, feedComponents);
        }
    });

    window.Chitu.Definition.SegmentedControl = window.ReactOO.ReactBase.extend({
        getReactDisplayName: function () {
            return 'SegmentedControl';
        },

        onReactRender: function (reactInstance) {
            var controlItemElements = reactInstance.props.data.map(function (controlItemData) {
                var name = controlItemData.name;
                var activeClass = controlItemData.isActive ? ' active' : '';
                var targetId = controlItemData.targetId;
                var targetActiveClass = controlItemData.targetIsActive ? ' active' : '';

                var controlItemComponent = React.createElement('a', {
                    className: 'control-item' + activeClass,
                    href: '#' + targetId,
                    key: controlItemData.id
                }, name);

                // Intiailize target element.
                var targetElement = document.getElementById(targetId);
                if (targetElement !== null && targetElement !== undefined) {
                    var originalClassName = targetElement.className;
                    targetElement.className = 'control-content' + targetActiveClass;
                    if (originalClassName !== null && originalClassName !== undefined && originalClassName.length > 0) {
                        targetElement.className += originalClassName;
                    }
                }

                return controlItemComponent;
            });

            return React.createElement('div', {
                className: 'segmented-control'
            }, controlItemElements);
        }
    });

    // Global component instances.
    window.Chitu.Component.HeaderBar = new window.Chitu.Definition.HeaderBar();
    window.Chitu.Component.FooterBar = new window.Chitu.Definition.FooterBar();
    window.Chitu.Component.ActionBar = new window.Chitu.Definition.ActionBar();
    window.Chitu.Component.BigActionBar = new window.Chitu.Definition.BigActionBar();
    window.Chitu.Component.FeedList = new window.Chitu.Definition.FeedList();
    window.Chitu.Component.SegmentedControl = new window.Chitu.Definition.SegmentedControl();
})();