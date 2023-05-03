import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [cart, setCart] = useState([]);
  const [addedProductIds, setAddedProductIds] = useState([]);

  useEffect(() => {
    fetch('knowledge.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, []);

  const handleClick = (product) => {
    if (addedProductIds.includes(product.id)) {
        toast.warning(`"${product.discription}" is already in the cart.`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        return;
      }
    setAddedProductIds([...addedProductIds, product.id]);
    setCart([...cart, product]);
  }

  const cartItems = cart.filter(item => addedProductIds.includes(item.id));

  return (
    <div className='all-blog'>
      <div className='blog-part'>
        {
          blogs.map(product => (
            <Blog
              product={product}
              key={product.id}
              handleClick={handleClick}
            />
          ))
        }
      </div>
      <div className='blog-part-second'>
        <Cart cartItems={cartItems} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Blogs;