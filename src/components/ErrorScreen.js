import React from 'react';
import Warning from '../images/warning.svg';
import '../styles/LoginPage.css';

const ErrorScreen = () => (
    <div id="ErrorScreen" className="loading-container d-flex justify-content-center align-items-center">
        <div className=" loading-container">
            <div>
                <img src={Warning} alt="warning" style={{ width: 250 }} />
            </div>
            <span className="company-name">Sorry! You are not authorised to access this app.</span>
        </div>
    </div>
);

export default ErrorScreen;