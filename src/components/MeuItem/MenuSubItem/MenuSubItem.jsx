import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './MenuSubItem.scss'
const MenuSubItem = ({
    links,
    toggleSubMenuClass,
    setToggleSubMenuClass
}) => {

    return (
        <div className={`menu-subItem-container ${toggleSubMenuClass}`} onMouseOver={(e) => console.log(e)}>
            {links?.map((item, index) => {
                return (
                    <div key={`${index}`}>
                        <NavLink to={item.path} className={({ isActive }) => {
                            return isActive ? "active" : "nav-links"
                        }}>{item.title}</NavLink>
                    </div>
                )
            })}

        </div>
    )
}

export default MenuSubItem