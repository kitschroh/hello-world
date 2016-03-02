'use strict';

angular.module('helloWorldApp', [])
.controller('printController', ['$scope', function($scope) {
	$scope.message = 'Hello World';
}]);