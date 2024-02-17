import React, { useEffect, useState } from 'react'
import Meg from '../components/img/megradient.png'
import Alplogo from '../components/img/alplogo.jpg'
import Brain from '../components/img/brain.jpg';
import Python from '../components/img/python.png'
import Technest from '../components/img/Technest.jpg'
import Uni from '../components/img/uni.jpg'
import Okmedia from '../components/img/okmedia.jpg'
import Interview from '../components/img/intervi.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '../components/Home.css'
import { Link } from 'react-router-dom'
import Click from '../components/sound/click.mp3'

function Home() {
  const [ageDetails, setAgeDetails] = useState(null);

  useEffect(() => {
    const calculateAgeDetails = () => {
      // Birthday in the format: 'YYYY-MM-DDTHH:mm:ss'
      const birthday = new Date('2006-06-10T07:00:00');
      const currentDate = new Date();

      // Calculate age details
      const timeDifference = currentDate - birthday;
      const ageInMilliseconds = new Date(timeDifference);

      const years = ageInMilliseconds.getUTCFullYear() - 1970;
      const months = ageInMilliseconds.getUTCMonth();
      const days = ageInMilliseconds.getUTCDate() - 1;
      const hours = ageInMilliseconds.getUTCHours();
      const minutes = ageInMilliseconds.getUTCMinutes();
      const seconds = ageInMilliseconds.getUTCSeconds();

      setAgeDetails({
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
      });
    };

    // Calculate initially
    calculateAgeDetails();

    // Update every second
    const intervalId = setInterval(() => {
      calculateAgeDetails();
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


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
                  <p>I am a Computer Engineering student at Azerbaijan Technical University.
                    I'm already
                    <div className="age">
                      <span> {ageDetails?.years} years </span>/
                      <span> {ageDetails?.months} months </span>/
                      <span> {ageDetails?.days} days </span>/
                      <span> {ageDetails?.hours} hours </span>/
                      <span> {ageDetails?.minutes} minutes </span>/
                      <span> {ageDetails?.seconds} seconds </span>old.
                    </div>

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