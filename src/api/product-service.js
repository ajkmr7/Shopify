// Libraries
import axios from 'axios';

// Constants
import NETWORKCONFIG from '../constants/network-config';
import APIEndpoints from './APIEndpoints';

export async function fetchProducts() {
  const response = await axios.get(
    NETWORKCONFIG.baseURL + APIEndpoints.products,
  );

  const products = response.data.map(product => {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      imageUrl: product.image,
      rating: product.rating,
    };
  });
  return products;
}

export async function fetchCategories() {
  const response = await axios.get(
    NETWORKCONFIG.baseURL + APIEndpoints.categories,
  );

  return response.data;
}
