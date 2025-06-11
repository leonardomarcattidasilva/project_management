const Input = ({ label, type, ref }) => {
   return <div className="input">
      <label htmlFor={label}>{label}</label>
      <input type={type} name={label} id={label} ref={ref} />
   </div>
}

export default Input