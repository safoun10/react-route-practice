import React from 'react';
import { useNavigate } from 'react-router-dom'
import "./Post.css";

// const navigate = useNavigate();
// const handleNavigation = () => {
//     navigate(`/post/${id}`);
// }

const Post = (props) => {
    const { id , title } = props.post
    return (
        <div className='post mx-auto'>
            <div className='fw-bold text-center'>{title}</div>
            {/* <button onClick={handleNavigation} className='button w-100'>see more</button> */}
        </div>
    );
};

export default Post; 