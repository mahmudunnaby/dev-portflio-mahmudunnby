import React from 'react';
import styles from './portfolio.css'
import management from '../../assets/Management Master.JPG'
import fixit from '../../assets/fixit.JPG'
import tutor from '../../assets/tutor here.JPG'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio__container'>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={fixit} alt="portfolio image" />
                    </div>
                    <h3>portfolio item</h3>
                    <div className="portfolio__item-cta">
                        {/* <a href="https://github.com/mahmudunnaby/fixit-drill-machine-manufacturer-client-side" className='btn' target='_blank'>Client</a>
                        <a href="https://github.com/mahmudunnaby/fixit-drill-machine-manufacturer-server-side" className='btn' target='_blank'>Server</a> */}
                        <a href="https://manufacturer-website-97e1b.web.app/home" className='btn btn-primary' target='_blank'>Live Site</a>
                        <a href="" className='btn ' target='_blank'>Details</a>
                    </div>

                </article>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={management} alt="portfolio image" />
                    </div>
                    <h3>portfolio item</h3>
                    <div className="portfolio__item-cta">
                        {/* <a href="https://github.com/mahmudunnaby/management-master-warehouse-management-website-client-side" className='btn' target='_blank'>Client</a>
                        <a href="https://github.com/mahmudunnaby/management-master-warehouse-management-website-server-side" className='btn' target='_blank'>Server</a> */}
                        <a href="https://warehouse-management-94ab6.web.app/home" className='btn btn-primary' target='_blank'>Live Site</a>
                        <a href="" className='btn ' target='_blank'>Details</a>
                    </div>

                </article>

                <article className='portfolio__item'>
                    <div className='portfolio__item-image'>
                        <img src={tutor} alt="portfolio image" />
                    </div>
                    <h3>portfolio item</h3>
                    <div className="portfolio__item-cta">
                        {/* <a href="https://github.com/mahmudunnaby/tutor-here-webdev-tutor-website" className='btn' target='_blank'>Code</a> */}
                        <a href="https://independent-service-prov-e89b6.web.app/" className='btn btn-primary' target='_blank'>Live Site</a>
                        <a href="" className='btn ' target='_blank'>Details</a>
                    </div>

                </article>
            </div>

        </section>
    );
};

export default Portfolio;