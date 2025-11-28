export default async function getProduct(id) {
  const result = await fetch(
    `https://tick-tock-time-server.vercel.app/products/${id}`
  );

  if (!result.ok) {
    throw new Error("Failed to fetch product");
  }

  return result.json();
}
