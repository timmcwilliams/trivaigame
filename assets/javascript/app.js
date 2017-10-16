
// var timer=10000;
      
// // win widows starts activate some functions
// window.onload = setInterval(function(){ myTimer() }, 1000); {


//   $("#stop").click(stopwatch.stop);
//   $("#reset").click(stopwatch.reset);
//   $("#start").click(stopwatch.start);
//   $("#count").click(stopwatch.count)
// };
// var count = {		
// 		count: function(){
// 		timer.time--;
// 		$("#display").html(timer);

// $("#display").html(timer)count: function(){
// 	},

// }}
// start timer on hold for now
    

// Show Questions and Choices
    // object use:=

//  var question = {
// 	question1:"the sun rises in the",
// 	answer1      :"west",
// 	answer3      :"north",
// 	answer2		 :"south",
// 	answer4      :"east",
// 	correctanswer:"west",
	

// 	formQuestion : function() {
// 		return this.question1 + this.answer1 +  this.answer2 +  this.answer3 +  this.answer4;
// 	   }
// };



// document.getElementById("question").innerHTML = question.formQuestion();




// if correctanswer=(true) "correct"
// 	wins=++
// 	else next question
//     losses=++
// // evaluate answer with if statement
// // if answer1



// Post Score

// set arrays of questions to fill object:

// questions: 



//  var question = {

// Show Question
var question1 ="the sun rises in the?";
// Display Question
$(".display").html(question1);
// Set Array of answers
var	answers = ["west","south","east","north","west"];
// Set a variable for each answer
var an1=(answers.slice(0)[0]);
$(".display1").html(an1);
var an2=(answers.slice(1)[0]);
$(".display2").html(an2);
var an3=(answers.slice(2)[0]);
$(".display3").html(an3);
var an4=(answers.slice(3)[0]);
$(".display4").html(an4);
// Tag a button with an answer
function myFunction() {

    document.getElementById("display1").innerHTML = "You Picked " + an1;
    useranswer=an1;
correctanswer=(answers.slice(-1)[0]);
if (useranswer==correctanswer)
{
alert("you guessed right");
}
else{
alert("wrong!");
};
}
// set the user answer response as a new variable
// var useranswer=(myFunction);
// Set a variable for correct answer in each array to be the last string
// var correctanswer=(answers.slice(-1)[0]);
// // evaluate answer
// if (useranswer==correctanswer)
// {
// alert("you guessed right");
// }
// else{
// alert("wrong!");
// };


// function myfunction() {
//   var sub = $('#input').val();
//   console.log(sub);
// }

// <input type="text" id="input">
// <button id="buttton" class="button" onclick="myfunction()">Create Envelope</button>
// <input type="text" id='input'>
// <button id="buttton" class="button" onclick="myfunction()">Create Envelope</button>