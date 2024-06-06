import { useSearchParams } from "react-router-dom";

const useAddQueryToUrl = (id, name) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentFilter = searchParams.get(name) || "";
    searchParams.set(name, id.toString());
    setSearchParams(searchParams);
    return currentFilter;
}

export default useAddQueryToUrl