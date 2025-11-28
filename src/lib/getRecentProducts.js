export default async function getRecentProducts() {
  const result = await fetch(
    "https://tick-tock-time-server.vercel.app/latest-products"
  );

  return result.json();
}
