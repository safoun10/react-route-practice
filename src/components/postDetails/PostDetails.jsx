import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData();
    const {body , id} = postDetails;
    return (
        <div className='mx-5 my-5'>
            <dir>Post ID : {id}</dir>
            <div>{body}</div>
        </div>
    );
};

export default PostDetails;