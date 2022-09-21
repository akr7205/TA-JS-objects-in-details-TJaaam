//class patter
// class Question{
//     constructor(title,options,correctAnswerIndex){
//         // console.log(this)
//         this.title=title;
//         this.options=options;
//         this.correctAnswerIndex=correctAnswerIndex;
//     }
//     isAnswerCorrect(index){
//         // console.log(this)
//         return index === this.correctAnswerIndex;
//     }
//     getCorrectAnswer(){
//         return this.options[this.correctAnswerIndex];
//     }
// }

// let firstQuestion = new Question(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
//   );
//   let secondQuestion = new Question(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
//   );

//prototype pattern
//Method 1
// let questinMethods ={
//     isAnswerCorrect:function(index){
//         console.log(this)
//         return index=this.correctAnswerIndex;
//     },
//     getCorrectAnswer:function(){
//         return this.options[this.correctAnswerIndex];
//     }
// }

// function createQuestion(title,options,correctAnswerIndex){
//     let question=Object.create(questinMethods);
//     question.title=title;
//     question.options=options;
//     question.correctAnswerIndex=correctAnswerIndex;
//     return question;
// }

//method 2
function createQuestion(title,options,correctAnswerIndex){
        let question=Object.create(createQuestion.prototype);
        question.title=title;
        question.options=options;
        question.correctAnswerIndex=correctAnswerIndex;
        return question;
    }
    createQuestion.prototype={
            isAnswerCorrect:function(index){
                console.log(this)
                return index=this.correctAnswerIndex;
            },
            getCorrectAnswer:function(){
                return this.options[this.correctAnswerIndex];
            }
    }
let firstQuestion = createQuestion(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = createQuestion(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );


