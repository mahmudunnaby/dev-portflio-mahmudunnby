import React from 'react';
import styles from './about.css'
import Me from '../../assets/me-about.png'
import { GrAchievement } from 'react-icons/gr';
import { FaUniversity } from 'react-icons/fa';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={Me} alt="About Image" />
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <GrAchievement className='about__icon'></GrAchievement>
                            <h5>Projects</h5>
                            <small>10+ Projects</small>
                        </article>
                        <article className='about__card'>
                            <FaUniversity className='about__icon'></FaUniversity>
                            <h5>Education</h5>
                            <small>Management Information Systems(DU) </small> <br />
                            <small>Electrical and Electronic Engineering(AIUB) </small>


                        </article>


                    </div>
                    <p>I am an ambicious web developer, highly pationate about web based technologies. I really enjoy the process of building web applications and love to explore new technologies.In two years down the line want to see myself as a full stack web devloper in a reputed organization.</p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>

            </div>
        </section>
    );
};

export default About;