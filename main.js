var rileva=0;
$('a').click(function(){
    if(rileva == 1){
        $('.hamburger-menu').css('display','block');
        rileva=0;
    }else{
        $('.hamburger-menu').css('display','none');
        rileva=1;
    }
    
});