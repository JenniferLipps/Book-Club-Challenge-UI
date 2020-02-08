import axios from 'axios';

const baseUrl = 'https://localhost:44311/api/challenge';

const userId = 1;

const getChallengesByUser = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/user/${userId}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
});

const getChallengesByChallengeId = challengeId => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/${challengeId}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
});

export default {
    getChallengesByUser,
    getChallengesByChallengeId
};
