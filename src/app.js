angular.module('app', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('app').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'app/home/home.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

//hello

angular.module('app').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
