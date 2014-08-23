'use strict';
angular.module('portfolioApp', [
  'ui.router',
  'ngResource'
]);
'use strict';
angular.module('portfolioApp').factory('FoldersResource', [
  '$resource',
  function ($resource) {
    return $resource('folders', {}, {
      query: {
        url: 'base.json',
        responseType: 'json',
        isArray: true,
        cache: true,
        withCredentials: true,
        transformResponse: function (response) {
          return response.folders;
        }
      }
    });
  }
]).factory('AlbumsResource', [
  '$resource',
  function ($resource) {
    return $resource('albums', {}, {
      query: {
        url: 'base.json',
        responseType: 'json',
        isArray: true,
        cache: true,
        withCredentials: true,
        transformResponse: function (response) {
          return response.albums;
        }
      }
    });
  }
]).factory('Data', [
  'FoldersResource',
  'AlbumsResource',
  function (FoldersResource, AlbumsResource) {
    var getFolders = function () {
      var query = FoldersResource.query();
      return query;
    };
    var getAlbums = function () {
      var query = AlbumsResource.query();
      return query;
    };
    return {
      getAlbums: getAlbums,
      getFolders: getFolders
    };
  }
]);
'use strict';
angular.module('portfolioApp').filter('object2Array', function () {
  return function (input) {
    return _.toArray(input);
  };
}).controller('MainCtrl', [
  '$scope',
  'Data',
  '$state',
  '$location',
  function ($scope, Data, $state, $location) {
    window.state = $state;
    $scope.folders = [];
    $scope.albums = [];
    $scope.allPictures = [];
    $scope.currentFolder = {};
    Data.getFolders().$promise.then(function (folders) {
      $scope.folders = folders;
      $scope.currentFolder = folders[0];
    });
    Data.getAlbums().$promise.then(function (albums) {
      $scope.albums = albums;
      $scope.allPictures = _.flatten(_.map(albums, function (album) {
        return album.pictures;
      }));
    });
    $scope.goToTab = function (tab) {
      if (_.isString(tab)) {
        $state.go(tab);
      } else {
        $state.go('home.portfolio.folder', { folder: tab.name });
      }
    };
    $scope.isCurrentFolder = function (folder) {
      return folder == $scope.currentFolder;
    };
    $scope.goToFolder = function (folder) {
      $scope.currentFolder = folder;
    };
    $scope.getAlbumsForFolder = function (folder) {
      var folderAlbums = [];
      _.each(folder.albums, function (folderAlbumName) {
        return _.each($scope.albums, function (album) {
          if (folderAlbumName == album.name)
            folderAlbums.push(album);
        });
      });
      return folderAlbums;
    };
  }
]).controller('PageCtrl', [
  '$scope',
  'page',
  '$state',
  function ($scope, page, $state) {
  }
]).controller('FolderCtrl', [
  '$scope',
  '$state',
  'folder',
  function ($scope, $state, folder) {
  }
]);
'use strict';
angular.module('portfolioApp').config([
  '$stateProvider',
  function ($stateProvider) {
    $stateProvider.state('home', {
      abstract: false,
      url: '',
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).state('home.hash', {
      url: '/',
      resolve: {
        redirect: function ($state, $location) {
          $location.path('');
        }
      }
    }).state('home.portfolio', {
      url: '/portfolio',
      controller: function ($scope, folders, $state) {
      },
      templateUrl: 'views/portfolio.html',
      resolve: {
        folders: function ($stateParams, Data) {
          return Data.getFolders().$promise;
        }
      }
    }).state('home.portfolio.folder', {
      url: '/:folder',
      controller: 'FolderCtrl',
      templateUrl: 'views/folder.html',
      resolve: {
        folder: function ($stateParams, $state) {
          return $stateParams;
        }
      }
    }).state('home.info', {
      url: '/info',
      controller: 'PageCtrl',
      templateUrl: 'views/info.html',
      resolve: {
        page: function ($stateParams) {
          return $stateParams;
        }
      }
    }).state('home.contact', {
      url: '/contact',
      controller: 'PageCtrl',
      templateUrl: 'views/contact.html',
      resolve: {
        page: function ($stateParams) {
          return $stateParams;
        }
      }
    });
  }
]).run();