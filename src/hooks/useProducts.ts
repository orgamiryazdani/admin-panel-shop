import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { deleteProduct, getProducts, updateProduct } from "../services/productsService";
import { product } from "../types/Product";
import toast from "react-hot-toast";
import { queryClient } from "../App";
import { ApiError } from "../types/globalTypes";

const useProducts = () => {
  const queryResult: UseQueryResult<product[]> = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const { data, isLoading } = queryResult;

  return { data, isLoading };
};

export default useProducts;

export const useDeleteProduct = (id: number): UseMutationResult<void, ApiError, number, unknown> => {
  return useMutation<void, ApiError, number>({
    mutationFn: () => deleteProduct(id),
    onSuccess: () => {
      toast.success("محصول با موفقیت حذف شد !");
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || "خطای ناشناخته‌ای رخ داده است.";
      toast.error(errorMessage);
    },
  });
};

export const useUpdateProduct = (id: number, title: string, price: number): UseMutationResult<void, ApiError, number, unknown> => {
  return useMutation<void, ApiError, number>({
    mutationFn: () => updateProduct(id, title, price),
    onSuccess: () => {
      toast.success("محصول با موفقیت آپدیت شد");
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
    onError: (error) => {
      const errorMessage = error.response?.data?.message || "خطای ناشناخته‌ای رخ داده است.";
      toast.error(errorMessage);
    },
  });
};