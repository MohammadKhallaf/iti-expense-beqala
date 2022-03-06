import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../../redux/actions/auth';
import { useTranslation } from "react-i18next";


const Activate = ({ verify, match }) => {
    const { t, i18n } = useTranslation();
    const [verified, setVerified] = useState(false);
    const params = useParams();
    const verify_account = e => {
        const uid = params.uid;
        const token = params.token;

        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        return <Navigate to='/' />
    }

    return (
        <div className='container' lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
            <div 
                className='d-flex flex-column justify-content-center align-items-center'
                style={{ marginTop: '200px' }}
            >
                <h1>{t("Activate.Verify your Account:")}</h1>
                <button
                    onClick={verify_account}
                    style={{ marginTop: '50px' }}
                    type='button'
                    className='btn btn-primary'
                >
                    {t("Activate.Verify")}
                </button>
            </div>
        </div>
    );
};

export default connect(null, { verify })(Activate);
