app.controller('HomeCtrl', function($scope, details, customJS, $location) {
    customJS.exe();
    if($('.owl-controls').length > 0) {
        $('.owl-controls').hide();
        $('.owl-carousel').data('owl-carousel').onResize();
    }

    $scope.details = details;

    $('.navi-item').removeClass('active');
    if($location.path() == '/') {
        $('.navi-item').removeClass('active');
        $('[data-link="home"]').addClass('active');
    }
    if($location.path() == '/services') {
        $('.navi-item').removeClass('active');
        $('[data-link="services"]').addClass('active');
    }
    if($location.path() == '/faq') {
        $('.navi-item').removeClass('active');
        $('[data-link="faq"]').addClass('active');
    }
    if($location.path() == '/contact') {
        $('.navi-item').removeClass('active');
        $('[data-link="contact"]').addClass('active');
    }
    if($location.path() == '/pest-inspection' || $location.path() == '/call-experts' || $location.path() == '/easy-way') {
        $('.navi-item').removeClass('active');
        $('[data-link="info"]').addClass('active');
    }

    if($location.path() == '/agent' ||
    $location.path() == '/ants' ||
    $location.path() == '/bed-bugs' ||
    $location.path() == '/flies' ||
    $location.path() == '/food' ||
    $location.path() == '/kitchen' ||
    $location.path() == '/roaches' ||
    $location.path() == '/products') {
        $('.navi-item').removeClass('active');
        $('[data-link="gallery"]').addClass('active');
    }
    



})
