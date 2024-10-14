import {useEffect, useState} from "react";

interface useGoogleApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null
}

function useApi<T>(url: string, options?: RequestInit): useGoogleApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error. Status: ${response.status}`);
        }
        const result: T = await response.json();
        setData(result);
        setError(null);
      } catch (err: any) {
        setError(err.message || "Something is very wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, loading, error };
}

export default useApi;