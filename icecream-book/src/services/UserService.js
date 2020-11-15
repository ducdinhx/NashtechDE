import axios from 'axios';
import AuthorHeader from '../authentication/AuthorHeader';
const BASE_URL = 'http://localhost:8080/api/task/user/';

const getAll = () => {
  return axios.get(BASE_URL, { headers: AuthorHeader() });
}
const getById = (id) => {
  return axios.get(BASE_URL +`${id}`, { headers: AuthorHeader() });
}
const create = (data) => {
  return axios.post(BASE_URL, data, { headers: AuthorHeader() });
}
const update = (id, data) => {
  return axios.put(BASE_URL + `${id}`, data, { headers: AuthorHeader() });
}
const remove = (id) => {
  return axios.delete(BASE_URL + `${id}`, { headers: AuthorHeader() });
}
const findByName = (username) =>{
  return axios.get(`?username=${username}`);

}

export default { getAll, getById, create, update, remove };

