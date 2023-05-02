import React from 'react';
import './Blog.css'
const Blog = (props) => {
    const { name, img, date, discription, person_img } = props.product
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
                    <p>05 min Read</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;