var app = angular.module("computer", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/main', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
    })
    .otherwise({redirectTo:'/main'});
}]);

app.controller('MainCtrl', ['$scope', function($scope){
    $scope.person = 'John Doe';
    console.log($scope);
}]);
