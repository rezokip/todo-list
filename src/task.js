import { createNewTask, chosenProject, renderProjects} from "./project.js"
import { Project } from "./project.js"
import { cacheDom, DomElement } from "./cachedom.js"
import { saveMyProjects, projects } from "./index.js"




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
  console.log(projects , 'projects from renderTasksHeader')
}


// get the tasks from the individual project and render every task as its own DOM Container
// save thte tasks to the localStorage
export let renderTasksContainer= function(){ 
  cacheDom.taskListBody.textContent=''
  if(chosenProject!=''){
    for (let task of chosenProject.tasks){
      let index = chosenProject.tasks.indexOf(task)
      let taskContainer = new DomElement('div', cacheDom.taskListBody, 'task-container')
      taskContainer.style.backgroundColor = getPriorityColor(task.priority)
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
      taskIconTrash.addEventListener('click', deleteTask)

    }
  }
  saveMyProjects()
  console.log(projects , 'projects from renderTasksContainer')
}


// helper function to define color based on task priority
let getPriorityColor = function(value){
    switch(value) {
    case 'low':
      return 'rgb(72, 173, 72)'
      break
    case 'mid' :
      return 'rgb(237, 237, 150)'
      break
    case 'high' :
      return 'rgb(195, 112, 112)'
      break
  }
}


// delete the task with the appropriate id
let deleteTask = function(){
  chosenProject.tasks.splice(this.dataset.id, 1)
  renderTasksContainer()
  console.log(projects , 'projects from deleteTask')
}


let currentTask
// Render a form to quit with back button, to create a new task or to edit an existing task.
let renderForm = function(){
  document.querySelector('.form-container').style.display = 'flex'
  document.querySelector('.form-background').style.display = 'flex'  
  document.querySelector('.content').style.opacity = '0.2'
  document.querySelector('.form-back-arrow').addEventListener('click', hideForm)
  console.log(chosenProject)
  if(this.id === 'task_create_button'){
    getFormToCreateTask()
  }
  else  {
    currentTask = chosenProject.tasks[this.dataset.id]
    getFormToEditTask()
  }
  console.log(projects , 'projects from renderForm')
}
   

// Get the fresh form without any input to add a new task
let getFormToCreateTask = function(){
  document.querySelector('.change-button').style.display = 'none'
  document.querySelector('.adding-button').style.display = 'inline-block'
  document.querySelector('.adding-button').addEventListener('click', addNewTask)
  console.log(projects , 'projects from getFormToCreateTask')
}




// Get the Edit Form with existing inputs based on the task to edit
let getFormToEditTask = function(){
  cacheDom.titleInput.value = currentTask.name
  cacheDom.dateInput.value = currentTask.date
  cacheDom.descriptInput.value = currentTask.description
  cacheDom.priorityInput.value = currentTask.priority
  document.querySelector('.adding-button').style.display = 'none'
  document.querySelector('.change-button').style.display = 'inline-block'
  document.querySelector('.change-button').addEventListener('click', changeTask)
  console.log(projects , 'projects from getFormToEditTask')
}



// Get the Values from the user and create the task
let addNewTask = function(){   
  console.log(chosenProject.tasks, 'chosenproject from add new task')
  if(!cacheDom.titleInput.value || !cacheDom.dateInput.value || !cacheDom.descriptInput.value){
    alert('Please fill in completely')    
  }
  else{    
    let newTask = createNewTask(cacheDom.titleInput.value , cacheDom.dateInput.value, 
      cacheDom.descriptInput.value, cacheDom.priorityInput.value)
    chosenProject.tasks.push(newTask)
    renderTasksContainer()
    hideForm()
  } 
  console.log(projects , 'projects from addNewTask') 
}


// Get the Values from user and edit the Task
let changeTask = function(){
  if(!cacheDom.titleInput.value || !cacheDom.dateInput.value || !cacheDom.descriptInput.value){
    alert('Please fill in completely')    
  }
  else{    
    currentTask.name = cacheDom.titleInput.value
    currentTask.date = cacheDom.dateInput.value 
    currentTask.description = cacheDom.descriptInput.value
    currentTask.priority = cacheDom.priorityInput.value
    renderTasksContainer()
    hideForm()
  } 
  console.log(projects , 'projects from changeTask')
}


// Hide the Form and set its values to null
let hideForm = function(){
  cacheDom.titleInput.value = null
  cacheDom.dateInput.value = null
  cacheDom.descriptInput.value = null
  document.querySelector('.form-container').style.display = 'none'
  document.querySelector('.form-background').style.display = 'none'  
  document.querySelector('.content').style.opacity = '1'
  console.log(projects , 'projects from hideForm')
}

