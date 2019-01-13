$(function(){
    $('.prev-btn').click(function(){
        $('#lbt').carousel('prev');
    });

    $('.next-btn').click(function(){
        $('#lbt').carousel('next')
    });

    $(document).on('keydown',function(x){
        console.log(x.which);
        switch(x.which){
            case 37:
                $('#lbt').carousel('prev');
                break;
            case 39:
                $('#lbt').carousel('next');
                break;
        };

    });
var y=true;
$('.play-btn').click(function(){

    if(y){
        $('#lbt').carousel('cycle');
        $(this).children('span').removeClass('glyphicon-play').addClass('glyphicon-pause');
    }
    else{
        $('#lbt').carousel('pause');
        $(this).children('span').removeClass('glyphicon-pause').addClass('glyphicon-play');
    }
    y=!y;
});


});