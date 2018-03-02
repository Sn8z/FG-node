angular.module("FollowGaming").controller("HomeCtrl", function($scope, $http) {
  var news = $http.get("/api/news");
  news.then(function(res) {
    $scope.news = res.data;
  });

  var reddit = $http.get("/api/gaming");
  reddit.then(function(res) {
    $scope.reddit = res.data;
  });

  var esports = $http.get("/api/esports");
  esports.then(function(res) {
    $scope.esports = res.data;
  });
});
