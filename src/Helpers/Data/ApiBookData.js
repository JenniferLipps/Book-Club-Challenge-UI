import axios from 'axios';

var baseUrl = 'https://localhost:44311/api';

const getBookByIsbn = (isbn) => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/goodreadsapi/${isbn}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
});

const getBookByTitle = (title) => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/goodreadsapi/search/${title}`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
});

export default {
    getBookByIsbn,
    getBookByTitle
};
