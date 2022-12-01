import Home from './pages/Home'
import { Rooms } from './pages/Rooms'
import { Singlerooms } from './pages/Singleroom'
import { Error } from './pages/Error'
import './App.css'

import {Route,Routes} from "react-router-dom"
function App() {

  return (
    <>
      <h1>Hello</h1>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Rooms' element={<Rooms/>}></Route>
        <Route path='/Rooms/:blob'element={<Singlerooms/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>

    </>
  )
}

export default App
