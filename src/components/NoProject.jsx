import img from '../assets/no-projects.png'

const NoProject = ({ onClick }) => {
   return <div className="noProjects">
      <img src={img} alt="Empty tasks list" />
      <h2>No project selected</h2>
      <p>Select a project or start a new one!</p>
      <button type="button" onClick={onClick}>Create Project</button>
   </div>
}

export default NoProject