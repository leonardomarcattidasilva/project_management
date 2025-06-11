import { useState, useRef } from "react";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";

const App = () => {
   const [state, setState] = useState({ selectedProject: undefined, projects: [] })


   const newProject = () => setState(prevState => {
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

   return <>
      <Header />
      <SideBar onToggle={newProject} />
      <main className="h-full flex flex-col justify-center items-center">
         {
            state.selectedProject === undefined && < NoProject onClick={newProject} />
         }

         {
            state.selectedProject === null && <NewProject onClick={cancelNewProject} addProject={addProject} />
         }
      </main>
      <Footer />
   </>
}

export default App;