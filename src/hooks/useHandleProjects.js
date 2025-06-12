import { useState, useEffect } from "react";

const useHandleProject = () => {
   const [state, setState] = useState({ selectedProject: undefined, projects: [] })

   useEffect(() => {
      const local = JSON.parse(localStorage.getItem('projects'))

      if (local) {
         setState(prevState => {
            return { ...prevState, projects: local }
         })
      }
   }, [])


   useEffect(() => {
      localStorage.setItem('projects', JSON.stringify(state.projects))
   }, [state.projects])


   const setNewProject = () => setState(prevState => {
      return { ...prevState, selectedProject: null }
   })

   const cancelNewProject = () => setState(prevState => {
      return { ...prevState, selectedProject: undefined }
   })

   const addProject = (newProject) => {
      setState(prevState => {
         return { ...prevState, projects: [...prevState.projects, { ...newProject, id: Math.random() }] }
      })
   }

   return { state, setNewProject, cancelNewProject, addProject }
}

export default useHandleProject