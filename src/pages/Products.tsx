import useProducts from "../hooks/useProducts";
import { product } from "../types/Product";
import AppLayout from "../ui/AppLayout";
import Loading from "../ui/Loading";
import ProductCart from "../ui/ProductCart";

const Products = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) <Loading />;

  return (
    <AppLayout>
      <div className='w-full h-full flex items-start justify-between flex-wrap p-6 gap-5 overflow-y-auto'>
        {data?.map((products: product) => (
          <ProductCart
            key={products.id}
            product={products}
          />
        ))}
      </div>
    </AppLayout>
  );
};

export default Products;
