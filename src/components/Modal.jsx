import { createPortal } from 'react-dom'
import { useImperativeHandle, useRef } from 'react'

const Modal = ({ children, btnText, ref }) => {
   const dialog = useRef()

   useImperativeHandle(ref, () => ({
      open() {
         dialog.current?.showModal()
      }
   }))

   return createPortal(
      <dialog ref={dialog} className='dialog'>
         {children}
         <form method="dialog">
            <button type="submit">{btnText}</button>
         </form>
      </dialog>,
      document.querySelector('#modal-root')
   )
}

export default Modal
