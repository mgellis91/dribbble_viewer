'use strict';

var services = angular.module("dabbble.services",[]);

services.factory("dribbble",function($http){    
    return{        
        accessToken : "your access token",
        list : function(){
            return  $http.jsonp("http://api.dribbble.com/v1/shots/?callback=JSON_CALLBACK&access_token=" + this.accessToken);
        },
        shot : function(id){
            return  $http.jsonp("http://api.dribbble.com/v1/shots/" + id + "?callback=JSON_CALLBACK&access_token=" + this.accessToken);
        }
    }
});