import React from 'react'
import Logo from "assets/Image/logo.png"
import { Strings } from 'utils/Strings/Strings'
import { NavLink } from 'react-router-dom'
import { constant } from 'utils/constant/const'
import './Navbar.scss'
import { PATHS } from 'utils/Paths/Paths'
import MenuItem from 'components/MeuItem/MenuItem'
export const Navbar = () => {
    const navBarLinks = [
        {
            title: Strings.movies,
            subMenuLinks: [
                {
                    title: Strings.popular,
                    path: PATHS.movies.category.replace(":id", Strings.popularPath),
                    isActive: false
                },
                {
                    title: Strings.latest,
                    path: PATHS.movies.category.replace(":id", Strings.latestPath),
                    isActive: false
                },
                {
                    title: Strings.topRated,
                    path: PATHS.movies.category.replace(":id", Strings.topRatedPath),
                    isActive: false
                },
            ]
        },
        {
            title: Strings.tvShows,
            subMenuLinks: [
                {
                    title: Strings.popular,
                    path: PATHS.movies.category.replace(":id", Strings.popularPath),
                    isActive: false
                },
                {
                    title: Strings.latest,
                    path: PATHS.movies.category.replace(":id", Strings.latestPath),
                    isActive: false
                },
                {
                    title: Strings.topRated,
                    path: PATHS.movies.category.replace(":id", Strings.topRatedPath),
                    isActive: false
                },
            ]
        }
    ]
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
                {navBarLinks.map((item, index) => {
                    return <MenuItem key={`${index}`} title={item.title} menuLinks={item.subMenuLinks} />
                })}
            </ul>
        </div>
    )
}
