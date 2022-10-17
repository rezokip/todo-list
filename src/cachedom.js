export class DomElement{
  constructor(elementType,  parent, className){ 
    this.name = document.createElement(elementType)
    if(className){this.name.classList.add(className)}
    if(parent){this.name.appendToParent = () => parent.appendChild(this.name)}
    if(parent){this.name.appendToParent()}
    return this.name    
    }
}

let cacheDom =(function (){

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
  const projectListContainerEl = new DomElement('div', projectsContainerEl, 'project-list-container',)
  const taskListContainer = new DomElement('div', mainContainerEl, 'task-list-container')
  const taskListHeader = new DomElement('div', taskListContainer, 'task-list-header')
  const taskListBody = new DomElement('div', taskListContainer, 'task-list-body')

  let titleInput = document.querySelector('.title-input')
  let dateInput = document.querySelector('.date-input')
  let descriptInput = document.querySelector('.descript-input')
  /*const taskContainer = new DomElement('div', taskListContainer, 'task-container')
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
  taskIconTrash.classList.add('fa')*/
  return{projectListContainerEl, addProjectButtonEl, addProjectInputEl, clearAllEl,  taskListContainer, taskListHeader, taskListBody, titleInput, dateInput, descriptInput}
})()

export {cacheDom}