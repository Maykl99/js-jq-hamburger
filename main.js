// metodo 1
/* var rileva=0;
$('a').click(function(){
    if(rileva == 1){
        $('.hamburger-menu').css('display','block');
        rileva=0;
    }else{
        $('.hamburger-menu').css('display','none');
        rileva=1;
    }
}); */

// metodo 2
/*  var rileva=false;
$('.header-right>a').click(function(){
    if(rileva == true){
        $('.hamburger-menu').show('slow');
        rileva=false;
    }else{
        $('.hamburger-menu').hide('slow');
        rileva=true;
    }
}); */

// metodo 3
/*  $(".header-right>a").click(function(){
    $(".hamburger-menu").toggle(400);
});  */

var esegui=$('.hamburger-menu');

//apri
$('.header-right>a').click(function(){
    esegui.show('slow');
})
$('.close').click(function(){
    esegui.hide('slow');
})



