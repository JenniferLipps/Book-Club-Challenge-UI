import React from 'react';
import axios from 'axios';

var baseUrl = 'https://localhost:44311/api/';

const getBookByIsbn = () => new Promise((resolve, reject) => {
    axios.get(`${baseUrl}/goodreadsapi/`)
        .then((res) => resolve(res.data))
        .catch((err) => reject(err))
});

export default getBookByIsbn;
