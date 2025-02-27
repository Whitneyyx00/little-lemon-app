import React from 'react';
import logo from '../assets/Logo.svg';

function Header() {
    return (
        <header>
            <div className='logo-container'>
                <img
                    src={logo}
                    alt='Little Lemon Logo'
                    className='logo'
                />
            </div>
        </header>
    );
}

export default Header;