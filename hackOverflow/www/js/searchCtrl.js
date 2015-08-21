angular.module('hackOverflow.search', [])

.controller('SearchCtrl', function($scope, $state, Posts) {
  var word = $state.params.query;
  $scope.getPosts = function() {
    $scope.data = {};
    Posts.searchPosts(word, function(results){
      $scope.data.posts = results;
    });
  };

  $scope.$on('$ionicView.enter', function () {
    $scope.getPosts();
  });
});