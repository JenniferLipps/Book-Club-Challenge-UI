import axios from 'axios';

const baseUrl = 'https://localhost:44311/book/book';

const postBookToDb = newBook => axios.post(`${baseUrl}`, newBook);

export default {
    postBookToDb
};
