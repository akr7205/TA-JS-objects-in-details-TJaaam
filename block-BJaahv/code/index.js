// - [ ] Using function to create object
function CreateProject(name,id,noOfProjects){
    let project={};
    project.name=name;
    project.id=id;
    project.noOfProjects=noOfProjects;
    console.log(this)

    project.getprojects=function(){
        // console.log(this)
        return project.noOfProjects;
    }
    project.changeName=function(NewName){
      return project.name=NewName;
    }
    project.incrementProject=function(){
        return project.noOfProjects+=1;
    }
    project.DecrementProject=function(num){
        return project.noOfProjects-=1;
    }
    return project;
}

let project1= CreateProject('altcampus',1,4);
