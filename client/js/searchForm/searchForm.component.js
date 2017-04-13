(function() {
	angular.module("omdbApp")
		.component("searchForm", {
			templateUrl: "/js/searchForm/searchForm.template.html",
			controller: controller
		});

	controller.$inject = ["$http"];

	function controller($http) {
		const vm = this;
		vm.search = search;
		vm.movies = [];

		function search() {
			$http.get("http://www.omdbapi.com/?s=" + vm.query.searchQuery)
				.then(movies => {
					movies.data.Search.forEach(movie => {
						vm.movies.push(movie);
					});
				});
			vm.query = {};
		}
	}
})();