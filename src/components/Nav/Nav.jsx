import React, { useState } from 'react';
import styles from './nav.css'
import { AiOutlineHome } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { BsBookmarkCheck } from 'react-icons/bs';
import { RiServiceLine } from 'react-icons/ri';
import { RiMessage3Line } from 'react-icons/ri';

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#')

    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome></AiOutlineHome></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser></BiUser></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookmarkCheck></BsBookmarkCheck></a>
            <a href="#portfolio" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><RiMessage3Line></RiMessage3Line></a>
        </nav>
    );
};

export default Nav;