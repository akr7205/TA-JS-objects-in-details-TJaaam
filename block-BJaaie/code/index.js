// - Pseudoclassical Pattern
function CreateAnimal(location,numberofLegs){
    this.location=location;
    this.numberofLegs=numberofLegs;
    
}
CreateAnimal.prototype={
    eat:function(){
        console.log(this)
      console.log(`I live in ${this.location} and I can eat`)  
    },
    changeLocation:function(newLocation){
     this.location=newLocation;
    },
    summary:function(){
        return `I live in ${this.location} and I have ${this.numberofLegs} Legs`
    }
}
let animal1=CreateAnimal('India',4);

function CreateDog(location,numberofLegs,name,color){
    this.name=name;
    this.color=color;
}
CreateDog.prototype={
    bark:function(){
        alert(`I am ${this.name} and I can bark`);
    },
    changeName:function(newName) {
        this.name=newName;
        return this.name;
    },
    changeColor:function(newColor){
        this.color=newColor;
        return this.color;
    },
    summary:function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}
Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype);
let Dog=CreateDog('India',4,'Lucky','white');

function CreateCat(location,numberofLegs,name,colorOfEyes){
    this.name=name;
    this.colorOfEyes=colorOfEyes;
}
CreateCat.prototype={
    meow:function(){
        alert(`I am ${this.name} and I can bark`);
    },
    changeName:function(newName) {
        this.name=newName;
        return this.name;
    },
    changeColorOfEyes:function(newColor){
        this.colorOfEyes=newColor;
        return this.colorOfEyes;
    },
    summary:function(){
    console.log(this);
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
    
}
Object.setPrototypeOf(CreateCat.prototype,CreateAnimal.prototype);
let Cat=CreateCat('India',4,'Lucy','blue');

