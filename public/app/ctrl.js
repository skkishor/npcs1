app.controller('HomeCtrl', function($scope, details, customJS, $location, $http) {
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

    $scope.contact = {};
    $scope.homeContact = {};

    $scope.submitContact = function() {

        var flag = 0;
        if($scope.contact.name.length < 3) {
            flag++;
        }
        if($scope.contact.email.length < 4) {
            flag++;
        }
        if($scope.contact.phone.length < 3) {
            flag++;
        }
        if($scope.contact.msg.length < 5) {
            flag++;
        }
        if(flag == 0) {
            $http.post('/submit-contact', $scope.contact).then(function(response) {
                if(response.data.success == true) {
                    alert('Email Sent! We will get back to you shortly.')
                } else {
                    alert('Email Failed! Try again later, sorry for the inconvenience.')
                }
            })
        }

    }

    $scope.submitHomeContact = function() {

        console.log('hi');

        var flag = 0;
        if($scope.homeContact.name.length < 3) {
            flag++;
        }
        if($scope.homeContact.email.length < 4) {
            flag++;
        }
        if($scope.homeContact.phone.length < 3) {
            flag++;
        }
        if($scope.homeContact.msg.length < 5) {
            flag++;
        }

        console.log($scope.homeContact);
        if(flag == 0) {
            $http.post('/submit-contact', $scope.homeContact).then(function(response) {
                if(response.data.success == true) {
                    alert('Email Sent! We will get back to you shortly.')
                } else {
                    alert('Email Failed! Try again later, sorry for the inconvenience.')
                }
            })
        }

    }




})
