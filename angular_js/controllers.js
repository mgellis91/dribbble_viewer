'use strict';

var controllers = angular.module("dabbble.controllers",[]);

controllers.controller("AppCtrl",function AppCtrl($scope){
    $scope.name = "Module";    
});

controllers.controller("ShotsListCtrl",function($scope,$routeParams,$http, dribbble){         
  dribbble.list().then(function(data){
       $scope.list = data.data;    
       console.log(data.data);       
   });      
});

controllers.controller("ShotsCtrl",function($scope,$routeParams,$http, dribbble){
  
    var id = $routeParams.id;
    dribbble.shot(id).then(function(data){
       $scope.shot = data.data;
       console.log(data);             
   });
       
});


