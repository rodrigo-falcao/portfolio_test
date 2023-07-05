import React from 'react'
import './index.css';
import imgjs from '../../../image/imageJS.png'
import imghtml from '../../../image/imageHTML.png'
import imgcss from '../../../image/imageCSS.png'
import imgreact from '../../../image/imageREACT.png'
import imgtype from '../../../image/imageTYPE.png'

const Skills = () => {
    return (
        <div id='Skills' className='styleSkills'>
            <div>
                <h1>Habilidades</h1>
                <h4>Conheça um pouco das minhas principais habilidades e conhecimentos.</h4>
            </div>
            <div className='styleImg'>
                <img src={imgjs} alt="imagem Js" />
                <img src={imghtml} alt="imagem Html" />
                <img src={imgcss} alt="imagem Css" />
                <img src={imgreact} alt="imagem React" />
                <img src={imgtype} alt="imagem Type" />
            </div>
        </div>
)
}

export default Skills