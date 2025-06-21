import React from 'react'
import Banner from './Banner/Banner'
import About from './About/About'
import Skills from './Skills/Skills'
import Experience from './Experience/Experience'
import Education from './Education/Education'

const Home = () => {
  return (
    <main>
        <Banner/>
        <About/>
        <Skills/>
        <Experience/>
        <Education/>
    </main>
  )
}

export default Home