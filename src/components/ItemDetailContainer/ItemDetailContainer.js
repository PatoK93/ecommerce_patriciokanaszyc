import { useState, useEffect } from "react";
import { getProduct } from "../../asyncMockDetalle";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct()
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Cargando detalle de producto...</h1>;
  }

  return (
    <>
      <div>
        <ItemDetail product={product} />
      </div>
    </>
  );
};

export default ItemDetailContainer;
