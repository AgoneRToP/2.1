import { getAllProducts, getSingleProduct } from './functions.js';

const start = async () => {
    const allProducts = await getAllProducts();
    console.log('Все товары:', allProducts);

    const singleProduct = await getSingleProduct(1);
    console.log('Товар с ID 1:', singleProduct);
};

start();
