import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b494db299d604588b19f665a11f21800'
    }
})