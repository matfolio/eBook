
function bookListController() {
	var ctrl = this;
}

function bookListController1() {
}

angular.module('eBook').component('ebookList', {
	templateUrl: 'views/main.html',
	controller: bookListController,
	bindings: {
		sort: '=',
		count: '=',
		books: '=',
		search: '=',
		onOrder: '&'
	}
});

angular.module('eBook').component('ebookDetail', {
	templateUrl: 'views/ebookdetail.html',
	controller: bookListController1,
	bindings: {
		details: '=',
		ind: '='
	}
});




