
import useSWR from "swr";
import { request } from './config';

const fileApi = {
    getAllFile: () => {
        return request(`api/v1/file`, {
            method: 'GET',
        })
    }
}

const useFile = () => {
    const { data, error, isLoading, mutate } = useSWR<any>(`api/v1/file`);
    return {
        data,
        error,
        isLoading,
        mutate,
    };
}
 
export {fileApi};
export default useFile;