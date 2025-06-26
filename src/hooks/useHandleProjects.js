import { useState, useEffect } from "react";

const useHandleProject = () => {
   const [state, setState] = useState(() => {
      const localProjects = JSON.parse(localStorage.getItem('projects'))
      // const localTasks = JSON.parse(localStorage.getItem('tasks'))
      const projects = localProjects || []
      // const tasks = localTasks || []
      return { selectedID: undefined, projects }
   })

   useEffect(() => {
      localStorage.setItem('projects', JSON.stringify(state.projects))
      // localStorage.setItem('tasks', JSON.stringify(state.tasks))
   }, [state.projects])


   const setNewProject = () => setState(prevState => {
      return { ...prevState, selectedID: null }
   })

   const cancelNewProject = () => setState(prevState => {
      return { ...prevState, selectedID: undefined }
   })

   const handleSelectedProject = (id) => setState(prevState => {
      return { ...prevState, selectedID: id }
   })

   const selectedProject = state.projects.find(el => el.id == state.selectedID)

   const addProject = (newProject) => {
      setState(prevState => {
         return { ...prevState, projects: [...prevState.projects, { ...newProject, id: Math.random(), tasks: [] }] }
      })
   }

   const deleteProject = (id) => {
      const response = confirm('Are you sure?')
      if (!response) {
         return
      }
      setState(prevState => {
         const filteredProjects = prevState.projects.filter(el => el.id != id)
         return { selectedID: undefined, projects: filteredProjects }
      })
   }

   const addTask = (task) => {
      setState(prevState => {
         const newTask = { id: Math.random(), task }
         const updatedProjects = prevState.projects.map(project => {
            if (project.id === prevState.selectedID) {
               return {
                  ...project,
                  tasks: [newTask, ...project.tasks]
               }
            }
            return project
         })

         return {
            ...prevState,
            projects: updatedProjects
         }
      })
   }

   const deleteTask = (taskID) => {
      const response = confirm('Are you sure?')
      if (!response) {
         return
      }
      setState(prevState => {
         const updatedProjects = prevState.projects.map(project => {
            if (project.id == prevState.selectedID) {
               const filteredTasks = project.tasks.filter(task => task.id != taskID)
               console.log(filteredTasks);

               return { ...project, tasks: filteredTasks }
            }
            return project
         })

         return { ...prevState, projects: updatedProjects }
      })
   }

   return { state, setNewProject, cancelNewProject, addProject, handleSelectedProject, selectedProject, deleteProject, addTask, deleteTask }
}

export default useHandleProject