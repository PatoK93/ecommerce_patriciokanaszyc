**Bienvenidos al Ecommerce de PAK**

**_Pasos para ejecutar el proyecto_**

1- Descargar/clonar el repositorio de [Github](https://github.com/)
2- Asegurarse de tener instalado [NodeJs](https://nodejs.org/en/) en la PC.
3- Desde la carpeta del proyecto correr el comando

```sh
npm install
```

4- Instalar la libreria react-router-dom (quizás esto ya se solventa con el paso anterior).

```sh
npm install react-router-dom
```

5- Crear las variables de entorno propias para poder utilizar el proyecto ([FireBase](https://firebase.google.com/?hl=es), etc.).
6- El proyecto ya está listo para compilarse y ejectuarse con el comando

```sh
npm start
```

**_Objetivos y enfoque del proyecto_**

- Lograr una aplicación web simple (ecommerce) con React Js.
- El alcance del proyecto incluye una SPA reactiva, la cual va a permitir al usuario navegar entres las categorías de los productos ofrecidos (estas mismas son estáticas).
- Además, se podrá ver el detalle de cada producto, lo cual funciona mediante el ruteo de los id de los mismos.
- Por otro lado, se podrá agregar al carrito los productos que se requieran según disponibilidad de stock, lo cual es modificable en cualquier momento.
- Luego, se puede pasar a finalizar la compra a través del carrito, el cual permite no solo modificar, sino eliminar productos (o todo), que se necesiten para ajustar la compra.
- Como último paso, se solicitarán los datos básicos para generar la orden de compra y exponer el número de la misma.
