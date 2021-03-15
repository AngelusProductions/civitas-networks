import React from 'react'
import './styles.css'

import Partner from '../../UI/Partner'

import { partners } from '../../../constants'
import * as pix from '../../../assets/pix'

const t = {
    header: 'meet our partners',
}

const Partners = () =>
    <main id='partnersPage'>
        {/* <img id='partnersImage' src={pix.handSillhouetteCropped} /> */}
        <span id='partnersHeader'>
            {t.header}
        </span>
        <section id='partnersList'>
            {partners.map(partner => 
                <Partner {...partner} key={partner.id} />
            )}
        </section>
    </main>

export default Partners