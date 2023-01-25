
// question set object
var questionSets = [
  {
    question: "Who unfurls the National Flag in Republic Day ceremony in the state capitals?",
    answer:"a1",
    options: ["a1", "a2", "a3", "a4"],
  },
  {
    question: "q2",
    answer:"a2",
    options: ["a1", "a2", "a3", "a4"],
  },
  
]

/*
// players set object(for now only top 3)
var topPlayers = [
  {
    name: "",
    highscore: "",
    date: "",
  }
]
*/

var score = 0;
var playerName = "";
// we are using readline-sync package to get inputs
var readlineSync = require('readline-sync');

// function to welcome user 
function welcome(){
  console.log("---------------Welcome To Quizzler---------------");
  playerName = readlineSync.question("May I know your name? ");
  console.log("\nHello "+ playerName);
  console.log("This is a simple multiple choice quiz game.\nYou have to answer 10 question. You get 1 marks for right answer and 0 for wrong answer.\n")
  
  if(readlineSync.keyInYN("Shall we start the game than?\n") === false){
    console.log("Thanks for considering!")
    process.exit(0);
  }
  
}


// function to present a question, take answer and change score
function askQuestion(questionSet){
  var question = questionSet.question;
  var answer = questionSet.answer;
  var options = questionSet.options;

  console.log(question);
  // shows options and takes user input as no.
  var userAnswerIndex = readlineSync.keyInSelect(options, "Your answer?");

  if(answer === options[userAnswerIndex]){
    score++;
    console.log("Right Answer!");
  }
  else{
    console.log("Wrong Answer!");
  }
  console.log("Current score:", score, "\n");
  
}

function ending(){
  console.log(playerName+"'s final score:", score);
  if(score>questionSets.length*0.7){
    console.log("Looks like you are a master of this topic.");
  }
  else if(score>questionSets.length*0.5){
    console.log("Ahh you are well versed on this topic.")
  }
  else{
    console.log("Hmm.. Gotta know more about this topic.")
  }
  console.log("\nThanks for playing the game!")
}

function mainGameLoop(){
  welcome();
  for(var i = 0; i<questionSets.length; i++){
    askQuestion(questionSets[i]);
  }
  ending();
}


// main
mainGameLoop();