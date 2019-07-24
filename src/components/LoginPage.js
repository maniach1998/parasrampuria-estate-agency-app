import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import GoogleIcon from '../images/GoogleIcon.svg';
import Logo from '../images/logo.png';
import '../styles/LoginPage.css';

export const LoginPage = ({ startLogin }) => (
    <div>
        <div className="login-container">
            <img alt="Logo" id="company-logo" src={Logo} style={{ width: 400 }}></img>
            <div className="button-container">
                <button onClick={startLogin} className="btn custom-btn border shadow-sm">Login with <img alt="googleIcon" src={GoogleIcon} style={{ width: 30, marginLeft: 5 }}></img></button>
            </div>
        </div>
    </div>
);

const matchDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, matchDispatchToProps)(LoginPage);