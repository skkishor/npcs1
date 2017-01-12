// Directives Path
var dir = '/views/comp/';

app.directive('navi', function() {
	return {
		templateUrl: dir+'navi.html',
		controller: 'NaviCtrl',
	}
})
