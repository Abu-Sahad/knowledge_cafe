import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVectorSquare } from '@fortawesome/free-solid-svg-icons'
const Blog = (props) => {
    const { name, img, date, discription, person_img, read_time } = props.product
   const handleClick=props.handleClick;

   
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
                    <p>{read_time} <FontAwesomeIcon onClick={()=>handleClick(props.product)} icon={faVectorSquare} /></p>
                </div>
            </div>
            <h1>{discription}</h1>
            <a href="">Mark As Read</a>
        </div>
    );
};

export default Blog;