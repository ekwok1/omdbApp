(function() {
	angular.module("omdbApp")
		.component("panelLayout", {
			bindings: {
				movies: "<"
			},
			templateUrl: "/components/panelLayout/panelLayout.template.html",
			controller: controller
		});

	controller.$inject = ["movieService"];

	function controller(movieService) {
		const vm = this;
		vm.searchById = searchById;

		function searchById(id) {
			return movieService.searchById(id);
		}
	}
})();