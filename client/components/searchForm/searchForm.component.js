(function() {
	angular.module("omdbApp")
		.component("searchForm", {
			// templateUrl: "components/searchForm/searchForm.template.html",
			template: `
				<h1>hey james and alex, can you see this?</h1>
			`,
			controller: controller
		});

	controller.$inject = ["movieService"];

	function controller(movieService) {
		const vm = this;
		vm.showForm = true;
		vm.search = search;
		vm.movies;

		function search(query) {
			vm.movies = movieService.search(query);
			vm.query = {};
		}
	}
})();