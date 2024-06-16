import AppLayout from "../ui/AppLayout";
import ProductCart from "../ui/ProductCart";

const products = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Products = () => {
  return (
    <AppLayout>
      <div className='w-full h-full flex items-start justify-between flex-wrap p-6  gap-5 overflow-y-auto'>
        {products.map((id) => (
          <ProductCart id={id} />
        ))}
      </div>
    </AppLayout>
  );
};

export default Products;
