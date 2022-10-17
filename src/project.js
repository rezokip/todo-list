import {cacheDom, DomElement} from './cachedom.js'
import { showProjectContent } from './add.js'

export class Project {
  constructor(projectName){
    this.tasks = []
    this.projectName = projectName
  }
  createTask(name, date, description){
    this.tasks.push({name, date, description})
  }
}

export let addNewProject = function(){
  if(cacheDom.addProjectInputEl.value){
    pushNewProject()   
    renderProjects()
     cacheDom.addProjectInputEl.value = ''
  }
  else{alert('please enter a Name')}  
}

export let pushNewProject = function(){
  let newProject = new Project(cacheDom.addProjectInputEl.value)
    projects.push(newProject)
}


export let renderProjects = function(){
  console.log(projects)
  cacheDom.projectListContainerEl.textContent = '' 
  for (let project of projects){  
    let index = projects.indexOf(project) 
    let newProject = new DomElement('div', cacheDom.projectListContainerEl, 'project-container')    
    newProject.dataset.id = index
    let newProjectP = new DomElement('p', newProject)
    newProjectP.textContent = project.projectName
    let newProjectIcons = new DomElement('div', newProject, 'project-icons')
    let newProjectIconEye = new DomElement('i', newProjectIcons, 'fa-eye')
    newProjectIconEye.classList.add('fa')
    newProjectIconEye.dataset.id = index  
    newProjectIconEye.addEventListener('click', showProjectContent)
    let newProjectIconTrash = new DomElement('i', newProjectIcons, 'fa-trash')
    newProjectIconTrash.classList.add('fa') 
    newProjectIconTrash.dataset.id = index  
    newProjectIconTrash.addEventListener('click', deleteProject)  
  }   
}


export let deleteProject = function(){
  projects.splice(this.dataset.id, 1)
  renderProjects()
}


export let clearAllProjects = function(){
  projects = []
  renderProjects()
}




export let projects = []
cacheDom.addProjectButtonEl.addEventListener('click', addNewProject)
cacheDom.clearAllEl.addEventListener('click', clearAllProjects)



/*
export let createProjectsDom = function(){
  for (let project of projects){  
    let index = projects.indexOf(project) 
    let newProject = new DomElement('div', cacheDom.projectListContainerEl, 'project-container')    
    newProject.dataset.id = index
    let newProjectP = new DomElement('p', newProject)
    newProjectP.textContent = project.projectName
    let newProjectIcons = new DomElement('div', newProject, 'project-icons')
    let newProjectIconEye = new DomElement('i', newProjectIcons, 'fa-eye')
    newProjectIconEye.classList.add('fa')
    newProjectIconEye.dataset.id = index  
    newProjectIconEye.addEventListener('click', showProjectContent)
    let newProjectIconTrash = new DomElement('i', newProjectIcons, 'fa-trash')
    newProjectIconTrash.classList.add('fa') 
    newProjectIconTrash.dataset.id = index  
    newProjectIconTrash.addEventListener('click', deleteProject)  
  }   
}




export let renderProjects = function(){
  cacheDom.projectListContainerEl.textContent = '' 
  createProjectsDom() 
}
*/






//newProject.createTask('task title', 'asdföaldkjfioqwef')
//newProject.createTask('task title2', 'aswerzurtzikjfioqwef')







