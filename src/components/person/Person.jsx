import React from 'react';
import { NavLink } from 'react-router-dom';

const Person = (props) => {
    const {name , email , website , phone , } = props.person

    return (
        <div className='p-4'>
            <h6>{name}</h6>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{website}</div>
        </div>
    );
};

export default Person;