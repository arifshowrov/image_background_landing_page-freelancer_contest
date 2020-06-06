//jQuery(function($) {
//    $('#counter').countTo({
//        from: 1,
//        to: 1000,
//        speed: 2000,
//	decimals: 0,
//	separator: ','
//    });
//});

$('#counter').jQuerySimpleCounter({
    start:  0,

	end:100,
    easing: 'swing',
    duration: 2000,
    complete: ''

	});