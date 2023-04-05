import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PersonDetail = () => {
    const person = useLoaderData();
    console.log(person);
    const {name , phone , username} = person;
    return (
        <div className='mx-4'>
            <div>{name} ({username})</div>
            <div> Phone : {phone}</div>
        </div>
    );
};

export default PersonDetail;