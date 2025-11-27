export default async function getRecentProducts() {
 const result = await fetch('http://localhost:5000/latest-products');

 return result.json();
}