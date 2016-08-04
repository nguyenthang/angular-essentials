parkingApp.run(function($http){
	console.log($http.defaults.headers);
	$http.defaults.headers.common.Accept = "application/json";
});