import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = (props) => {
    const {name , path } = props.item;
    return (
        <div>
            <li><NavLink to={path}>{name}</NavLink></li>  
        </div>
    );
};

export default Link;    