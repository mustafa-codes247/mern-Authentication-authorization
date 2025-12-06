
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import AddNotes from './side-bar-pages/AddNotes'
import AllNotes from './side-bar-pages/AllNotes'
import EditNotes from './component/EditNotes'
import Register from './pages/Register'
import Login from './pages/Login'
import LogOut from './component/LogOut'
import ThemeContextPRovider from './context/ThemeContextPRovider'

const App = () => {
  return (
    <ThemeContextPRovider>
    <> 
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path="/addnewnote" element={<AddNotes/>}></Route>
        <Route path='/allnotes' element={<AllNotes/>}></Route>
        <Route path='/editnote' element={<EditNotes/>}></Route>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/logout' element={<LogOut/>}></Route>
      </Routes>
     
    </>
    </ThemeContextPRovider>
  )
}

export default App
