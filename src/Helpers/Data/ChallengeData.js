import axios from 'axios';

const baseUrl = 'https://localhost:44311/api/challenge';

const userId = 1;

const getChallenges = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/${userId}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
});

export default {
    getChallenges
};
