import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ product }) => {
  const { removeItem } = useContext(CartContext);
  const remove = (id) => {
    removeItem(id);
  };
  return (
    <Card style={{ width: "18rem" }} key={product.id}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <p>Precio: {product.price}$</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>Cantidad: {product.quantity}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>Total: {product.price * product.quantity}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button variant="danger" onClick={() => remove(product.id)}>
            Quitar del carrito
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CartItem;
