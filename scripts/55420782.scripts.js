"use strict";angular.module("portfolioApp",["ui.router","ngResource"]),angular.module("portfolioApp").factory("FoldersResource",["$resource",function(a){return a("folders",{},{query:{url:"base.json",responseType:"json",isArray:!0,cache:!0,withCredentials:!0,transformResponse:function(a){return a.folders}}})}]).factory("AlbumsResource",["$resource",function(a){return a("albums",{},{query:{url:"base.json",responseType:"json",isArray:!0,cache:!0,withCredentials:!0,transformResponse:function(a){return a.albums}}})}]).factory("Data",["FoldersResource","AlbumsResource",function(a,b){var c=function(){var b=a.query();return b},d=function(){var a=b.query();return a};return{getAlbums:d,getFolders:c}}]),angular.module("portfolioApp").filter("object2Array",function(){return function(a){return _.toArray(a)}}).controller("MainCtrl",["$scope","Data","$state",function(a,b,c){a.folders=[],a.albums=[],a.allPictures=[],a.currentFolder={},b.getFolders().$promise.then(function(b){a.folders=b,a.currentFolder=b[0]}),a.isCurrentFolder=function(b){return b==a.currentFolder},b.getAlbums().$promise.then(function(b){a.albums=b,a.allPictures=_.flatten(_.map(b,function(a){return a.pictures}))}),a.goToFolder=function(b){a.currentFolder=b,c.transitionTo("home.portfolio.folder",{folder:b.name,data:b})},a.getAlbumsForFolder=function(b){var c=[];return _.each(b.albums,function(b){return _.each(a.albums,function(a){b==a.name&&c.push(a)})}),c},a.tabs={portfolio:{name:"portfolio",number:1,clickable:!0},info:{name:"info",number:2,clickable:!0},contact:{name:"contact",number:3,clickable:!0}}}]).controller("PageCtrl",["$scope","page","$state",function(){}]).controller("FolderCtrl",["$scope","$state","folder",function(){}]),angular.module("portfolioApp").config(["$stateProvider",function(a){a.state("home",{url:"",templateUrl:"views/main.html",controller:"MainCtrl"}).state("home.portfolio",{url:"/portfolio",controller:function(a){console.log(a)},templateUrl:"views/portfolio.html",resolve:{folders:function(a,b){return b.getFolders().$promise}}}).state("home.portfolio.folder",{url:"/:folder",controller:"FolderCtrl",templateUrl:"views/folder.html",resolve:{folder:function(a){return a}}}).state("home.info",{url:"/info",controller:"PageCtrl",templateUrl:"views/info.html",resolve:{page:function(a){return a}}}).state("home.contact",{url:"/contact",controller:"PageCtrl",templateUrl:"views/contact.html",resolve:{page:function(a){return a}}})}]).run();