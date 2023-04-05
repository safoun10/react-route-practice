import React from 'react';
import { NavLink } from 'react-router-dom'
import "./Post.css";

const Post = (props) => {
    const { id , body , title } = props.post
    return (
        <div className='post mx-auto'>
            <div className='fw-bold text-center'>{title}</div>
            <button className='button w-100'><NavLink to={`/post/${id}`} className="link"> see more ...</NavLink></button>
        </div>
    );
};

export default Post; 