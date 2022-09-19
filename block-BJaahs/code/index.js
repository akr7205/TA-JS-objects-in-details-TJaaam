// const testData = {
//     title: 'Where is the capital of Jordan',
//     options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     correctAnswerIndex: 1,
//   };

//   - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

// ### Create the object using the following ways

// For each different ways of creating object write different solutions.

// - Without Object
// - Organize using object
// - Use a function to create object
// - Convert the function to use `this` keyword
// - Write test by creating two objects also test both methods.

//Without object
// let title ='Where is the capital of Jordan';
// let options= ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
// let correctAnswerIndex=1;
// function isAnswerCorrect(index){
//     return index === correctAnswerIndex;
// }
// function getCorrectAnswer(){
//     return options[correctAnswerIndex]
// }
// - Organize using object
// let question={
//  title :'Where is the capital of Jordan',
//  options :['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//  correctAnswerIndex:1;
//  isAnswerCorrect(index){
//     return index === correctAnswerIndex;
// },
// getCorrectAnswer(){
//     return options[correctAnswerIndex]
// }

// }
// - Use a function to create object
// function createQuestion(title,options,correctAnswerIndex){
// let question={};
// question.title=title;
// question.options=options;
// question.correctAnswerIndex=correctAnswerIndex;
// question.isAnswerCorrect=function(index){
//     return index === question.correctAnswerIndex;
// }
// question.getCorrectAnser=function(){
//     return question.options[correctAnswerIndex];

// }
// console.log(this)

// return question;
// }
// let firstQuestion = createQuestion('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1)
// - Convert the function to use `this` keyword
function createQuestion(title,options,correctAnswerIndex){
    let question={};
    question.title=title;
    question.options=options;
    question.correctAnswerIndex=correctAnswerIndex;
    question.isAnswerCorrect=function(index){
        return index === this.correctAnswerIndex;
    }
    question.getCorrectAnser=function(){
        return this.options[correctAnswerIndex];
    
    }
    console.log(this)
    
    return question;
    }
    let firstQuestion = createQuestion('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1)
