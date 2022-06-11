import React from 'react';
import styles from './experiance.css'
import { BsCheckCircleFill } from 'react-icons/bs'

const Experiance = () => {
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsCheckCircleFill className='experience__details-icon'></BsCheckCircleFill>
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsCheckCircleFill className='experience__details-icon'></BsCheckCircleFill>

                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsCheckCircleFill className='experience__details-icon'></BsCheckCircleFill>
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsCheckCircleFill className='experience__details-icon'></BsCheckCircleFill>
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsCheckCircleFill className='experience__details-icon'></BsCheckCircleFill>
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experienced</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsCheckCircleFill className='experience__details-icon'></BsCheckCircleFill>
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsCheckCircleFill className='experience__details-icon'></BsCheckCircleFill>
                            <div>
                                <h4>React Router</h4>
                                <small className='text-light'>Experienced</small>
                            </div>

                        </article>
                    </div>

                </div>

                <div className='experience__backend'>
                    <h3>Backend Development</h3>
                    <div className='experience__content'>
                        <article className='experience__details'>
                            <BsCheckCircleFill className='experience__details-icon'></BsCheckCircleFill>
                            <div>
                                <h4>Node.JS</h4>
                                <small className='text-light'>Comfortable</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsCheckCircleFill className='experience__details-icon'></BsCheckCircleFill>
                            <div>
                                <h4>Express.JS</h4>
                                <small className='text-light'>Comfortable</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsCheckCircleFill className='experience__details-icon'></BsCheckCircleFill>
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Comfortable</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsCheckCircleFill className='experience__details-icon'></BsCheckCircleFill>
                            <div>
                                <h4>Firebase</h4>
                                <small className='text-light'>Experienced</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsCheckCircleFill className='experience__details-icon'></BsCheckCircleFill>
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experienced</small>
                            </div>

                        </article>
                        <article className='experience__details'>
                            <BsCheckCircleFill className='experience__details-icon'></BsCheckCircleFill>
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>

                        </article>
                    </div>

                </div>
            </div>




        </section>
    );
};

export default Experiance;