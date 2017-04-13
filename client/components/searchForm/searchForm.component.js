(function() {
	angular.module("omdbApp")
		.component("searchForm", {
			templateUrl: "/components/searchForm/searchForm.template.html",
			controller: controller
		});

	controller.$inject = ["$http"];

	function controller($http) {
		const vm = this;
		vm.search = search;
		vm.movies = [];

		function search() {
			vm.movies = [];
			$http.get("http://www.omdbapi.com/?type=movie&s=" + vm.query.searchQuery)
				.then(movies => {
					movies.data.Search.forEach(movie => {
						vm.movies.push(movie);
					});
				});
			vm.query = {};
		}
	}
})();