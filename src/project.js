import {cacheDom, DomElement} from './cachedom.js'
import { renderTasksHeader, renderTasksContainer,} from './add.js'

let chosenProject


export class Project {
  constructor(projectName){
    this.tasks = []
    this.projectName = projectName
  }
  createTask(name, date, description){
    this.tasks.push({name, date, description})
  }
}

// get the project and show it on the Dom
export let addNewProject = function(){
  if(cacheDom.addProjectInputEl.value){
    pushNewProject()   
    renderProjects()
     cacheDom.addProjectInputEl.value = ''
  }
  else{alert('please enter a Name')}  
}

// helper function to push the project to the projects array
export let pushNewProject = function(){
  let newProject = new Project(cacheDom.addProjectInputEl.value)
    projects.push(newProject)
}


// render the projects from the array to the DOM
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


// Function to show the Content of every individual Project 
export let showProjectContent = function(){ 
  chosenProject = projects[this.dataset.id]
  console.log('showProjectContent', chosenProject)
  renderTasksHeader()
  renderTasksContainer()
  console.log(chosenProject)
}


// splice the individual project from the array, reset the chosenProject and update the Dom with render-functions
export let deleteProject = function(){
  projects.splice(this.dataset.id, 1)
  chosenProject = ''
  console.log('chosenproject', chosenProject)   
  renderProjects()
  renderTasksHeader()
  renderTasksContainer()
}


// set the projects array to empty, reset the chosenProject and update the Dom with render-functions
export let clearAllProjects = function(){
  projects = []
  chosenProject = ''
  renderProjects()
  renderTasksHeader()
  renderTasksContainer()
}



// create an empty projects array to store the project objects inside
export let projects = []

// get the add and clear buttons from the DOM and use event listener
cacheDom.addProjectButtonEl.addEventListener('click', addNewProject)
cacheDom.clearAllEl.addEventListener('click', clearAllProjects)

export{chosenProject}