import React, { useState } from 'react'
import { withRouter } from "react-router"

import * as docs from '../../../assets/docs'
import * as pix from '../../../assets/pix'
import { paths, portalPwd } from '../../../constants'
import './styles.css'

const t = {
    header: 'Welcome To the Civitas Portal',
    downloadButtonText: 'download presentation',
    pwdPrompt: 'Please enter the Civitas Secure password to proceed.',
    submit: 'Submit',
    cancel: 'Cancel',
    warning: 'incorrect password',
    placeholder: 'enter password here'
}

const Portal = ({ history }) => {
    const [hasPortalAccess, setHasPortalAccess] = useState(false)
    const [showIFrame, setShowIFrame] = useState(false)
    const [isWarningVisible, setIsWarningVisible] = useState(false)
    const [pwdField, setPwdField] = useState('')
    
    const onSubmit = () => {
        if (pwdField.toLowerCase() === portalPwd) {
            setHasPortalAccess(true)
            setIsWarningVisible(false)
            setPwdField('')
        } else 
            setIsWarningVisible(true)
    }

    const onCancel = () => {
        setPwdField('')
        setHasPortalAccess(false)
        setIsWarningVisible(false)
        history.push(paths.home)
    }
    return (
        <main id='portalPage'>
            {hasPortalAccess ? (
                <>
                    <header id='portalHeader'>{t.header}</header>
                    <img id='portalBackground' src={pix.fiveGSkySignal} />
                    <button id='portalDownloadButton' onClick={() => setShowIFrame(true)}>
                        {t.downloadButtonText}
                    </button>
                    {showIFrame && <iframe src={docs.powerpoint} display='none' />}
                </>
            ) : (
                <>
                    <div id='blackBackground' />
                    <div id='portalModal'>
                        <label id='portalPwdPrompt'>{t.pwdPrompt}</label>
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
        </main>
    )
}
        
export default withRouter(Portal)