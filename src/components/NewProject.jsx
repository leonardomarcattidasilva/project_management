import React, { useRef } from "react";
import Input from "./Input";
import ErrorModal from "./ErrorModal";
import useAddProject from "../hooks/useAddProject";

const NewProject = ({ onCancel, onAddNewProject }) => {
   const { titleRef, descriptionRef, deadlineRef, modalRef, handleSave } = useAddProject(onAddNewProject)

   return <>
      <ErrorModal ref={modalRef}>
         <h2 className="title modalTitle">Error</h2>
         <h3 className="sub_title modalTitle">You have forgotten to enter a value in some field</h3>
         <p className="text">Please try again</p>
      </ErrorModal>
      <div className="container">
         <div className="btn_container">
            <button type="button" className="btn btn_cancel" onClick={onCancel}>Cancel</button>
            <button type="button" className="btn btn_save" onClick={handleSave}>Save</button>
         </div>
         <Input label="Title" type='text' ref={titleRef} />
         <Input label="Description" isTextArea type={null} ref={descriptionRef} />
         <Input label="Deadline" type='date' ref={deadlineRef} />
      </div>
   </>
}

export default NewProject