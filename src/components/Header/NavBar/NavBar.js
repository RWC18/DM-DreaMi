import React from 'react';
import "./NavBar.scss";
import NavBarItem from "./NavBarItem/NavBarItem";

const NavBar = () => {
    let MenuItems = [
        {
            title: <i className="fab fa-facebook"> </i>,
            href: "https://web.facebook.com"
        },
        {
            title: "Home",
            href: "#home"
        },
        {
            title: "Services",
            href: "#services"
        },
        {
            title: "Portfolio",
            href: "#portfolio"
        },
        {
            title: "Users Comments",
            href: "#comments"
        },
        {
            title: "Contact",
            href: "#contact"
        },
    ];
    return(
        <ul className="NavBar">
            {MenuItems.map((item) => (
                <NavBarItem title={item.title} href={item.href} />
            ))}
        </ul>
    )
};

export default NavBar;