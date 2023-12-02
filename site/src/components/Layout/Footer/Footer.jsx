import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className='py-4'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 text-center">
            <div className="footer_body">
              <h4>Ilkin Sadigzade</h4>
              <div className="social_media">
                <a href="https://instagram.com/ilkin_860?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'> <FaInstagram/></a>
                <a href="https://github.com/Sadiqovilkin" target='_blank'> <FaGithub/></a>
                <a target='_blank' href="https://www.linkedin.com/in/ilkin-sadiqov-0a177925a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin/></a> 
              </div>
 
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer