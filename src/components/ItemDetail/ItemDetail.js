import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemList/ItemList.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="cardRow">
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
    </div>
  );
};

export default ItemDetail;
