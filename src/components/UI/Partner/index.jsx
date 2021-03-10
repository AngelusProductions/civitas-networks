import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const t = {
    button: 'visit their site',
}

const Partner = ({ id, title, content, link, pic }) => {
    return (
        <section id={id} className='partner-section'>
            <img className='partner-pix' src={pic} />
            {/* <h2 className='partner-title'>
                {title}
            </h2> */}
            <p className='partner-content'>
                {content}
            </p>
            {link && <a className='partner-link' href={link}>
                {t.button}
                <FontAwesomeIcon id='partnerLinkIcon' icon={faExternalLinkAlt} />
            </a>}
        </section>
    )
}

export default Partner