(function() {
	angular.module("omdbApp")
		.component("panelLayout", {
			bindings: {
				showForm: "=",
				movies: "<"
			},
			templateUrl: "components/panelLayout/panelLayout.template.html",
			controller: controller
		});

	controller.$inject = ["movieService"];

	function controller(movieService) {
		const vm = this;
		vm.toggleView = true;
		vm.searchById = searchById;

		function searchById(id) {
			vm.result = movieService.searchById(id);
			vm.toggleView = !vm.toggleView;
			vm.showForm = !vm.showForm;
		}
	}
})();