import React from 'react'
import * as docs from '../../../assets/docs'
import * as pix from '../../../assets/pix'
import './styles.css'

const t = {
    header: 'Welcome To the Civitas Portal' 
}

const Portal = () =>
    <main id='portalPage'>
        <header id='portalHeader'>{t.header}</header>
        <img id='portalBackground' src={pix.fiveGSkySignal} />
        <iframe src={docs.powerpoint} display='none' />
    </main>

export default Portal