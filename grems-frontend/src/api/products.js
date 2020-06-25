import axios from 'axios';
import { setGlobal } from 'reactn';
const API = process.env.REACT_APP_GREMS_API;

// get product
export const getProduct = async (productId) => {
  return axios
    .get(`${API}/products/${productId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

// get all products
export const getProducts = async () => {
  try {
    const products = await axios.get(`${API}/products`);
    return products.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// get image for product
export const getProductImage = async (productId) => {
  console({ id_from_api: productId });
  try {
    const product = await axios.get(`${API}/products/photo/${productId}`);
    return product.data;
  } catch (error) {
    return error;
  }
};
