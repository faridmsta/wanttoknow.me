import React, { useEffect } from 'react'
import './Path.css'
import Alplogo from '../components/img/alplogo.jpg'
import Brain from '../components/img/brain.jpg';
import Python from '../components/img/python.png'
import Technest from '../components/img/Technest.jpg'
import Uni from '../components/img/uni.jpg'
import Okmedia from '../components/img/okmedia.jpg'
import Interview from '../components/img/intervi.jpg'
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
        <div>
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
                                        <h2>Logo programing language | 2019</h2>
                                        <p>Winning the 3rd place in the Republic for Logo programming language
                                            (with Ismail Sadigov and Naida Isayeva)</p>
                                    </div>
                                </div>

                                <div className="stPart " data-aos="fade-left">
                                    <div className="image">
                                        <img src={Brain} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>Brain Ring competition | 2022</h2>
                                        <p>We represented Our city with our team at a high level</p>
                                    </div>
                                </div>

                                <div className="stPart " data-aos="fade-right">
                                    <div className="image">
                                        <img src={Python} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>Python course from Udemy | 2022</h2>
                                        <p>I have completed a 40+ hour course from the Udemy platform</p>
                                    </div>
                                </div>

                                <div className="stPart " data-aos="fade-left">
                                    <div className="image">
                                        <img src={Technest} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>Technest Scholarship | 2023</h2>
                                        <p>I got 100% scholarship from Technest as a Frontend Delevoper in Div Academy</p>
                                    </div>
                                </div>

                                <div className="stPart " data-aos="fade-right">
                                    <div className="image">
                                        <img src={Uni} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>Admission to Azerbaijan Technical University | 2023</h2>
                                        <p>By scoreing 552 out of 700 points, I was admitted to Azerbaijan Technical University</p>
                                    </div>
                                </div>

                                <div className="stPart " data-aos="fade-left">
                                    <div className="image">
                                        <img src={Interview} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>Call for an interview | 2023</h2>
                                        <p>I told about my life story in the Interview that I was called for my achievements and it was great.
                                            <br />
                                            <a href="https://www.instagram.com/p/C03GUqoNXkE/" target="_blank" rel="noopener noreferrer">Click to watch.</a></p>
                                    </div>
                                </div>

                                <div className="stPart " data-aos="fade-right">
                                    <div className="image">
                                        <img src={Okmedia} alt="" />
                                    </div>
                                    <div className="stContent">
                                        <h2>First job | 2024</h2>
                                        <p>I started my internship as a Frontend developer at Okmedia company</p>
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