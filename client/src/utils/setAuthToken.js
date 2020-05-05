import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.commmon['x-auth-token'];
    localStorage.removeItem('token');
  }
};

export default setAuthToken;
