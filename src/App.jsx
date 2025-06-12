import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import useHandleProject from "./hooks/useHandleProjects";

const App = () => {
   const { state, setNewProject, cancelNewProject, addProject } = useHandleProject()

   return <>
      <Header />
      <SideBar onToggle={setNewProject} />
      <main className="h-full flex flex-col justify-center items-center">
         {
            state.selectedProject === undefined && < NoProject onClick={setNewProject} />
         }

         {
            state.selectedProject === null && <NewProject onClick={cancelNewProject} addProject={addProject} />
         }
      </main>
      <Footer />
   </>
}

export default App;