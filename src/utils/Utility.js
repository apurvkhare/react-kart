import { useRef, useCallback, useReducer, useEffect } from 'react';
import dataReducer, { initialState } from '../reducers/ProductsReducer';
import {
  DATA_FETCH_FAILURE,
  DATA_FETCH_SUCCESS,
  DATA_FETCH_PENDING,
} from '../reducers/ActionTypes';

export const useDebounce = (fn, delay = 100) => {
  const debounceRef = useRef({});
  debounceRef.current.fn = fn;
  const bouncer = useCallback(
    (...args) => {
      if (debounceRef.current.timeout) {
        clearTimeout(debounceRef.current.timeout);
      }
      debounceRef.current.timeout = setTimeout(() => {
        debounceRef.current.fn(...args);
        debounceRef.current.timeout = undefined;
      }, delay);
    },
    [delay]
  );

  return bouncer;
};

export const useFetchData = (fetchCall, ...args) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const fetchData = async () => {
    dispatch({ type: DATA_FETCH_PENDING });
    const data = await fetchCall(...args);
    if (data === null) dispatch({ type: DATA_FETCH_FAILURE });
    else
      dispatch({
        type: DATA_FETCH_SUCCESS,
        payload: {
          data,
        },
      });
  };

  useEffect(fetchData, []);

  return state
};
