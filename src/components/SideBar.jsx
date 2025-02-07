import React from "react";

const styles = {
   aside: 'bg-stone-900 text-center py-8 text-stone-50 rounded-r-xl flex-1',
   title: 'mb-8 font-bold uppercase md:text-xl text-stone-200',
   button: "px-4 py-2 text-xs rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100",
   project: 'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200  hover:bg-stone-700 bg-stone-600 flex flex-row items-center h-[3rem]'
}

const SideBar = ({ onClick, projectsList }) => {
   return <aside className={styles.aside}>
      <h2 className={styles.title}>Your Projects</h2>
      <button type="button" className={styles.button} onClick={onClick}>
         Add Project
      </button>
      <ul className="mt-8">
         {
            projectsList.map(el => <li key={el.id} className={styles.project}>{el.title}</li>)
         }
      </ul>
   </aside>
}

export default SideBar