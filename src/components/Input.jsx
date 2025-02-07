import React from "react";

const styles = {
   container: 'flex flex-col gap-1 my-4',
   label: 'text-sm font-bold uppercase text-stone-500',
   input: 'w-full p-1 border-b-2 border-stone-300 resize-none bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600'
}

const Input = ({ label, isTextArea, type, ref }) => {
   return <div className={styles.container}>
      <label htmlFor="" className={styles.label}>{label}</label>
      {
         isTextArea ?
            <textarea name="" id="" color="5" rows={5} className={styles.input} ref={ref}></textarea>
            :
            <input type={type} className={styles.input} ref={ref} />
      }
   </div>
}

export default Input