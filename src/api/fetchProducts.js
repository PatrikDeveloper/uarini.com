import Axios from "axios";

export default async function fetchProducts() {
  console.log('[fetchProducts] Going to fetch products');
  return await Axios.get('http://localhost:8080/products');
}
