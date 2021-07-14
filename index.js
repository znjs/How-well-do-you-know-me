var readLineSync = require("readline-sync");
const chalk = require("chalk");

var score = 0;
var questionAndAnswers = {
  question: [
    "Where was i born?",
    "Where did i do my Btech?",
    "Which was my favorite subject in my study days?",
    "Where do i stay?",
    "Which was my favorite place in manipal?",
    "Which is my favorite coding language?",
    "What was my branch in Btech?",
  ],
  answer: [
    "Hyderabad",
    "MIT manipal",
    "Math",
    "Bangalore",
    "Vikrams",
    "JavaScript",
    "ece",
  ],
};

function evaluator(question, answer) {
  var userAnswer = readLineSync.question(question + "\n");

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("You are right"));
    score = score + 10;
    console.log("Your current score is " + score);
  } else {
    console.log(chalk.red("You are wrong!"));
    score = score - 5;
    console.log("Your Score is " + score);
  }
}

console.log("<-----WELCOME TO DO YOU KNOW ME QUIZ----->");
var userName = readLineSync.question("Enter your name?\n");
console.log("Welcome " + chalk.cyanBright(userName));
console.log(
  "The Scoring is: \nYou get " +
    chalk.green("10") +
    " point for each correct answer and " +
    chalk.red("-5") +
    " for wrong \nType the answer without caps"
);
console.log("Lets Start the Game:\n");

for (var i = 0; i < 7; i++) {
  evaluator(questionAndAnswers.question[i], questionAndAnswers.answer[i]);
}
console.log("YAY! you finished the game");
console.log(userName + " your final score is: " + chalk.cyanBright(score));
