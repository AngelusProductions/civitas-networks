import React from 'react'
import './styles.css'

const Partner = ({ id, title, content, link, pic }) => {
    return (
        <section id={id} className='partner-section'>
            <h2 className='partner-title'>
                {title}
            </h2>
            <p className='partner-content'>
                {content}
            </p>
            <img className='partner-pix' src={pic} />
        </section>
    )
}

export default Partner