import { useAsync } from "../useAsync";

import * as service from '../../services/students';

export default function useCreateStudents() {
    const { loading, act, error } = useAsync(service.createStudents, false);

    return {
        loadingCreatingStudents: loading,
        createStudents: act,
        errorCreatingStudents: error
    };
}