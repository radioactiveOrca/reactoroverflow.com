angular.module('hackOverflow.controllers', [])

.controller('AppCtrl', function($scope, $rootScope, $ionicModal, $timeout, User, Posts, $ionicHistory, $state, $ionicViewSwitcher) {
  // Set current signed in user
  $scope.username = User.getUser();

  $scope.data = {};


  $scope.submitSearch = function(word) {
    $state.go('app.search', {query: word})
    $scope.data.keywords = "";

  };
  $scope.myGoBack = function() {
    if ($ionicHistory.currentTitle() === "Post" && $ionicHistory.backTitle() === "Create A Post") {
      $ionicViewSwitcher.nextDirection('back');
      $state.go('app.posts');
      $ionicHistory.clearHistory();
    } else {
      $ionicHistory.goBack();
    }
  };
});


