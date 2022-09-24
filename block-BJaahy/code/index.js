class Square{
    constructor(side){
       this.width=side;
       this.height=side;
    }
    description(){
        alert(`The square is ${this.width} * ${this.height}`)
    }
    calcArea(){
        return this.width * this.height;
    }
    set area(area){
     this.width=Math.sqrt(area);
     this.height=Math.sqrt(area);

    }
    get area(){
        return this.width * this.height;
    }
    static isEqual(a,b){
    return a.area === b.area;
     
    }
}
let s1 = new Square(6);
let s2 = new Square(6);
let s3 = new Square(12);

class User{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    get fullName(){
        return this.firstName+' '+this.lastName;
    }
    set fullName(Name){  
        if(Name.length < 5){
            alert(`Full name should be more than 5 characters`);
        }else{
            let fName=Name.split(' ')[0];
            let lName=Name.split(' ')[1];
            this.firstName=fName;
            this.lastName=lName;
        }
        
    }
    nameContains(string){
        return `${this.firstName} ${this.lastName}`.includes(string);
    }
}

let user1= new User('Arya','Stark');
let user2=new User('John','Snow');

