import './Cart.css';

const Cart = ({ cartItems, totalReadTime  }) => {
    return (
        <div className='cart'>
            <div className='spend-time'>
                <h3>Spend Time On Read: {totalReadTime} min</h3>
            </div>
            <div className='cart-area'>
                <div>
                    <h2>Bookmarked Blogs: {cartItems.length}</h2>
                </div>
                <div className='cart-summary'>
                    {cartItems.map((product) => (
                        <h3 className='cart-details' key={product.id}>{product.discription}</h3>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Cart;


