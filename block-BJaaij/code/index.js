class Book{
    constructor(title,category,author,isRead,finishedDate){
        this.title=title;
        this.category=category;
        this.author=author;
        this.isRead=false;
        this.finishedDate=null;
    }
    markBookAsRead(){
        this.isRead=true;
        this.finishedDate=Date.now();
    }
}
class Booklist{
    constructor(books,cuBookInd){
        this.books=[];
        this.currentBookIndex=0;
    }
    add(books=[]){
        this.books=this.books.concat(books)
        return this.books;
    }
    getCuurentBook(){
     return this.books[this.currentBookIndex];
    }
    getNextBook(){
        this.currentBookIndex+=1;
        return this.books[this.currentBookIndex]
    }
    getPrevBook(){
        this.currentBookIndex-=1;
        return this.books[this.currentBookIndex]
    }
    changeCurrentBook(index){
   this.currentBookIndex=index;
   return this.currentBookIndex;
    }
    
}

let Book1= new Book('hary pooter','fiction','j.k.eowling',)
let Book2= new Book('3 iditots','Non-fiction','chetan Bhagat',)
let Book3= new Book('Avengers','fiction','Tony stark',)

let library=new Booklist();

library.add([Book1,Book2,Book3]);