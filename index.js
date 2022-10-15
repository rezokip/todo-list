class DomElement{
  constructor(elementType,  parent, className){ 
    this.name = document.createElement(elementType)
    if(className){this.name.classList.add(className)}
    if(parent){this.name.appendToParent = () => parent.appendChild(this.name)}
    if(parent){this.name.appendToParent()}
    return this.name    
    }
}

const content = document.querySelector('.content')

const titleContainerEl = new DomElement( 'div',content, 'title-container', )
const mainTitleEl = new DomElement('h1', titleContainerEl,'main-title', )
mainTitleEl.textContent = 'Todo List'

const headContainerEl = new DomElement('div', content, 'head-container', )
const addProjectEl = new DomElement('div', headContainerEl, 'add-project', )
const addProjectInputEl = new DomElement('input', addProjectEl, 'add-project-input', )
addProjectInputEl.placeholder = 'Add a new Project'
const addProjectButtonEl = new DomElement('div', addProjectEl, 'add-project-button', )
addProjectButtonEl.textContent = '+'
const clearAllEl = new DomElement('div', headContainerEl, 'clear-all', )
clearAllEl.textContent='Clear all'

const mainContainerEl = new DomElement('div', content, 'main-container', )
const projectsContainerEl = new DomElement('div', mainContainerEl, 'projects-container', )
const projectTitle = new DomElement('h2', projectsContainerEl, 'projects-title', )
projectTitle.textContent = 'Projects'
const projectListContainerEl = new DomElement('div', projectsContainerEl, 'project-list-container', )

let project1Container = new DomElement('div', projectListContainerEl, 'project-container')
let project1P = new DomElement('p', project1Container)
project1P.textContent = 'Default'
let project1Icons = new DomElement('div', project1Container, 'project-icons')
let project1IconEye = new DomElement('i', project1Icons, 'fa-eye')
project1IconEye.classList.add('fa')
let project1IconTrash = new DomElement('i', project1Icons, 'fa-trash')
project1IconTrash.classList.add('fa')

let project2Container = new DomElement('div', projectListContainerEl, 'project-container')
let project2P = new DomElement('p', project2Container)
project2P.textContent = 'Fitness'
let project2Icons = new DomElement('div', project2Container, 'project-icons')
let project2IconEye = new DomElement('i', project2Icons, 'fa-eye')
project2IconEye.classList.add('fa')
let project2IconTrash = new DomElement('i', project2Icons, 'fa-trash')
project2IconTrash.classList.add('fa')

let project3Container = new DomElement('div', projectListContainerEl, 'project-container')
let project3P = new DomElement('p', project3Container)
project3P.textContent = 'Work'
let project3Icons = new DomElement('div', project3Container, 'project-icons')
let project3IconEye = new DomElement('i', project3Icons, 'fa-eye')
project3IconEye.classList.add('fa')
let project3IconTrash = new DomElement('i', project3Icons, 'fa-trash')
project3IconTrash.classList.add('fa')

const taskListContainer = new DomElement('div', mainContainerEl, 'task-list-container')
const taskListHeader = new DomElement('div', taskListContainer, 'task-list-header')
const taskListTitle = new DomElement('h2', taskListHeader, 'task-list-title')
taskListTitle.textContent = 'Default'
const taskCreateButton = new DomElement('div', taskListHeader, 'task-create-button')
taskCreateButton.textContent = 'Create New Task'

const taskContainer = new DomElement('div', taskListContainer, 'task-container')
const taskHeader = new DomElement('div', taskContainer, 'task-header')
const taskName = new DomElement('h3', taskHeader, 'task-name')
taskName.textContent = 'Task Title'
const taskCheckbox = new DomElement('div', taskHeader, 'task-checkbox')
const taskCheckboxInput = new DomElement('input', taskCheckbox)
taskCheckboxInput.type='checkbox'
taskCheckboxInput.id = 'complete-task'
const taskCheckboxLabel = new DomElement('label', taskCheckbox)
taskCheckboxLabel.for='complete-task'
taskCheckboxLabel.textContent='task complete'

const taskDate = new DomElement('div', taskContainer, 'task-date')
taskDate.textContent = new Date()
const taskDescription = new DomElement('div', taskContainer, 'task-description')
taskDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quod magni eveniet eligendi consectetur molestiae tenetur dolor sit sequi obcaecati delectus, corrupti omnis animi ipsa quo rem provident incidunt quos in ad voluptatibus nihil quibusdam. Culpa nisi quibusdam repellendus voluptatum eaque veritatis quisquam vero ad fugiat tenetur sequi, praesentium, quam molestias nostrum nam magnam provident animi nihil pariatur illo maiores. Ex iure natus, voluptatibus dolorem sequi doloremque aliquid earum, veniam soluta sint velit nesciunt nulla ipsa architecto mollitia labore beatae.'

const taskIcons = new DomElement('div', taskContainer, 'task-icons')

let taskIconEdit = new DomElement('i', taskIcons, 'glyphicon-edit')
taskIconEdit.classList.add('glyphicon')
let taskIconTrash = new DomElement('i', taskIcons, 'fa-trash')
taskIconTrash.classList.add('fa')





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
  projectListContainerEl.textContent = ''
  for (project of projects){
    let newProject = new DomElement('div', projectListContainerEl, 'project-container')
    let newProjectP = new DomElement('p', newProject)
    newProjectP.textContent = project.projectName
    let newProjectIcons = new DomElement('div', newProject, 'project-icons')
    let newProjectIconEye = new DomElement('i', newProjectIcons, 'fa-eye')
    newProjectIconEye.classList.add('fa')
    newProjectIconEye.addEventListener('click', function(){console.log(newProject)})
    let newProjectIconTrash = new DomElement('i', newProjectIcons, 'fa-trash')
    newProjectIconTrash.classList.add('fa')  
  }
}


class Project {
  constructor(projectName){
    this.tasks = []
    this.projectName = projectName
  }
  createTask(taskName, description){
    this.tasks.push({taskName, description})
  }
}

const myProject = new Project('Default')
projects.push(myProject)
const myotherProject = new Project('Work')
projects.push(myotherProject)
//newProject.createTask('task title', 'asdföaldkjfioqwef')
//newProject.createTask('task title2', 'aswerzurtzikjfioqwef')

