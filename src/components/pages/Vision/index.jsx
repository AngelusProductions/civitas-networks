import React from 'react'
import './styles.css'

import { contentBoxes } from '../../../constants'
import * as pix from '../../../assets/pix'

import ContentBox from '../../UI/ContentBox'

const t = {
    header: 'Our Vision' 
}

const Vision = () =>
    <main id='visionPage'>
        <img id='visionVector' src={pix.fiveGSkySignal} />
        {/* <div id='visionSidebar'>
            <img className='vision-pix' src={pix.cityCenterWoman} />
            <img className='vision-pix' src={pix.trafficLight} />
            <img className='vision-pix' src={pix.cityEagleView} />
        </div> */}
        <h1 id='visionHeader'>{t.header}</h1>
        {contentBoxes.ourVision.map(({ id, title, content, pic }) => 
            <ContentBox key={id} id={id} title={title} content={content} pic={pic} />
        )}
    </main>

export default Vision