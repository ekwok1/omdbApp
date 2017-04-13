(function() {
	angular.module("omdbApp")
		.component("panelLayout", {
			bindings: {
				movies: "<"
			},
			templateUrl: "/components/panelLayout/panelLayout.template.html",
			controller: controller
		});

	function controller() {
		const vm = this;
		vm.search = search;

		function search(id) {
			console.log(id);
		}
	}
})();