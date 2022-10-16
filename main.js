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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showProjectContent\": () => (/* binding */ showProjectContent)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _cachedom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cachedom.js */ \"./src/cachedom.js\");\n\n\n\n\n\n\nlet showProjectContent = function(){\n  let chosenProject = _project_js__WEBPACK_IMPORTED_MODULE_0__.projects[this.dataset.id]\n  \n  console.log('projects', _project_js__WEBPACK_IMPORTED_MODULE_0__.projects)\n\n  console.log(chosenProject)\n  console.log(chosenProject.tasks)\n  \n  _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.taskListContainer.textContent=''\n  createTasksHeader(chosenProject)\n  createTasksContainer(chosenProject)\n}\n\n\nlet createTasksHeader = function(chosenProject){\n  const taskListHeader = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.taskListContainer, 'task-list-header')\n  const taskListTitle = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('h2', taskListHeader, 'task-list-title')\n  taskListTitle.textContent = chosenProject.projectName\n  const taskCreateButton = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskListHeader, 'task-create-button')\n  taskCreateButton.textContent = 'Create New Task'  \n  taskCreateButton.addEventListener('click', function(){\n    console.log(chosenProject)\n  })\n}\n\n\nlet createTasksContainer= function(chosenProject){ \n  for (let task of chosenProject.tasks){\n    let taskContainer = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.cacheDom.taskListContainer, 'task-container')\n    let taskHeader = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskContainer, 'task-header')\n    let taskName = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('h3', taskHeader, 'task-name')\n    taskName.textContent = task.name\n    let taskCheckbox = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskHeader, 'task-checkbox')\n    let taskCheckboxInput = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('input', taskCheckbox)\n    taskCheckboxInput.type='checkbox'\n    taskCheckboxInput.id = 'complete-task'\n    let taskCheckboxLabel = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('label', taskCheckbox)\n    taskCheckboxLabel.for='complete-task'\n    taskCheckboxLabel.textContent='task complete'\n\n    let taskDate = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskContainer, 'task-date')\n    taskDate.textContent = task.date\n    let taskDescription = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskContainer, 'task-description')\n    taskDescription.textContent = task.description\n    let taskIcons = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('div', taskContainer, 'task-icons')\n\n    let taskIconEdit = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('i', taskIcons, 'glyphicon-edit')\n    taskIconEdit.classList.add('glyphicon')\n    let taskIconTrash = new _cachedom_js__WEBPACK_IMPORTED_MODULE_1__.DomElement('i', taskIcons, 'fa-trash')\n    taskIconTrash.classList.add('fa')\n  }\n}\n\n//chosenProject.createTask('new Task', '16.10.22', 'lorem morem lorem')\n\n//# sourceURL=webpack://todo-list/./src/add.js?");

/***/ }),

/***/ "./src/cachedom.js":
/*!*************************!*\
  !*** ./src/cachedom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DomElement\": () => (/* binding */ DomElement),\n/* harmony export */   \"cacheDom\": () => (/* binding */ cacheDom)\n/* harmony export */ });\nclass DomElement{\n  constructor(elementType,  parent, className){ \n    this.name = document.createElement(elementType)\n    if(className){this.name.classList.add(className)}\n    if(parent){this.name.appendToParent = () => parent.appendChild(this.name)}\n    if(parent){this.name.appendToParent()}\n    return this.name    \n    }\n}\n\nlet cacheDom =(function (){\n  const content = document.querySelector('.content')\n\n  const titleContainerEl = new DomElement( 'div',content, 'title-container', )\n  const mainTitleEl = new DomElement('h1', titleContainerEl,'main-title', )\n  mainTitleEl.textContent = 'Todo List'\n\n  const headContainerEl = new DomElement('div', content, 'head-container', )\n  const addProjectEl = new DomElement('div', headContainerEl, 'add-project', )\n  const addProjectInputEl = new DomElement('input', addProjectEl, 'add-project-input', )\n  addProjectInputEl.placeholder = 'Add a new Project'\n  const addProjectButtonEl = new DomElement('div', addProjectEl, 'add-project-button', )\n  addProjectButtonEl.textContent = '+'\n  const clearAllEl = new DomElement('div', headContainerEl, 'clear-all', )\n  clearAllEl.textContent='Clear all'\n\n  const mainContainerEl = new DomElement('div', content, 'main-container', )\n  const projectsContainerEl = new DomElement('div', mainContainerEl, 'projects-container', )\n  const projectTitle = new DomElement('h2', projectsContainerEl, 'projects-title', )\n  projectTitle.textContent = 'Projects'\n  const projectListContainerEl = new DomElement('div', projectsContainerEl, 'project-list-container',)\n\n\n  const taskListContainer = new DomElement('div', mainContainerEl, 'task-list-container')\n  \n  /*const taskContainer = new DomElement('div', taskListContainer, 'task-container')\n  const taskHeader = new DomElement('div', taskContainer, 'task-header')\n  const taskName = new DomElement('h3', taskHeader, 'task-name')\n  taskName.textContent = 'Task Title'\n  const taskCheckbox = new DomElement('div', taskHeader, 'task-checkbox')\n  const taskCheckboxInput = new DomElement('input', taskCheckbox)\n  taskCheckboxInput.type='checkbox'\n  taskCheckboxInput.id = 'complete-task'\n  const taskCheckboxLabel = new DomElement('label', taskCheckbox)\n  taskCheckboxLabel.for='complete-task'\n  taskCheckboxLabel.textContent='task complete'\n\n  const taskDate = new DomElement('div', taskContainer, 'task-date')\n  taskDate.textContent = new Date()\n  const taskDescription = new DomElement('div', taskContainer, 'task-description')\n  taskDescription.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quod magni eveniet eligendi consectetur molestiae tenetur dolor sit sequi obcaecati delectus, corrupti omnis animi ipsa quo rem provident incidunt quos in ad voluptatibus nihil quibusdam. Culpa nisi quibusdam repellendus voluptatum eaque veritatis quisquam vero ad fugiat tenetur sequi, praesentium, quam molestias nostrum nam magnam provident animi nihil pariatur illo maiores. Ex iure natus, voluptatibus dolorem sequi doloremque aliquid earum, veniam soluta sint velit nesciunt nulla ipsa architecto mollitia labore beatae.'\n\n  const taskIcons = new DomElement('div', taskContainer, 'task-icons')\n\n  let taskIconEdit = new DomElement('i', taskIcons, 'glyphicon-edit')\n  taskIconEdit.classList.add('glyphicon')\n  let taskIconTrash = new DomElement('i', taskIcons, 'fa-trash')\n  taskIconTrash.classList.add('fa')*/\n  return{projectListContainerEl, addProjectButtonEl, addProjectInputEl, clearAllEl,  taskListContainer}\n})()\n\n\n\n//# sourceURL=webpack://todo-list/./src/cachedom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cachedom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cachedom */ \"./src/cachedom.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\n\n\n\n(0,_project_js__WEBPACK_IMPORTED_MODULE_1__.renderProjects)()\nconsole.log(_project_js__WEBPACK_IMPORTED_MODULE_1__)\n\n\n/*\nlet projects = [\n  {\n    projectName: 'Default',\n    tasks:[\n      {taskName: 'task1', description: 'taskdescription',},\n      {taskName: 'task2', description: 'taskdescription2'}, \n    ]  \n  },\n  {\n    projectName: 'Fitness',\n    tasks:[\n      {taskName: 'task3', description: 'taskdescription3',},\n      {taskName: 'task4', description: 'taskdescription4'}, \n    ]   \n  }\n]\n*/\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"clearAllProjects\": () => (/* binding */ clearAllProjects),\n/* harmony export */   \"createProjectsDom\": () => (/* binding */ createProjectsDom),\n/* harmony export */   \"deleteProject\": () => (/* binding */ deleteProject),\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"renderProjects\": () => (/* binding */ renderProjects)\n/* harmony export */ });\n/* harmony import */ var _cachedom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cachedom.js */ \"./src/cachedom.js\");\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.js */ \"./src/add.js\");\n\n\n\n\n/*let projects = [\n  {\n    projectName: 'Default',\n    tasks:[\n      {taskName: 'task1', description: 'taskdescription',},\n      {taskName: 'task2', description: 'taskdescription2'}, \n    ]  \n  },\n  {\n    projectName: 'Fitness',\n    tasks:[\n      {taskName: 'task3', description: 'taskdescription3',},\n      {taskName: 'task4', description: 'taskdescription4'}, \n    ]   \n  }\n]\n*/\n\nclass Project {\n  constructor(projectName){\n    this.tasks = []\n    this.projectName = projectName\n  }\n  createTask(name, date, description){\n    this.tasks.push({name, date, description})\n  }\n}\n\nlet addNewProject = function(){\n  if(_cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.addProjectInputEl.value){\n    let myProject = new Project(_cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.addProjectInputEl.value)\n    myProject.createTask('default', 'test', 'test')\n    projects.push(myProject)\n    _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.addProjectInputEl.value = ''\n    console.log(projects)\n    renderProjects()\n  }\n  else{alert('please enter a Name')}  \n}\n\n\nlet deleteProject = function(){\n  console.log(this.dataset.id)\n  projects.splice(this.dataset.id, 1)\n  renderProjects()\n}\n\n\nlet clearAllProjects = function(){\n  projects = []\n  renderProjects()\n}\n\n\nlet createProjectsDom = function(){\n  for (let project of projects){  \n    let index = projects.indexOf(project) \n    let newProject = new _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.DomElement('div', _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.projectListContainerEl, 'project-container')    \n    newProject.dataset.id = index\n    let newProjectP = new _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.DomElement('p', newProject)\n    newProjectP.textContent = project.projectName\n    let newProjectIcons = new _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.DomElement('div', newProject, 'project-icons')\n    let newProjectIconEye = new _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.DomElement('i', newProjectIcons, 'fa-eye')\n    newProjectIconEye.classList.add('fa')\n    newProjectIconEye.dataset.id = index  \n    newProjectIconEye.addEventListener('click', _add_js__WEBPACK_IMPORTED_MODULE_1__.showProjectContent)\n    let newProjectIconTrash = new _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.DomElement('i', newProjectIcons, 'fa-trash')\n    newProjectIconTrash.classList.add('fa') \n    newProjectIconTrash.dataset.id = index  \n    newProjectIconTrash.addEventListener('click', deleteProject)  \n  }   \n}\n\n\n\n\nlet renderProjects = function(){\n  _cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.projectListContainerEl.textContent = '' \n  createProjectsDom() \n}\n\n\n\n\nlet projects = []\n_cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.addProjectButtonEl.addEventListener('click', addNewProject)\n_cachedom_js__WEBPACK_IMPORTED_MODULE_0__.cacheDom.clearAllEl.addEventListener('click', clearAllProjects)\n\n\n\n\n\n//newProject.createTask('task title', 'asdföaldkjfioqwef')\n//newProject.createTask('task title2', 'aswerzurtzikjfioqwef')\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

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