import React, { useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom'

const styles = {
   dialog: 'backdrop:bg-stone-950/90 p-4 rounded-md shadow-md w-1/3 top-[33%] left-[33%]',
   btn: 'px-6 py-2 rounded-md my-4 bg-stone-800 text-stone-100 hover:bg-stone-950',
}

const ErrorModal = ({ children, ref }) => {
   const dialogRef = useRef()
   useImperativeHandle(ref, () => {
      return { open() { dialogRef.current.showModal() } }
   })

   return createPortal(<dialog ref={dialogRef} className={styles.dialog}>
      {children}
      <form action="" method="dialog" className="mt-4 text-center">
         <button type="submit" className={styles.btn}>Close</button>
      </form>
   </dialog>, document.querySelector('#modal-root'))
}

export default ErrorModal

