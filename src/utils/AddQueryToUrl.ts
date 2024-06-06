import { useSearchParams } from "react-router-dom";

export default function AddQueryToUrl(id, name) {
    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.set(name, id.toString());
    setSearchParams(searchParams);
}