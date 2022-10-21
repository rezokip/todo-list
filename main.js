/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cachedom.js":
/*!*************************!*\
  !*** ./src/cachedom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DomElement\": () => (/* binding */ DomElement),\n/* harmony export */   \"cacheDom\": () => (/* binding */ cacheDom)\n/* harmony export */ });\n// Helper Class to make new Dom Elements\nclass DomElement{\n  constructor(elementType,  parent, className){ \n    this.name = document.createElement(elementType)\n    if(className){this.name.classList.add(className)}\n    if(parent){this.name.appendToParent = () => parent.appendChild(this.name)}\n    if(parent){this.name.appendToParent()}\n    return this.name    \n    }\n}\n\n// Initial Dom on Pageload\nlet cacheDom =(function (){\n  const content = document.querySelector('.content')\n  const titleContainerEl = new DomElement( 'div',content, 'title-container', )\n  const mainTitleEl = new DomElement('h1', titleContainerEl,'main-title', )\n  mainTitleEl.textContent = 'Todo List'\n\n  const headContainerEl = new DomElement('div', content, 'head-container', )\n  const addProjectEl = new DomElement('div', headContainerEl, 'add-project', )\n  const addProjectInputEl = new DomElement('input', addProjectEl, 'add-project-input', )\n  addProjectInputEl.placeholder = 'Add a new Project'\n  const addProjectButtonEl = new DomElement('div', addProjectEl, 'add-project-button', )\n  addProjectButtonEl.textContent = '+'\n  const clearAllEl = new DomElement('div', headContainerEl, 'clear-all', )\n  clearAllEl.textContent='Clear all'\n\n  const mainContainerEl = new DomElement('div', content, 'main-container', )\n  const projectsContainerEl = new DomElement('div', mainContainerEl, 'projects-container', )\n  const projectTitle = new DomElement('h2', projectsContainerEl, 'projects-title', )\n  projectTitle.textContent = 'Projects'\n  const projectListContainerEl = new DomElement('div', projectsContainerEl, 'project-list-container',)\n  const taskListContainer = new DomElement('div', mainContainerEl, 'task-list-container')\n  const backButton = new DomElement('button', taskListContainer, 'back-button')\n  backButton.textContent = '<'\n  const taskListHeader = new DomElement('div', taskListContainer, 'task-list-header')\n  const taskListBody = new DomElement('div', taskListContainer, 'task-list-body')\n\n  let titleInput = document.querySelector('.title-input')\n  let dateInput = document.querySelector('.date-input')\n  let descriptInput = document.querySelector('.descript-input')\n  let formButtonContainer = document.querySelector('.form-button-container')\n  return{projectsContainerEl, projectListContainerEl, addProjectButtonEl, addProjectInputEl, clearAllEl,  taskListContainer, backButton, taskListHeader, taskListBody, titleInput, dateInput, descriptInput, formButtonContainer}\n})()\n\n\n\n//# sourceURL=webpack://todo-list/./src/cachedom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cachedom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cachedom */ \"./src/cachedom.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\n\n\n\n(0,_project_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)()\nconsole.log(_project_js__WEBPACK_IMPORTED_MODULE_1__.projects)\n\n\n/*\nlet projects = [\n  {\n    projectName: 'Default',\n    tasks:[\n      {taskName: 'task1', description: 'taskdescription',},\n      {taskName: 'task2', description: 'taskdescription2'}, \n    ]  \n  },\n  {\n    projectName: 'Fitness',\n    tasks:[\n      {taskName: 'task3', description: 'taskdescription3',},\n      {taskName: 'task4', description: 'taskdescription4'}, \n    ]   \n  }\n]\n*/\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"chosenProject\": () => (/* binding */ chosenProject),\n/* harmony export */   \"clearAllProjects\": () => (/* binding */ clearAllProjects),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"pushNewProject\": () => (/* binding */ pushNewProject),\n/* harmony export */   \"renderProjects\": () => (/* binding */ renderProjects),\n/* harmony export */   \"showProjectContent\": () => (/* binding */ showProjectContent)\n/* harmony export */ });\n/* harmony import */ var _cachedom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cachedom.js */ \"./src/cachedom.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\n\n\nlet chosenProject\n\n// class to create a project object containing tasks and name\nclass Project {\n  constructor(projectName){\n    this.tasks = []\n    this.projectName = projectName\n  }\n  createTask(name, date, description){\n    this.tasks.push({name, date, description})\n  }\n}\n\n// get the project and show it on the Dom\nlet addNewProject = function(){\n  if(_cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.addProjectInputEl.value){\n    pushNewProject()   \n    renderProjects()\n     _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.addProjectInputEl.value = ''\n  }\n  else{alert('please enter a Name')}  \n}\n\n// helper function to push the project to the projects array\nlet pushNewProject = function(){\n  let newProject = new Project(_cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.addProjectInputEl.value)\n    projects.push(newProject)\n}\n\n\n// render the projects from the array to the DOM\nlet renderProjects = function(){\n  console.log(projects)\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.projectListContainerEl.textContent = '' \n  for (let project of projects){  \n    let index = projects.indexOf(project) \n    let newProject = new _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.DomElement('div', _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.projectListContainerEl, 'project-container')    \n    newProject.dataset.id = index\n    let newProjectP = new _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.DomElement('p', newProject)\n    newProjectP.textContent = project.projectName\n    newProjectP.dataset.id = index\n    newProjectP.addEventListener('click', showProjectContent)\n    let newProjectIcons = new _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.DomElement('div', newProject, 'project-icons')\n    let newProjectIconEye = new _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.DomElement('i', newProjectIcons, 'fa-eye')\n    newProjectIconEye.classList.add('fa')\n    newProjectIconEye.dataset.id = index  \n    newProjectIconEye.addEventListener('click', showProjectContent)\n    let newProjectIconTrash = new _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.DomElement('i', newProjectIcons, 'fa-trash')\n    newProjectIconTrash.classList.add('fa') \n    newProjectIconTrash.dataset.id = index  \n    newProjectIconTrash.addEventListener('click', deleteProject)  \n  }   \n}\n\n\n// Function to show the Content of every individual Project based on width of the site\nlet showProjectContent = function(){ \n  if(this.classList.value==='fa-eye fa'){\n    hideProjectList()    \n  }\n  chosenProject = projects[this.dataset.id]\n  console.log('showProjectContent', chosenProject)\n  ;(0,_task_js__WEBPACK_IMPORTED_MODULE_1__.renderTasksHeader)()\n  ;(0,_task_js__WEBPACK_IMPORTED_MODULE_1__.renderTasksContainer)()\n  console.log(chosenProject)\n}\n\n// (if width < 648px) hide the projects and show the tasks when clicking the eye icon \nlet hideProjectList = function(){\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.projectsContainerEl.classList.add('hide')\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.taskListContainer.classList.add('show');\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.backButton.classList.add('show')\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.backButton.addEventListener('click', showProjectList)\n}\n\n// the back button goes back to the projects and hides the tasks again\nlet showProjectList = function(){\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.taskListContainer.classList.remove('show');\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.backButton.classList.remove('show')\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.projectsContainerEl.classList.remove('hide')\n}\n\n// splice the individual project from the array, reset the chosenProject and update the Dom with render-functions\nlet deleteProject = function(){\n  projects.splice(this.dataset.id, 1)\n  chosenProject = ''\n  console.log('chosenproject', chosenProject)   \n  renderProjects()\n  ;(0,_task_js__WEBPACK_IMPORTED_MODULE_1__.renderTasksHeader)()\n  ;(0,_task_js__WEBPACK_IMPORTED_MODULE_1__.renderTasksContainer)()\n}\n\n\n// set the projects array to empty, reset the chosenProject and update the Dom with render-functions\nlet clearAllProjects = function(){\n  projects = []\n  chosenProject = ''\n  renderProjects()\n  ;(0,_task_js__WEBPACK_IMPORTED_MODULE_1__.renderTasksHeader)()\n  ;(0,_task_js__WEBPACK_IMPORTED_MODULE_1__.renderTasksContainer)()\n}\n\n\n\n// create an empty projects array to store the project objects inside\nlet projects = []\n\n// get the add and clear buttons from the DOM and use event listener\n_cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.addProjectButtonEl.addEventListener('click', addNewProject)\n_cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.clearAllEl.addEventListener('click', clearAllProjects)\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderTasksContainer\": () => (/* binding */ renderTasksContainer),\n/* harmony export */   \"renderTasksHeader\": () => (/* binding */ renderTasksHeader)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _cachedom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cachedom.js */ \"./src/cachedom.js\");\n\n\n\n\n\nlet currentTask\n\n// get the projects title and a \"Create New Task\" button and render it to the DOM Header\nlet renderTasksHeader = function(){ \n  _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.taskListHeader.textContent = ''  \n  if(_project_js__WEBPACK_IMPORTED_MODULE_0__.chosenProject!=''){\n    let taskListTitle = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('h2', _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.taskListHeader, 'task-list-title')\n    taskListTitle.textContent = _project_js__WEBPACK_IMPORTED_MODULE_0__.chosenProject.projectName\n    let taskCreateButton = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.taskListHeader, 'task-create-button')\n    taskCreateButton.textContent = 'Create New Task'  \n    taskCreateButton.setAttribute('id', 'task_create_button')\n    taskCreateButton.addEventListener('click', renderForm)\n  } \n}\n\n\n// get the tasks from the individual project and render every task as its own DOM Container\nlet renderTasksContainer= function(){ \n  console.log('renderTaskContainer-chosenproject',_project_js__WEBPACK_IMPORTED_MODULE_0__.chosenProject)\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.taskListBody.textContent=''\n  if(_project_js__WEBPACK_IMPORTED_MODULE_0__.chosenProject!=''){\n    for (let task of _project_js__WEBPACK_IMPORTED_MODULE_0__.chosenProject.tasks){\n      console.log(task)\n      let index = _project_js__WEBPACK_IMPORTED_MODULE_0__.chosenProject.tasks.indexOf(task)\n      let taskContainer = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.taskListBody, 'task-container')\n      let taskHeader = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskContainer, 'task-header')\n      let taskName = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('h3', taskHeader, 'task-name')\n      taskName.textContent = task.name\n      let taskCheckbox = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskHeader, 'task-checkbox')\n      let taskCheckboxInput = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('input', taskCheckbox)\n      taskCheckboxInput.type='checkbox'\n      taskCheckboxInput.id = 'complete-task'\n      let taskCheckboxLabel = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('label', taskCheckbox)\n      taskCheckboxLabel.for='complete-task'\n      taskCheckboxLabel.textContent='task complete'\n  \n      let taskDate = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskContainer, 'task-date')\n      taskDate.textContent = task.date\n      let taskDescription = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskContainer, 'task-description')\n      taskDescription.textContent = task.description\n      let taskIcons = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskContainer, 'task-icons')\n  \n      let taskIconEdit = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('i', taskIcons, 'glyphicon-edit')\n      taskIconEdit.classList.add('glyphicon')\n      taskIconEdit.dataset.id = index\n      taskIconEdit.setAttribute('id', 'task_icon_edit')\n      taskIconEdit.addEventListener('click',renderForm)\n      \n      let taskIconTrash = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('i', taskIcons, 'fa-trash')\n      taskIconTrash.classList.add('fa')\n      taskIconTrash.dataset.id = index\n      taskIconTrash.addEventListener('click', deleteTask)\n    }\n  }\n}\n\n\n// delete the task with the appropriate id\nlet deleteTask = function(){\n  console.log('data id from delete task',this.dataset.id)\n  _project_js__WEBPACK_IMPORTED_MODULE_0__.chosenProject.tasks.splice(this.dataset.id, 1)\n  renderTasksContainer()\n}\n\n\n// Render a form to create or edit a Task\nlet renderForm = function(){\n  document.querySelector('.form-container').style.display = 'flex'\n  document.querySelector('.form-background').style.display = 'flex'  \n  document.querySelector('.content').style.opacity = '0.2'\n  console.log(this)\n  console.log(this.id)\n  if(this.id === 'task_create_button'){\n    getFormToCreateTask()\n  }\n  else  {\n    console.log(this.dataset.id)\n    console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.chosenProject.tasks[this.dataset.id])\n    getFormToEditTask()\n  }\n}\n   \n\n// Get the fresh form without any input to add a new task\nlet getFormToCreateTask = function(){\n  document.querySelector('.change-button').style.display = 'none'\n  document.querySelector('.adding-button').style.display = 'inline-block'\n  document.querySelector('.adding-button').addEventListener('click', addNewTask)\n}\n\n\n// Get the Edit Form with existing inputs based on the task to edit\nlet getFormToEditTask = function(){\n  currentTask = _project_js__WEBPACK_IMPORTED_MODULE_0__.chosenProject.tasks[this.dataset.id]\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.titleInput.value = currentTask.name\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.dateInput.value = currentTask.date\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.descriptInput.value = currentTask.description\n  document.querySelector('.adding-button').style.display = 'none'\n  document.querySelector('.change-button').style.display = 'inline-block'\n  document.querySelector('.change-button').addEventListener('click', changeTask)\n  console.log(_project_js__WEBPACK_IMPORTED_MODULE_0__.chosenProject, 'chosenproject from render form')\n}\n\n\n\n// Get the Values from the user and create the task\nlet addNewTask = function(){\n  console.log('getValue', _project_js__WEBPACK_IMPORTED_MODULE_0__.chosenProject)    \n  if(!_cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.titleInput.value || !_cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.dateInput.value || !_cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.descriptInput.value){\n    alert('Please fill in completely')    \n  }\n  else{    \n    _project_js__WEBPACK_IMPORTED_MODULE_0__.chosenProject.createTask(_cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.titleInput.value , _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.dateInput.value, _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.descriptInput.value)  \n    renderTasksContainer()\n    hideForm()\n  } \n}\n\n// Get the Values from user and edit the Task\nlet changeTask = function(){\n  if(!_cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.titleInput.value || !_cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.dateInput.value || !_cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.descriptInput.value){\n    alert('Please fill in completely')    \n  }\n  else{    \n    currentTask.name = _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.titleInput.value\n    currentTask.date = _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.dateInput.value \n    currentTask.description = _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.descriptInput.value\n    renderTasksContainer()\n    hideForm()\n  } \n}\n\n\n\n// After getting Inputs hide the Form and set its values to null\nlet hideForm = function(){\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.titleInput.value = null\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.dateInput.value = null\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.descriptInput.value = null\n  document.querySelector('.form-container').style.display = 'none'\n  document.querySelector('.form-background').style.display = 'none'  \n  document.querySelector('.content').style.opacity = '1'\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;