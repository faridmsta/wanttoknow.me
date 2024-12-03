import React, { useEffect } from 'react'
import './Skills.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination,Autoplay, Navigation  } from 'swiper/modules';

import Ajax from '../img/AJAX.png'
import Ant from '../img/ant-design.png'
import Bootstrap from '../img/bootstrap.webp'
import Css from '../img/css.png'
import Git from '../img/Git.png'
import Github from '../img/github.png'
import Headless from '../img/headless-ui.png'
import Html from '../img/html.png'
import Js from '../img/JavaScript.png'
import Ts from '../img/typescript.svg'
import Jquery from '../img/jQuery.png'
import Json from '../img/JSON.png'
import Matui from '../img/material-ui.png'
import Npm from '../img/npm.png'
import Python from '../img/pythonlogo.png'
import Router from '../img/react-router.png'
import Reactlogo from '../img/React.png'
import Responsive from '../img/Responsive.png'
import Tailwind from '../img/Tailwind.png'
import Vite from '../img/vite.png'
import Spline from '../img/spline.png'
import Scss from "./../img/scss.png"
import Cpp from "./../img/cpp.png"
import Redux from "./../img/redux-logo-vector.svg"

function Skills({isDarkMode}) {



    const list = [
        Ant,
        Headless,
        Git,
        Bootstrap,
        Github,
        Js,
        Ts,
        Python,
        Cpp,
        Npm,
        Jquery,
        Html,
        Css,
        Scss,
        Ajax,
        Json,
        Reactlogo,
        Vite,
        Router,
        Redux,
        Responsive,
        Tailwind,
        Matui,
        Spline
    ]
    return (
        <div>
            <section id='skills' className='skills'>

                <div className="skillsWrap">
                    <div className="head">
                        <h2>Skills</h2>
                    </div>

                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={(screen.width < 450) ? 'auto' : (screen.width < 1024) ? '2' : '4'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={false}
                        modules={[Autoplay, Pagination, Navigation, EffectCoverflow,]}
                        className="mySwiper"
                    >
                        {list.map((item, index) => {

                            return (
                                <SwiperSlide key={index}  className="logoWrap">
                                    <img loading='lazy' src={item} style={{filter: (isDarkMode && index==4)&& 'invert(1)' }} alt={`Item ${index}`} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>



                </div>

            </section>
        </div>
    )
}

export default Skills