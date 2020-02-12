import axios from 'axios';

const baseUrl = 'https://localhost:44311/api/bookreview';

const userId = 1;

const getSingleReviewByUser = (bookId) => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/review/${userId}/${bookId}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
});

const getAllReviewsByUser = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/user/${userId}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
});

const getAllReviewsForBook = (goodReadsBookId) => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/book/${goodReadsBookId}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
});

export default {
    getSingleReviewByUser,
    getAllReviewsByUser,
    getAllReviewsForBook
};
