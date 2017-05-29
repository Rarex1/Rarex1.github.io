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
//Mover el fondo con el puntero
var X,Y;
var Xtratado, Ytratado;

function mover()
{
  traslate = 'translate('+Xtratado+'px,'+Ytratado+'px)';
  
  $(".fondo").css({
    'transform': traslate
  });
  
  window.requestAnimationFrame(mover)
}
$( document ).on( "mousemove", function( event ) {
  X = event.pageX;
  Y = event.pageY;
  
  ancho = $(window).width() / 2;
  largo = $(window).height() / 2;
  
  Xtratado =  (ancho - X)*(1/50);
  Ytratado =  (largo - Y)*(1/50);
});
mover();
// Pruebas con clima
$.ajax({
url: "http://api.wunderground.com/api/207e3e829b8f1a1c/conditions/q/autoip.json",
type: "POST",
dataType: "JSON",
success: function(data)
	{
	  console.log(data);
	}
});
