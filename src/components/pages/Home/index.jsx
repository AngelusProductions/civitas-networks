import React, { useState } from 'react'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router";

import './styles.css'

import * as pix from '../../../assets/pix'
import { paths, portalPwd } from '../../../constants'

const t = {
    header: 'Welcome to the 5G Smart Community.',
    mission1: 'Civitas',
    mission2: 'disrupts the traditional telecom model',
    mission3: 'by creating a smart town/municipal system producing hyper-local data',
    mission4: 'precisely designed',
    mission5: 'for the present and the future needs of your community.',
    portal: 'Portal Access',
    pwdPrompt: 'Please enter the Civitas Secure password to proceed.',
    submit: 'Submit',
    cancel: 'Cancel',
    warning: 'Incorrect password.',
    placeholder: 'enter password here',
    contactText1: 'For more information,', 
    contactText2: 'click the email below to contact us',
    contactEmail: 'info@civitasnetworks.com'
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
                bgImage={pix.homeBackground} 
                bgImageAlt='background' 
                strength={250}
            >
                <section id='splashTop'>
                    <header id='homeHeader'>{t.header}</header>
                    <div id='overlayBar' />
                    <img id='logoWhite' src={pix.logoWhite} />
                    <span 
                        id='portalAccess'
                        onClick={() => setIsPortalModalOpen(true)}
                    >
                        {t.portal}
                    </span>
                </section>
            </Parallax>
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
                <div id='missionStatementText'>
                    <b>{t.mission1}</b> {t.mission2}
                    <br/><br/>{t.mission3}<br/><br/>
                    {t.mission4} <span id='community'>{t.mission5}</span>
                </div>
                <img id='missionStatementUnderlines' src={pix.underlines} />
                <div id='contactInfo'>
                    <span id='contactText1'>{t.contactText1}</span>
                    <span id='contactText2'>{t.contactText2}</span>
                    <img id='arrowRight' src={pix.arrowRight}/>
                    <a href={`mailto: ${t.contactEmail}`}>{t.contactEmail}</a>
                </div>
            </section>
            <img id='visionTriangle' src={pix.visionTriangle} />
        </main>
    )
}

export default withRouter(Home)