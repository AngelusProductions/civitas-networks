import React from 'react'
import './styles.css'

import NavBar from '../NavBar'
import Footer from '../Footer'

export default props =>
    <>
        <NavBar />
        {props.children}
        <Footer />
    </>