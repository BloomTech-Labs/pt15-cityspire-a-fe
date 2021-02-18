import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem(`okta-token-storage`);
  console.log(token[`idToken`]);
  return axios.create({
    baseURL: `https://labspt15-cityspire-a.herokuapp.com`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default axiosWithAuth;
