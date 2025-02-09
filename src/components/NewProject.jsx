import React, { useRef } from "react";
import Input from "./Input";
import ErrorModal from "./ErrorModal";
import useAddProject from "../hooks/useAddProject";

const styles = {
   container: 'w-1/2',
   btn: 'px-6 py-2 rounded-md mx-2',
   btn_container: 'flex flex-row justify-center items-center',
   btn_cancel: 'bg-stone-200 hover:bg-stone-300 text-stone-600 hover:text-stone-950',
   btn_save: 'bg-stone-800 text-stone-100 hover:bg-stone-950',
   title: 'text-xl font-bold text-stone-500 my-4',
   modalTitle: 'text-center',
   sub_title: 'text-md text-stone-500 my-4',
   img: 'w-16 h-16 object-contain mx-auto',
   text: 'text-stone-500 mb-4 text-center',
}

const NewProject = ({ onCancel, onAddNewProject }) => {
   const { titleRef, descriptionRef, deadlineRef, modalRef, handleSave } = useAddProject(onAddNewProject)

   return <>
      <ErrorModal ref={modalRef} className={styles.children}>
         <h2 className={`${styles.title} ${styles.modalTitle}`}>Error</h2>
         <h3 className={`${styles.sub_title} ${styles.modalTitle}`}>You have forgotten to enter a value in some field</h3>
         <p className={styles.text}>Please try again</p>
      </ErrorModal>
      <div className={styles.container}>
         <div className={styles.btn_container}>
            <button type="button" className={`${styles.btn} ${styles.btn_cancel}`} onClick={onCancel}>Cancel</button>
            <button type="button" className={`${styles.btn} ${styles.btn_save}`} onClick={handleSave}>Save</button>
         </div>
         <Input label="Title" type='text' ref={titleRef} />
         <Input label="Description" isTextArea type={null} ref={descriptionRef} />
         <Input label="Deadline" type='date' ref={deadlineRef} />
      </div>
   </>
}

export default NewProject