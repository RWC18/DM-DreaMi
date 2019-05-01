import React from 'react';
import "./Header.scss";
import Logo from "../UI/Logo/Logo";
import Button from "../UI/Button/Button";
import NavBar from "./NavBar/NavBar";
import header_img from "../../images/header_back.svg";

const Header = () => {

    return (
        <header className="Header">
            <img src={header_img} alt="DreaMi" className="background"/>
            <div className="navigation">
                <div className="logo_section">
                    <Logo/>
                </div>
                <div className="navBar_section">
                    <NavBar/>
                </div>
            </div>
            <h1>Welcome</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
                of Lorem Ipsum.
            </p>
            <Button href="" title="START" class="fill"/>
            <Button href="" title="PORTFOLIO ->" class="not-fill"/>
        </header>
    );
};

export default Header;