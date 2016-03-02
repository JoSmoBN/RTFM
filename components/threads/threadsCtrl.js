angular.module('rtfmApp')
  .controller('threadsCtrl', function($scope, threadsRef, $firebaseArray) {
    $scope.threads = $firebaseArray(threadsRef);

    $scope.createThread = function() {
      $scope.threads.$add($scope.newThread)
      $scope.newComment = {};
    };
  });
