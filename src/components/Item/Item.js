import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <Card style={{ width: "18rem" }} key={product.id}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Link to={`/detail/${product.id}`} className="Option">
            Ver detalle
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Item;
