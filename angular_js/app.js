"use strict";

var app = angular.module("dabbble",['dabbble.controllers','dabbble.services']);

app.config(function($routeProvider){
   $routeProvider
    .when("/shots/:id",{controller:"ShotsCtrl", templateUrl: "partials/shot.html" })
    .when("/",{controller:"ShotsListCtrl", templateUrl: "partials/shots_list.html" })
    .otherwise({redirectTo: "/"});
});