import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import png from '../../../../image/PortrePng.jpeg'
const Banner = () => {
  return (
   <section id='banner'>
    <div className="container ">
      <div className="blur"></div>
      <div className="row justify-content-center">
        <div className="col-4">
          <div className="banner_card">
            <div className="card_img">
              <img src={png} alt="" />
            </div>
            <div className="card_desc">
              <h1>Ilkin Sadigzade</h1>
              <p>Front-end Developer </p>
              <div className="social_media">
                <a href="#"> <FaInstagram/></a>
                <a href="#"> <FaGithub/></a>
                <a href="#"> <FaLinkedin/></a>
               
               
               
              </div>
            </div>
            <div className="card_btns">
              <a href="" download>Dowland Cv</a>
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