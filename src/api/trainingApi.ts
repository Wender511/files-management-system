
import useSWR from "swr";
import { request } from './config';

const trainingApi = {
    getAllTraining: () => {
        return request(`api/v1/training`, {
            method: 'GET',
        })
    }
}

const useTraining = () => {
    const { data, error, isLoading, mutate } = useSWR<any>(`api/v1/training`);
    return {
        data,
        error,
        isLoading,
        mutate,
    };
}
 
export {trainingApi};
export default useTraining;