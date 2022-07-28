import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../helpers/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  return (
    <>
      <h1>{greeting}</h1>
      <div>
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
