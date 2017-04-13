(function() {
	angular.module("omdbApp")
		.service("movieService", service);

	service.$inject = ["$http"];

	const OMDB_API_SEARCH_ENDPOINT="http://www.omdbapi.com/?s=";
	const OMDB_API_ID_ENDPOINT="http://www.omdbapi.com/?i=";
	const TYPE = {
		MOVIE: "&type=movie"
	}

	function service($http) {
		this.search = (query) => {
			var moviesArr = [];
			$http.get(OMDB_API_SEARCH_ENDPOINT + query.searchQuery + TYPE.MOVIE)
				.then(movies => {
					movies.data.Search.forEach(movie => {
						moviesArr.push(movie);
					})
				})
			return moviesArr;
		}

		this.searchById = (id) => {
			var movieData = [];
			$http.get(OMDB_API_ID_ENDPOINT + id)
				.then(movie => {
					movieData.push(movie.data);
				});
			return movieData;
		}
	}
})();