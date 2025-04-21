import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Footer/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
