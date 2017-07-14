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
// Eventos con scroll
var posPantalla;//largo de la pantalla hasta donde se ve
    

//Se añade el evento scroll y load a window
var fotoDosActivado = false;
$(window).on('scroll load', function()
{
  posPantalla = $(window).scrollTop()+$(window).height();
  posBloqueDos = $('.bloqueDos').offset().top + $('.bloqueDos').outerHeight()/2;
  // console.log(posBloqueDos);
  // console.log(posPantalla);
  if(posPantalla > posBloqueDos)
  {
    anchoTexto = $('.desc').width();
    $('.fotoDos img').css('right', anchoTexto+100+'px');
    fotoDosActivado = true;
  }
});
$(window).on('resize',function(event) {
  if (fotoDosActivado) 
  {
    anchoTexto = $('.desc').width();
    $('.fotoDos img').css('right', anchoTexto+100+'px');  
  }
});
