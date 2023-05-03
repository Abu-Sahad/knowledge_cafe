import './Cart.css';

const Cart = ({ cartItems }) => {
    const totalReadTime = cartItems.reduce((acc, curr) => acc + parseInt(curr.read_time), 0);

    return (
        <div className='cart'>
            <div className='spend-time'>
                <h3>Spend Time On Read: {totalReadTime} min</h3>
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