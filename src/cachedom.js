// Helper Class to make new Dom Elements
export class DomElement{
  constructor(elementType,  parent, className){ 
    this.name = document.createElement(elementType)
    if(className){this.name.classList.add(className)}
    if(parent){this.name.appendToParent = () => parent.appendChild(this.name)}
    if(parent){this.name.appendToParent()}
    return this.name    
    }
}

// Initial Dom on Pageload
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
  const backButton = new DomElement('button', taskListContainer, 'back-button')
  backButton.textContent = '<'
  const taskListHeader = new DomElement('div', taskListContainer, 'task-list-header')
  const taskListBody = new DomElement('div', taskListContainer, 'task-list-body')

  let titleInput = document.querySelector('.title-input')
  let dateInput = document.querySelector('.date-input')
  let descriptInput = document.querySelector('.descript-input')
  let formButtonContainer = document.querySelector('.form-button-container')
  return{projectsContainerEl, projectListContainerEl, addProjectButtonEl, addProjectInputEl, clearAllEl,  taskListContainer, backButton, taskListHeader, taskListBody, titleInput, dateInput, descriptInput, formButtonContainer}
})()

export {cacheDom}