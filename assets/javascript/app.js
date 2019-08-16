$( document ).ready(function() {

setTimeout(oneminute, 60*1000);
setTimeout(timeUp , 60* 1000);

function oneminute (){
    $("#Time-Remaining").append("Time-Remaining: "+ oneminute);
}

function timeUp(){
    $("#Time-Remaining").html("Times UP!");
}

});