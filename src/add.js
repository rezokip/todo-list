import { projects } from "./project.js"
import { Project } from "./project.js"
import { cacheDom, DomElement } from "./cachedom.js"


let chosenProject
export let showProjectContent = function(){ 
  chosenProject = projects[this.dataset.id]
  console.log('showProjectContent', chosenProject)
  renderTasksHeader()
  renderTasksContainer()
  console.log(chosenProject)
  //renderTasksContainer(chosenProject)  
}


/*
let createTasksHeader = function(chosenProject){
  const taskListHeader = new DomElement('div', cacheDom.taskListContainer, 'task-list-header')
  const taskListTitle = new DomElement('h2', taskListHeader, 'task-list-title')
  taskListTitle.textContent = chosenProject.projectName
  const taskCreateButton = new DomElement('div', taskListHeader, 'task-create-button')
  taskCreateButton.textContent = 'Create New Task'  
  taskCreateButton.addEventListener('click', function(){
    getForm(chosenProject)
  })
}
*/

let renderTasksHeader = function(){
  cacheDom.taskListHeader.textContent = ''  
  let taskListTitle = new DomElement('h2', cacheDom.taskListHeader, 'task-list-title')
  taskListTitle.textContent = chosenProject.projectName
  let taskCreateButton = new DomElement('div', cacheDom.taskListHeader, 'task-create-button')
  taskCreateButton.textContent = 'Create New Task'  
  taskCreateButton.classList.add(chosenProject.projectName)
  taskCreateButton.addEventListener('click', renderForm)
}


let renderForm = function(){
  document.querySelector('.form-container').style.display = 'flex'
  document.querySelector('.form-background').style.display = 'flex'  
  document.querySelector('.content').style.opacity = '0.2'
  let addingButton = document.querySelector('.adding-button')
  addingButton.addEventListener('click', addNewTask)
}



let hideForm = function(){
  cacheDom.titleInput.value = null
  cacheDom.dateInput.value = null
  cacheDom.descriptInput.value = null
  document.querySelector('.form-container').style.display = 'none'
  document.querySelector('.form-background').style.display = 'none'  
  document.querySelector('.content').style.opacity = '1'
}


let addNewTask = function(){
  console.log('getValue', chosenProject) 
   
  let titleValue= cacheDom.titleInput.value
  let dateValue = cacheDom.dateInput.value
  let descriptValue = cacheDom.descriptInput.value
  console.log(titleValue, dateValue, descriptValue)
  if(!titleValue || !dateValue || !descriptValue){
    alert('Please fill in completely')    
  }
  else{    
    console.log(descriptValue, dateValue, titleValue)
    chosenProject.createTask(titleValue, dateValue, descriptValue)
    console.log('getValue else', chosenProject)       
    renderTasksContainer()
    hideForm()
  } 
}


/*
let getForm = function(chosenProject){
  console.log('getForm', chosenProject)
  document.querySelector('.form-container').style.display = 'flex'
  document.querySelector('.form-background').style.display = 'flex'  
  document.querySelector('.content').style.opacity = '0.2'
  let addingButton = document.querySelector('.adding-button')
  addingButton.addEventListener('click', function(){
    getValue(chosenProject)
  })

}*/

/*
let getValue = function(currentProject){
  console.log('getValue', currentProject)
  let titleInput = document.querySelector('.title-input')
  let dateInput = document.querySelector('.date-input')
  let descriptInput = document.querySelector('.descript-input')
  if(!titleInput.value || !dateInput.value || !descriptInput.value){
    alert('Please fill in completely')    
  }
  else{
    let titleValue= titleInput.value
    let dateValue = dateInput.value
    let descriptValue = descriptInput.value
    console.log(descriptValue, dateValue, titleValue)
    currentProject.createTask(titleValue, dateValue, descriptValue)
    console.log('getValue else', currentProject)
    titleInput.value = null
    dateInput.value = null
    descriptInput.value = null
    document.querySelector('.form-container').style.display = 'none'
    document.querySelector('.form-background').style.display = 'none'  
    document.querySelector('.content').style.opacity = '1'
   
    renderTasksContainer(currentProject)
  }
 
}




let renderTasksContainer= function(chosenProject){ 
  console.log('renderTaskContainer',chosenProject)
  cacheDom.taskListContainer.textContent=''
  createTasksHeader(chosenProject)
  for (let task of chosenProject.tasks){
    let index = chosenProject.tasks.indexOf(task)
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
    taskIconTrash.addEventListener('click', function(){
      console.log(index)
    } )
  }
}

*/

let renderTasksContainer= function(){ 
  console.log('renderTaskContainer',chosenProject)
  cacheDom.taskListBody.textContent=''
  for (let task of chosenProject.tasks){
    console.log(task)
    let index = chosenProject.tasks.indexOf(task)
    let taskContainer = new DomElement('div', cacheDom.taskListBody, 'task-container')
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
    taskIconTrash.addEventListener('click', function(){
      console.log(index)
    } )
  }
}
