import { useRef } from "react"
import Input from "./ui/Input"
import TextArea from "./ui/TextArea"

const NewProject = ({ onClick, addProject }) => {
   const titleRef = useRef('')
   const dateRef = useRef('')
   const descriptionRef = useRef('')

   const handleSave = () => {
      const title = titleRef.current.value
      const date = dateRef.current.value
      const description = descriptionRef.current.value
      if (title.trim() == '' || date.trim() == '' || description.trim() == '') {
         return null
      }

      addProject({ title, date, description })
   }

   return <div className="newProject">
      <menu>
         <button onClick={onClick} type="button" className="cancel">Cancel</button>
         <button onClick={handleSave} type="button" className="save">Save</button>
      </menu>
      <Input type='text' label='Title' ref={titleRef} />
      <Input type='date' label='Due Date' ref={dateRef} />
      <TextArea label="Description" ref={descriptionRef} />

   </div>
}

export default NewProject