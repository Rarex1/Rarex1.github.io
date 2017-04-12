$('#Btn_contacto').click(function(event) {

	$(".contacto").css('display', 'flex')
	.hide()
	.fadeIn();

});
$(document).keyup(function(e) {
	if(e.keyCode == 27)
	{
		$('.contacto').fadeOut();
	}
});

$('#Btn_contacto').click(function() {
    var span = $(this);

    $('.contacto').addClass('span-active');

    $('.contacto').click(function(e) {
        
        if($(e.target).hasClass('span-active')) {
            
            
            $('.contacto').fadeOut();
        }
    });
});