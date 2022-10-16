import { useEffect, useState } from "react";

export function useAsync(handler, immediate = true) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const act = (...args) => {
        setLoading(true);
        setError(null);


        return handler(...args).then(data => {
            setData(data);
            setLoading(false);
        }).catch(err => {
            setError(err);
            setLoading(false);
        })
    };
    // Call act if we want to fire it right away.
    // Otherwise act can be called later, such as in an onClick handler.
    useEffect(() => {
        if (immediate) act();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        data,
        loading,
        error,
        act
    }
}