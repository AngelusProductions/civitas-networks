import React from 'react'
import './styles.css'

import * as pix from '../../../assets/pix'

const t = {
    header: 'Details about out Partners',
    comingSoon: 'Coming Soon'
}

const Partners = () =>
    <main id='partnersPage'>
        <img id='partnersImage' src={pix.handSillhouetteCropped} />
        <div id='partnersHeader'>
            <span id='partnersHeaderText'>
                {t.header}
            </span>
            <span id='comingSoon'>
                {t.comingSoon}
            </span>
        </div>
    </main>

export default Partners