var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider.state("users", {
    url: "/",
    templateUrl: "../views/parcials/index.html",
    controller: "userController"
  });
  $stateProvider.state("create", {
    url: "/create",
    templateUrl: "../views/parcials/create.html",
    controller: "userController"
  });
  // .state("edit", {
  //   url: "/edit/:id",
  //   templateUrl: "/views/user/create.html",
  //   controller: "userController"
  // })
  // .state("details", {
  //   url: "/details/:id",
  //   templateUrl: "/views/user/details.html",
  //   controller: "userController"
  // });
});

app.constant("apiUrl", 'http://localhost:3000/api');