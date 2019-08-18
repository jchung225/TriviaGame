

var correctAnswers ="";
var WrongAnsewers="";
    
var TimeRemaining = false;
if (TimeRemaining) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;

    }


    if ("Q1" === "Q1A4"){
        correctAnswers++;
    }
    else {
        WrongAnsewers++;
    }

    if ("Q2" ==="Q2A1"){
        correctAnswers++;
    }
    else {
        WrongAnsewers++;
    }

    if ("Q3" ==="Q3A1"){
        correctAnswers++;
    }
    else {
        WrongAnsewers++;
    }
    
    if ("Q4" ==="Q4A2"){
        correctAnswers++;
    }
    else {
        WrongAnsewers++;
    }
    
    if ("Q5" ==="Q5A3"){
        correctAnswers++;
    }
    else {
        WrongAnsewers++;
    }

    if ("Q6" ==="Q6A1"){
        correctAnswers++;
    }
    else {
        WrongAnsewers++;
    }
    

    if ("Q7" ==="Q7A4"){
        correctAnswers++;
    }
    else {
        WrongAnsewers++;
    }

    var submitbutton= document.getElementById("submit");

    $("submit").on("click",function() {
        alert("you got " +correctAnswers + "right");
        alert("you got " + WrongAnsewers + "Wrong");
    });

  
    
    
    

