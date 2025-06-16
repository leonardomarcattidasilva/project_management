const SideBar = ({ onToggle, projectList, onSelect }) => {
   return <aside>
      <h2>Your Projects</h2>
      <div>
         <button onClick={onToggle} type="button" className="button">Create Project</button>
      </div>
      <ul className="overflow-y-auto grow">
         {
            projectList.map((el) => <li onClick={() => onSelect(el.id)} key={el.id} className="w-full text-left px-2 py-4 rounded-sm my-2 text-stone-400 hover:text-stone-100 hover:bg-stone-700 bg-stone-800">{el.title}</li>)
         }
      </ul>
   </aside>
}

export default SideBar