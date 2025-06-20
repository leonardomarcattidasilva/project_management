const SideBar = ({ onToggle, projectList, onSelect, id }) => {
   return <aside>
      <h2>Your Projects</h2>
      <div>
         <button onClick={onToggle} type="button" className="button">Create Project</button>
      </div>
      <ul className="overflow-y-auto grow">
         {
            projectList.map((el) => {
               return <li onClick={() => onSelect(el.id)} key={el.id} className={id === el.id ? 'selectedProject' : 'projectItem'}>{el.title}</li>
            })
         }
      </ul>
   </aside>
}

export default SideBar