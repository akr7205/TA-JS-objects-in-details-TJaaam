/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  let personObj={};
  personObj.name=name;
  personObj.age=age;
  return personObj;
}
var vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
  // add code here
  greet:function(){
    console.log('hello');
  }
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  // add code here
  let perosnObj=Object.create(personStore);
  perosnObj.name=name;
  perosnObj.age=age;
  return perosnObj;
}

var sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

// add code here
personStore.__proto__.introduce=function(){
console.log(`Hi, my name is ${this.name}`)
}

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

function PersonConstructor(name,age) {
  this.name=name;
  this.age=age;
  this.greet=function(){
    console.log('Hello');
  }
}

// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor('Arya','23');
// simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function PersonFromConstructor(name, age) {
  this.name=name;
  this.age=age;
  this.greet=function(){
    console.log('Hello');
  }
}

var mike = new PersonFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
// add code here
PersonConstructor.prototype.introduce=function(){
  console.log(`Hi, my name is ${this.name}`);
}
// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
  constructor(name) {
    this.name=name;
  }
  greet(){
    console.log('hello');
  }
}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
// george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

// add code here
class DeveloperClass extends PersonClass{
  constructor(name,age){
    super(name)
  this.age=age;
  }
  introduce(){
    console.log(`Hello world my name is ${this.name}`);
  }  
}
// /********* Uncomment these lines to test your work! *********/
// var thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function (type) {
    console.log(`i am a ${type}`);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = 'User';
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore={
  adminSayType:userFunctionStore.sayType,
};

function adminFactory(name, score) {
  this.name=name;
  this.score=score;
  this.sharePublicMessage=function(){
    console.log('Welocme Users')
  }
}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = new adminFactory('Eva', 5);
Object.setPrototypeOf(adminFromFactory,userFunctionStore);


// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType('Admin') // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
