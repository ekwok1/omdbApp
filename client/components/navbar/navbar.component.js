(function() {
	angular.module("omdbApp")
		.component("navbar", {
			templateUrl: "/components/navbar/navbar.template.html",
			controller: controller
		});

	function controller() {
		const vm = this;
	}
})();