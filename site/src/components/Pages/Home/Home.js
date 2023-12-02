import React from 'react'
import Banner from './Banner/Banner'
import About from './About/About'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Education from './Education/Education'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'

const Home = () => {
  return (
    <main>
        <Banner/>
        <About/>
        <Skills/>
        <Experience/>
        <Education/>
        <Portfolio/>
        <Contact/>
    </main>
  )  
}

export default Home