import React from 'react'
import './index.css';
import ButtonB from '../../elements/buttonB/buttonB';
import Cards from '../../elements/cards/cards';
import project1 from '../../../image/imageproj1.png'
import project2 from '../../../image/imageproj2.png'

const Projects = () => {
    return (
        <div id='Projects' className='Projects'>
            <h1>Projetos</h1>
            <div className='card'>
                <Cards 
                img={project1}
                title="LP - DNC"
                tech="HTML, CSS e JS"
                description="Desenvolvimento de uma Landing Page"
                repo="https://github.com/rodrigo-falcao/Ecommerce-DNC"
                site="https://to-do-lisdnc.netlify.app/"
                />
                <Cards 
                img={project2}
                title="Portfolio - DNC"
                tech="HTML, CSS e JS"
                description="Desenvolvimento de uma Landing Page"
                repo="https://github.com/rodrigo-falcao/Ecommerce-DNC"
                site="https://to-do-lisdnc.netlify.app/"
                />
            </div>
            <div className='button'>
                <ButtonB link='https://github.com/rodrigo-falcao' text='Ver repositório Completo'/>
            </div>
        </div>
)
}

export default Projects