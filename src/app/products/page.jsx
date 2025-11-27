import PrivateRoute from "@/components/PrivateRoute";
import getRecentProducts from "../../lib/getRecentProducts";
import ProductCard from "../../components/productCard/cardPage";

export default async function ProductsPage() {
  const products = await getRecentProducts();
  //     console.log(products);

  return (
    //    <PrivateRoute>
    <div className="max-w-11/12 mx-auto my-15">
      <h2 className="text-3xl font-semibold text-center mb-8 mt-8">
        Recent Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    //    </PrivateRoute>
  );
}
