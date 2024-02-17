import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spline from '@splinetool/react-spline';
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../components/Home.css'
import Meg from '../components/img/megradient.png'
import Click from '../components/sound/click.mp3'

function Home() {

  useEffect(() => {
    Aos.init();
  }, [])

  function clicksound() {
    new Audio(Click).play();
  }

  setTimeout(() => {
    document.querySelector('.mainContent').style.opacity = "1"
  }, 500)


  return (

    <main>
      <section className="intro">
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
      <section className="social">

        <div className="socialWrap">
          <div className="d3dSocialM">
            <Spline
              style={{
                width: ' 100%',
                height: '100vh'
              }}
              scene="https://prod.spline.design/4SpYPPL10nVCERQ8/scene.splinecode"
            />

            {/* <Spline
              scene="https://prod.spline.design/U5sCJH5Q8vbAcyi5/scene.splinecode"

            /> */}
          </div>

        </div>
      </section>
    </main>

  )
}

export default Home