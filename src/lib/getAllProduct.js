export default async function getAllProducts() {
 const result = await fetch('http://localhost:5000/products');

 return result.json();
}