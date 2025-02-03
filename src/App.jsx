import React, { useState } from "react";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";

const styles = {
   container: 'h-screen grid grid-cols-4',
   main: 'col-span-3 m-8 flex flex-col flex-nowrap justify-center items-center'
}

const App = () => {
   const [status, setStatus] = useState({ projectID: undefined, projects: [] })
   const toggleStatus = () => setStatus(prevState => {
      return {
         ...prevState,
         projectID: null,
      }
   })

   const cancelNewProject = () => setStatus(prevState => {
      return {
         ...prevState,
         projectID: undefined
      }
   })

   return <div className={styles.container}>
      <SideBar onClick={toggleStatus} />
      <main className={styles.main}>
         {
            status.projectID === undefined ?
               <NoProjectSelected onClick={toggleStatus} />
               :
               <NewProject onClick={toggleStatus} onCancel={cancelNewProject} />
         }
      </main>
   </div>
}

export default App;
