// - [ ] Using function to create object
// function CreateProject(name,id,noOfProjects){
//     let project={};
//     project.name=name;
//     project.id=id;
//     project.noOfProjects=noOfProjects;
//     console.log(this)

//     project.getprojects=function(){
//         return project.noOfProjects;
//     }
//     project.changeName=function(NewProj){
//      let prevProject=project.name;
//      project.name=NewProj;
//      return prevProject;
//     }
//     project.incrementProject=function(){
//         return project.noOfProjects+=1;
//     }
//     project.DecrementProject=function(num){
//         return project.noOfProjects-=1;
//     }
//     return project;
// }

// let project1= CreateProject('altcampus',1,4);
// let project2=CreateProject('facebook',2,5);

// - [ ] Using Object.create (prototypal pattern)
// function CreateProject(name,id,noOfProjects){
//     let project=Object.create(CreateProject.prototype);
//     project.name=name;
//     project.id=id;
//     project.noOfProjects=noOfProjects;
//     console.log(this);
//     return project;
// }
// CreateProject.prototype ={
//     getprojects:function(){
//         console.log(this)
//         return this.noOfProjects;
//     },
//     changeName:function(NewProj){
//      let prevProject=this.name;
//      this.name=NewProj;
//      return prevProject;
//     },
//     incrementProject:function(){
//         return this.noOfProjects+=1;
//     },
//     DecrementProject:function(num){
//         return this.noOfProjects-=1;
//     }
// }

// let project1= CreateProject('altcampus',1,4);
// let project2=CreateProject('facebook',2,5);

// - [ ] Using Pseudoclassical Way

// function CreateProject(name, id, noOfProjects) {
//     console.log(this)

//     this.name = name;
//     this.id = id;
//     this.noOfProjects = noOfProjects;
//     console.log(this)
// }
// CreateProject.prototype = {
//     getprojects: function () {
//         console.log(this)
//         return this.noOfProjects;
//     },
//     changeName: function (NewProj) {
//         let prevProject = this.name;
//         this.name = NewProj;
//         return prevProject;
//     },
//     incrementProject: function () {
//         return this.noOfProjects += 1;
//     },
//     DecrementProject: function (num) {
//         return this.noOfProjects -= 1;
//     }
// }

// let project1 = new CreateProject('altcampus', 1, 4);
// let project2 = new CreateProject('facebook', 2, 5);

// - [ ] Using Class
class CreateProject{
    constructor(name, id, noOfProjects){
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
        // console.log(this) 
    }
    
    getprojects(){
        console.log(this)
        return this.noOfProjects;
    }
    changeName(NewProj){
        let prevProject = this.name;
        this.name = NewProj;
        return prevProject;
    }
    incrementProject(){
        return this.noOfProjects += 1;
    }
    DecrementProject(){
        return this.noOfProjects -= 1;
    }
}
    
let project1 = new CreateProject('altcampus', 1, 4);
// let project2 = new CreateProject('facebook', 2, 5);


