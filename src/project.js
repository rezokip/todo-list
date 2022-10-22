import {cacheDom, DomElement} from './cachedom.js'
import { renderTasksHeader, renderTasksContainer,} from './task.js'
import { saveMyProjects, projects } from "./index.js"


let chosenProject

// class to create a project object containing tasks and name
export class Project {
  constructor(projectName){
    this.tasks = []
    this.projectName = projectName
  }
}

// function to create a new Task
export let createNewTask = function(name, date, description, priority){
  return {name, date, description, priority}
}


// get the project and show it on the Dom
export let addNewProject = function(){
  if(cacheDom.addProjectInputEl.value){
    pushNewProject()   
    renderProjects()
     cacheDom.addProjectInputEl.value = ''
  }
  else{alert('please enter a Name')}  
  console.log(projects , 'projects from addNewProject')

}

// helper function to push the project to the projects array
export let pushNewProject = function(){
  let newProject = new Project(cacheDom.addProjectInputEl.value)
    projects.push(newProject)
     console.log(projects , 'projects from pushNewProject')
}


// render the projects from the array to the DOM and save them to the localStorage
export let renderProjects = function(){
  cacheDom.projectListContainerEl.textContent = '' 
  for (let project of projects){  
    let index = projects.indexOf(project) 
    let newProject = new DomElement('div', cacheDom.projectListContainerEl, 'project-container')    
    newProject.dataset.id = index
    let newProjectP = new DomElement('p', newProject)
    newProjectP.textContent = project.projectName
    newProjectP.dataset.id = index
    newProjectP.addEventListener('click', showProjectContent)
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
  saveMyProjects()
  console.log(projects , 'projects from renderProjects') 
}






// Function to show the Content of every individual Project based on width of the site
export let showProjectContent = function(){ 
  if(this.classList.value==='fa-eye fa'){
    hideProjectList()    
  }
  chosenProject = projects[this.dataset.id]
  console.log('showProjectContent', chosenProject)
  renderTasksHeader()
  renderTasksContainer()
  console.log(projects , 'projects from showProjectContent')
}

// (if width < 648px) hide the projects and show the tasks when clicking the eye icon 
let hideProjectList = function(){
  cacheDom.projectsContainerEl.classList.add('hide')
  cacheDom.taskListContainer.classList.add('show');
  cacheDom.backButton.classList.add('show')
  cacheDom.backButton.addEventListener('click', showProjectList)
  console.log(projects , 'projects from hideProjectList')
}

// the back button goes back to the projects and hides the tasks again
let showProjectList = function(){
  cacheDom.taskListContainer.classList.remove('show');
  cacheDom.backButton.classList.remove('show')
  cacheDom.projectsContainerEl.classList.remove('hide')
  console.log(projects , 'projects from showProjectList')
}

// splice the individual project from the array, reset the chosenProject and update the Dom with render-functions
export let deleteProject = function(){
  projects.splice(this.dataset.id, 1)
  chosenProject = '' 
  renderProjects()
  renderTasksHeader()
  renderTasksContainer()
  console.log(projects , 'projects from deleteProject')
}


// splice all projects, reset the chosenProject and update the Dom with render-functions
export let clearAllProjects = function(){
  projects.splice(0, projects.length)
  chosenProject = ''
  renderProjects()
  renderTasksHeader()
  renderTasksContainer()
  console.log(projects , 'projects from clearAllProjects')
}

// get the add and clear buttons from the DOM and use event listener
cacheDom.addProjectButtonEl.addEventListener('click', addNewProject)
cacheDom.clearAllEl.addEventListener('click', clearAllProjects)

export{chosenProject}