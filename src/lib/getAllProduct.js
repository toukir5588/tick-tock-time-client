export default async function getAllProducts() {
  const result = await fetch(
    "https://tick-tock-time-server.vercel.app/products"
  );

  return result.json();
}
