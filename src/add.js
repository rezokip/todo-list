import { chosenProject, projects, renderProjects} from "./project.js"
import { Project } from "./project.js"
import { cacheDom, DomElement } from "./cachedom.js"


let currentTask

// get the projects title and a "Create New Task" button and render it to the DOM Header
export let renderTasksHeader = function(){ 
  cacheDom.taskListHeader.textContent = ''  
  if(chosenProject!=''){
    let taskListTitle = new DomElement('h2', cacheDom.taskListHeader, 'task-list-title')
    taskListTitle.textContent = chosenProject.projectName
    let taskCreateButton = new DomElement('div', cacheDom.taskListHeader, 'task-create-button')
    taskCreateButton.textContent = 'Create New Task'  
    taskCreateButton.setAttribute('id', 'task_create_button')
    taskCreateButton.addEventListener('click', renderForm)
  } 
}


// get the tasks from the individual project and render every task as its own DOM Container
export let renderTasksContainer= function(){ 
  console.log('renderTaskContainer-chosenproject',chosenProject)
  cacheDom.taskListBody.textContent=''
  if(chosenProject!=''){
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
      taskIconEdit.dataset.id = index
      taskIconEdit.setAttribute('id', 'task_icon_edit')
      taskIconEdit.addEventListener('click',renderForm)
      
      let taskIconTrash = new DomElement('i', taskIcons, 'fa-trash')
      taskIconTrash.classList.add('fa')
      taskIconTrash.dataset.id = index
      taskIconTrash.addEventListener('click', deleteTask )
    }
  }
}


// Function to show a Form field to get Inputs From the user
let renderForm = function(){
  document.querySelector('.form-container').style.display = 'flex'
  document.querySelector('.form-background').style.display = 'flex'  
  document.querySelector('.content').style.opacity = '0.2'
  console.log(this)
  console.log(this.id)
  if(this.id === 'task_create_button'){
    document.querySelector('.change-button').style.display = 'none'
    document.querySelector('.adding-button').style.display = 'inline-block'
    document.querySelector('.adding-button').addEventListener('click', addNewTask)
  }
  else  {
    console.log(this.dataset.id)
    console.log(chosenProject.tasks[this.dataset.id])
    currentTask = chosenProject.tasks[this.dataset.id]
    cacheDom.titleInput.value = currentTask.name
    cacheDom.dateInput.value = currentTask.date
    cacheDom.descriptInput.value = currentTask.description
    document.querySelector('.adding-button').style.display = 'none'
    document.querySelector('.change-button').style.display = 'inline-block'
    document.querySelector('.change-button').addEventListener('click', changeTask)
    console.log(chosenProject, 'chosenproject from render form')
  }
}
    

// After getting Inputs hide the Form and set its values to null
let hideForm = function(){
  cacheDom.titleInput.value = null
  cacheDom.dateInput.value = null
  cacheDom.descriptInput.value = null
  document.querySelector('.form-container').style.display = 'none'
  document.querySelector('.form-background').style.display = 'none'  
  document.querySelector('.content').style.opacity = '1'
}


// Get the Values from the user and create the task
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
    renderTasksContainer()
    hideForm()
  } 
}


let changeTask = function(){
  let titleValue= cacheDom.titleInput.value
  let dateValue = cacheDom.dateInput.value
  let descriptValue = cacheDom.descriptInput.value
  console.log(titleValue, dateValue, descriptValue)
  if(!titleValue || !dateValue || !descriptValue){
    alert('Please fill in completely')    
  }
  else{    
    console.log(descriptValue, dateValue, titleValue)
    currentTask.name = titleValue
    currentTask.date = dateValue
    currentTask.description = descriptValue
    renderTasksContainer()
    hideForm()
  } 
}



let deleteTask = function(){
  chosenProject.tasks.splice(this.dataset.id)
  renderTasksContainer()
}