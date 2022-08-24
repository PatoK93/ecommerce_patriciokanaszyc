import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ id, name, img, price }) {
  return (
    <Card style={{ width: "18rem" }} key={id}>
      <Card.Img
        variant="top"
        src={img}
        style={{ width: "18rem", height: "18rem" }}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Link to={`/detail/${id}`} className="Option sinSubrayado">
            Ver detalle
          </Link>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Item;
