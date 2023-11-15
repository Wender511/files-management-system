import useSWR from 'swr';

import { request } from './config';

const employeeApi = {
  getEmployees: () => {
    return request(`/api/v1/employee`, {
      method: 'GET',
    });
  },
  postEmployee: (values: any) => {
    return request(`/api/v1/employee`, {
      method: 'POST',
      data: values,
    });
  },
  patchEmployee:(values:any) => {
    
  }
};

const useEmployees = () => {
  const { data, error, isLoading, mutate } = useSWR<any>(`/api/v1/employee`);
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};
export { employeeApi };
export default useEmployees;
