'use strict';
var app = angular.module('musicApp',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/myMusic', {
            templateUrl: 'views/userView/mainActivity.html',
            controller: 'mainActivityCtrl'
        }).
        when('/upload', {
            templateUrl: 'views/userView/upload.html'
            // controller: 'AddOrderController'
        }).
        otherwise({
            redirectTo: '/myMusic'
        });
    }]);
/**
 * Created by himanshumaheshwari on 20/03/17.
 */
