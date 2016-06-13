angular.module('app').controller('UsersCtrl',function($scope, usersService, $state){

	$scope.users = [];
	$scope.new_user = {first_name: '', last_name: '', username: '', email: '', password: ''};

	$scope.getAllUsers = function() {
		usersService.resource.query({}, function(data){
			$scope.users = data;
		});
	};

	$scope.createUser = function() {
		var new_user = {first_name: $scope.new_user.first_name, last_name: $scope.new_user.last_name, username: $scope.new_user.username, email: $scope.new_user.email, password: $scope.new_user.password};
		usersService.resource.save(new_user, function(data){
			$scope.users.push(data);
		});
	};

});