import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "../ItemCount/ItemCount";

function Item({ product }) {
  return (
    <Card style={{ width: "18rem" }} key={product.id}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text> {product.description} </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item> {product.category} </ListGroup.Item>
        <ListGroup.Item> Precio: {product.price} </ListGroup.Item>
        <ListGroup.Item> Stock: {product.stock} </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <ItemCount stock={product.stock} />
      </Card.Body>
    </Card>
  );
}

export default Item;
