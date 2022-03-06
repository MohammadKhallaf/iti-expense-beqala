import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../../redux/actions/auth';
import { useTranslation } from "react-i18next";

const ResetPassword = ({ reset_password }) => {
    const { t, i18n } = useTranslation();
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate to='/login' />
    }

    return (
        <div className='container m-5 p-5' lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : null}>
        <div className='border border-secondary m-5 p-5'><h1>{t("ResetPassword.Request Password Reset:")}</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control '
                        type='email'
                        placeholder='Enter Your Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <button className='btn btn-primary text-center m-4' type='submit'>{t("ResetPassword.Reset Password")}</button>
            </form>
        </div>
            
        </div>
    );
};

export default connect(null, { reset_password })(ResetPassword);
