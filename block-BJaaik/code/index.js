class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    eat(){
        return `I will eat`
    }
    sleep(){
        return `I will Sleep`
    }
    walk(){
        return `I will walk`
    }
}
class Player extends Person{
    constructor(name,age,gender,sportsName){
        super(name,age,gender);
        this.sportsName=sportsName;
    }
    play(){
        return ` I will play ${this.sportsName}`
    }
}
class Cricketer extends Player{
    constructor(name,age,gender,sportsName,teamName){
        super(name,age,gender);
        this.sportsName=sportsName;
        this.teamName=teamName;
    }
    playCricket(){
        return `Hi I am ${this.name} I will PlayCricket for ${this.teamName}`
    }
}
class Teacher extends Person{
    constructor(name,age,gender,instituteName){
        super(name,age,gender)
        this.instituteName=instituteName;
    }
    teach(){
        return `I will teach at ${this.instituteName}`
    }

}
class Artist extends Person{
    constructor(name,age,gender,kind){
        super(name,age,gender)
        this.kind=kind;
    }
    createArt(){
        return `I will create ${this.kind} Art`;
    }
}

let person1=new Person('Sachin',40,'Male');
let player1=new Player('virat',25,'Male','cricket');
let teacher1=new Teacher('Dravid',50,'Male','Delhi Cricket Academy');
let artist1=new Artist('Bunu',27,'Male','painting');
let cricketer1=new Cricketer('vurat',25,'Male','cricket','Indian Team');
