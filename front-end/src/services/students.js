import api from './api';

export async function getStudents() {
    const { data } = await api.get('/students');
    return data;
}

export async function createStudents(body) {
    const { data } = await api.post('/students', body);
    return data;
}

export async function getStudentRandom() {
    const { data } = await api.get('/students/random');
    return data;
}