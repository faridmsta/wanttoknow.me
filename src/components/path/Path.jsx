import React, { useEffect } from 'react'
import './Path.css'
import Alplogo from '../img/alplogo.jpg'
import Brain from '../img/brain.jpg';
import Python from '../img/python.png'
import Technest from '../img/Technest.jpg'
import Uni from '../img/uni.jpg'
import Okmedia from '../img/okmedia.jpg'
import Interview from '../img/intervi.jpg'
import Graduent from '../img/mezun1.jpg'
import hackaton1 from '../img/hackaton1.jpg'
import timegif from '../img/giphy.gif'
import AOS from "aos";
import "aos/dist/aos.css";


function Path() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      setTimeout(() => {
        document.querySelector('.pathWrap').style.opacity = "1"
    
      }, 500)
    return (
        <div id='cpath'>
            <main>
                <section className="path">
                    <div className="container">
                        <div className="pathWrap">
                            <div className="story">
                                <div className="stPart " data-aos="fade-right">
                                    <div className="image">
                                        <img src={Alplogo} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>Logo programing language <br/> 2019</h2>
                                        <p>Winning the 3rd place in the Republic for Logo programming language
                                            (with Ismail Sadigov and Naida Isayeva)</p>
                                    </div>
                                </div>

                                <div className="stPart " data-aos="fade-left">
                                    <div className="image">
                                        <img src={Brain} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>Brain Ring competition <br/> 2022</h2>
                                        <p>We represented Our city with our team at a high level</p>
                                    </div>
                                </div>

                                <div className="stPart " data-aos="fade-right">
                                    <div className="image">
                                        <img src={Python} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>Python course from Udemy <br/> 2022</h2>
                                        <p>I have completed a 40+ hour course from the Udemy platform</p>
                                    </div>
                                </div>

                                <div className="stPart " data-aos="fade-left">
                                    <div className="image">
                                        <img src={Technest} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>Technest Scholarship <br/> 2023</h2>
                                        <p>I got 100% scholarship from Technest as a Frontend Delevoper in Div Academy</p>
                                    </div>
                                </div>

                                <div className="stPart " data-aos="fade-right">
                                    <div className="image">
                                        <img src={Uni} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>Technical University <br/> 2023</h2>
                                        <p>By scoreing 552 out of 700 points, I was admitted to Azerbaijan Technical University</p>
                                    </div>
                                </div>

                                <div className="stPart " data-aos="fade-left">
                                    <div className="image">
                                        <img src={Interview} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>Call for an interview <br/> 2023</h2>
                                        <p>I told about my life story in the Interview that I was called for my achievements and it was great
                                            <br />
                                            <a href="https://www.instagram.com/p/C03GUqoNXkE/" target="_blank" rel="noopener noreferrer">Click to watch</a></p>
                                    </div>
                                </div>

                                <div className="stPart " data-aos="fade-right">
                                    <div className="image">
                                        <img src={Okmedia} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>Admission to First job <br/> 2024</h2>
                                        <p>I started my internship as a Frontend developer at Okmedia company</p>
                                    </div>
                                </div>
                                <div className="stPart " data-aos="fade-right">
                                    <div className="image">
                                        <img src={Graduent} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>Graduation from Div Academy<br/> 2024</h2>
                                        <p>After a lot of sleepless nights and hard work I finally graduated from Div Academy</p>
                                    </div>
                                </div>
                                <div className="stPart " data-aos="fade-right">
                                    <div className="image">
                                        <img src={hackaton1} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>First win at First Hackaton<br/> 2024</h2>
                                        <p>Just in 24hours we managed to develop EcoLink App and got the First place</p>
                                    </div>
                                </div>
                                <div className="stPart " data-aos="fade-right">
                                    <div className="image">
                                        <img src={timegif} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>Coming Soon<br/> </h2>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Path