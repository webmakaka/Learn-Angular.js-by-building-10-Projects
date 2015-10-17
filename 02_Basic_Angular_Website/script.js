var app = angular.module("computer", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/main', {
        templateUrl: 'main.html',
        controller: 'MainCtrl'
    })
    .when('/about', {
        templateUrl: 'about.html',
        controller: 'MainCtrl'
    })
    .when('/services', {
        templateUrl: 'services.html',
        controller: 'ServicesCtrl'
    })
    .when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactCtrl'
    })
    .otherwise({redirectTo:'/main'});
}]);

app.controller('MainCtrl', ['$scope', function($scope){

}]);

app.controller('ServicesCtrl', ['$scope', '$http', function($scope, $http){
    //console.log("ServicesCtrl");

    $http.get('services.json').then(function(response){
        // console.log("ServicesCtrl 1");
    console.log(response.data);
    //     // console.log(response.data);
    //     // $scope.services = response.data;
    });
}]);

app.controller('ContactCtrl', ['$scope', function($scope){

}]);
