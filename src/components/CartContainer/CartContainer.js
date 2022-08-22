import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Cart from "../Cart/Cart";
import "./CartContainer.css";

const CartContainer = () => {
  const { cart, getQuantity, getFinalPrice, clearCart } =
    useContext(CartContext);

  const totalQuantity = getQuantity();
  const total = getFinalPrice();

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>Tu carrito está vacío...</h1>
        <Link to="/" className="sinSubrayado">
          Ver todos los productos
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1>¡Este es tu carrito!</h1>
      <div>
        <Cart products={cart} />
      </div>
      <h3>Total Carrito: ${total}</h3>
      <div>
        <Button variant="danger" onClick={() => clearCart()}>
          Limpiar Carrito
        </Button>
        <Button variant="primary">
          <Link to="/checkout" className="Option textoBlanco sinSubrayado">
            Checkout
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CartContainer;
