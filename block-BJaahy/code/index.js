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
     this.width=Math.floor(Math.sqrt(area));
     this.height=Math.floor(Math.sqrt(area));

    }
    get area(){
        return this.width * this.height;
    }
    static isEqual(){
     
    }
}
let s1 = new Square(6);
let s2 = new Square(6);
