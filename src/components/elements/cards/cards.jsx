import './index.css'
import ButtonB from '../../elements/buttonB/buttonB';
import { useState } from 'react';

function Card({img, title, tech, description, repo, site}) {

    const [info, setInfo] = useState(false) 
    function infoOn() {
        setInfo(true)
    }
    function infoOff() {
        setInfo(false)
    }

    return(
        <div onMouseLeave={infoOff} className='cards'>
            <a onMouseEnter={infoOn} href={site}>
                <img src={img} alt="projeto1" />
            </a>

            {info === true &&(
                <div className='cardDescription'>
                    <h3>{title}</h3>
                    <h4><strong>Tecnologia</strong>{tech}</h4>
                    <p>{description}</p>
                    <div className='buttonCard'>
                        <ButtonB link={repo} text='Acesse o repositório'/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card