(function() {
	angular.module("omdbApp")
		.component("singlePanelLayout", {
			templateUrl: "/components/singlePanelLayout/singlePanelLayout.template.html",
			controller: controller
		});

	controller.$inject = ["movieService", "$location"];

	function controller(movieService, $location) {
		const vm = this;
		vm.imdbID = $location.path().split("/")[2];
		vm.searchById = searchById;
		vm.searchById(vm.imdbID);

		function searchById(id) {
			vm.movie = movieService.searchById(id);
		}
	}
})();