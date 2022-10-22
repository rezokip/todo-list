import { cacheDom } from "./cachedom"
import { renderProjects } from "./project.js"


// create an projects variable to store the project objects inside
export let projects



// save the projects to the localStorage
export let saveMyProjects = function(){
  localStorage.setItem('mySavedProjects', JSON.stringify(projects))
}


// get the projects from the localStorage if there is no project then set it to an empty array
let getMyProjects = function(){
  let savedProjects = JSON.parse(localStorage.getItem('mySavedProjects'))
  if(savedProjects){projects= savedProjects
  }
  else{projects = []}
}

getMyProjects()
renderProjects()


