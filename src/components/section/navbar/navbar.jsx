import React from 'react'
import './index.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbarStyle'>
                <ul>
                    <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                    <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                    <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                </ul>
                <ul>
                    <li><a target="_blank" href="#"><FaInstagram size={30}/></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/rodrigo-falcao-ferreira/"><FaLinkedin size={30}/></a></li>
                    <li><a target="_blank" href="https://github.com/rodrigo-falcao"><FaGithub size={30}/></a></li>
                </ul>
            </div>
        </div>
)
}

export default Navbar