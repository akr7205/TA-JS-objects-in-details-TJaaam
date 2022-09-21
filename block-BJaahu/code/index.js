class Question{
    constructor(title,options,correctAnswerIndex){
        console.log(this)
        this.title=title;
        this.options=options;
        this.correctAnswerIndex=correctAnswerIndex;
    }
    isAnswerCorrect(index){
        console.log(this)
        return index === this.correctAnswerIndex;
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }
}

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );