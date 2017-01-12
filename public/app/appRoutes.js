app.config(function($routeProvider, $locationProvider, $httpProvider) {

    var viewDir = 'app/views/';

    $routeProvider

    .when('/', {
        templateUrl : viewDir+'home/home-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/services', {
        templateUrl : viewDir+'home/service-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/faq', {
        templateUrl : viewDir+'home/faq-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/contact', {
        templateUrl : viewDir+'home/contact-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/pest-inspection', {
        templateUrl : viewDir+'articles/pest-inspection-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/call-experts', {
        templateUrl : viewDir+'articles/call-experts-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/easy-way', {
        templateUrl : viewDir+'articles/easy-way-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/flies', {
        templateUrl : viewDir+'gallery/fly-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/products', {
        templateUrl : viewDir+'gallery/products-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/bed-bugs', {
        templateUrl : viewDir+'gallery/bed-bugs-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/food', {
        templateUrl : viewDir+'gallery/food-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/kitchen', {
        templateUrl : viewDir+'gallery/kitchen-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/ants', {
        templateUrl : viewDir+'gallery/ants-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/roaches', {
        templateUrl : viewDir+'gallery/roaches-view.html',
        controller  : 'HomeCtrl'
    })

    .when('/agent', {
        templateUrl : viewDir+'gallery/agent-view.html',
        controller  : 'HomeCtrl'
    })

    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

});
