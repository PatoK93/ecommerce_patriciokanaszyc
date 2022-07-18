import './CartWidget.css'

const CartWidget = () => {
    return (
        <div className='cart'>
            <img src='images/cart.svg' alt="cart"/>
            <p className='contadorCart'>10</p>
        </div>
    )
};

export default CartWidget;