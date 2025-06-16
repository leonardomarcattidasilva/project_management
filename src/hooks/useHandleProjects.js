import { useState, useEffect } from "react";

const useHandleProject = () => {
   const [state, setState] = useState(() => {
      const local = JSON.parse(localStorage.getItem('projects'))
      const projects = local || []
      return { selectedProject: undefined, projects }
   })

   useEffect(() => {
      localStorage.setItem('projects', JSON.stringify(state.projects))
   }, [state.projects])


   const setNewProject = () => setState(prevState => {
      return { ...prevState, selectedProject: null }
   })

   const cancelNewProject = () => setState(prevState => {
      return { ...prevState, selectedProject: undefined }
   })

   const handleSelectedProject = (id) => setState(prevState => {
      return { ...prevState, selectedProject: id }
   })

   const addProject = (newProject) => {
      setState(prevState => {
         return { ...prevState, projects: [...prevState.projects, { ...newProject, id: Math.random() }] }
      })
   }

   return { state, setNewProject, cancelNewProject, addProject, handleSelectedProject }
}

export default useHandleProject