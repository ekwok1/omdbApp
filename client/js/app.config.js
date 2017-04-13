(function() {
	angular.module("omdbApp")
	   	   .config(config)

	config.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];

	function config($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider.state({
			name: 'home',
			url: '/',
			component: 'test'
		})
		$urlRouterProvider.otherwise("/");
	}
})();