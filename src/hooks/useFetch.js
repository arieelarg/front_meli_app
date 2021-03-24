import { useState, useEffect } from "react";
import { base_url } from "../constants/api";

export const useFetch = (ep) => {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);
  const fetchData = async () => {
    try {
      const result = await fetch(`${base_url}${ep}`);
      const data = await result.json();
      setData(data);
      setFetching(false);
    } catch (e) {
      setData([]);
      setFetching(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return [data, fetching];
};
