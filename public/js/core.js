var cbmabot = angular.module('cbmabot', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// test http call
	$http.get('/api/test')
		.success(function(data) {
			$scope.test = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

}
