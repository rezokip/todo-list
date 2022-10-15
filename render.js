import {cacheDom} from './cachedom.js'
import { DomElement } from "./index.js"

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



let renderProjects = function(){
  cacheDom.projectListContainerEl.textContent = ''
  let deleteProject = function(){
    console.log(this.dataset.id)
    projects.splice(this.dataset.id, 1)
    renderProjects()
  }
  for (let project of projects){   
    let index = projects.indexOf(project) 
    let newProject = new DomElement('div', cacheDom.projectListContainerEl, 'project-container')    
    let newProjectP = new DomElement('p', newProject)
    newProjectP.textContent = project.projectName
    let newProjectIcons = new DomElement('div', newProject, 'project-icons')
    let newProjectIconEye = new DomElement('i', newProjectIcons, 'fa-eye')
    newProjectIconEye.classList.add('fa')
    newProjectIconEye.addEventListener('click', function(){console.log(newProject)})
    let newProjectIconTrash = new DomElement('i', newProjectIcons, 'fa-trash')
    newProjectIconTrash.classList.add('fa') 
    newProjectIconTrash.dataset.id = index  
    newProjectIconTrash.addEventListener('click', deleteProject)
  }
}

renderProjects()


class Project {
  constructor(projectName){
    this.tasks = []
    this.projectName = projectName
  }
  createTask(taskName, taskDate, description){
    this.tasks.push({taskName, taskDate, description})
  }
}






const myotherProject = new Project('Work')
projects.push(myotherProject)
//newProject.createTask('task title', 'asdföaldkjfioqwef')
//newProject.createTask('task title2', 'aswerzurtzikjfioqwef')


let addNewProject = function(){
  let myProject = new Project(cacheDom.addProjectInputEl.value)
  projects.push(myProject)
  cacheDom.addProjectInputEl.value = ''
  renderProjects()
}


cacheDom.addProjectButtonEl.addEventListener('click', addNewProject)

