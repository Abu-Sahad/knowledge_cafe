import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css'
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTwo, setCartTwo] = useState([])
  const [addedProductIds, setAddedProductIds] = useState([]);
  const [totalReadTime, setTotalReadTime] = useState(0);

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

  const handleTimeToClick = (product) => {
    const newCart = [...cartTwo, product];
    const newTotalReadTime = newCart.reduce((acc, curr) => acc + parseInt(curr.read_time), 0);
    setTotalReadTime(newTotalReadTime);
    setCartTwo(newCart);
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
              handleTimeToClick={handleTimeToClick}
            />
          ))
        }
      </div>
      <div className='blog-part-second'>
        <Cart cartItems={cartItems} totalReadTime={totalReadTime} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Blogs;