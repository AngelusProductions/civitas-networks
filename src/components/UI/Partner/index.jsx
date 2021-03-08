import React from 'react'
import './styles.css'

const t = {
    button: 'Go to Site',
}

const Partner = ({ id, title, content, link, pic }) => {
    return (
        <section id={id} className='partner-section'>
            <img className='partner-pix' src={pic} />
            <h2 className='partner-title'>
                {title}
            </h2>
            <p className='partner-content'>
                {content}
            </p>
            {link && <a className='partner-link' href={link}>
                {t.button}
            </a>}
        </section>
    )
}

export default Partner