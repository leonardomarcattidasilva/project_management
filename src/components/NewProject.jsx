import React from "react";
import Input from "./Input";

const styles = {
   container: 'w-1/2',
   btn: 'px-6 py-2 rounded-md mx-2',
   btn_container: 'flex flex-row justify-center items-center',
   btn_cancel: 'bg-stone-200 hover:bg-stone-300 text-stone-600 hover:text-stone-950',
   btn_save: 'bg-stone-800 text-stone-100 hover:bg-stone-950'
}

const NewProject = ({ onCancel }) => {
   return <div className={styles.container}>
      <div className={styles.btn_container}>
         <button type="button" className={`${styles.btn} ${styles.btn_cancel}`} onClick={onCancel}>Cancel</button>
         <button type="button" className={`${styles.btn} ${styles.btn_save}`}>Save</button>
      </div>
      <Input label="Title" type='text' />
      <Input label="Description" isTextArea type={null} />
      <Input label="Deadline" type='datetime-local' />
   </div>
}

export default NewProject