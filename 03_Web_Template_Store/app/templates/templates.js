'use strict';

var app = angular.module('templateStore.templates', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/templates',{
            templateUrl: 'templates/templates.html',
            controller: 'TemplatesCtrl'
        });
}]);

app.controller('TemplatesCtrl', ['$scope', function($scope){
        console.log($scope);
}]);
