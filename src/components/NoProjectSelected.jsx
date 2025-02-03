import React from "react";
import noImage from '../assets/no-projects.png'
const styles = {
   container: 'text-center w-2/3',
   btn: 'px-6 py-2 rounded-md my-4 bg-stone-800 text-stone-100 hover:bg-stone-950',
   title: 'text-xl font-bold text-stone-500 my-4',
   img: 'w-16 h-16 object-contain mx-auto',
   text: 'text-stone-400 mb-4'
}

const NoProjectSelected = ({ onClick }) => {
   return <div className={styles.container}>
      <img src={noImage} alt="" className={styles.img} />
      <h2 className={styles.title} >No project Selected</h2>
      <p className={styles.text}>Select a project or get started a new one!</p>
      <button type="button" className={styles.btn} onClick={onClick}>New Project </button>
   </div>
}

export default NoProjectSelected