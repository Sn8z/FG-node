angular
  .module("FollowGaming")
  .controller("DashboardCtrl", function($scope, $http) {
    var streamers = $http.get("/api/streamer/all");
    streamers.then(function(res) {
      $scope.streamers = res.data;
    });
  });
