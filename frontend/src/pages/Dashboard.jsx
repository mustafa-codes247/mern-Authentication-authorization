import Navbar from "../component/Navbar"
import Sidebar from "../component/Sidebar"

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar/>
      <div className="grow ml-16 md:ml-64 h-full lg:h-screen dark:bg-gray-800 dark:text-white ">
      <Navbar/>
      </div>
      {/* <h1>these pages will appear here</h1>
      <ul>
        <li>navbar</li>
        <li>sidebar with links of add new note, view all notes</li>
        <li>by default all notes page</li> */}
        
       
    </div>
  )
}

export default Dashboard
