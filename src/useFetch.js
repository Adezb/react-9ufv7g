import { useEffect, useReducer, useRef } from 'react';

const useFetch = (url, options) => {
  const cache = useRef({});

  const rejectRequest = useRef(false);

  const defaultState = { error: undefined, data: undefined, loading: false };

  const getReducer = (state, magic) => {
    switch (magic.type) {
      case 'loading':
        return { ...defaultState, loading: true };
      case 'fetched':
        return { ...defaultState, data: magic.payload, loading: false };
      case 'error':
        return { ...defaultState, error: magic.payload, loading: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(getReducer, defaultState);

  useEffect(() => {
    if (!url) return;

    rejectRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: 'loading' });

      if (cache.current[url]) {
        dispatch({ type: 'fetched', payload: cache.current[url] });
        return;
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();
        cache.current[url] = data;
        if (rejectRequest.current) return;

        dispatch({ type: 'fetched', payload: data });
      } catch (error) {
        if (rejectRequest.current) retrurn;

        dispatch({ type: 'error', payload: error });
      }
    };

    fetchData();

    return () => {
      rejectRequest.current = true;
    };
  }, [url]);

  return state;
};

export default useFetch;
