(function() {
	angular.module("omdbApp")
		.component("navbar", {
			templateUrl: "/js/navbar/navbar.template.html",
			controller: controller
		});

	function controller() {
		const vm = this;
	}
})();