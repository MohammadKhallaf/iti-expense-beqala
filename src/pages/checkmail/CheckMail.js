import React from 'react';
import { useTranslation } from "react-i18next";


const CheckMail = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className='container' lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
            <div 
                className='d-flex flex-column justify-content-center align-items-center'
                style={{ marginTop: '200px' }}
            >
                <h1>{t("CheckMail.Please Check Your Email to verify your Account:")}</h1>
            </div>
        </div>
    );
};

export default CheckMail;