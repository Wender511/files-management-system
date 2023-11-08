import useSWR from 'swr';


import { request } from './config';

type Props = {
  idCh: string;
};

const productApi = {
  getProducts: () => {
    return request(`/api-san-pham`, {
      method: 'GET',
    });
  },
};

const useProducts = (params: Props) => {
  const {
    data = [],
    error,
    isLoading,
    mutate,
  } = useSWR(`/api/san-pham`);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useProducts;
