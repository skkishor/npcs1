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

        // PESTS

            .when('/flies', {
                templateUrl : viewDir+'pests/fly-view.html',
                controller  : 'HomeCtrl'
            })

            .when('/fleas', {
                templateUrl : viewDir+'pests/fleas-view.html',
                controller  : 'HomeCtrl'
            })

            .when('/spiders', {
                templateUrl : viewDir+'pests/spiders-view.html',
                controller  : 'HomeCtrl'
            })

            .when('/bees', {
                templateUrl : viewDir+'pests/bees-view.html',
                controller  : 'HomeCtrl'
            })

            .when('/moths', {
                templateUrl : viewDir+'pests/moths-view.html',
                controller  : 'HomeCtrl'
            })

            .when('/wasps', {
                templateUrl : viewDir+'pests/wasps-view.html',
                controller  : 'HomeCtrl'
            })

            .when('/rats-mice', {
                templateUrl : viewDir+'pests/rats-mice-view.html',
                controller  : 'HomeCtrl'
            })

            .when('/squirrel', {
                templateUrl : viewDir+'pests/squirrel-view.html',
                controller  : 'HomeCtrl'
            })

            .when('/pigeons', {
                templateUrl : viewDir+'pests/pigeons-view.html',
                controller  : 'HomeCtrl'
            })

            .when('/bed-bugs', {
                templateUrl : viewDir+'pests/bed-bugs-view.html',
                controller  : 'HomeCtrl'
            })

            .when('/ants', {
                templateUrl : viewDir+'pests/ants-view.html',
                controller  : 'HomeCtrl'
            })

            .when('/roaches', {
                templateUrl : viewDir+'pests/roaches-view.html',
                controller  : 'HomeCtrl'
            })

    // END PESTS


    .when('/products', {
        templateUrl : viewDir+'gallery/products-view.html',
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



    .when('/agent', {
        templateUrl : viewDir+'gallery/agent-view.html',
        controller  : 'HomeCtrl'
    })

    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode(true);

});
