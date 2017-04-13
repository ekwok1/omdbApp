(function() {
	angular.module("omdbApp")
	   	   .config(config)

	config.$inject = ['$stateProvider', '$locationProvider'];

	function config($stateProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$stateProvider.state({
			name: 'home',
			url: '/',
			component: 'test'
		})
	}
})();