(function() {
	angular.module("omdbApp")
		.service("movieService", service);

	service.$inject = ["$http"];

	const OMDB_API_ENDPOINT="http://www.omdbapi.com/?s=";
	const TYPE = {
		MOVIE: "&type=movie"
	}

	function service($http) {
		this.search = (query) => {
			var moviesArr = [];
			$http.get(OMDB_API_ENDPOINT + query.searchQuery + TYPE.MOVIE)
				.then(movies => {
					movies.data.Search.forEach(movie => {
						moviesArr.push(movie);
					})
				})
			return moviesArr;
		}
	}
})();