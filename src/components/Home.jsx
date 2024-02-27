import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spline from '@splinetool/react-spline';
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../components/Home.css'
import Meg from '../components/img/megradient.png'
import Click from '../components/sound/click.mp3'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Pdf from "./res/faridmustafayevresume.pdf";
import thingface from './img/thinkingface.png'
import wooface from './img/woozyface.png'
import dahiface from './img/dahiface.png'
import pourface from './img/poutingface.png'
import damnface from './img/faceexhaling.png'
import natface from './img/neutralface.png'
function Home({ isDarkMode, toggleDarkMode }) {
  const allicons = document.querySelectorAll('.round .icon')
  const [notifyup, setNotifyup] = useState(false)
  const [ncontent, setNcontent] = useState('I thing it\'s not working.')
  const [nemojy, setNemojy] = useState(thingface)


  useEffect(() => {
    Aos.init();
  }, [])


  function clicksound() {
    new Audio(Click).play();
  }


  function showinfo() {
    setNotifyup('')
    setNotifyup('shownotify');
    setTimeout(() => {
      setNotifyup('')
    }, 2000)

  }

  function redButton() {
    window.open(Pdf);
    clicksound()
    showinfo()
  }

  setTimeout(() => {
    document.querySelector('.mainContent').style.opacity = "1"
  }, 500)

  function showlink(e) {
    for (let i = 0; i < allicons.length; i++) {
      if (allicons[i].classList != e.currentTarget.classList) {
        allicons[i].classList.remove('openlink')
      }

    }
    e.currentTarget.classList.toggle('openlink')

  }

  return (

    <main>
      <section className={`intro ${isDarkMode ? 'intro-dark' : ''}`}>
        <div className="container">
          <div className="introWrap">
            <div className="mainContent">
              <div className="littleAbout">
                <div className="name">
                  <p>I'm</p>
                  <h1>Farid Mustafayev</h1>
                </div>
                <span></span>
                <div className="myText">
                  <p>
                    I am a Computer Engineering student at Azerbaijan Technical University.
                  </p>
                </div>
              </div>

              <div className="photoOfMe">
                <img src={Meg} alt="" />
              </div>
              <div className="whyMe">
                <p>
                  It's not just a  job,
                  <br />
                  it's who I am! Let's create quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`social ${isDarkMode ? 'social-dark' : ''}`}>
        <div className="container">
          <div className="socialWrap">
            <div className="head">
              <h2>Let's Connect</h2>
              <p>Just tap on the icons and and follow the link</p>
            </div>
            <div className="socialM">
              <div class="cards">
                <div class="card redi">
                  <p class="tip">< FaInstagram /></p>
                  <p class="second-text"><a href="https://www.instagram.com/faridmsta/">@faridmsta</a></p>
                </div>
                <div class="card bluef">
                  <p class="tip"><FaFacebookSquare/></p>
                  <p class="second-text"><a href="https://www.facebook.com/profile.php?id=100014459298474">Fərid Mustafayev</a></p>
                </div>
                <div class="card grey">
                  <p class="tip"><FaGithub/></p>
                  <p class="second-text"><a href="https://github.com/faridmsta">faridmsta</a></p>
                </div>
                <div class="card blue">
                  <p class="tip"><FaLinkedin /></p>
                  <p class="second-text"><a href="https://www.linkedin.com/in/faridmustafayev/">Farid Mustafayev</a></p>
                </div>
                <div class="card red">
                  <p class="tip">< FaYoutube /></p>
                  <p class="second-text"><a href="https://www.youtube.com/channel/UCxpfu2JXCY8ZQVijUnyGllA">Farid Mustafayev</a></p>
                </div>
              </div>
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

      <section id='cv' className="dwCV">
        <div className="container">
          <div className="dwCVWrap">
            <div className="head">
              <p>To Download my CV </p>
              <h2>Click the button</h2>
            </div>
            <div className="body">
              <button className="btn-class-name">
                <span className="back"></span>
                <span onClick={redButton} className="front"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className={`notifybar ${notifyup} `}>

        <img src={nemojy} alt="" />
        <p>{ncontent}</p>
      </div>
    </main>

  )
}

export default Home