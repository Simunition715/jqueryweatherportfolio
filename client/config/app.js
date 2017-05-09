var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/dashboard.html',
		// controller: 'UsersController as UC'
	})
	.otherwise('/')
})