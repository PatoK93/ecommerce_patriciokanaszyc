import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../ItemList/ItemList.css";

const ItemDetail = ({ id, name, category, img, price, stock, description }) => {
  const [quantity, setQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    console.log("agregue al carrito: ", quantity);
    setQuantity(quantity);
  };

  return (
    <div className="cardRow">
      <Card style={{ width: "18rem" }} key={id}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text> {description} </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item> {category} </ListGroup.Item>
          <ListGroup.Item> Precio: {price} </ListGroup.Item>
          <ListGroup.Item> Stock: {stock} </ListGroup.Item>
        </ListGroup>
        <Card.Body>
          {quantity > 0 ? (
            <Link to="/cart">Ir al carrito</Link>
          ) : (
            <ItemCount stock={stock} onConfirm={handleOnAdd} />
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
