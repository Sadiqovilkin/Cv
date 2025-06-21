import React from 'react'
import "./Experience.scss"
const Experience = () => {
  return (
   <section id='experience'>
    <div className="container p-5">
      <div className="row">
    <div className="col-12">
      <h2 className='section_header'>Experience</h2>
    </div>
    <div className="col-lg-12"> 
     <div className="exper_card">
        <div className="card_head">
          <h5>Mentor Teacher (Frontend) <span >at Baku Development Center</span> </h5>
        </div>
        <div className="card_body">
          <div className="text_small mb-3">April, 2023 - September, 2023</div>
        
        </div>
      </div>
      <div className="exper_card">
        <div className="card_head">
          <h5>Frontend Developer <span >at Jugaad Agency</span> </h5>
        </div>
        <div className="card_body">
          <div className="text_small mb-3">April, 2023 - May,2023</div>
        
        </div>
      </div>
    
      <div className="exper_card">
        <div className="card_head">
          <h5>Frontend Developer <span >at Freelance</span> </h5>
        </div>
        <div className="card_body">
          <div className="text_small mb-3">May, 2023 </div>
        
        </div>
      </div>
      
    </div>
      </div>
    </div>
   </section>
  )
}

export default Experience