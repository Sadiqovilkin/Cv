import React from 'react'
import { SlCalender } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
const About = () => {
  return (
    <section id='about'>
        <div className="container p-5">
            <div className="row justify-content-between">
                <div className="col-lg-5 col-md-12">
                    <div className="about_desc">
                        <h2>About Me </h2>
                        <p>Hello! I’m Ilkin Sadigzade. I am passionate about UI/UX design and Web Design. I am a skilled front-end developer and master of graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the job done.
<br />
I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.</p>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12">
                    <div className="about_right">
                        <h2>Bio</h2>
                        <div className="lists">
                            <ul>
                                <li><span><SlCalender />  Age</span></li>
                                <li><span><MdOutlineEmail />  Email</span></li>
                                <li><span><FaPhoneAlt />  Phone</span></li>
                                <li><span> <FiMapPin/>   Adress </span></li>
                            </ul>
                            <ul>
                                <li>20</li>
                                <li>sadiqovilkin068@gmail.com</li>
                                <li>+994 55 307-50-63</li>
                                <li>Azerbaijan.Baku</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About