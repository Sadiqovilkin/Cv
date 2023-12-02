import React from 'react'

const Education = () => {
  return (
   <section id='education'>
     <div className="container p-5 mb-3">
      <div className="row">
    <div className="col-12">
      <h2 className='section_header'>Education</h2>
    </div>
    <div className="col-lg-12"> 
     <div className="education_card">
        <div className="card_head">
          <h5>Bachelor of Computer Science  <span >from Regional College</span> </h5>
        </div>
        <div className="card_body">
          <div className="text_small mb-3">2021-Present</div>
        
        </div>
      </div>
      <div className="education_card">
        <div className="card_head">
          <h5>Frontend course  <span >from Baku Development Center</span> </h5>
        </div>
        <div className="card_body">
          <div className="text_small mb-3">2022-2023</div>
        
        </div>
      </div>
      
      
    </div>
      </div>
    </div>
   </section>
  )
}

export default Education