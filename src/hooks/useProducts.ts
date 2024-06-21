import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productsService";
import { product } from "../types/Product";

const useProducts = () => {
  const queryResult: UseQueryResult<product[]> = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const { data, isLoading } = queryResult;

  return { data, isLoading };
};

export default useProducts;