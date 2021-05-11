import React, { useState } from 'react'
import { Parallax } from 'react-parallax'
import { withRouter } from "react-router"
import { Link } from 'react-router-dom'
import './styles.css'

import * as pix from '../../../assets/pix'
import { paths } from '../../../constants'

const t = {
    header: 'High Performance Data Networks Designed to Meet the Needs of Your Community',
    mission1: 'Civitas',
    mission2: 'is a Private Networks Company that designs, finances, & operates',
    mission3: 'self-reliant wireless networks',
    mission4: 'finetuned to realize your community\'s 5G ambitions.',
    portal: 'Portal Access',
    underlay1: 'Highly Secure Hyper-Local Data',
    underlay2: 'Smarter Systems & Sensors',
    underlay3: 'Increased Government Efficiency',
    underlay4: 'Improved Quality of Life',
    whoWeAre: 'Who We Are',
    whatWeDoHeader: 'What We Do',
    whatWeDoContent: 'Civitas works directly with the community in a Public Private Partnership (PPP) to develop a data delivery system around the community’s Smart City needs, not just the needs of large MNOs.   This private network is then offered directly to its members as a utility, resulting in a system that protects the interests of the community in terms of visibility and services, while increasing municipal revenue and becoming a central element of their Smart City development strategy.',
    whyWereHereHeader: 'Why We\'re Here',
    whyWereHereContent1: 'Everyone talks about 5G service. Mobile networks claim to offer it to everyone. The government wants to fund deployment. Yet no one has developed a plan for providing such service to the smaller communities throughout the country since it is not a lucrative proposition.  Civitas Networks believes otherwise. It believes all communities should have access to the latest technology and its mission is to focus entirely on those communities being neglected and offer them a unique solution not readily available.',
    whyWereHereContent2: 'Civitas Networks is driven by its primary objective of serving the needs of entire communities, not selective enclaves, and to be a completely transparent partner regarding its operations within those communities.',
    vision: 'Learn About Our Vision',
    partners: 'Check Out Our Partners',
    contact: 'Contact Our Team'
}

const Home = ({ history }) => 
    <main id='homePage'>
        <Parallax 
            id='parallax' 
            blur={1} 
            bgImage={pix.blurryIntersection5} 
            bgImageAlt='background' 
            strength={250}
        >
            <section id='splashTop'>
                <header id='homeHeader'>{t.header}</header>
                <div id='logoBlackWrapper'>
                    <img id='logoBlack' src={pix.logoBlue} />
                </div>
                <span 
                    id='portalAccess'
                    onClick={() => history.push(paths.portal)}>
                    {t.portal}
                </span>
            </section>
        </Parallax>
        
        <div id='underlayBar'>
            <img className='underlay-pic' src={pix.fiveGBeachPic} />
            <span className='underlay-text'>{t.underlay1}</span>
            <img className='underlay-pic' src={pix.fiveGCityDishHand} />
            <span className='underlay-text'>{t.underlay2}</span>
            <img className='underlay-pic' src={pix.worldInHands} />
            <span className='underlay-text'>{t.underlay3}</span>
            <img className='underlay-pic' src={pix.handMap3} />
            <span className='underlay-text'>{t.underlay4}</span>
            <img className='underlay-pic' src={pix.handPlant} />
        </div>  

        <section id='missionStatement'>
            <div id='missionStatementLeft'>
                <h2 id='whoWeAre' className='home-sub-header'>{t.whoWeAre}</h2>
                <img id='treeVectors' src={pix.treeVectors} />
            </div>
            <div id='missionStatementCenter'>
                <div>
                    <div>
                        <b className='myriad-bold'>{t.mission1}</b> {t.mission2}
                        <br/><br/>{t.mission3}<br/><br/>
                    </div>
                    <span id='community' className='myriad-bold'>{t.mission4}</span>
                    <img id='missionStatementUnderlines' src={pix.underlines} />
                </div>
            </div>
            <div id='missionStatementRight'>
                <img id='cityObelisk' className='about-pix' src={pix.cityObelisk} />
                <img id='blurryIntersection1' className='about-pix' src={pix.blurryIntersection1} />
                <img id='niceWalkway' className='about-pix' src={pix.niceWalkway} />
            </div>
        </section>

        <section id='whatWeDo' className='home-section'>
            <h2 id='whatWeDoHeader' className='home-sub-header'>{t.whatWeDoHeader}</h2>
            <div id='whatWeDoContentWrapper'>
                <p id='whatWeDoContent'>{t.whatWeDoContent}</p>
                <img id='whatWeDoIcon' src={pix.networkIcon1} />
            </div>
        </section>

        <section id='whyWereHere' className='home-section'>
            <h2 id='whyWereHereHeader' className='home-sub-header'>{t.whyWereHereHeader}</h2>
            <p id='whyWereHereContent1'>{t.whyWereHereContent1}</p>
            <img id='communityVector' src={pix.communityVector} />
            <p id='whyWereHereContent2'>{t.whyWereHereContent2}</p>
        </section>

        <section id='explore'>
            <Link to={paths.vision} className='home-link'>{t.vision}</Link>
            <Link to={paths.partners} className='home-link'>{t.partners}</Link>
            <Link to={paths.contact} className='home-link'>{t.contact}</Link>
        </section>
    </main>

export default withRouter(Home)