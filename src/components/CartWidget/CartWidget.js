import "./CartWidget.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  const quantity = getQuantity();

  return (
    <div className="cart">
      <Link to="/cart">
        <img src="/images/cart.svg" alt="cart" />
      </Link>
      <p className="contadorCart">{quantity}</p>
    </div>
  );
};

export default CartWidget;
