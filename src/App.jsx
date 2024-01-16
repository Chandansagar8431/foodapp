import About from "./components/about"
import Navbar from "./components/navbar"
import { Route,Routes } from "react-router-dom"

function App() {
  return (

    <>
    <Navbar/>
      <Routes>
       <Route path='/about' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
