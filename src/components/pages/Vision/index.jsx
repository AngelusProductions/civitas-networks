import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import './styles.css'

import { contentBoxes } from '../../../constants'
import * as pix from '../../../assets/pix'

import ContentBox from '../../UI/ContentBox'

const t = {
    header: 'Our Vision' 
}

const Vision = () =>
    <main id='visionPage'>
        <img id='visionVector' src={pix.fiveGVector} />
        <h1 id='visionHeader'>{t.header}</h1>
        {/* <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
                <Card.Header>Matthew</Card.Header>
                <Card.Meta>
                    <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                    Matthew is a musician living in Nashville.
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <a>
                    <Icon name='user' />
                    22 Friends
                </a>
            </Card.Content>
        </Card> */}
        {contentBoxes.ourVision.map(({ id, title, content }) => 
            <ContentBox key={id} id={id} title={title} content={content} />
        )}
    </main>

export default Vision