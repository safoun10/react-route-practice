import React from 'react';

const Post = (props) => {
    const { body , title } = props.post
    return (
        <div className='p-4'>
            <div className='fw-bold'>{title}</div>
            <div>{body}</div>
        </div>
    );
};

export default Post;