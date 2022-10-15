

export class DomElement{
  constructor(elementType,  parent, className){ 
    this.name = document.createElement(elementType)
    if(className){this.name.classList.add(className)}
    if(parent){this.name.appendToParent = () => parent.appendChild(this.name)}
    if(parent){this.name.appendToParent()}
    return this.name    
    }
}




/*
let projects = [
  {
    projectName: 'Default',
    tasks:[
      {taskName: 'task1', description: 'taskdescription',},
      {taskName: 'task2', description: 'taskdescription2'}, 
    ]  
  },
  {
    projectName: 'Fitness',
    tasks:[
      {taskName: 'task3', description: 'taskdescription3',},
      {taskName: 'task4', description: 'taskdescription4'}, 
    ]   
  }
]
*/
