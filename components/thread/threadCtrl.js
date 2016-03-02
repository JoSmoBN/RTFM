angular.module('rtfmApp')
  .controller('threadCtrl', function($scope, threadRef, commentsRef, $firebaseArray, $firebaseObject) {

    var thread = $firebaseObject(threadRef);
    $scope.comments = $firebaseArray(commentsRef);

    thread.$bindTo($scope, 'thread');

    $scope.createComment = function() {
      $scope.comments.$add($scope.newComment);
      $scope.newComment = {};
    }
});
