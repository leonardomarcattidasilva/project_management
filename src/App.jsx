import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import useHandleProject from "./hooks/useHandleProjects";
import SelectedProject from "./components/SelectedProject";


const App = () => {
   const { state, setNewProject, cancelNewProject, addProject, handleSelectedProject, selectedProject, deleteProject } = useHandleProject()

   return <>
      <Header />
      <SideBar onToggle={setNewProject} projectList={state.projects} onSelect={handleSelectedProject} />
      <main className="h-full flex flex-col justify-center items-center">
         {
            state.selectedID === undefined && < NoProject onClick={setNewProject} />
         }

         {
            state.selectedID === null && <NewProject onClick={cancelNewProject} addProject={addProject} />
         }

         {
            state.selectedID && <SelectedProject project={selectedProject} onDelete={deleteProject} />
         }
      </main>
      <Footer />
   </>
}

export default App;