import axios from 'axios';

const baseUrl = 'https://localhost:44311/user';

const userId = 1;

const getUserById = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/${userId}`)
    .then((res) => resolve(res.data))
    .catch((err) => reject(err));
});

export default getUserById;