import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
  const [api, getApi] = useState({
    data: null,
    loading: true,
    error: null,
  });

  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    getApi({
      data: null,
      loading: true,
      error: null,
    });

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        getApi({
          loading: false,
          error: null,
          data,
        });
      })
      .catch((error) => console.log(error.response));
  }, [url]);

  return api;
};

export default useFetch;
