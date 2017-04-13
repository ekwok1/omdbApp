(function() {
	angular.module("omdbApp")
		.component("singlePanelLayout", {
			bindings: {
				"result": "<",
				"showForm": "=",
				"view": "="
			},
			templateUrl: "components/singlePanelLayout/singlePanelLayout.template.html",
			controller: controller
		});

	controller.$inject = ["movieService"];

	function controller(movieService) {
		const vm = this;
		vm.toggleView = toggleView;

		function toggleView() {
			vm.view = !vm.view;
			vm.showForm = !vm.showForm;
		}
	}
})();