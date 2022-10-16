import { projects } from "./project.js"
import { Project } from "./project.js"
import { cacheDom, DomElement } from "./cachedom.js"



export let showProjectContent = function(){
  let chosenProject = projects[this.dataset.id]
  
  console.log('projects', projects)

  console.log(chosenProject)
  console.log(chosenProject.tasks)
  
  cacheDom.taskListContainer.textContent=''
  createTasksHeader(chosenProject)
  createTasksContainer(chosenProject)
}


let createTasksHeader = function(chosenProject){
  const taskListHeader = new DomElement('div', cacheDom.taskListContainer, 'task-list-header')
  const taskListTitle = new DomElement('h2', taskListHeader, 'task-list-title')
  taskListTitle.textContent = chosenProject.projectName
  const taskCreateButton = new DomElement('div', taskListHeader, 'task-create-button')
  taskCreateButton.textContent = 'Create New Task'  
  taskCreateButton.addEventListener('click', function(){
    console.log(chosenProject)
  })
}


let createTasksContainer= function(chosenProject){ 
  for (let task of chosenProject.tasks){
    let taskContainer = new DomElement('div', cacheDom.taskListContainer, 'task-container')
    let taskHeader = new DomElement('div', taskContainer, 'task-header')
    let taskName = new DomElement('h3', taskHeader, 'task-name')
    taskName.textContent = task.name
    let taskCheckbox = new DomElement('div', taskHeader, 'task-checkbox')
    let taskCheckboxInput = new DomElement('input', taskCheckbox)
    taskCheckboxInput.type='checkbox'
    taskCheckboxInput.id = 'complete-task'
    let taskCheckboxLabel = new DomElement('label', taskCheckbox)
    taskCheckboxLabel.for='complete-task'
    taskCheckboxLabel.textContent='task complete'

    let taskDate = new DomElement('div', taskContainer, 'task-date')
    taskDate.textContent = task.date
    let taskDescription = new DomElement('div', taskContainer, 'task-description')
    taskDescription.textContent = task.description
    let taskIcons = new DomElement('div', taskContainer, 'task-icons')

    let taskIconEdit = new DomElement('i', taskIcons, 'glyphicon-edit')
    taskIconEdit.classList.add('glyphicon')
    let taskIconTrash = new DomElement('i', taskIcons, 'fa-trash')
    taskIconTrash.classList.add('fa')
  }
}

//chosenProject.createTask('new Task', '16.10.22', 'lorem morem lorem')