import api from './api';

export async function getStudents() {
    const response = await api.get('/students');
    return response;
}

export async function createStudents(body) {
    const response = await api.post('/students', body);
    return response;
}

export async function getStudentRandom() {
    const response = await api.get('/students/random');
    return response;
}