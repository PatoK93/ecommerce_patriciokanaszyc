import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  addDoc,
  collection,
  Timestamp,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../services/firebase/index";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Checkout.css";

const Checkout = () => {
  const [status, setStatus] = useState(0);
  const { cart, clearCart, getFinalPrice } = useContext(CartContext);
  const [orderNumber, setorderNumber] = useState("");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");

  if (status === 1) {
    return (
      <div>
        <h2>Compra exitosa!</h2>
        <div>
          <p>Se ha realizado la orden de compra exitosamente</p>
          <p>Tu número de orden es {orderNumber}</p>
        </div>
      </div>
    );
  }

  const createOrder = async (e) => {
    try {
      e.preventDefault();
      if (!validate()) return;
      if (cart.length === 0) return;
      const objOrder = {
        buyer: {
          name: name,
          phone: phone,
          email: email,
        },
        items: cart,
        total: `${getFinalPrice()}`,
        date: Timestamp.fromDate(new Date()),
      };

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "products");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      const outOfStock = [];

      const batch = writeBatch(db);

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAdded = cart.find((prod) => prod.id === doc.id);
        const prodQuaantity = productAdded?.quantity;

        if (stockDb >= prodQuaantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuaantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        batch.commit();
        console.log(orderAdded.id);
        clearCart();
        setStatus(1);
        setorderNumber(orderAdded.id);
      } else {
        alert("Hay productos fuera de stock");
        console.log("Hay productos fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("se terminó la ejecución de la función createOrder");
    }
  };

  const validate = () => {
    if (name.length <= 0) {
      alert("El nombre no debe quedar en blanco");
      return false;
    }
    if (email.length <= 3 || !String(email).includes("@")) {
      alert("Inserte un correo electrónico válido");
      return false;
    }
    if (phone.length <= 0 || isNaN(parseInt(phone)) || phone === "") {
      alert(
        "El número de teléfono no puede contener caracteres ni estar vacío"
      );
      return false;
    }
    return true;
  };

  return (
    <div>
      <h1 className="elementoCentrado">Checkout</h1>
      <Form>
        <Form.Group
          as={Row}
          className="mb-3 elementoCentrado"
          controlId="formHorizontalName"
        >
          <Form.Label column sm={2}>
            Nombre y Apellido
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              type="text"
              placeholder="Nombre y Apellido"
              requiered
              onChange={(e) => {
                setname(e.target.value);
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 elementoCentrado"
          controlId="formHorizontalEmail"
        >
          <Form.Label column sm={2}>
            Email
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              type="email"
              placeholder="Email"
              requiered
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group
          as={Row}
          className="mb-3 elementoCentrado"
          controlId="formHorizontalPhome"
        >
          <Form.Label column sm={2}>
            Teléfono
          </Form.Label>
          <Col sm={2}>
            <Form.Control
              type="text"
              placeholder="Teléfono"
              requiered
              onChange={(e) => {
                setphone(e.target.value);
              }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 elementoCentrado">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" onClick={createOrder}>
              Generar Orden
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Checkout;
