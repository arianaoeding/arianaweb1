$(document).ready(function(){
    $( window ).on('resize', function() {
        console.log($(this).width());
    });

 

$('.toggle-btn').on('click', function(){
        
        
            $('.nav-list').fadeToggle('slow');

 });



 
});