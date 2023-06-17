import React from 'react'
import { Navbar } from './Navbar/Navbar'
import './Header.scss';
const Header = () => {
    return (
        <div className='header-container'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='right-side-container'>

            </div>
        </div>
    )
}

export default Header