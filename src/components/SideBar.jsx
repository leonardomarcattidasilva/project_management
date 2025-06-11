const SideBar = ({ onToggle }) => {
   return <aside>
      <h2>Your Projects</h2>
      <div>
         <button onClick={onToggle} type="button" className="button">Create Project</button>
      </div>
      <ul>
      </ul>
   </aside>
}

export default SideBar