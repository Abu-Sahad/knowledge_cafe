import './Cart.css';

const Cart = ({ cartItems }) => {
    return (
        <div className='cart'>
            <div className='spend-time'>
                <h3>Spend Time On Read:</h3>
            </div>
            <div>
                <h2>Bookmarked Blogs: {cartItems.length}</h2>
            </div>
            <div className='cart-summary'>
                {cartItems.map((product) => (
                    <h3 className='cart-details' key={product.id}>{product.discription}</h3>
                ))}
            </div>


        </div>
    );
};

export default Cart;