import { useEffect, useState } from "react"
import useDebounce from "./useDebounce";
import useFetching from "./useFetching";
import api from "../http";

export default function useTags() {
    const [signature, setSignature] = useState('');
    const [fetchedTags, setFetchedTags] = useState([]);

    const [fetchTags, loading, error] = useFetching(async () => {
        setFetchedTags([]);
        if (signature.trim().length === 0) return;

        const tags = signature.split(' ');
        const response = await api.get(`/images/tags`, {
            params: {
                _signature: tags[tags.length - 1]
            }
        });
        setFetchedTags(response.data);
    });

    // const debounced = useDebounce(signature, 0);

    useEffect(() => {
        fetchTags();
    }, [signature]);

    return { signature, setSignature, fetchedTags, loading, error };

}