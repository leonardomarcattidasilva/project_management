import NewTask from "./NewTask"

const Tasks = ({ onAddTask, onDeleteTask, tasks, id }) => {
   return <section>
      <h2 className="text-2xl font-bolt text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {
         tasks && tasks.length > 0 && <ul>
            {
               tasks.map(el => {
                  return <li key={el.id} className="taskItem">
                     <span>{el.task}</span>
                     <button onClick={() => onDeleteTask(el.id)} type="button" className="">X</button>
                  </li>
               })
            }
         </ul>
      }
      {
         tasks && tasks.length == 0 && <p className="text-stone-800 my-4"><b>This project has no tasks yet!</b></p>
      }

   </section>
}

export default Tasks