import React from 'react'
import Logo from "assets/Image/logo.png"
import { Strings } from 'utils/Strings/Strings'
import { NavLink } from 'react-router-dom'
import { constant } from 'utils/constant/const'
import './Navbar.scss'
export const Navbar = () => {
    return (
        <div className='navbar-container'>
            <ul className='navbar-list'>
                <li className='logo'>
                    <div>
                        <span className='odd'>M</span>
                        <span className='even'>O</span>
                        <span className='odd'>V</span>
                        <span className='even'>I</span>
                        <span className='odd'>E</span>
                        <span className='even'>S</span>
                        <span className='odd'>A</span>
                        <span className='even'>P</span>
                        <span className='odd'>P</span>

                    </div>
                </li>
                <li className='nav-item'>
                    <div>Home</div>
                </li>
            </ul>
        </div>
    )
}
