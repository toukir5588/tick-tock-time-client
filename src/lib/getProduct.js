export default async function getProduct(id) {
  const result = await fetch(`http://localhost:5000/products/${id}`);
  
  if (!result.ok) {
    throw new Error('Failed to fetch product'); 
  }

  return result.json();
}