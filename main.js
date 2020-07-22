var esegui=$('.hamburger-menu');

//metodo 1
/* $('.header-right>a').click(function(){
    esegui.show('slow');
});
$('.close').click(function(){
    esegui.hide('slow');
}); */


// metodo 2
$('.header-right>a').click(function(){
    esegui.fadeIn(500);
});
$('.close').click(function(){
    esegui.fadeOut(500);
});



