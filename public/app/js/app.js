var app = angular.module("FollowGaming", ["ngRoute"]).config([
  "$routeProvider",
  "$locationProvider",
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/", {
        templateUrl: "partials/home.html",
        controller: "HomeCtrl"
      })
      .when("/profile", {
        templateUrl: "partials/profile.html",
        controller: "ProfileCtrl"
      })
      .when("/dashboard", {
        templateUrl: "partials/dashboard.html",
        controller: "DashboardCtrl"
      })
      .otherwise({ redirectTo: "/" });
  }
]);
