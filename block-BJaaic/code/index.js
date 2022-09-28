let AnimalMethos ={
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
function CreateAnimal(location,numberofLegs){
    let animal=Object.create(AnimalMethos);
    animal.location=location;
    animal.numberofLegs=numberofLegs;
    return animal;
}
let animal1=CreateAnimal('India',4);
let DogMethods={
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
function CreateDog(location,numberofLegs,name,color){
    let DogObj=CreateAnimal(location,numberofLegs);
    Object.setPrototypeOf(DogObj,DogMethods);
    DogObj.name=name;
    DogObj.color=color;
    return DogObj;
}
Object.setPrototypeOf(DogMethods,AnimalMethos);
let Dog=CreateDog('India',4,'Lucky','white');

let CatMethods={
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
function CreateCat(location,numberofLegs,name,colorOfEyes){
    let CatObj=CreateAnimal(location,numberofLegs);
    Object.setPrototypeOf(CatObj,CatMethods);
    CatObj.name=name;
    CatObj.colorOfEyes=colorOfEyes;
    return CatObj;
}
Object.setPrototypeOf(CatMethods,AnimalMethos);
let Cat=CreateCat('India',4,'Lucy','blue');
