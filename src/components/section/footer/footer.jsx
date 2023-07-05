import React from 'react';
import './index.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <ul>
                <li><a target="_blank" href="#"><FaInstagram size={24}/></a></li>
                <li><a target="_blank" href="https://www.linkedin.com/in/rodrigo-falcao-ferreira/"><FaLinkedin size={24}/></a></li>
                <li><a target="_blank" href="https://github.com/rodrigo-falcao"><FaGithub size={24}/></a></li>
            </ul>
            <p>
                Rodrigo@dnc.com.br
            </p>
            <p>
                Rodrigo Falcão © 2023
            </p>
        </div>
)
}

export default Footer