
$(document).ready(function() {

    //getting img info delay
    FPupdate();
    function FPupdate(){
        //preset static attribute
        //staticAttr();
        
        setTimeout(function (){ 
            
            $('.focuspoint').each(function() {
                var thisimg = new Image();
                
                // Create virtual img to set imgs src src
                var imgs = $(this).find('img');
                thisimg.src = imgs.attr('src');
                var is = thisimg.src;
                //get width and height
                var img_RW = thisimg.width;
                var img_RH = thisimg.height;

                //set every attribute
                $(this).attr({
                    'data-focus-x':"0.00",
                    'data-focus-y':"0.00",
                    'data-image-w':img_RW,
                    'data-image-h':img_RH,
                });
                $(imgs).attr({
                    'data-src':thisimg.src,
                    'class':'lazy',
                });
                startLazy();

            });
            $('.focuspoint').focusPoint();
        }, 400);
        
    };

    function staticAttr(){
        $('.focuspoint').attr({
            'data-focus-x':"0.00",
            'data-focus-y':"0.00",
            'data-image-w':'1100',
            'data-image-h':'380',
        });
        $('.focuspoint').focusPoint();
    };



    //lazyLoad
    $('.hor_1').click(function(){
        //staticAttr();
        startLazy();
        $('.focuspoint').focusPoint();
    });

    //word ellipsis
    $('.content').find('.article').addClass('ellipsis');
    $('.ellipsis').text().replace('/&nbsp;/g', '');
    
    //Lazyload
    startLazy();
    function startLazy(){
        
         $(".lazy").Lazy({
             // your configuration goes here
             scrollDirection: 'vertical',
             effect: 'fadeIn',
             effectTime:200, //duration
             throttle:800,//delay
             visibleOnly: true,
             onError: function(element) {
                 console.log('lazy error loading' + element.data('src'));
             },
             
         });
         $('.focuspoint').focusPoint();
         
    };



     
});