import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../components/Home.css'
import Meg from '../components/img/megradient.png'
import Click from '../components/sound/click.mp3'

function Home() {
  const [ageDetails, setAgeDetails] = useState(null);

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
      
    </main>

  )
}

export default Home