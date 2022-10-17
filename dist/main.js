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

/***/ "./src/add.js":
/*!********************!*\
  !*** ./src/add.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showProjectContent\": () => (/* binding */ showProjectContent)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _cachedom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cachedom.js */ \"./src/cachedom.js\");\n\n\n\n\n\nlet chosenProject\nlet showProjectContent = function(){ \n  chosenProject = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[this.dataset.id]\n  console.log('showProjectContent', chosenProject)\n  renderTasksHeader()\n  renderTasksContainer()\n  console.log(chosenProject)\n  //renderTasksContainer(chosenProject)  \n}\n\n\n/*\nlet createTasksHeader = function(chosenProject){\n  const taskListHeader = new DomElement('div', cacheDom.taskListContainer, 'task-list-header')\n  const taskListTitle = new DomElement('h2', taskListHeader, 'task-list-title')\n  taskListTitle.textContent = chosenProject.projectName\n  const taskCreateButton = new DomElement('div', taskListHeader, 'task-create-button')\n  taskCreateButton.textContent = 'Create New Task'  \n  taskCreateButton.addEventListener('click', function(){\n    getForm(chosenProject)\n  })\n}\n*/\n\nlet renderTasksHeader = function(){\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.taskListHeader.textContent = ''  \n  let taskListTitle = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('h2', _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.taskListHeader, 'task-list-title')\n  taskListTitle.textContent = chosenProject.projectName\n  let taskCreateButton = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.taskListHeader, 'task-create-button')\n  taskCreateButton.textContent = 'Create New Task'  \n  taskCreateButton.classList.add(chosenProject.projectName)\n  taskCreateButton.addEventListener('click', renderForm)\n}\n\n\nlet renderForm = function(){\n  document.querySelector('.form-container').style.display = 'flex'\n  document.querySelector('.form-background').style.display = 'flex'  \n  document.querySelector('.content').style.opacity = '0.2'\n  let addingButton = document.querySelector('.adding-button')\n  addingButton.addEventListener('click', addNewTask)\n}\n\n\n\nlet hideForm = function(){\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.titleInput.value = null\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.dateInput.value = null\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.descriptInput.value = null\n  document.querySelector('.form-container').style.display = 'none'\n  document.querySelector('.form-background').style.display = 'none'  \n  document.querySelector('.content').style.opacity = '1'\n}\n\n\nlet addNewTask = function(){\n  console.log('getValue', chosenProject) \n   \n  let titleValue= _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.titleInput.value\n  let dateValue = _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.dateInput.value\n  let descriptValue = _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.descriptInput.value\n  console.log(titleValue, dateValue, descriptValue)\n  if(!titleValue || !dateValue || !descriptValue){\n    alert('Please fill in completely')    \n  }\n  else{    \n    console.log(descriptValue, dateValue, titleValue)\n    chosenProject.createTask(titleValue, dateValue, descriptValue)\n    console.log('getValue else', chosenProject)       \n    renderTasksContainer()\n    hideForm()\n  } \n}\n\n\n/*\nlet getForm = function(chosenProject){\n  console.log('getForm', chosenProject)\n  document.querySelector('.form-container').style.display = 'flex'\n  document.querySelector('.form-background').style.display = 'flex'  \n  document.querySelector('.content').style.opacity = '0.2'\n  let addingButton = document.querySelector('.adding-button')\n  addingButton.addEventListener('click', function(){\n    getValue(chosenProject)\n  })\n\n}*/\n\n/*\nlet getValue = function(currentProject){\n  console.log('getValue', currentProject)\n  let titleInput = document.querySelector('.title-input')\n  let dateInput = document.querySelector('.date-input')\n  let descriptInput = document.querySelector('.descript-input')\n  if(!titleInput.value || !dateInput.value || !descriptInput.value){\n    alert('Please fill in completely')    \n  }\n  else{\n    let titleValue= titleInput.value\n    let dateValue = dateInput.value\n    let descriptValue = descriptInput.value\n    console.log(descriptValue, dateValue, titleValue)\n    currentProject.createTask(titleValue, dateValue, descriptValue)\n    console.log('getValue else', currentProject)\n    titleInput.value = null\n    dateInput.value = null\n    descriptInput.value = null\n    document.querySelector('.form-container').style.display = 'none'\n    document.querySelector('.form-background').style.display = 'none'  \n    document.querySelector('.content').style.opacity = '1'\n   \n    renderTasksContainer(currentProject)\n  }\n \n}\n\n\n\n\nlet renderTasksContainer= function(chosenProject){ \n  console.log('renderTaskContainer',chosenProject)\n  cacheDom.taskListContainer.textContent=''\n  createTasksHeader(chosenProject)\n  for (let task of chosenProject.tasks){\n    let index = chosenProject.tasks.indexOf(task)\n    let taskContainer = new DomElement('div', cacheDom.taskListContainer, 'task-container')\n    let taskHeader = new DomElement('div', taskContainer, 'task-header')\n    let taskName = new DomElement('h3', taskHeader, 'task-name')\n    taskName.textContent = task.name\n    let taskCheckbox = new DomElement('div', taskHeader, 'task-checkbox')\n    let taskCheckboxInput = new DomElement('input', taskCheckbox)\n    taskCheckboxInput.type='checkbox'\n    taskCheckboxInput.id = 'complete-task'\n    let taskCheckboxLabel = new DomElement('label', taskCheckbox)\n    taskCheckboxLabel.for='complete-task'\n    taskCheckboxLabel.textContent='task complete'\n\n    let taskDate = new DomElement('div', taskContainer, 'task-date')\n    taskDate.textContent = task.date\n    let taskDescription = new DomElement('div', taskContainer, 'task-description')\n    taskDescription.textContent = task.description\n    let taskIcons = new DomElement('div', taskContainer, 'task-icons')\n\n    let taskIconEdit = new DomElement('i', taskIcons, 'glyphicon-edit')\n    taskIconEdit.classList.add('glyphicon')\n    \n    let taskIconTrash = new DomElement('i', taskIcons, 'fa-trash')\n    taskIconTrash.classList.add('fa')\n    taskIconTrash.addEventListener('click', function(){\n      console.log(index)\n    } )\n  }\n}\n\n*/\n\nlet renderTasksContainer= function(){ \n  console.log('renderTaskContainer',chosenProject)\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.taskListBody.textContent=''\n  for (let task of chosenProject.tasks){\n    console.log(task)\n    let index = chosenProject.tasks.indexOf(task)\n    let taskContainer = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.taskListBody, 'task-container')\n    let taskHeader = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskContainer, 'task-header')\n    let taskName = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('h3', taskHeader, 'task-name')\n    taskName.textContent = task.name\n    let taskCheckbox = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskHeader, 'task-checkbox')\n    let taskCheckboxInput = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('input', taskCheckbox)\n    taskCheckboxInput.type='checkbox'\n    taskCheckboxInput.id = 'complete-task'\n    let taskCheckboxLabel = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('label', taskCheckbox)\n    taskCheckboxLabel.for='complete-task'\n    taskCheckboxLabel.textContent='task complete'\n\n    let taskDate = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskContainer, 'task-date')\n    taskDate.textContent = task.date\n    let taskDescription = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskContainer, 'task-description')\n    taskDescription.textContent = task.description\n    let taskIcons = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskContainer, 'task-icons')\n\n    let taskIconEdit = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('i', taskIcons, 'glyphicon-edit')\n    taskIconEdit.classList.add('glyphicon')\n    \n    let taskIconTrash = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('i', taskIcons, 'fa-trash')\n    taskIconTrash.classList.add('fa')\n    taskIconTrash.addEventListener('click', function(){\n      console.log(index)\n    } )\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/add.js?");

/***/ }),

/***/ "./src/cachedom.js":
/*!*************************!*\
  !*** ./src/cachedom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DomElement\": () => (/* binding */ DomElement),\n/* harmony export */   \"cacheDom\": () => (/* binding */ cacheDom)\n/* harmony export */ });\nclass DomElement{\n  constructor(elementType,  parent, className){ \n    this.name = document.createElement(elementType)\n    if(className){this.name.classList.add(className)}\n    if(parent){this.name.appendToParent = () => parent.appendChild(this.name)}\n    if(parent){this.name.appendToParent()}\n    return this.name    \n    }\n}\n\nlet cacheDom =(function (){\n\n  const content = document.querySelector('.content')\n\n  const titleContainerEl = new DomElement( 'div',content, 'title-container', )\n  const mainTitleEl = new DomElement('h1', titleContainerEl,'main-title', )\n  mainTitleEl.textContent = 'Todo List'\n\n  const headContainerEl = new DomElement('div', content, 'head-container', )\n  const addProjectEl = new DomElement('div', headContainerEl, 'add-project', )\n  const addProjectInputEl = new DomElement('input', addProjectEl, 'add-project-input', )\n  addProjectInputEl.placeholder = 'Add a new Project'\n  const addProjectButtonEl = new DomElement('div', addProjectEl, 'add-project-button', )\n  addProjectButtonEl.textContent = '+'\n  const clearAllEl = new DomElement('div', headContainerEl, 'clear-all', )\n  clearAllEl.textContent='Clear all'\n\n  const mainContainerEl = new DomElement('div', content, 'main-container', )\n  const projectsContainerEl = new DomElement('div', mainContainerEl, 'projects-container', )\n  const projectTitle = new DomElement('h2', projectsContainerEl, 'projects-title', )\n  projectTitle.textContent = 'Projects'\n  const projectListContainerEl = new DomElement('div', projectsContainerEl, 'project-list-container',)\n  const taskListContainer = new DomElement('div', mainContainerEl, 'task-list-container')\n  const taskListHeader = new DomElement('div', taskListContainer, 'task-list-header')\n  const taskListBody = new DomElement('div', taskListContainer, 'task-list-body')\n\n  let titleInput = document.querySelector('.title-input')\n  let dateInput = document.querySelector('.date-input')\n  let descriptInput = document.querySelector('.descript-input')\n  /*const taskContainer = new DomElement('div', taskListContainer, 'task-container')\n  const taskHeader = new DomElement('div', taskContainer, 'task-header')\n  const taskName = new DomElement('h3', taskHeader, 'task-name')\n  taskName.textContent = 'Task Title'\n  const taskCheckbox = new DomElement('div', taskHeader, 'task-checkbox')\n  const taskCheckboxInput = new DomElement('input', taskCheckbox)\n  taskCheckboxInput.type='checkbox'\n  taskCheckboxInput.id = 'complete-task'\n  const taskCheckboxLabel = new DomElement('label', taskCheckbox)\n  taskCheckboxLabel.for='complete-task'\n  taskCheckboxLabel.textContent='task complete'\n\n  const taskDate = new DomElement('div', taskContainer, 'task-date')\n  taskDate.textContent = new Date()\n  const taskDescription = new DomElement('div', taskContainer, 'task-description')\n  taskDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quod magni eveniet eligendi consectetur molestiae tenetur dolor sit sequi obcaecati delectus, corrupti omnis animi ipsa quo rem provident incidunt quos in ad voluptatibus nihil quibusdam. Culpa nisi quibusdam repellendus voluptatum eaque veritatis quisquam vero ad fugiat tenetur sequi, praesentium, quam molestias nostrum nam magnam provident animi nihil pariatur illo maiores. Ex iure natus, voluptatibus dolorem sequi doloremque aliquid earum, veniam soluta sint velit nesciunt nulla ipsa architecto mollitia labore beatae.'\n\n  const taskIcons = new DomElement('div', taskContainer, 'task-icons')\n\n  let taskIconEdit = new DomElement('i', taskIcons, 'glyphicon-edit')\n  taskIconEdit.classList.add('glyphicon')\n  let taskIconTrash = new DomElement('i', taskIcons, 'fa-trash')\n  taskIconTrash.classList.add('fa')*/\n  return{projectListContainerEl, addProjectButtonEl, addProjectInputEl, clearAllEl,  taskListContainer, taskListHeader, taskListBody, titleInput, dateInput, descriptInput}\n})()\n\n\n\n//# sourceURL=webpack://todo-list/./src/cachedom.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"clearAllProjects\": () => (/* binding */ clearAllProjects),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"pushNewProject\": () => (/* binding */ pushNewProject),\n/* harmony export */   \"renderProjects\": () => (/* binding */ renderProjects)\n/* harmony export */ });\n/* harmony import */ var _cachedom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cachedom.js */ \"./src/cachedom.js\");\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.js */ \"./src/add.js\");\n\n\n\nclass Project {\n  constructor(projectName){\n    this.tasks = []\n    this.projectName = projectName\n  }\n  createTask(name, date, description){\n    this.tasks.push({name, date, description})\n  }\n}\n\nlet addNewProject = function(){\n  if(_cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.addProjectInputEl.value){\n    pushNewProject()   \n    renderProjects()\n     _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.addProjectInputEl.value = ''\n  }\n  else{alert('please enter a Name')}  \n}\n\nlet pushNewProject = function(){\n  let newProject = new Project(_cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.addProjectInputEl.value)\n    projects.push(newProject)\n}\n\n\nlet renderProjects = function(){\n  console.log(projects)\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.projectListContainerEl.textContent = '' \n  for (let project of projects){  \n    let index = projects.indexOf(project) \n    let newProject = new _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.DomElement('div', _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.projectListContainerEl, 'project-container')    \n    newProject.dataset.id = index\n    let newProjectP = new _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.DomElement('p', newProject)\n    newProjectP.textContent = project.projectName\n    let newProjectIcons = new _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.DomElement('div', newProject, 'project-icons')\n    let newProjectIconEye = new _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.DomElement('i', newProjectIcons, 'fa-eye')\n    newProjectIconEye.classList.add('fa')\n    newProjectIconEye.dataset.id = index  \n    newProjectIconEye.addEventListener('click', _add_js__WEBPACK_IMPORTED_MODULE_1__.showProjectContent)\n    let newProjectIconTrash = new _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.DomElement('i', newProjectIcons, 'fa-trash')\n    newProjectIconTrash.classList.add('fa') \n    newProjectIconTrash.dataset.id = index  \n    newProjectIconTrash.addEventListener('click', deleteProject)  \n  }   \n}\n\n\nlet deleteProject = function(){\n  projects.splice(this.dataset.id, 1)\n  renderProjects()\n}\n\n\nlet clearAllProjects = function(){\n  projects = []\n  renderProjects()\n}\n\n\n\n\nlet projects = []\n_cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.addProjectButtonEl.addEventListener('click', addNewProject)\n_cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.clearAllEl.addEventListener('click', clearAllProjects)\n\n\n\n/*\nexport let createProjectsDom = function(){\n  for (let project of projects){  \n    let index = projects.indexOf(project) \n    let newProject = new DomElement('div', cacheDom.projectListContainerEl, 'project-container')    \n    newProject.dataset.id = index\n    let newProjectP = new DomElement('p', newProject)\n    newProjectP.textContent = project.projectName\n    let newProjectIcons = new DomElement('div', newProject, 'project-icons')\n    let newProjectIconEye = new DomElement('i', newProjectIcons, 'fa-eye')\n    newProjectIconEye.classList.add('fa')\n    newProjectIconEye.dataset.id = index  \n    newProjectIconEye.addEventListener('click', showProjectContent)\n    let newProjectIconTrash = new DomElement('i', newProjectIcons, 'fa-trash')\n    newProjectIconTrash.classList.add('fa') \n    newProjectIconTrash.dataset.id = index  \n    newProjectIconTrash.addEventListener('click', deleteProject)  \n  }   \n}\n\n\n\n\nexport let renderProjects = function(){\n  cacheDom.projectListContainerEl.textContent = '' \n  createProjectsDom() \n}\n*/\n\n\n\n\n\n\n//newProject.createTask('task title', 'asdföaldkjfioqwef')\n//newProject.createTask('task title2', 'aswerzurtzikjfioqwef')\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

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