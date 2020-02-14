import axios from 'axios';

const baseUrl = 'https://localhost:44311/book/book';

const userId = 1;

const getUserBooks = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/user/${userId}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
});

const getBookById = (bookId) => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/${bookId}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
});

const postBookToDb = newBook => axios.post(`${baseUrl}`, newBook);

export default {
    getUserBooks,
    getBookById,
    postBookToDb
};
