// Activar y ocultar POP-UP
// Activar POP UP
$('#Btn_contacto').click(function(event) {

	$(".contacto").css('display', 'flex')
	.hide()
	.fadeIn();

});
// Ocultar POP-UP con tecla escape
$(document).keyup(function(e) {
	if(e.keyCode == 27)
	{
		$('.contacto').fadeOut();
	}
});
// Ocultar POP-UP con click en el fondo negro
$('#Btn_contacto').click(function() {
    var span = $(this);

    $('.contacto').addClass('span-active');

    $('.contacto').click(function(e) {
        
        if($(e.target).hasClass('span-active')) {
            
            
            $('.contacto').fadeOut();
        }
    });
});