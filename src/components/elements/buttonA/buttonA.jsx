import './index.css';
import React from 'react'

const buttonA = ({text, link}) => {
    return (
        <div>
            <a href={link} target="_blank">
                <button className='btnA'>{text}</button>
            </a>
        </div>
)
}

export default buttonA