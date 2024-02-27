import React from 'react'
import Spline from '@splinetool/react-spline';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Letsconnect({ isDarkMode, toggleDarkMode }) {
    if (screen.width <= 768) return (
        <div>
            <section className={`social ${isDarkMode ? 'social-dark' : ''}`}>
                <div className="container">
                    <div className="socialWrap">
                        <div className="head">
                            <h2>Let's Connect</h2>
                            <p>Just tap on the icons and and follow the link</p>
                        </div>
                        <div className="socialM">
                            <div className="cards">
                                <div className="card redi">
                                    <p className="tip">< FaInstagram /></p>
                                    <p className="second-text"><a href="https://www.instagram.com/faridmsta/">@faridmsta</a></p>
                                </div>
                                <div className="card bluef">
                                    <p className="tip"><FaFacebookSquare /></p>
                                    <p className="second-text"><a href="https://www.facebook.com/profile.php?id=100014459298474">Fərid Mustafayev</a></p>
                                </div>
                                <div className="card grey">
                                    <p className="tip"><FaGithub /></p>
                                    <p className="second-text"><a href="https://github.com/faridmsta">faridmsta</a></p>
                                </div>
                                <div className="card blue">
                                    <p className="tip"><FaLinkedin /></p>
                                    <p className="second-text"><a href="https://www.linkedin.com/in/faridmustafayev/">Farid Mustafayev</a></p>
                                </div>
                                <div className="card red">
                                    <p className="tip">< FaYoutube /></p>
                                    <p className="second-text"><a href="https://www.youtube.com/channel/UCxpfu2JXCY8ZQVijUnyGllA">Farid Mustafayev</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
    else if (screen.width < 1440) return (
        <div>
            <section className={`social ${isDarkMode ? 'social-dark' : ''}`}>
                <div className="container">
                    <div className="socialWrap">
                        <div className="head">
                            <h2>Let's Connect</h2>
                            <p>Just tap on the icons and and follow the link</p>
                        </div>
                        <div className="d3dSocialDs">
                            <Spline
                                style={{
                                    height: "60vh",
                                    width: screen.width < 1024 ? '100vw' : '700px'
                                }}
                                scene="https://prod.spline.design/U5sCJH5Q8vbAcyi5/scene.splinecode"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
    return (
        <div>
            <section className={`social ${isDarkMode ? 'social-dark' : ''}`}>
                <div className="container">
                    <div className="socialWrap">
                        <div className="head">
                            <h2>Let's Connect</h2>
                            <p>Just tap on the icons and and follow the link</p>
                        </div>
                        <div className="d3dSocialDb">
                            <Spline
                                style={{
                                    height: "40vh",
                                    width: screen.width < 1024 ? '100vw' : '700px'
                                }}
                                scene="https://prod.spline.design/KZRhNz1CW1MjWXFm/scene.splinecode"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Letsconnect