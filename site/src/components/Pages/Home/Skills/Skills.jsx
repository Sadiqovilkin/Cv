import React from 'react'

const Skills = () => {
  return (
   <section id='skills'>
    <div className="container p-5">
      <div className="row">
        <div className="col-12">
          <h2 className='section_header'>Professional Skills</h2>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="mb-3">
            <span className='fw-bolder'>HTML</span>
            <div className="progress my-2 rounded">
              <div className="progress_bar " id='html'>
                Master
              </div>
            </div>
          </div>
          <div className="mb-3">
            <span className='fw-bolder'>CSS</span>
            <div className="progress my-2 rounded">
              <div className="progress_bar " id='css'>
                Expert
              </div>
            </div>
          </div>
          <div className="mb-3">
            <span className='fw-bolder'>SCSS</span>
            <div className="progress my-2 rounded">
              <div className="progress_bar " id='scss'>
                Expert
              </div>
            </div>
          </div>
          <div className="mb-3">
            <span className='fw-bolder'>Bootstarp</span>
            <div className="progress my-2 rounded">
              <div className="progress_bar " id='bootstarp'>
                Advance
              </div>
            </div>
          </div>
        
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="mb-3">
            <span className='fw-bolder'>Javascript</span>
            <div className="progress my-2 rounded">
              <div className="progress_bar purple " id='js'>
                Master
              </div>
            </div>
          </div>
          <div className="mb-3">
            <span className='fw-bolder'>React</span>
            <div className="progress my-2 rounded">
              <div className="progress_bar purple" id='react'>
                Expert
              </div>
            </div>
          </div>
          <div className="mb-3">
            <span className='fw-bolder'>Typescript</span>
            <div className="progress my-2 rounded">
              <div className="progress_bar purple" id='ts'>
              Beginner
              </div>
            </div>
          </div>
          <div className="mb-3">
            <span className='fw-bolder'>Responsive Design</span>
            <div className="progress my-2 rounded">
              <div className="progress_bar purple" id='responsive'>
                Advance
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
   </section>
  )
}

export default Skills