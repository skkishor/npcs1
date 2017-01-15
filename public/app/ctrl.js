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

    //$('.megamenu ul').hide();

    if($(window).width() < 768) {
        $('.dropdown-menu').hide();
    }

    $('.megamenu').on('click', function() {
        if($(window).width() < 768) {
            if($(this).hasClass('open')) {
                $(this).children('ul').hide();
            } else {
                $(this).children('ul').show();
            }
        }
    })


    $('.dropdown-toggle').on('click', function() {
        if($(window).width() < 768) {
            console.log($(this).attr('aria-expanded'));
            if($(this).attr('aria-expanded') == 'true') {
                $(this).next().hide();
            } else {
                $(this).next().show();
            }
        }
    })

    $scope.contact = {};


    $('.home-form-click').on('click', function(e) {
        /*e.preventDefault();
        $scope.homeContact = {};
        $scope.homeContact.name = $('#name').val();
        $scope.homeContact.email = $('#email').val();
        $scope.homeContact.phone = $('#phone').val();
        $scope.homeContact.msg = $('#msg').val();

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
        console.log(flag);
        if(flag == 0) {
            $http.post('/submit-contact', $scope.homeContact).then(function(response) {
                if(response.data.success == true) {
                    alert('Email Sent! We will get back to you shortly.')
                } else {
                    alert('Email Failed! Try again later, sorry for the inconvenience.')
                }
            })
        }*/

    })

    $scope.test = function() {console.log('pop');}

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
