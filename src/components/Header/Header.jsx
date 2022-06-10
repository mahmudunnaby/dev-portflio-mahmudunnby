import React from 'react';
import styles from './header.css'
import CTA from '../CTA/CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello</h5>
                <h1>Md.Mahmudun Naby</h1>
                <h5 className='text-light'>Front End Developer </h5>
                <CTA></CTA>

                <HeaderSocials></HeaderSocials>
                <div className='me'>
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'></a>
            </div>
        </header>
    );
};

export default Header;