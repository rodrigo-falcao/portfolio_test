import './index.css'
import ButtonB from '../../elements/buttonB/buttonB';

function Card({img, title, tech, description, repo, site}) {
    return(
        <div className='cards'>
            <a href={site}>
                <img src={img} alt="projeto1" />
            </a>
            <div className='cardDescription'>
                <h3>{title}</h3>
                <h4><strong>Tecnologia</strong>{tech}</h4>
                <p>{description}</p>
                <div className='buttonCard'>
                    <ButtonB link={repo} text='Acesse o repositório'/>
                </div>
            </div>
        </div>
    )
}

export default Card