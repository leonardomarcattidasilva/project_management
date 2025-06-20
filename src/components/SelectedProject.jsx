import { formattedDate } from "../helpers/helpers"

const SelectedProject = ({ project, onDelete }) => {
   const { title, description, date } = project
   const newDate = formattedDate(date)

   return <div className="projectContainer">
      <div className="projectBorder">
         <div className="projectHeader">
            <h1>{title}</h1>
            <button type="button" onClick={() => onDelete(project.id)}>Delete</button>
         </div>
         <p className="mb-4 text-stone-400">{newDate}</p>
         <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
         <div>
            TASKS
         </div>
      </div>
   </div>
}

export default SelectedProject