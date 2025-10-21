import React from 'react';
import logo from '../logo.svg';
    const CenterHeader = ({title = 'Sonico Georgia', linkHref = '/home', linkText = 'Go to Home', className = '' }) => (
        <header className={`App-header absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}>
            {logo && <img src={logo} className="App-logo rounded-full select-none" alt="logo" />}
            <p>
                Welcome to <span>{title}</span>
            </p>
            <a className="App-link" href={linkHref} rel="noopener noreferrer">
                {linkText}
            </a>
        </header>
    );

    export default CenterHeader;