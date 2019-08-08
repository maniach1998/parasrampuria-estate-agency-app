import React from 'react';
import '../styles/LoginPage.css';
import Spinner from '../images/spinner.svg';

const LoadingScreen = () => (
    <div id="LoadingScreen" className="loading-container d-flex justify-content-center align-items-center">
        <div className="loading-container">
            <span className="company-name">Loading</span>
            <img src={Spinner} alt="Spinner" style={{ width: 200 }} />
        </div>
    </div>
);

export default LoadingScreen;