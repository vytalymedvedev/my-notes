import axios from 'axios';

const BACKEND_BASE_URL= 'https://dist.nd.ru/';

export const postRegistration = async body => {
  return axios.post(`${BACKEND_BASE_URL}api/reg`, body);
};

export const postAuth = async body => {
  return axios.post(`${BACKEND_BASE_URL}api/auth`, body);
};

export const logout = async token => {
  return axios.delete(`${BACKEND_BASE_URL}api/auth`, { headers: {  Authorization: `Bearer ${token}` } });
}

export const getNotes = async token => {
  return axios.get(`${BACKEND_BASE_URL}api/notes`, { headers: {  Authorization: `Bearer ${token}` } });
}

export const postNote = async (body, token) => {
  return axios.post(`${BACKEND_BASE_URL}api/notes`, body, { headers: {  Authorization: `Bearer ${token}` } });
}

export const deleteNote = async (id, token) => {
  return axios.delete(`${BACKEND_BASE_URL}api/notes/${id}`, { headers: {  Authorization: `Bearer ${token}` } });
}