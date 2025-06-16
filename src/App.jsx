import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import useHandleProject from "./hooks/useHandleProjects";


const App = () => {
   const { state, setNewProject, cancelNewProject, addProject, handleSelectedProject } = useHandleProject()

   return <>
      <Header />
      <SideBar onToggle={setNewProject} projectList={state.projects} onSelect={handleSelectedProject} />
      <main className="h-full flex flex-col justify-center items-center">
         {
            state.selectedProject === undefined && < NoProject onClick={setNewProject} />
         }

         {
            state.selectedProject === null && <NewProject onClick={cancelNewProject} addProject={addProject} />
         }

         {
            state.selectedProject && <p>{state.selectedProject}</p>
         }
      </main>
      <Footer />
   </>
}

export default App;