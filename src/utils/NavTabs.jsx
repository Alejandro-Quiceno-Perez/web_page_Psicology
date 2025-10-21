import React from 'react'
import BtnContact from './BtnContact'

const NavTabs = ({ navItems = []}) => {
    return (
        <nav className={`container-nav`}>
            <ul>
                {
                    navItems.map((item) => (
                        <li key={item.href}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))
                }
                
            </ul>
        </nav>
    );
};

export default NavTabs
