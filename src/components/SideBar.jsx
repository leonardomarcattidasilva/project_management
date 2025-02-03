import React from "react";

const styles = {
   aside: 'bg-stone-900 text-center py-8 text-stone-50 rounded-r-xl flex-1',
   title: 'mb-8 font-bold uppercase md:text-xl text-stone-200',
   button: "px-4 py-2 text-xs rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
}

const SideBar = ({ onClick }) => {
   return <aside className={styles.aside}>
      <h2 className={styles.title}>Your Projects</h2>
      <button type="button" className={styles.button} onClick={onClick}>
         Add Project
      </button>
   </aside>
}

export default SideBar