let AnimalMethos ={
    eat:function(){
      console.log('I live in ${location} and I can eat')  
    },
    changeLocation:function(newLocation){
     this.location=newLocation;
    },
    summary:function(){
        return `I live in ${location} and I have ${numberofLegs}`
    }

}
function CreateAnimal(location,numberofLegs){
    let animal=Object.create(AnimalMethos);
    animal.location=location;
    animal.numberofLegs=numberofLegs;
    return animal;
}
let animal1=CreateAnimal('India','4');
console.log('hi');
