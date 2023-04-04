import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Person from '../person/Person';

const AboutUs = () => {

    const data = useLoaderData();

    return (
        <div className='mx-5'>
            <div>About us ? nothing special </div>
            <div>We are just {data.length} lazy peoples....</div>
            <div>
                {data.map(person => <Person
                    key = {person.id}
                    person = {person}
                ></Person>)}
            </div>
        </div>
    );
};

export default AboutUs;