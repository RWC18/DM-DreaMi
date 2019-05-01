import React from 'react';
import "./NavBarItem.scss";

const NavBarItem = (props) => {
    return(
        <li className="item">
            <a href={props.href} >{props.title}</a>
        </li>
    )
};

export default NavBarItem;