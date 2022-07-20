import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './ItemCount.css'

const ItemCount = () => {
  //variables iniciales
  const valorInicial = 1;
  const stock = 7;

  //hook de estado
  const [cantidad, setCantidad] = useState(valorInicial);

  //funciones
  const agregarProducto = (num) => {
    setCantidad(cantidad + num);
  };

  const agregarAlCarrito = (cantidad) => {
    alert(`Agregaste ${cantidad} productos`);
  };

  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <Button variant="dark" onClick={() => agregarProducto(-1)} disabled={cantidad === valorInicial ? true : null}>-</Button>{" "}
                <span>{cantidad}</span>{" "}
                <Button variant="dark" onClick={() => agregarProducto(+1)} disabled={cantidad === stock ? true : null}>+</Button>{" "}
            </div>
        </div>
        <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <Button variant="primary" onClick={() => agregarAlCarrito(cantidad)} disabled={stock === 0 ? true : null} className="botonBloque">Añadir</Button>
            </div>
        </div>
    </div>
  );
};

export default ItemCount;


