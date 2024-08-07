import React, { useEffect, useState } from 'react'
import starbucks from './img/starbucks.png'
import rps from './img/rps.png'
import adminPanel from './img/adminpanel.png'
import gia from './img/gia.png'
import array from './img/arrayaz.png'
import edustage from './img/edustage.png'
import nsc from './img/nsc.png'
import turboaz from './img/turboaz.png'
import booking from './img/booking.png'
import fakeUnec from './img/uni.png'
import boomerang from './img/boomerang.png'
import bloggme from './img/bloggy-me.png'
import calc from './img/calculator.png'
import calendar from './img/calendar.png'
import './Bentogrid.css'
import { FaGithub } from "react-icons/fa";


const projList = [
  {
    img: adminPanel,
    title: 'Admin Panel',
    githublink: 'https://github.com/faridmsta/adminpanel',
    projelink: 'https://adminpanel-black.vercel.app/',

  },
  {
    img: gia,
    title: 'GIA',
    githublink: 'https://github.com/faridmsta/CreatewithAI',
    projelink: 'https://createwith-ai.vercel.app/',

  },
  {
    img: array,
    title: 'Array',
    githublink: 'https://github.com/faridmsta/Array.az',
    projelink: 'arra',

  },
  {
    img: fakeUnec,
    title: 'Remake UNEC',
    githublink: 'https://github.com/faridmsta/Site-for-University',
    projelink: 'https://site-for-university.vercel.app/',

  },
  {
    img: bloggme,
    title: 'Blog site',
    githublink: 'https://github.com/faridmsta/bloggyme',
    projelink: '',

  },
  {
    img: edustage,
    title: 'Edustage',
    githublink: 'https://github.com/faridmsta/EducationSiteHomepage',
    projelink: 'https://education-site-homepage.vercel.app/',

  },
  {
    img: starbucks,
    title: 'Starbucks',
    githublink: 'https://github.com/faridmsta/Starbucks',
    projelink: 'https://starbucks-dusky.vercel.app/',

  },
  {
    img: rps,
    title: 'RPS',
    githublink: 'https://github.com/faridmsta/RockPaperScissors?tab=readme-ov-file',
    projelink: 'https://faridmsta.github.io/RockPaperScissors/',

  },
  {
    img: nsc,
    title: 'NSC',
    githublink: 'https://github.com/faridmsta/Number-System-Converter',
    projelink: 'https://number-system-converter-sable.vercel.app/number%20system%20converter.html',

  },
  {
    img: calc,
    title: 'CLCLTR',
    githublink: 'https://github.com/faridmsta/Calculator',
    projelink: 'https://calculator-app-seven-murex.vercel.app/calculator.html',

  },
  {
    img: booking,
    title: 'Booking',
    githublink: 'https://github.com/faridmsta/Reservation-Booking',
    projelink: 'https://reservation-booking-black.vercel.app/',

  },
  {
    img: turboaz,
    title: 'Turbo.az',
    githublink: 'https://github.com/faridmsta/Fake-Car-Selling-Site',
    projelink: 'https://fake-car-selling-site.vercel.app/',

  },
  {
    img: boomerang,
    title: 'Vacansy Platform',
    githublink: 'https://github.com/faridmsta/Starbucks',
    projelink: 'https://starbucks-dusky.vercel.app/',

  },
  {
    img: calendar,
    title: 'Calendar',
    githublink: 'https://github.com/faridmsta/Calendar',
    projelink: 'https://faridmsta.github.io/Calendar/',

  },
]

function Bentogrid() {

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (screenWidth > 1600) {
    return (
      <div className='bentogripAll1600'>
        <div className="container">
          <div className="bentogripAllWrap">
            <h2>Projects</h2>
            <div className="bentogrid">
              {
                projList
                  .map((item, index) => (
                    <div className={`bento${index + 1} bentobox`}>
                      <div className="card">
                        <a href={item.projelink}>
                          <div className="image">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="content">
                            <div className="text">
                              <h2>{item.title}</h2>
                            </div>
                            <div className="btns">
                              <a href={item.githublink}>
                                <div className="navProj">
                                  <FaGithub size={20} />
                                </div>
                              </a>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))
              }
              
            </div>
          </div>
        </div>
      </div>
    )
  }else if (screenWidth > 1200){
    return(
      <div className='bentogripAll1200'>
        <div className="container">
          <div className="bentogripAllWrap">
            <h2>Projects</h2>
            <div className="bentogrid">
              {
                projList
                  .map((item, index) => (
                    <div className={`bento${index + 1} bentobox`}>
                      <div className="card">
                        <a href={item.projelink}>
                          <div className="image">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="content">
                            <div className="text">
                              <h2>{item.title}</h2>
                            </div>
                            <div className="btns">
                              <a href={item.githublink}>
                                <div className="navProj">
                                  <FaGithub size={20} />
                                </div>
                              </a>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))
              }
              
            </div>
          </div>
        </div>
      </div>
    )
  }else if (screenWidth > 700){
    return(
      <div className='bentogripAll1000'>
        <div className="container">
          <div className="bentogripAllWrap">
            <h2>Projects</h2>
            <div className="bentogrid">
              {
                projList
                  .map((item, index) => (
                    <div className={`bento${index + 1} bentobox`}>
                      <div className="card">
                        <a href={item.projelink}>
                          <div className="image">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="content">
                            <div className="text">
                              <h2>{item.title}</h2>
                            </div>
                            <div className="btns">
                              <a href={item.githublink}>
                                <div className="navProj">
                                  <FaGithub size={20} />
                                </div>
                              </a>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))
              }
              
            </div>
          </div>
        </div>
      </div>
    )
  }else{
    return(
      <div className='bentogripAll700'>
        <div className="container">
          <div className="bentogripAllWrap">
            <h2>Projects</h2>
            <div className="bentogrid">
              {
                projList
                  .map((item, index) => (
                    <div className={`bento${index + 1} bentobox`}>
                      <div className="card">
                        <a href={item.projelink}>
                          <div className="image">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="content">
                            <div className="text">
                              <h2>{item.title}</h2>
                            </div>
                            <div className="btns">
                              <a href={item.githublink}>
                                <div className="navProj">
                                  <FaGithub size={20} />
                                </div>
                              </a>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))
              }
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Bentogrid