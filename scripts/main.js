$( document ).ready(function() {
    console.log( "ready!" );
    // add function names here
});

// how to insert without erasing existing text?
$(".btn").click(function(){
    $.getJSON("https://api.adviceslip.com/advice", function(data, status){
        $(".count").text(data.slip.id);
        $(".advice").text(data.slip.advice);
    });
});