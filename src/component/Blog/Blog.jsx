import React from 'react';
import './Blog.css'
const Blog = (props) => {
    const { name, img, date, discription, person_img, read_time } = props.product
    return (
        <div className='blog-details'>
            <img src={img} alt="" />
            <div className='person-details'>
                <div className='single-person'>
                    <div>
                        <img src={person_img} alt="" />
                    </div>
                    <div className='single-person-details'>
                        <h5>{name}</h5>
                        <p>{date}</p>
                    </div>
                </div>
                <div className='read-time-area'>
                    <p>{read_time}</p>
                </div>
            </div>
            <h1>{discription}</h1>
            <a href="">Mark As Read</a>
        </div>
    );
};

export default Blog;