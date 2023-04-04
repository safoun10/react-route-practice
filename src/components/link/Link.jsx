import React from 'react';

const Link = (props) => {
    const {name , path } = props.item;
    return (
        <div>
            <li><a href={path}>{name}</a></li>  
        </div>
    );
};

export default Link;    