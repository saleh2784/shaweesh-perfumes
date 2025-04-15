// lib/products.js
import men from '../data/men';
import women from '../data/women';

export default function getAllProducts() {
  return [...women, ...men]; // You can change order if needed
}
