import React from 'react';
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/mahmudunnaby/" target='_blank'><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com/mahmudunnaby" target='_blank'><FaGithub></FaGithub></a>
        </div>
    );
};

export default HeaderSocials;