import axios from 'axios';
const URL = 'http://localhost:3000/products';

//listado de productos
export const getProduct = async () => {
  const response = await axios.get(URL)
  return response.data;
}

//agregar productos
export const addProduct = async (newProduct) => {
  const response = await axios.post(URL, newProduct);
  return response.data;
};

//actualizar productos
export const updateProduct = async (id, updatedProduct) => {
  const response = await axios.put(`${URL}/${id}`, updatedProduct);
  return response.data;
};

//eliminar productos
export const deleteProduct = async (id) => {
  const response = await axios.delete(`${URL}/${id}`);
  return response.data;
};

//producto por id
export const getProductById = async (id) => {
  const response = await axios.get(`${URL}/${id}`)
  return response.data;
}


/*export const getProduct = async () => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 200);
  });
}


export const postProduct = async (product) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      product.id = Date.now().toString();
      products.push(product);
      resolve(product);
    }, 200);
  });
}

*/