const product = [
  {
    id: "1",
    name: "A",
    price: 500,
    category: "Categoría A",
    img: "images/imagenGenerica.jpg",
    stock: 10,
    description: "Descripcion de A",
  },
];

export const getProduct = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product);
    }, 2000);
  });
};
