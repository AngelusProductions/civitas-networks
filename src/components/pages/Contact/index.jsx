import React from 'react'
import * as pix from '../../../assets/pix'
import './styles.css'

const t = {
    contactText1: 'for more information,',
    contactText2: 'click the email below to contact us',
    contactEmail: 'info@civitasnetworks.com',
}

const Contact = () =>
    <main id='contactPage'>
        <div id='contactInfo'>
            <span id='contactText1'>{t.contactText1}</span>
            <span id='contactText2'>{t.contactText2}</span>
            <img id='arrowRight' src={pix.arrowRight} />
            <a href={`mailto: ${t.contactEmail}`}>{t.contactEmail}</a>
        </div>
    </main>

export default Contact