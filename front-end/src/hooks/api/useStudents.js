import { useAsync } from "../useAsync";
import * as service from '../../services/students';

export default function useStudents() {
    const { loading, error, act, data } = useAsync(service.getStudents);

    return {
        loadingGettingStudents: loading,
        errorGettingStudents: error,
        listStudents: act,
        students: data
    };
};