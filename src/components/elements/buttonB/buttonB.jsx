import './index.css';
import React from 'react'

const buttonB = ({text, link}) => {
    return (
        <div>
            <a href={link} target="_blank" rel='noreferrer'>
                <button className='btnB'>{text}</button>
            </a>
        </div>
)
}

export default buttonB