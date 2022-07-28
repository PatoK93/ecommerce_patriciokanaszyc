const products = [
  {
    id: "1",
    name: "A",
    price: 500,
    category: "categoriaA",
    img: "images/imagenGenerica.jpg",
    stock: 10,
    description: "Descripcion de A",
  },
  {
    id: "2",
    name: "B",
    price: 1000,
    category: "categoriaB",
    img: "images/imagenGenerica.jpg",
    stock: 15,
    description: "Descripcion de B",
  },
  {
    id: "3",
    name: "C",
    price: 1500,
    category: "categoriaC",
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

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 2000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 2000);
  });
};
