const products = [
  {
    id: "1",
    name: "A",
    price: 500,
    category: "Categoría A",
    img: "images/imagenGenerica.jpg",
    stock: 10,
    description: "Descripcion de A",
  },
  {
    id: "2",
    name: "B",
    price: 1000,
    category: "Categoría A",
    img: "images/imagenGenerica.jpg",
    stock: 15,
    description: "Descripcion de B",
  },
  {
    id: "3",
    name: "C",
    price: 1500,
    category: "Categoría A",
    img: "images/imagenGenerica.jpg",
    stock: 20,
    description: "Descripcion de C",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};
