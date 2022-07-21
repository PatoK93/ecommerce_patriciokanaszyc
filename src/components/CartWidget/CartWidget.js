import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cart'>
            <img src='images/cart.svg' alt="cart"/>
            <p className='contadorCart'>0</p>
        </div>
    )
};

export default CartWidget;