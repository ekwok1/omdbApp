(function() {
	angular.module("omdbApp")
		.component("searchForm", {
			templateUrl: "/js/searchForm/searchForm.template.html",
			controller: controller
		});

	function controller() {
		const vm = this;
	}
})();