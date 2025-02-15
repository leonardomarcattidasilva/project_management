import React from "react";


const SideBar = ({ onClick, projectsList, onSelectProject, selectedID }) => {
   return <aside className="aside">
      <h2 className="aside_title">Your Projects</h2>
      <button type="button" className="aside_button" onClick={onClick}>
         Add Project
      </button>
      <ul className="mt-8">
         {
            projectsList.map(el => {
               if (el.id == selectedID) {
                  return <button type="button" key={el.id} onClick={() => onSelectProject(el.id)} className="aside_project selected_project">
                     {el.title}
                  </button>

               }
               return <button type="button" key={el.id} onClick={() => onSelectProject(el.id)} className="aside_project aside_regular">
                  {el.title}
               </button>

            })
         }
      </ul>
   </aside>
}

export default SideBar