import { useState } from "react"

const NewTask = ({ onAddTask }) => {
   const [state, setState] = useState('')

   const handleChange = (e) => {
      setState(e.target.value)
   }

   const handleClick = () => {
      onAddTask(state)
      setState('')
   }

   return <div className="newTask">
      <input type="text" name="" id="" onChange={handleChange} value={state} />
      <div>
         <button type="button" onClick={handleClick}>Add Task</button>
      </div>
   </div>
}

export default NewTask