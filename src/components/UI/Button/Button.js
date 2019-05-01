import React from 'react';
import "./Button.scss";

const Button = (props) => {
    return(
        <a href={props.href} className={`btn ${props.class}`}>{props.title}</a>
    )
};

export default Button;