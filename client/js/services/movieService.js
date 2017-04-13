(function() {
	angular.module("omdbApp")
		.service("movieService", service);

	service.$inject = ["$http"];

	const OMDB_API_SEARCH_ENDPOINT="http://www.omdbapi.com/?s=";
	const OMDB_API_ID_ENDPOINT="http://www.omdbapi.com/?i=";
	const TYPE = {
		MOVIE: "&type=movie",
		SERIES: "&type=series"
	}

	function service($http) {
		this.search = (query) => {
			var response = [];

			var path = OMDB_API_SEARCH_ENDPOINT + query.searchQuery;
			if (query.queryType == "series") {
				path += TYPE.SERIES;
			} else {
				path += TYPE.MOVIE;
			}

			$http.get(path)
				.then(movies => {
					if (movies.data.Search) {
						movies.data.Search.forEach(movie => {
							response.push(movie);
						})
					} else {
						response.push(movies.data);
					}
				})
			return response;
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