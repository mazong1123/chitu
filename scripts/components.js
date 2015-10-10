/*!
 * =============================================================
 * Chitu Web App v1.0.0 (https://github.com/mazong1123/ratchet-pro)
 * Copyright 2015 mazong1123
 * Licensed under MIT (https://github.com/mazong1123/chitu/blob/master/LICENSE)
 *
 * v1.0.0 designed by @mazong1123.
 * =============================================================
 */
!function(){"use strict";"undefined"==typeof window.Chitu&&(window.Chitu={}),"undefined"==typeof window.Chitu.Component&&(window.Chitu.Component={}),"undefined"==typeof window.Chitu.Component.Utility&&(window.Chitu.Component.Utility={}),window.Chitu.Component.HeaderBar=React.createClass({displayName:"HeaderBar",render:function(){var a=this.props.title,b=this.props.iconClassName;return React.createElement("header",{className:"bar bar-nav"},React.createElement("a",{className:"icon "+b+" pull-right"}),React.createElement("h1",{className:"title"},a))}}),window.Chitu.Component.ActionBar=React.createClass({displayName:"ActionBar",render:function(){var a=this.props.data.map(function(a){var b=React.createElement(window.Chitu.Component.ImageTextTab,a);return b});return React.createElement("nav",{className:"bar bar-tab"},a)}}),window.Chitu.Component.FooterBar=React.createClass({displayName:"FooterBar",render:function(){var a={data:[{key:0,iconClassName:"icon-home",tabText:"赤兔",isActive:!1,url:"index.html"},{key:1,iconClassName:"icon-star-filled",tabText:"人脉",isActive:!1,url:"people.html"},{key:2,iconClassName:"icon-info",tabText:"消息",isActive:!1,url:"message.html"},{key:3,iconClassName:"icon-search",tabText:"发现",isActive:!1,url:"explore.html"},{key:4,iconClassName:"icon-person",tabText:"我",isActive:!1,url:"me.html"}]},b=this.props.activeIndex;return a.data[b].isActive=!0,React.createElement(window.Chitu.Component.ActionBar,a)}}),window.Chitu.Component.ImageTextTab=React.createClass({displayName:"ImageTextTab",render:function(){var a=" "+this.props.iconClassName,b=this.props.tabText,c="";this.props.isActive&&(c=" active");var d=this.props.url;return React.createElement("a",{className:"tab-item"+c,href:d},React.createElement("span",{className:"icon"+a}),React.createElement("span",{className:"tab-label"},b))}}),window.Chitu.Component.Profile=React.createClass({displayName:"Profile",render:function(){var a=this.props.avatar,b=this.props.name,c=this.props.title;return React.createElement("div",{className:"pull-left feed-profile"},React.createElement("div",{className:"pull-left feed-profile-avatar"},React.createElement("img",{src:a,alt:b})),React.createElement("div",{className:"pull-right feed-profile-data"},React.createElement("div",{className:"feed-profile-name"},b),React.createElement("div",{className:"feed-profile-title"},c)))}}),window.Chitu.Component.FeedHeader=React.createClass({displayName:"FeedHeader",render:function(){var a=this.props.avatar,b=this.props.name,c=this.props.title,d=this.props.time,e={avatar:a,name:b,title:c};return React.createElement("div",{className:"feed-header"},React.createElement(window.Chitu.Component.Profile,e),React.createElement("div",{className:"pull-right feed-time"},d))}}),window.Chitu.Component.FeedContent=React.createClass({displayName:"FeedContent",createMarkup:function(a){return{__html:a}},render:function(){var a=this.createMarkup(this.props.textContent);return React.createElement("div",{className:"feed-content"},React.createElement("p",{dangerouslySetInnerHTML:a}))}}),window.Chitu.Component.Feed=React.createClass({displayName:"Feed",render:function(){var a=this.props.profileHeaderData,b=this.props.feedContentData,c=this.props.feedActionsData;return React.createElement("div",{className:"feed"},React.createElement("div",{className:"feed-main"},React.createElement(window.Chitu.Component.FeedHeader,a),React.createElement(window.Chitu.Component.FeedContent,b)),React.createElement("div",{className:"feed-actions"},React.createElement(window.Chitu.Component.ActionBar,c)))}}),window.Chitu.Component.FeedList=React.createClass({displayName:"FeedList",getInitialState:function(){return{data:[]}},componentDidMount:function(){$.ajax({url:this.props.url,dataType:"json",cache:!1,success:function(a){this.setState({data:a.data})}.bind(this),error:function(a,b,c){console.error(this.props.url,b,c.toString())}.bind(this)})},render:function(){var a=this.state.data.map(function(a){a.key=a.id;for(var b=a.feedActionsData.data,c=["icon-home","icon-star-filled","icon-info"],d=0;3>d;d++){var e=b[d];e.key=e.id,e.iconClassName=c[d],e.isActive=!1,e.url="#",e.tabText=e.count}var f=React.createElement(window.Chitu.Component.Feed,a);return f});return React.createElement("div",{className:"feed-list"},a)}})}();