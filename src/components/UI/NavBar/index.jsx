import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import { paths } from '../../../constants'

const t = {
    home: 'Home',
    vision: 'Our Vision',
    partners: 'Our Partners',
    contact: 'Contact Us'
}

export default () =>
    <nav id='navBar'>
        <Link to={paths.home}>{t.home}</Link>
        <Link to={paths.vision}>{t.vision}</Link>
        <Link to={paths.partners}>{t.partners}</Link>
        <Link to={paths.contact}>{t.contact}</Link>
    </nav>