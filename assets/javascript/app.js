  // Variable and declarations
// +++++++++++++++++++++++++++++++++++++++++++++++++++
    var time = 10;
    var correct = 0;
    var incorrect = 0;
    var misses = 0;
    var timer;     // Interval Timer

var answers = ["west","south","east","north","east"];
// note that last value in each array matches correct answer so can use as the key to finding correct or incorrect
var question1 = "the sun rises in the?";
$(".display").html(question1);



an1=answers.slice(0)[0];
$("#display1").text(an1);
an2=(answers.slice(1)[0]);
$(".display2").html("an2");
an3=(answers.slice(2)[0]);
$(".display3").html(an3);
an4=(answers.slice(3)[0]);
$(".display4").html(an4);



$(document).ready(function(){

    $("#start-button").on("click", function(){

        //test button click
        console.log("button clicked");
        
        //clears div content.
         $(".content").empty();

        // Appends h1 tag for timer.
        $(".content").append("<h1>Time: <span id='time'>"+ time +"</></h1>");

        //Interval Timer.
        // Every 1s (1000ms) callback function is executed.
            timer = setInterval(function(){
            time--;
            $("#time").html(time);

            //condition to stop timer/ check questions
            if(time < 1){
                clearInterval(timer);
                // checkAnswers();
            }   
        }, 1000);
    
    // $(document).on("click", "#done", function(){
    //         clearInterval(timer);
    //   $("#content").append("<br><br><br><br><button id='done'>DONE</button>");  
    // });


});
    $("#display1").on("click", function myFunction() {
    console.log("click1");
    alert ("You Selected " + an1);
    correctanswer=answers.slice(-1)[0];
    useranswer=an1;


    if (useranswer===correctanswer){
            alert("you guessed right");
            correct++;        
}
   if (useranswer!=correctanswer){
        alert("wrong!");
        alert("the correct answer was " + correctanswer);
        incorrect++;
 }
 $(".correct").append("<h3>Correct: "+ correct + "</h3>"); 
        $(".incorrect").append("<h3>Incorrect:"+ incorrect + "</h3>");
  }); 
   
    $("#display2").on("click",function myFunction() {
    console.log("click1");
    alert ("You Selected " + an2);
    correctanswer=answers.slice(-1)[0];
    useranswer=an2;


    if (useranswer===correctanswer){
            alert("you guessed right");
           correct++;
}

   if (useranswer!=correctanswer){
        alert("wrong!");
        alert("the correct answer was " + correctanswer);
        incorrect++;  
}
$(".correct").append("<h3>Correct: "+ correct + "</h3>"); 
        $(".incorrect").append("<h3>Incorrect:"+ incorrect + "</h3>");
});
$("#display3").on("click",function myFunction() {
    console.log("click1");
    alert ("You Selected " + an3);
    correctanswer=answers.slice(-1)[0];
    useranswer=an3;

    if (useranswer===correctanswer){
            alert("you guessed right");
            correct++;
        }
           
   if (useranswer!=correctanswer){
        alert("wrong!");
        alert("the correct answer was " + correctanswer);
          incorrect++;
      }
      $(".correct").html("<h3>Correct: "+ correct + "</h3>"); 
        $(".incorrect").html("<h3>Incorrect:"+ incorrect + "</h3>");
});
$("#display4").on("click",function myFunction() {
    console.log("click1");
    alert ("You Selected " + an4);
    correctanswer=answers.slice(-1)[0];
    useranswer=an4;
   
    
    if (useranswer===correctanswer){
            alert("you guessed right");
            correct++;
        }
   if (useranswer!=correctanswer){
        alert("wrong!");
        alert("the correct answer was " + correctanswer);
          incorrect++;
      }
      $(".correct").html("<h3>Correct: "+ correct + "</h3>"); 
        $(".incorrect").html("<h3>Incorrect: "+ incorrect + "</h3>");
});
});

