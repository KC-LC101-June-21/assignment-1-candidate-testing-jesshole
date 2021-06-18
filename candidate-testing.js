const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = [
  "1) Who was the first American woman in space?", 
  "2) True or false: 5 kilometer == 5000 meters?", 
  "3) (5 + 3)/2 * 10 = ?", 
  "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", 
  "5) What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let point = 0 

function askForName() {
  // TODO 1.1b: Ask for candidate's name //

const input = require('readline-sync')
let candidateName = input.question("PLease enter your name:")

console.log("Hello, " + candidateName + ", thank you for your participation.")
console.log()

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for (let i = 0; i < questions.length; i++){
  console.log(questions[i]);
  candidateAnswers.push(input.question());
if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    console.log(`
    You Answered: ${candidateAnswers[i]} 
    Correct Answer: ${correctAnswers[i]}
    You are Correct!`)
    point = point + 1;
} else {
    console.log(`
     You answered: ${candidateAnswers[i]}
     Correct answer: ${correctAnswers[i]}
     That is incorrect.`)
     point = point + 0;
}
}}

function gradeQuiz(candidateAnswers) {

        // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //

  // \n
  // \n      
  console.log(`You scored ${point} out of 5`)
        
  let grade = point/5 *100;
  console.log(`Overall Score: ${grade} %`);
  
if (point >= 4){
  console.log('Status: PASSED');
} else {
  console.log('Status: FAILED');
}

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};