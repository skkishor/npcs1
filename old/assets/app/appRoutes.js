app.config(function($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider

        .when('/', {
            templateUrl : '/views/index.html',
            controller  : 'HomeCtrl'
        })


        .otherwise({
            redirectTo: '/'
        });

        //$httpProvider.interceptors.push("authInter");
        //$locationProvider.html5Mode(true);

});
