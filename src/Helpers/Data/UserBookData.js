import axios from 'axios';

const baseUrl = 'https://localhost:44311/book/book';

const userId = 1;

const getUserBooks = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/${userId}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err));
});

const postBookToDb = newBook => axios.post(`${baseUrl}`, newBook);

export default {
    getUserBooks,
    postBookToDb
};
