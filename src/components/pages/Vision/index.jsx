import React from 'react'
import './styles.css'

import { contentBoxes } from '../../../constants'

import ContentBox from '../../UI/ContentBox'

const t = {
    header: 'Our Vision' 
}

const Vision = () =>
    <main id='visionPage'>
        <h1>{t.header}</h1>
        {contentBoxes.ourVision.map(({ id, title, content }) => 
            <ContentBox key={id} id={id} title={title} content={content} />
        )}
    </main>

export default Vision