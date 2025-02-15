import React, { useImperativeHandle, useRef } from "react";
import { createPortal } from 'react-dom'


const ErrorModal = ({ children, ref }) => {
   const dialogRef = useRef()
   useImperativeHandle(ref, () => {
      return { open() { dialogRef.current.showModal() } }
   })

   return createPortal(<dialog ref={dialogRef} className="dialog">
      {children}
      <form action="" method="dialog" className="form">
         <button type="submit" className="btn btn_save">Close</button>
      </form>
   </dialog>, document.querySelector('#modal-root'))
}

export default ErrorModal

