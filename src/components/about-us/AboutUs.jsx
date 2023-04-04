import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AboutUs = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div className='mx-5'>
            <div>About us ? nothing special </div>
            <div>We are just {data.length} lazy peoples....</div>
        </div>
    );
};

export default AboutUs;