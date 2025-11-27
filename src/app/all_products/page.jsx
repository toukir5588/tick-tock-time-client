import getAllProducts from "@/lib/getAllProduct";
import SearchAndFilter from "@/components/SearchAndFilter";

export default async function AllProductPage() {
    const products = await getAllProducts();

    return (
        <div className="max-w-7xl mx-auto px-4 my-15">
            <h2 className="text-3xl text-gray-800 font-semibold text-center mb-8 mt-8">
                All Products
            </h2>

            <SearchAndFilter initialProducts={products} />
        </div>
    );
}