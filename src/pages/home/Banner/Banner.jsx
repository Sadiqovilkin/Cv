import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import png from '../../../../image/PortrePng.jpeg'
import "./Banner.scss"
const Banner = () => {
  return (
   <section id='banner'>
    <div className="container ">
      <div className="blur"></div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 ">
          <div className="banner_card">
            <div className="card_img">
              <img src="" alt="IMage" />
            </div>
            <img src="../../dowlands/png" alt="" />
            <div className="card_desc">
              <h1>Ilkin Sadigzade</h1>
              <p>Front-end Developer </p>
              <div className="social_media">
                <a href="https://instagram.com/ilkin_860?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'> <FaInstagram/></a>
                <a href="https://github.com/Sadiqovilkin" target='_blank'> <FaGithub/></a>
                <a target='_blank' href="https://www.linkedin.com/in/ilkin-sadiqov-0a177925a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin/></a> 
              </div>
            </div>
            <div className="card_btns">
              <a href="../../../../dowlands/IlkinFrontEndcv.pdf" download>Dowland Cv</a>
              <a href="#contact">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
  )
}

export default Banner