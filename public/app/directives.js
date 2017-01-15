// Directives Path
var dir = 'app/views/';

app.directive('head', function() {
	return {
		templateUrl: dir+'head.html',
		controller: 'HomeCtrl',
	}
})

app.directive('navi', function() {
	return {
		templateUrl: dir+'navi.html',
		controller: 'HomeCtrl',
	}
})

app.directive('foot', function() {
	return {
		templateUrl: dir+'foot.html',
		controller: 'HomeCtrl',
	}
})

app.directive('gallery', function() {
	return {
		templateUrl: dir+'gallery.html',
		controller: 'HomeCtrl',
	}
})

app.directive('posts', function() {
	return {
		templateUrl: dir+'recent-posts.html',
		controller: 'HomeCtrl',
	}
})

app.directive('contacts', function() {
	return {
		templateUrl: dir+'contacts.html',
		controller: 'HomeCtrl',
	}
})

app.directive('msg', function() {
	return {
		templateUrl: dir+'msg.html',
		controller: 'HomeCtrl',
	}
})
