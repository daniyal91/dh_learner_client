angular.module('app').factory('usersService',function($http, $q, $resource) {

	var usersService = {};

	usersService.resource = $resource('http://localhost:3000/users/:id', {}, {
		query: {method: 'GET', isArray: true},
		save: {method: 'POST'},
		update: {method: 'PUT'},
		delete: {method: 'DELETE'}
	});

	return usersService;
});