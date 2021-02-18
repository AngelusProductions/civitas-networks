import React, { useState } from 'react'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";

import './styles.css'

import * as pix from '../../../assets/pix'
import { paths, portalPwd } from '../../../constants'

const t = {
    header: 'The 5G network designed to meet the needs of your community.',
    mission1: 'Civitas',
    mission2: 'is a Private Networks Company that designs, finances, & operates',
    mission3: 'self-reliant wireless networks',
    mission4: 'finetuned to realize your community\'s 5G ambitions.',
    portal: 'Portal Access',
    pwdPrompt: 'Please enter the Civitas Secure password to proceed.',
    submit: 'Submit',
    cancel: 'Cancel',
    warning: 'Incorrect password.',
    placeholder: 'enter password here',
    contactText1: 'For more information,', 
    contactText2: 'click the email below to contact us',
    contactEmail: 'info@civitasnetworks.com',
    underlay1: 'Highly Secure Hyper-Local Data',
    underlay2: 'Smarter Systems & Sensors',
    underlay3: 'Increased Government Effeciency',
    underlay4: 'Improved Quality of Life',
    whoWeAre: 'Who We Are'
}

const Home = ({ history }) => {
    const [isPortalModalOpen, setIsPortalModalOpen] = useState(false)
    const [isWarningVisible, setIsWarningVisible] = useState(false)
    const [pwdField, setPwdField] = useState('')
    
    function onSubmit () {
        if (pwdField.toLowerCase() === portalPwd) {
            setIsPortalModalOpen(false)
            setIsWarningVisible(false)
            setPwdField('')
            history.push(paths.portal)
        } else 
            setIsWarningVisible(true)
    }

    const onCancel = () => {
        setPwdField('')
        setIsPortalModalOpen(false)
        setIsWarningVisible(false)
    }
    return (
        <main id='homePage'>
            <Parallax 
                id='parallax' 
                blur={1} 
                bgImage={pix.blurryIntersection11} 
                bgImageAlt='background' 
                strength={250}
            >
                <section id='splashTop'>
                    <header id='homeHeader'>{t.header}</header>
                    <img id='logoBlack' src={pix.logoBlack} />
                    <span 
                        id='portalAccess'
                        onClick={() => setIsPortalModalOpen(true)}
                        >
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
            {isPortalModalOpen && (
                <>
                    <div id='blackBackground' />
                    <div id='portalModal'>
                        <label>{t.pwdPrompt}</label>
                        <input 
                            id='pwdInput' 
                            type='password'
                            value={pwdField}
                            placeholder={t.placeholder}
                            onChange={e => setPwdField(e.target.value)} 
                        />
                        {isWarningVisible && <span id='pwdWarning'>{t.warning}</span>}
                        <section id='pwdButtons'>
                            <button id='pwdSubmit' onClick={onSubmit}>{t.submit}</button>
                            <button id='pwdCancel' onClick={onCancel}>{t.cancel}</button>
                        </section>
                    </div>
                </>
            )}

            <section id='missionStatement'>
                <h2 id='whoWeAre'>{t.whoWeAre}</h2>
                {/* <img id='fiveGVector' src={pix.fiveGVector} /> */}
                <img id='treeVectors' src={pix.treeVectors} />
                <div id='missionStatementText'>
                    <b className='myriad-bold'>{t.mission1}</b> {t.mission2}
                    <br/><br/>{t.mission3}<br/><br/>
                    <span id='community' className='myriad-bold'>{t.mission4}</span>
                </div>
                <img id='missionStatementUnderlines' src={pix.underlines} />
                <img id='cityObelisk' className='about-pix' src={pix.cityObelisk} />
                <img id='blurryIntersection1' className='about-pix' src={pix.blurryIntersection1} />
                <img id='niceWalkway' className='about-pix' src={pix.niceWalkway} />
            </section>

            {/* <img id='cityBlocksVector' src={pix.cityBlocksVector} /> */}
            {/* <img id='backgroundGradientHome' src={pix.backgroundGradient} /> */}
            {/* <div id='contactInfo'>
                <span id='contactText1'>{t.contactText1}</span>
                <span id='contactText2'>{t.contactText2}</span>
                <img id='arrowRight' src={pix.arrowRight}/>
                <a href={`mailto: ${t.contactEmail}`}>{t.contactEmail}</a>
            </div> */}
        </main>
    )
}

export default withRouter(Home)