import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    console.log(blogs)
    useEffect(() => {
        fetch('knowledge.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='all-blog'>
            <div className='blog-part'>
                {

                    blogs.map(product => <Blog
                        product={product}
                        key={product.id}

                    ></Blog>)
                }
            </div>
            <div className='blog-part'>
                <h1>blog area</h1>
            </div>
        </div>
    );
};

export default Blogs;