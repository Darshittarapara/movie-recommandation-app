import React, { useEffect, useState } from 'react'
import MenuSubItem from './MenuSubItem/MenuSubItem'

const MenuItem = ({
    title,
    menuLinks
}) => {
    const [toggleSubMenuClass, setToggleSubMenuClass] = useState("hide-sub-item");
    useEffect(() => {
        console.log("run")
        const hideSubItemMenu = () => {
            setToggleSubMenuClass("hide-sub-item")
        }
        window.addEventListener("mouseover", hideSubItemMenu)
        return () => {
            window.addEventListener("mouseover", hideSubItemMenu)
        }
    }, []);
    const toggleSubItemHandler = (e) => {
        e.stopPropagation()
        setToggleSubMenuClass("show-sub-item")
    }
    return (
        <li className='nav-item' onMouseOver={(e) => toggleSubItemHandler(e)}>
            <span >{title}</span>
            <MenuSubItem links={menuLinks} toggleSubMenuClass={toggleSubMenuClass} setToggleSubMenuClass={setToggleSubMenuClass} />
        </li>
    )
}

export default MenuItem