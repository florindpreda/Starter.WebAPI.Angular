(function () {

	var app = angular.module("app", ["ui.router"]);

	app.config(function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/home");

		$stateProvider
			.state("home", {
				url: "/home",
				templateUrl: "Scripts/app/views/home.html"		
			})
			.state("values", {
				url: "/values",
				templateUrl: "Scripts/app/views/values.html",
				controller: "ValuesController"
			})
			.state("about", {
				url: "/about",
				templateUrl: "Scripts/app/views/about.html"
			});
	});

}());