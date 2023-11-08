import useSWR from 'swr';


import { request } from './config';

type Props = {
  idCh: string;
};

const employeeApi = {
  getProducts: () => {
    return request(`/api/v1/employee`, {
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
