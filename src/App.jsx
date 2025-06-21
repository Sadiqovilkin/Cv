import React from 'react'
import Home from './pages/home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App