import { useState } from "react";

export default function useFetching(callback) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const execute = async () => {
        try {
            setLoading(true);
            await callback();
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return [execute, loading, error];
}