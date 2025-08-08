import { formattedDate } from "../helpers/helpers"
import Tasks from "./Tasks"

const SelectedProject = ({ project, onDelete, onAddTask, onDeleteTask }) => {
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
      </div>
      <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={project.tasks} id={project.id} />
   </div>
}

export default SelectedProject