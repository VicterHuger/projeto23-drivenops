import { useAsync } from "../useAsync";
import * as service from '../../services/students';

export default function useRandomStudent() {
    const { loading, error, act, data } = useAsync(service.getStudentRandom);

    return {
        loadingGettingRandomStudent: loading,
        errorGettingRandomStudent: error,
        listRandomStudent: act,
        randomStudent: data
    };
};