angular.module('hackOverflow.search', [])

.controller('SearchCtrl', function($scope, $state, Posts) {
  var word = $state.params.query;
  $scope.getPosts = function() {
    Posts.searchPosts(word, function(results){
      console.log("word",results);
      console.log('I am broadcasting the response data==== ', results);
      $rootScope.$broadcast('showResults', results);

    });
  };

  $scope.$on('$ionicView.enter', function () {
    $scope.getPosts();
  });
});