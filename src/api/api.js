import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

//Реєстраця/аторізація юзера
// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 */

export const signUpUser = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  setAuthHeader(data.token);
  return data;
};

/*
 * POST @ /users/login
 * body: { email, password }
 */
export const loginUser = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  setAuthHeader(data.token);
  return data;
};

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */

export const logOutUser = async () => {
  const { data } = await axios.post('/users/logout');
  clearAuthHeader();
  return data;
};

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */

export const refreshUser = async token => {
  setAuthHeader(token);
  const { data } = await axios.get('/users/current');
  return data;
};

//КОНТАКТИ
// Забираємо увесь контакт ліст
export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};
//Додаємо новий контакт
export const createNewContact = async body => {
  const { data } = await axios.post(`/contacts`, body);
  return data;
};
//Видаляємо контакт за ІД
export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

//Редагуємо наявний контакт
export const editContact = async (id, dataContact) => {
  const { data } = await axios.patch(`/contacts/${id}`, dataContact);
  return data;
};
