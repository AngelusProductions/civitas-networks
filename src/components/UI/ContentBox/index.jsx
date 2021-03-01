import React from 'react'
import './styles.css'

const ContentBox = ({ id, title, content, pic }) => {
    return (
        <section id={id} className='content-box-section'>
            <h2 className='content-box-title'>
                {title}
            </h2>
            <p className='content-box-content'>
                {content}
            </p>
            <img className='content-box-pix' src={pic} />
        </section>
    )
}

export default ContentBox