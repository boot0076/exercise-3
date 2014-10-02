var sales = $('.sales')
var details = $('.sales__details')

var salesClickHandler = function () {
	var currentState = details.attr('data-state')

	if (currentState == 'active') {
		details.attr('data-state', 'inactive');
	} else {
		details.attr('data-state', 'active')
	}
};

sales.on('click', salesClickHandler)

var sales2 = $('.sales2')
var details2 = $('.sales__details2')

var salesClickHandler = function () {
	var currentState = details2.attr('data-state')

	if (currentState == 'active') {
		details2.attr('data-state', 'inactive');
	} else {
		details2.attr('data-state', 'active')
	}
};

sales2.on('click', salesClickHandler)

