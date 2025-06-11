const TextArea = ({ label, ref }) => {
   return <div className="textArea">
      <label htmlFor={label}>{label}</label>
      <textarea name={label} id={label} rows='5' ref={ref}></textarea>
   </div>
}

export default TextArea