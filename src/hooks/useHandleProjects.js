import { useState, useEffect } from "react";

const useHandleProject = () => {
   const [state, setState] = useState(() => {
      const local = JSON.parse(localStorage.getItem('projects'))
      const projects = local || []
      return { selectedID: undefined, projects }
   })

   useEffect(() => {
      localStorage.setItem('projects', JSON.stringify(state.projects))
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
         return { ...prevState, projects: [...prevState.projects, { ...newProject, id: Math.random() }] }
      })
   }

   const deleteProject = (id) => {
      setState(prevState => {
         const filteredProjects = prevState.projects.filter(el => el.id != id)
         return { selectedID: undefined, projects: filteredProjects }
      })
   }

   return { state, setNewProject, cancelNewProject, addProject, handleSelectedProject, selectedProject, deleteProject }
}

export default useHandleProject