import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="fullnamae">
                        <h2>Ilkin Sadigzade</h2>
                    </div>
                </div>
                <div className="col-9">
                    <div className="navbar_items">
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#skills">skills</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#education">education</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#contact">contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar