import Input from "./ui/Input"
import TextArea from "./ui/TextArea"
import useNewProjectHook from "../hooks/useNewProjectHook"
import Modal from "./Modal"

const NewProject = ({ onClick, addProject }) => {
   const { handleSave, titleRef, dateRef, descriptionRef, dialogRef, status } = useNewProjectHook(addProject)

   return <>
      <Modal ref={dialogRef} btnText="Close">
         {
            !status && <>
               <h2>Invalid Inputs</h2>
               <p>Something is missing</p>
            </>
         }

         {
            status && <h2>Success</h2>
         }
      </Modal>
      <div className="newProject">
         <menu>
            <button onClick={onClick} type="button" className="cancel">Cancel</button>
            <button onClick={handleSave} type="button" className="save">Save</button>
         </menu>
         <Input type='text' label='Title' ref={titleRef} />
         <Input type='date' label='Due Date' ref={dateRef} />
         <TextArea label="Description" ref={descriptionRef} />
      </div>
   </>
}

export default NewProject