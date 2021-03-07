import React from 'react'
import './styles.css'

import Partner from '../../UI/Partner'

import { partners } from '../../../constants'
import * as pix from '../../../assets/pix'

const t = {
    header: 'Our Partners',
}

const Partners = () =>
    <main id='partnersPage'>
        <img id='partnersImage' src={pix.handSillhouetteCropped} />
        <div id='partnersHeader'>
            <span id='partnersHeaderText'>
                {t.header}
            </span>
        </div>
        {partners.map(partner => 
            <Partner {...partner} key={partner.id} />
        )}
    </main>

export default Partners