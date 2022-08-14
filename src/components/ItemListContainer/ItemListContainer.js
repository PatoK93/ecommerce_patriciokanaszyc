import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/index";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true)

    const collectionRef = !categoryId 
        ? collection(db, 'products')
        : query(collection(db, 'products'), where('category', '==', categoryId))

    getDocs(collectionRef).then(response => {
        const products = response.docs.map(doc => {
            const values = doc.data()
            return { id: doc.id, ...values}
        })
        setProducts(products)
    }).catch(error => {
        console.log(error)
    }).finally(() => {
        setLoading(false)
    })
  }, [categoryId]);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  if(products.length === 0) {
    return categoryId ? <h1>No hay productos en nuestra categoria {categoryId}</h1> : <h1>No hay productos disponibles</h1>
}

  return (
    <>
      <h1>{`${greeting} ${categoryId || ""}`}</h1>
      <div>
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
