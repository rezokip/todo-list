import { cacheDom } from "./cachedom"
import { renderProjects } from "./project.js"
//import * as projectscript from "./project.js"

// create an empty projects array to store the project objects inside
export let projects




export let saveMyProjects = function(){
  localStorage.setItem('mySavedProjects', JSON.stringify(projects))
}

let getMyProjects = function(){
  let savedProjects = JSON.parse(localStorage.getItem('mySavedProjects'))
  if(savedProjects){projects= savedProjects
  console.log(projects)
  }
  else{projects = []
  console.log(projects)
  }
}

getMyProjects()
renderProjects()
//console.log(projectscript.projects)

