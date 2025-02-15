import React from "react";

const SelectedProject = ({ project }) => {
   const formattedDate = new Date(project.deadline).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
   })

   return <div className="selected_project_container">
      <header className="selected_project_header">
         <div className="selected_project_header_container">
            <h1 className="title">{project.title}</h1>
            <button type="button" className="btn btn_save">Delete</button>
         </div>
         <p className="selected_project_deadline">{formattedDate}</p>
         <p className="text selected_project_description">{project.description}</p>
      </header>
      <h1>TASKS</h1>
   </div>
}

export default SelectedProject