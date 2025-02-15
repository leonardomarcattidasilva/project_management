import React from "react";

const Input = ({ label, isTextArea, type, ref }) => {
   return <div className="form_container">
      <label htmlFor="" className="label">{label}</label>
      {
         isTextArea ?
            <textarea name="" id="" color="5" rows={5} className='input' ref={ref}></textarea>
            :
            <input type={type} ref={ref} className="input" />
      }
   </div>
}

export default Input

