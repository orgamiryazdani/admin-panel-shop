import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { category } from "../types/Category";
import { getCategories } from "../services/categoryService";

const useCategories = () => {
  const queryResult: UseQueryResult<category[]> = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { data, isLoading } = queryResult;

  return { data, isLoading };
};

export default useCategories;