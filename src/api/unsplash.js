import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID E2MCD8pzEu0KMBsXqQIhWLOcJv59wEvFXP6LgaxXbrY'
    }
});