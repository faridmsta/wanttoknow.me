import React from 'react'
import './About.css'
import laptop from './../img/webpc.png'
function About() {
    return (
        <div>
            <div className="aboutWrap">
                <div className="container">
                    <section className="about">
                        <div className="text">
                            <p>Hi, my name is Farid Mustafayev and I'm just a simple guy who has motivated individual with a strong academic and professional background. Achieved 100% results in the "Technest" scholarship program and excelled at Div Academy. Successfully contributed as a frontend developer at Okmedia, gaining expertise in cPanel, admin panel management, and teamwork. Eager to tackle new challenges and contribute to innovative projects, I bring a passion for continuous learning and a keen eye for emerging trends.</p>
                        </div>
                        <img src={laptop} alt="" />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default About