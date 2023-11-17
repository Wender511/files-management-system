
import useSWR from "swr";
import { request } from './config';

const TrapApi = {
    getAllTrap: () => {
        return request(`api/v1/monitory`, {
            method: 'GET',
        })
    }
}

const useTrap = () => {
    const { data, error, isLoading, mutate } = useSWR<any>(`api/v1/monitory`);
    return {
        data,
        error,
        isLoading,
        mutate,
    };
}
 
export {TrapApi};
export default useTrap;