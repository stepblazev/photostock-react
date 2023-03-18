import axios from "axios";
import { useEffect, useState } from "react"
import useDebounce from "./useDebounce";
import useFetching from "./useFetching";

export default function useTags() {
    const [signature, setSignature] = useState('');
    const [userTags, setUserTags] = useState([]);
    const [fetchedTags, setFetchedTags] = useState([]);

    const [fetchTags, loading, error] = useFetching(async () => {
        const response = await axios.get(`/images/tags?_signature=${signature}`); // FIXME
        setFetchedTags(response.data);
    });

    const debounced = useDebounce(signature, 0);

    useEffect(() => {
        fetchTags();
    }, [debounced]);

    return { signature, setSignature, userTags, setUserTags, fetchedTags, loading };

}