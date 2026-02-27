import axios from "../node_modules/axios/dist/esm/axios.js"

export const getAllProducts = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    } catch (error) {
        console.error("Ошибка при получении товаров:", error);
    }
};

export const getSingleProduct = async (id) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Ошибка при получении товара с ID ${id}:`, error);
    }
};
