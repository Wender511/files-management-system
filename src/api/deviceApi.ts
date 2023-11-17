
import useSWR from "swr";
import { request } from './config';

const deviceApi = {
    getAllTraining: () => {
        return request(`api/v1/equip`, {
            method: 'GET',
        })
    }
}

const useTraining = () => {
    const { data, error, isLoading, mutate } = useSWR<any>(`api/v1/equip`);
    return {
        data,
        error,
        isLoading,
        mutate,
    };
}
 
export {deviceApi};
export default useTraining;