const SelectedProject = ({ title, date, description }) => {
   const fomattedDate = new Date(date.toLocaleString('pt-BR', { year: 'numeric', month: 'short', day: 'numeric' }))

   return <div className="w-[35rem] mt-16">
      <div className="pb-4 mb-4 border-b-2 border-stone-300">
         <div className="flex items-center justiy-center">
            <h1 className="text-3xl font-bold text-stone-300 mb-2">{title}</h1>
            <button className="text-stone-600 hover:text-stone-950" type="button">Delete</button>
         </div>
         <p className="mb-4 text-stone-400">{fomattedDate}</p>
         <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
         <div>
            TASKS
         </div>
      </div>
   </div>
}

export default SelectedProject