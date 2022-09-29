// - Pseudoclassical Pattern
// function CreateAnimal(location,numberofLegs){
//     this.location=location;
//     this.numberofLegs=numberofLegs;
    
// }
// CreateAnimal.prototype={
//     eat:function(){
//         console.log(this)
//       console.log(`I live in ${this.location} and I can eat`)  
//     },
//     changeLocation:function(newLocation){
//      this.location=newLocation;
//     },
//     summary:function(){
//         return `I live in ${this.location} and I have ${this.numberofLegs} Legs`
//     }
// }
// let animal1= new CreateAnimal('India',4);

// function CreateDog(location,numberofLegs,name,color){
//     CreateAnimal.apply(this,[location,numberofLegs]);
//     this.name=name;
//     this.color=color;
// }
// CreateDog.prototype={
//     bark:function(){
//         alert(`I am ${this.name} and I can bark`);
//     },
//     changeName:function(newName) {
//         this.name=newName;
//         return this.name;
//     },
//     changeColor:function(newColor){
//         this.color=newColor;
//         return this.color;
//     },
//     summary:function(){
//         return `I am ${this.name} and I am of ${this.color} color. I can also bark`
//     }
// }
// Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype);
// let Dog=new CreateDog('India',4,'Lucky','white');

// function CreateCat(location,numberofLegs,name,colorOfEyes){
//     CreateAnimal.apply(this,[location,numberofLegs]);
//     this.name=name;
//     this.colorOfEyes=colorOfEyes;
// }
// CreateCat.prototype={
//     meow:function(){
//         alert(`I am ${this.name} and I can bark`);
//     },
//     changeName:function(newName) {
//         this.name=newName;
//         return this.name;
//     },
//     changeColorOfEyes:function(newColor){
//         this.colorOfEyes=newColor;
//         return this.colorOfEyes;
//     },
//     summary:function(){
//     console.log(this);
//     return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
//     }
    
// }
// Object.setPrototypeOf(CreateCat.prototype,CreateAnimal.prototype);
// let Cat=new CreateCat('India',4,'Lucy','blue');

// - Class Pattern

 class Animal{
    constructor(location,numberofLegs){
        this.location=location;
        this.numberofLegs=numberofLegs;
    }
    
    eat(){
        console.log(this)
      console.log(`I live in ${this.location} and I can eat`)  
    }
    changeLocation(newLocation){
    return this.location=newLocation;
    }
    summary(){
        return `I live in ${this.location} and I have ${this.numberofLegs} Legs`
    }
    
}
let animal1= new Animal('India',4);

class Dog extends Animal{
    constructor(location,numberofLegs,name,color){
        super(location,numberofLegs)
        this.name=name;
        this.color=color;
    }
   
    bark(){
        alert(`I am ${this.name} and I can bark`);
    }
    changeName(newName){
        this.name=newName;
        return this.name;
    }
    changeColor(newColor){
        this.color=newColor;
        return this.color;
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

// Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype);
let Dog1=new Dog('India',4,'Lucky','white');

class Cat extends Animal{
    // CreateAnimal.apply(this,[location,numberofLegs]);
    constructor(location,numberofLegs,name,colorOfEyes){
        super(location,numberofLegs);
        this.name=name;
        this.colorOfEyes=colorOfEyes;
    }
    meow(){
        alert(`I am ${this.name} and I can bark`);
    }
    changeName(newName){
        this.name=newName;
        return this.name;
    }
    changeColorOfEyes(newColor){
        this.colorOfEyes=newColor;
        return this.colorOfEyes;
    }
    summary(){
    console.log(this);
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
   
}
// Object.setPrototypeOf(CreateCat.prototype,CreateAnimal.prototype);
let Cat1=new Cat('India',4,'Lucy','blue');