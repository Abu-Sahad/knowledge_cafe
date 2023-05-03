import './Cart.css';

const Cart = ({ cartItems }) => {
    return (
        <div className='cart'>
            <div>
                <h2>Bookmarked Blogs: {cartItems.length}</h2>
            </div>
            <div className='cart-details'>
                {cartItems.map((product) => (
                    <h3 key={product.id}>{product.discription}</h3>
                ))}
            </div>
        </div>
    );
};

export default Cart;