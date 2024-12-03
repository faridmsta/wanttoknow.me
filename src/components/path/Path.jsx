import React, { useEffect } from 'react';
import './Path.css';
import Alplogo from '../img/alplogo.jpg';
import Brain from '../img/brain.jpg';
import Python from '../img/python.png';
import Technest from '../img/Technest.jpg';
import Uni from '../img/uni.jpg';
import Okmedia from '../img/okmedia.jpg';
import Interview from '../img/intervi.jpg';
import Graduent from '../img/mezun1.jpg';
import hackaton1 from '../img/hackaton1.jpg';
import timegif from '../img/giphy.gif';
import AOS from 'aos';
import 'aos/dist/aos.css';

const imageData=[
    {
        src: Alplogo,
        title: 'Logo programing language',
        year: '2019',
        description:
            'Winning the 3rd place in the Republic for Logo programming language (with Ismail Sadigov and Naida Isayeva)',
    },
    {
        src: Brain,
        title: 'Brain Ring competition',
        year: '2022',
        description: 'We represented Our city with our team at a high level',
    },
    {
        src: Python,
        title: 'Python course from Udemy',
        year: '2022',
        description: 'I have completed a 40+ hour course from the Udemy platform',
    },
    {
        src: Technest,
        title: 'Technest Scholarship',
        year: '2023',
        description: 'I got 100% scholarship from Technest as a Frontend Developer in Div Academy',
    },
    {
        src: Uni,
        title: 'Technical University',
        year: '2023',
        description: 'By scoring 552 out of 700 points, I was admitted to Azerbaijan Technical University',
    },
    {
        src: Interview,
        title: 'Call for an interview',
        year: '2023',
        description:
            'I told about my life story in the Interview that I was called for my achievements and it was great',
        link: 'https://www.instagram.com/p/C03GUqoNXkE/',
    },
    {
        src: Okmedia,
        title: 'Admission to First job',
        year: '2024',
        description: 'I started my internship as a Frontend developer at Okmedia company',
    },
    {
        src: Graduent,
        title: 'Graduation from Div Academy',
        year: '2024',
        description: 'After a lot of sleepless nights and hard work I finally graduated from Div Academy',
    },
    {
        src: hackaton1,
        title: 'First win at First Hackathon',
        year: '2024',
        description:
            'Just in 24 hours we managed to develop EcoLink App and got the First place',
    },
    {
        src: timegif,
        title: 'Coming Soon',
        year: '',
        description: '',
    },
]

function Path() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.pathWrap').style.opacity = '1';
        }, 500);
    }, []);


    return (
        <div id="cpath">
            <main>
                <section className="path">
                    <div className="container">
                        <div className="pathWrap">
                            <div className="story">
                                {imageData.map((item, index) => (
                                    <div className={`stPart ${index % 2 === 0 ? 'fade-right' : 'fade-left'}`} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} key={index}>
                                        <div className="image">
                                            <img loading="lazy" src={item.src} alt={item.title} />
                                        </div>
                                        <div className="stContent">
                                            <h2>
                                                {item.title} <br /> {item.year}
                                            </h2>
                                            <p>
                                                {item.description}
                                                {item.link && (
                                                    <>
                                                        <br />
                                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                            Click to watch
                                                        </a>
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Path;
