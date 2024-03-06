import React, { useEffect } from 'react'
import '../components/Skills.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination,Autoplay, Navigation  } from 'swiper/modules';

import Ajax from '../components/img/AJAX.png'
import Ant from '../components/img/ant-design.png'
import Bootstrap from '../components/img/bootstrap.webp'
import Css from '../components/img/css.png'
import Git from '../components/img/Git.png'
import Github from '../components/img/github.png'
import Headless from '../components/img/headless-ui.png'
import Html from '../components/img/html.png'
import Js from '../components/img/JavaScript.png'
import Jquery from '../components/img/jQuery.png'
import Json from '../components/img/JSON.png'
import Matui from '../components/img/material-ui.png'
import Npm from '../components/img/npm.png'
import Python from '../components/img/pythonlogo.png'
import Router from '../components/img/react-router.png'
import Reactlogo from '../components/img/React.png'
import Responsive from '../components/img/Responsive.png'
import Tailwind from '../components/img/Tailwind.png'
import Vite from '../components/img/vite.png'
import Spline from '../components/img/spline.png'



function Skills({isDarkMode}) {



    const list = [
        Ant,
        Headless,
        Git,
        Bootstrap,
        Github,
        Js,
        Python,
        Npm,
        Jquery,
        Css,
        Html,
        Ajax,
        Json,
        Reactlogo,
        Vite,
        Router,
        Responsive,
        Tailwind,
        Matui,
        Spline]
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
                                    <img src={item} style={{filter: (isDarkMode && index==4)&& 'invert(1)' }} alt={`Item ${index}`} />
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