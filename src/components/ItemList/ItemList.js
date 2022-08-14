import Item from "../Item/Item";
import "./ItemList.css";
import { memo } from 'react'

const ItemList = ({ products }) => {
  return (
    <div className="cardRow">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default memo(ItemList)
