import { cacheDom } from "./cachedom"
import { renderProjects } from "./project.js"
import * as projectscript from "./project.js"



renderProjects()
console.log(projectscript.projects)


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
